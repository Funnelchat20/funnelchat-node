#!/usr/bin/env node
/**
 * The single generation script of the SDK (`npm run generate`).
 *
 *   node scripts/generate.mjs                 regenerate src/generated/* from spec/funnelchat.json
 *   node scripts/generate.mjs --spec <file>   copy a new spec into spec/, record where it came from in
 *                                             spec/procedencia.json, then regenerate
 *   node scripts/generate.mjs --check         regenerate in memory and fail if src/generated/* or the
 *                                             generated block of README.md differs
 *
 * The spec is the one the developer portal publishes (https://developers-portal.funnelchat.app/specs/funnelchat.json):
 * every function an API key can use, and nothing closed to keys. The SDK types only what it brings.
 *
 * With --spec, when the file is not inside a checkout of the repository it was built from (a
 * download, a copy, or a build output git ignores), say where it came from: `--source key=value`
 * (url, portal_version, repository, path, branch, commit, commit_date, file_tracked_in_git), recorded in
 * spec/procedencia.json as declared, not read from git; `--domain <domain>=<sha>@<branch>@<snapshot_at>`
 * for the snapshot of an area the spec does not date itself (`x-fc-sources` without `sha`); and
 * `--expect-sha256 <hex>` to refuse a file that is not the one announced.
 *
 * Steps:
 *   1. (with --spec) copy the spec and write spec/procedencia.json (where it came from, sha256).
 *   2. Merge spec/pending.json (the "pending of the spec" layer) into the snapshot: operation and
 *      response patches, schema patches (properties added to a component schema) and replacements of
 *      the events the spec only shows by one example. The layer corrects what the spec publishes and
 *      never adds an operation or an event it does not publish. Every entry applies only while the
 *      snapshot still lacks it, or still says what the entry corrects; the report lists the entries a
 *      new snapshot made obsolete so they can be deleted from spec/pending.json. Before the merge,
 *      every permission named in a description or summary takes the name the panel gives it, in the
 *      language of its text: Spanish in the snapshot (`conversations:send` -> **Contactos y
 *      conversaciones → Enviar**), English in spec/pending.json (**Contacts and conversations → Send**).
 *   3. src/generated/openapi.ts  — openapi-typescript over the merged spec (paths, components, webhooks).
 *                                  Here and in step 5, a string whose known values are listed in
 *                                  `x-extensible-enum` (not `enum`) is typed as those values or any
 *                                  other string, because the API can send a value the list lacks.
 *   4. src/generated/routes.ts   — every operation: method, path, domain, permission, its group and the
 *                                  category of the group as the portal shows them, whether it cannot
 *                                  be undone, pending flag; and the groups, in the portal's order.
 *   5. src/generated/events.ts   — the webhook event catalog and the `data` type of each event (from its
 *                                  schema when it lists properties and `required`, otherwise inferred from
 *                                  its example).
 *   6. README.md                 — the block between README_START and README_END: how many operations
 *                                  and events the SDK covers, and the portal's groups.
 *
 * Nothing in src/generated/ (or in that block of the README) is edited by hand, and nothing in it
 * names a permission by its literal outside the `permission` of the route table, or by its English
 * name in a Spanish text: the generation fails if it does.
 */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, realpathSync, statSync, writeFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import openapiTS, { STRING, astToString, tsIntersection, tsLiteral, tsUnion } from 'openapi-typescript';
import ts from 'typescript';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SPEC_FILE = resolve(ROOT, 'spec/funnelchat.json');
const PROVENANCE_FILE = resolve(ROOT, 'spec/procedencia.json');
const PENDING_FILE = resolve(ROOT, 'spec/pending.json');
const README_FILE = resolve(ROOT, 'README.md');
const OUT_DIR = resolve(ROOT, 'src/generated');
const HTTP_METHODS = ['get', 'put', 'post', 'delete', 'patch'];

function parseArgs(argv) {
  const args = { spec: null, check: false, source: {}, domains: {}, expectSha256: null };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--check') args.check = true;
    else if (arg === '--spec') args.spec = argv[++i];
    else if (arg.startsWith('--spec=')) args.spec = arg.slice('--spec='.length);
    else if (arg === '--source') addSource(args.source, argv[++i]);
    else if (arg === '--domain') addDomain(args.domains, argv[++i]);
    else if (arg === '--expect-sha256') args.expectSha256 = argv[++i]?.toLowerCase();
    else throw new Error(`Unknown argument: ${arg}`);
  }
  if (args.spec === undefined) throw new Error('--spec needs the path of the file');
  if ((Object.keys(args.source).length || Object.keys(args.domains).length || args.expectSha256) && !args.spec) {
    throw new Error('--source, --domain and --expect-sha256 go with --spec');
  }
  return args;
}

const DECLARABLE_SOURCE_KEYS = new Set(['url', 'portal_version', 'repository', 'path', 'branch', 'commit', 'commit_date', 'file_tracked_in_git']);

/**
 * `--source commit=<sha>` or `--source url=https://…`: one field of where the spec came from,
 * declared by whoever imports it.
 */
function addSource(source, pair) {
  const at = pair?.indexOf('=') ?? -1;
  const key = at > 0 ? pair.slice(0, at) : null;
  if (!key || !DECLARABLE_SOURCE_KEYS.has(key)) {
    throw new Error(`--source takes key=value, with key one of: ${[...DECLARABLE_SOURCE_KEYS].join(', ')}`);
  }
  const value = pair.slice(at + 1);
  source[key] = key === 'file_tracked_in_git' ? value === 'true' : value;
}

/** `--domain <domain>=<sha>@<branch>@<snapshot_at>`, such as `--domain accounts=<sha>@main@2026-11-04T16:58:11-03:00`. */
function addDomain(domains, pair) {
  const match = /^([a-z-]+)=([0-9a-f]{7,40})@([^@]+)@([^@]+)$/.exec(pair ?? '');
  if (!match) throw new Error('--domain takes <domain>=<sha>@<branch>@<snapshot_at>');
  const [, domain, sha, branch, snapshotAt] = match;
  domains[domain] = { sha, branch, snapshot_at: snapshotAt };
}

const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

function git(cwd, ...args) {
  try {
    return execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return null;
  }
}

function countOperations(spec) {
  let n = 0;
  for (const item of Object.values(spec.paths ?? {})) for (const m of HTTP_METHODS) if (item[m]) n++;
  return n;
}

/** Step 1: copy a new spec into the repo and record its provenance. */
function importSpec(source, declared = {}, declaredDomains = {}, expectSha256 = null) {
  const sourcePath = resolve(source);
  const bytes = readFileSync(sourcePath);
  if (expectSha256 && sha256(bytes) !== expectSha256) {
    throw new Error(`${source}: its sha256 is ${sha256(bytes)}, not the expected ${expectSha256}.`);
  }
  const spec = JSON.parse(bytes.toString('utf8'));
  const dir = dirname(sourcePath);
  const top = git(dir, 'rev-parse', '--show-toplevel');
  const relPath = top ? relative(top, sourcePath) : null;
  const tracked = top ? git(top, 'ls-files', '--error-unmatch', relPath) !== null : null;
  const dirty = top ? git(top, 'status', '--porcelain', '--untracked-files=no') : null;

  const provenance = {
    description:
      'Where spec/funnelchat.json came from. Written by `npm run generate -- --spec <file>`; do not edit it by hand.',
    file: 'spec/funnelchat.json',
    sha256: sha256(bytes),
    bytes: bytes.length,
    source: {
      url: null,
      portal_version: null,
      repository: top ? git(top, 'remote', 'get-url', 'origin') : null,
      path: relPath,
      branch: top ? git(top, 'branch', '--show-current') : null,
      commit: top ? git(top, 'rev-parse', 'HEAD') : null,
      commit_date: top ? git(top, 'log', '-1', '--format=%cI') : null,
      file_tracked_in_git: tracked,
      tracked_files_clean: dirty === null ? null : dirty === '',
      file_modified_at: statSync(sourcePath).mtime.toISOString(),
    },
    imported_at: new Date().toISOString(),
    spec: {
      openapi: spec.openapi ?? null,
      title: spec.info?.title ?? null,
      version: spec.info?.version ?? null,
      paths: Object.keys(spec.paths ?? {}).length,
      operations: countOperations(spec),
      webhooks: Object.keys(spec.webhooks ?? {}).length,
      domains: (spec['x-fc-sources'] ?? []).map((s) => {
        const given = s.sha ? null : declaredDomains[s.domain];
        return {
          domain: s.domain,
          sha: s.sha ?? given?.sha ?? null,
          branch: s.branch ?? given?.branch ?? null,
          snapshot_at: s.snapshot_at ?? given?.snapshot_at ?? null,
          ...(given ? { declared: true } : {}),
        };
      }),
    },
  };

  const declaredKeys = Object.keys(declared);
  if (declaredKeys.length) {
    Object.assign(provenance.source, declared);
    // What git did not say, it did not check either: only the fields read from a checkout are git's.
    if (!top) provenance.source.tracked_files_clean = null;
    provenance.source.declared = declaredKeys;
    provenance.source.declared_note =
      'The fields in `declared` were given on the command line (`--source`), not read from git: the file was imported from outside a checkout of its repository.';
  }

  mkdirSync(dirname(SPEC_FILE), { recursive: true });
  writeFileSync(SPEC_FILE, bytes);
  writeFileSync(PROVENANCE_FILE, `${JSON.stringify(provenance, null, 2)}\n`);
  const where = provenance.source.url ?? relPath ?? sourcePath;
  console.log(`spec: copied from ${where} (${provenance.source.branch ?? '?'} @ ${provenance.source.commit?.slice(0, 7) ?? '?'}, sha256 ${provenance.sha256.slice(0, 16)}…)`);
}

/**
 * Whether `target` matches every entry of `condition`. A key is a property of `target`, or, when it
 * starts with `/`, a JSON Pointer into it (RFC 6901: `/responses/200/content/application~1json/schema`),
 * so a patch can wait for one exact place of the snapshot to change.
 */
function matches(target, condition) {
  if (!condition) return true;
  return Object.entries(condition).every(([key, value]) => JSON.stringify(pointer(target, key)) === JSON.stringify(value));
}

function pointer(target, key) {
  if (!key.startsWith('/')) return target?.[key];
  return key
    .slice(1)
    .split('/')
    .map((part) => part.replace(/~1/g, '/').replace(/~0/g, '~'))
    .reduce((node, part) => node?.[part], target);
}

/** The event type a `webhooks` key stands for: "webhook.test (conversations)" -> "webhook.test". */
const eventTypeOfKey = (key) => key.replace(/\s*\(.*\)\s*$/, '');

/**
 * Step 2: merge the pending layer into a copy of the snapshot. It corrects what the spec publishes
 * and never adds to it: an operation the spec does not publish is not typed, and an event it does
 * not publish is not added (the report lists it as `unpublished`).
 */
function mergePending(spec, pending) {
  const merged = structuredClone(spec);
  merged.components ??= {};
  merged.components.schemas ??= {};
  merged.paths ??= {};
  merged.webhooks ??= {};
  const report = { applied: [], superseded: [], missing: [], unpublished: [] };

  if (Object.keys(pending.paths ?? {}).length) {
    throw new Error(
      'spec/pending.json: `paths` would add operations the portal does not publish, and the SDK types only what it ' +
        'publishes. Delete them; to correct a published operation, use `operationPatches` or `responsePatches`.',
    );
  }

  for (const [name, schema] of Object.entries(pending.components?.schemas ?? {})) {
    if (merged.components.schemas[name]) {
      throw new Error(`spec/pending.json: the schema ${name} already exists in the snapshot; rename it.`);
    }
    merged.components.schemas[name] = schema;
  }

  // Operation patches add body properties and `parameters`. With `while` they apply while the
  // operation matches it; without it, each property or parameter only while the operation lacks it.
  for (const patch of pending.operationPatches ?? []) {
    const names = [...Object.keys(patch.requestBodyProperties ?? {}), ...(patch.parameters ?? []).map((p) => p.name)];
    const label = `${patch.method.toUpperCase()} ${patch.path} (patch: ${names.join(', ')})`;
    const op = merged.paths[patch.path]?.[patch.method];
    if (!op) {
      report.missing.push(label);
      continue;
    }
    if (!matches(op, patch.while)) {
      report.superseded.push(label);
      continue;
    }
    let schema = op.requestBody?.content?.['application/json']?.schema;
    if (schema?.$ref) schema = merged.components.schemas[schema.$ref.replace('#/components/schemas/', '')];
    if (patch.requestBodyProperties && !schema) {
      report.missing.push(label);
      continue;
    }
    const missingProps = Object.keys(patch.requestBodyProperties ?? {}).filter((prop) => !(prop in (schema?.properties ?? {})));
    const hasParameter = (p) => (op.parameters ?? []).some((q) => q.name === p.name && q.in === p.in);
    const missingParams = (patch.parameters ?? []).filter((p) => !hasParameter(p));
    if (!patch.while && missingProps.length === 0 && missingParams.length === 0) {
      report.superseded.push(label);
      continue;
    }
    if (schema) {
      schema.properties ??= {};
      for (const [prop, propSchema] of Object.entries(patch.requestBodyProperties ?? {})) {
        schema.properties[prop] ??= propSchema;
      }
    }
    if (missingParams.length) op.parameters = [...(op.parameters ?? []), ...missingParams];
    op['x-fc-pending'] = patch['x-fc-pending'];
    report.applied.push(label);
  }

  // Schema patches add properties to a component schema, each one only while the schema lacks it.
  for (const patch of pending.schemaPatches ?? []) {
    const label = `schema ${patch.schema} (patch: ${Object.keys(patch.properties ?? {}).join(', ')})`;
    const schema = merged.components.schemas[patch.schema];
    if (!schema) {
      report.missing.push(label);
      continue;
    }
    schema.properties ??= {};
    const missing = Object.keys(patch.properties ?? {}).filter((prop) => !(prop in schema.properties));
    if (missing.length === 0) {
      report.superseded.push(label);
      continue;
    }
    for (const prop of missing) schema.properties[prop] = patch.properties[prop];
    const required = (patch.required ?? []).filter((prop) => missing.includes(prop));
    if (required.length) schema.required = [...new Set([...(schema.required ?? []), ...required])];
    schema['x-fc-pending'] ??= patch['x-fc-pending'];
    report.applied.push(label);
  }

  // Response patches replace every 2xx response of the operation (and any other code they bring)
  // while the operation matches `while`.
  for (const patch of pending.responsePatches ?? []) {
    const label = `${patch.method.toUpperCase()} ${patch.path} (response: ${Object.keys(patch.responses ?? {}).join(', ')})`;
    const op = merged.paths[patch.path]?.[patch.method];
    if (!op) {
      report.missing.push(label);
      continue;
    }
    if (!matches(op, patch.while)) {
      report.superseded.push(label);
      continue;
    }
    op.responses ??= {};
    for (const code of Object.keys(op.responses)) if (/^2/.test(code)) delete op.responses[code];
    Object.assign(op.responses, patch.responses);
    op['x-fc-pending'] ??= patch['x-fc-pending'];
    op['x-fc-pending-response'] = patch['x-fc-pending'];
    report.applied.push(label);
  }

  // An event of the layer replaces the spec's while it still matches `x-fc-replace-while`; one the
  // spec does not publish is not added.
  const snapshotTypes = new Map(Object.keys(merged.webhooks).map((key) => [eventTypeOfKey(key), key]));
  for (const [type, item] of Object.entries(pending.webhooks ?? {})) {
    const currentKey = snapshotTypes.get(type);
    const label = `webhook ${type}`;
    if (!currentKey) {
      report.unpublished.push(label);
      continue;
    }
    const replaceWhile = item.post?.['x-fc-replace-while'];
    if (!replaceWhile || !matches(merged.webhooks[currentKey].post, replaceWhile)) {
      report.superseded.push(label);
      continue;
    }
    delete merged.webhooks[currentKey];
    merged.webhooks[type] = item;
    report.applied.push(label);
  }

  return { merged, report };
}

// ---- Groups and categories of the portal -------------------------------------------------------

/** The key of a node that gives a category: `x-fc-categoria`, `x-fc-category`, `x-fc-categorias`… */
const categoryKey = (node) => Object.keys(node ?? {}).find((key) => /^x-fc-categor/i.test(key));

/** A category as the spec writes it: a name, or an object with its name (or only its id). */
function categoryName(value) {
  if (typeof value === 'string') return value.trim() || null;
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return categoryName(value.name ?? value.nombre ?? value.title ?? value.titulo ?? value.label ?? value.id ?? null);
  }
  return null;
}

/**
 * The categories the spec lists at its root, in the portal's order (`x-fc-categorias: [{ id, title,
 * url }]`, or `{ id: title }`): id => its name and the page of the portal that shows it, so a group
 * that names its category by id shows the name the portal shows.
 */
function categoryCatalog(spec) {
  const key = categoryKey(spec);
  const list = key ? spec[key] : null;
  const catalog = new Map();
  const entries = Array.isArray(list) ? list.map((item) => [item?.id ?? item?.slug ?? item?.key, item]) : Object.entries(list ?? {});
  for (const [id, item] of entries) {
    const name = categoryName(item);
    const url = typeof item?.url === 'string' ? item.url : null;
    if (typeof id === 'string' && name) catalog.set(id, { name, url });
  }
  return catalog;
}

/**
 * The groups of operations (the `tags`) in the portal's order (`x-tagGroups`, then `tags`), each one
 * with its description and its category. The category is only what the spec says: an `x-fc-categor…`
 * key on the tag or on its `x-tagGroups` entry, or the name of an `x-tagGroups` entry that groups
 * tags under another name (several tags, or one with a name of its own). Today each entry is one tag
 * under its own name, so there is no category. A category key whose value it cannot read leaves that
 * group without one and is reported as a warning.
 */
function portalGroups(spec) {
  const tags = new Map((spec.tags ?? []).map((tag) => [tag.name, tag]));
  const catalog = categoryCatalog(spec);
  const groups = new Map();
  const warnings = [];
  const readCategory = (node, where) => {
    const key = categoryKey(node);
    if (!key) return undefined;
    const name = categoryName(node[key]);
    if (!name) {
      warnings.push(`${where}: cannot read the category in \`${key}\` (${JSON.stringify(node[key])}); teach categoryName in scripts/generate.mjs.`);
      return undefined;
    }
    return catalog.get(name)?.name ?? name;
  };
  const add = (name, groupCategory) => {
    if (groups.has(name)) return;
    const tag = tags.get(name);
    const category = readCategory(tag, `tag ${name}`) ?? groupCategory ?? null;
    groups.set(name, { name, category, description: tag?.description ?? null });
  };
  for (const entry of spec['x-tagGroups'] ?? []) {
    const entryTags = entry.tags ?? [];
    const named = entryTags.length > 1 || (entryTags.length === 1 && entry.name !== entryTags[0]);
    const category = readCategory(entry, `x-tagGroups ${entry.name}`) ?? (named ? categoryName(entry.name) : null);
    for (const name of entryTags) add(name, category);
  }
  for (const name of tags.keys()) add(name, null);
  return { groups, warnings, categories: [...catalog.values()] };
}

// ---- Permissions: the names of the panel -------------------------------------------------------

/**
 * Each permission as the panel names it ("Create API key": one area, one checkbox per level), in
 * the panel's two languages, Spanish and English. The literal is a value of the API
 * (`x-fc-permission`, the `permission` of the route table); the docs name a permission only this way.
 */
const PERMISSION_NAMES = {
  'conversations:read': { es: 'Contactos y conversaciones → Ver', en: 'Contacts and conversations → View' },
  'conversations:write': { es: 'Contactos y conversaciones → Editar', en: 'Contacts and conversations → Edit' },
  'conversations:send': { es: 'Contactos y conversaciones → Enviar', en: 'Contacts and conversations → Send' },
  'communities:read': { es: 'Grupos y campañas → Ver', en: 'Groups and campaigns → View' },
  'communities:write': { es: 'Grupos y campañas → Editar', en: 'Groups and campaigns → Edit' },
  'communities:send': { es: 'Grupos y campañas → Enviar', en: 'Groups and campaigns → Send' },
  'communities:operate': { es: 'Grupos y campañas → Administrar grupos', en: 'Groups and campaigns → Manage groups' },
  'accounts:read': { es: 'Números de WhatsApp → Ver', en: 'WhatsApp numbers → View' },
  'accounts:write': { es: 'Números de WhatsApp → Editar', en: 'WhatsApp numbers → Edit' },
  'accounts:operate': { es: 'Números de WhatsApp → Crear, conectar y borrar', en: 'WhatsApp numbers → Create, connect and delete' },
  'webhooks:read': { es: 'Avisos (webhooks) → Ver', en: 'Notifications (webhooks) → View' },
  'webhooks:write': { es: 'Avisos (webhooks) → Administrar', en: 'Notifications (webhooks) → Manage' },
};
const ENGLISH_AREAS = [...new Set(Object.values(PERMISSION_NAMES).map((name) => name.en.split(' → ')[0]))];

/** A permission literal, known or not: `accounts:read`, `webhooks:*`, `{area}:read`. */
const PERMISSION_LITERAL = /\b(?:accounts|communities|conversations|webhooks):(?:[a-z]+\b|\*)|\{area\}:[a-z]+\b/g;
const PROSE_KEYS = new Set(['description', 'summary', 'title']);

/**
 * The text with each known permission literal replaced by its panel name in `lang` (bold when it
 * was code). The snapshot's gloss of the level after a literal, `communities:read` (Leer), goes
 * with it.
 */
function panelNames(text, lang) {
  return text
    .replace(/`([^`]+)`(?: \((?:Leer|Escribir|Enviar|Operar)\))?/g, (code, inner) =>
      PERMISSION_NAMES[inner] ? `**${PERMISSION_NAMES[inner][lang]}**` : code,
    )
    .replace(PERMISSION_LITERAL, (lit) => PERMISSION_NAMES[lit]?.[lang] ?? lit);
}

/**
 * Rewrites the prose of a spec in place, naming permissions in `lang`, the language of that spec's
 * texts; examples and `x-fc-*` values are left as they are.
 */
function namePermissionsAsThePanel(node, lang) {
  if (Array.isArray(node)) {
    for (const item of node) namePermissionsAsThePanel(item, lang);
    return;
  }
  if (!node || typeof node !== 'object') return;
  for (const [key, value] of Object.entries(node)) {
    if (key === 'example' || key === 'examples' || key.startsWith('x-fc-')) continue;
    if (typeof value === 'string') {
      if (PROSE_KEYS.has(key)) node[key] = panelNames(value, lang);
    } else {
      namePermissionsAsThePanel(value, lang);
    }
  }
}

/**
 * Fails if a generated file names a permission by its literal anywhere but in the `permission` of
 * the route table (a literal the rewrite did not know, or text added after it), or by its English
 * panel name in a Spanish line (one that says «permiso», such as «**Permiso requerido:**»).
 */
function assertPermissionNames(files) {
  const found = [];
  for (const [name, content] of Object.entries(files)) {
    content.split('\n').forEach((line, i) => {
      const where = `src/generated/${name}:${i + 1}`;
      const prose = line.replace(/"permission":"[^"]*"/g, '');
      for (const [lit] of prose.matchAll(PERMISSION_LITERAL)) found.push(`${where}: ${lit} (literal)`);
      if (/\bpermiso\b/i.test(prose)) {
        for (const area of ENGLISH_AREAS) if (prose.includes(`${area} → `)) found.push(`${where}: ${area} (English in a Spanish text)`);
      }
    });
  }
  if (found.length) {
    throw new Error(
      `src/generated would name ${found.length} permissions other than as the panel does in the language of ` +
        `the text (PERMISSION_NAMES in scripts/generate.mjs):\n${found.map((f) => `  - ${f}`).join('\n')}`,
    );
  }
}

const HEADER = (specHash) =>
  [
    '/**',
    ' * GENERATED FILE — do not edit. Run `npm run generate`.',
    ` * Source: spec/funnelchat.json (sha256 ${specHash.slice(0, 16)}…) + spec/pending.json.`,
    ' */',
    '',
  ].join('\n');

/**
 * A string whose known values are listed in `x-extensible-enum` instead of `enum` (spec/pending.json
 * marks so the ones the API can extend): those values, or any other string. `string & {}` keeps the
 * known values suggested by the editor, which a plain `string` in the union would swallow.
 */
const extensibleEnum = (schema) => (Array.isArray(schema?.['x-extensible-enum']) ? schema['x-extensible-enum'] : null);

/** Step 3: TypeScript types for the whole merged spec. */
async function generateOpenapiTypes(merged, specHash) {
  const transform = (schema) => {
    const known = extensibleEnum(schema);
    if (!known) return undefined;
    const anyString = tsIntersection([STRING, ts.factory.createTypeLiteralNode([])]);
    return tsUnion([...known.map(tsLiteral), anyString]);
  };
  const ast = await openapiTS(merged, { emptyObjectsUnknown: true, silent: true, transform });
  return `${HEADER(specHash)}/* eslint-disable */\n${astToString(ast)}`;
}

/** Step 4: the route table and the portal's groups. */
function routeRows(merged, groups) {
  const rows = [];
  for (const [path, item] of Object.entries(merged.paths)) {
    for (const method of HTTP_METHODS) {
      const op = item[method];
      if (!op) continue;
      const tag = op.tags?.[0] ?? null;
      const destructive = op['x-fc-destructive'];
      rows.push({
        method: method.toUpperCase(),
        path,
        operationId: op.operationId ?? null,
        domain: op['x-fc-domain'] ?? null,
        permission: op['x-fc-permission'] ?? null,
        category: (tag && groups.get(tag)?.category) ?? null,
        tag,
        summary: op.summary ?? null,
        destructive: typeof destructive === 'boolean' ? destructive : null,
        pending: Boolean(op['x-fc-pending']),
      });
    }
  }
  return rows.sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method));
}

/** The groups that have operations, in the portal's order; a tag the spec does not list goes last. */
function groupRows(rows, groups) {
  const count = new Map();
  for (const row of rows) if (row.tag) count.set(row.tag, (count.get(row.tag) ?? 0) + 1);
  const names = [...groups.keys(), ...[...count.keys()].filter((tag) => !groups.has(tag)).sort()];
  return names
    .filter((name) => count.has(name))
    .map((name) => ({
      name,
      category: groups.get(name)?.category ?? null,
      operations: count.get(name),
      description: groups.get(name)?.description ?? null,
    }));
}

function generateRoutes(rows, groupList, specHash) {
  const body = rows.map((r) => `  ${JSON.stringify(r)},`).join('\n');
  const groupBody = groupList.map((g) => `  ${JSON.stringify(g)},`).join('\n');
  return `${HEADER(specHash)}
/** One operation of the public API. \`pending\` = corrected by spec/pending.json. */
export interface RouteInfo {
  readonly method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';
  readonly path: string;
  readonly operationId: string | null;
  readonly domain: string | null;
  readonly permission: string | null;
  /** The category of its group as the portal shows it, or \`null\` while the spec does not give one. */
  readonly category: string | null;
  /** Its group, as the portal names it (see \`routeGroups\`). */
  readonly tag: string | null;
  readonly summary: string | null;
  /** \`true\`: it cannot be undone, so confirm before calling it. \`null\`: the spec does not say. */
  readonly destructive: boolean | null;
  readonly pending: boolean;
}

/** One group of operations as the portal shows it: its name (the \`tag\` of its routes), category and description. */
export interface RouteGroupInfo {
  readonly name: string;
  readonly category: string | null;
  readonly operations: number;
  readonly description: string | null;
}

/** Every operation the spec publishes (${rows.length}), sorted by path. */
export const routes: readonly RouteInfo[] = [
${body}
];

/** The groups of operations (${groupList.length}), in the portal's order. */
export const routeGroups: readonly RouteGroupInfo[] = [
${groupBody}
];
`;
}

// ---- Step 6: the generated block of the README ---------------------------------------------------

const README_START = '<!-- generated:functions — written by scripts/generate.mjs; do not edit by hand -->';
const README_END = '<!-- /generated:functions -->';

/**
 * How many operations and events the SDK covers and the portal's groups: by category once the spec
 * gives them, in the order of the spec's list of categories (`catalog`, with the page of each one)
 * and then as they come; a group without one goes last.
 */
function readmeBlock(groupList, operations, events, catalog = []) {
  const names = (list) => list.map((g) => g.name).join(', ');
  const used = new Set(groupList.map((g) => g.category));
  const known = catalog.filter((c) => used.has(c.name));
  const categories = [
    ...known.map((c) => c.name),
    ...[...used].filter((name) => name !== null && !known.some((c) => c.name === name)),
    ...(used.has(null) ? [null] : []),
  ];
  const title = (name) => {
    if (name === null) return 'Without a category';
    const url = known.find((c) => c.name === name)?.url;
    return url ? `[${name}](${url})` : name;
  };
  const lines = [
    `**${operations} operations and ${events} webhook events**, in the ${groupList.length} groups of the portal (named as the portal names them):`,
    '',
  ];
  if (categories.length === 1 && categories[0] === null) {
    lines.push(`- ${names(groupList)}.`);
  } else {
    for (const category of categories) {
      lines.push(`- **${title(category)}:** ${names(groupList.filter((g) => g.category === category))}.`);
    }
  }
  return lines.join('\n');
}

/** The README with its generated block replaced; fails if the markers are missing. */
function generateReadme(current, block) {
  const start = current.indexOf(README_START);
  const end = current.indexOf(README_END);
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`README.md lacks the generated block: put ${README_START} and ${README_END} where it goes.`);
  }
  return `${current.slice(0, start + README_START.length)}\n${block}\n${current.slice(end)}`;
}

// ---- Step 5: webhook events ------------------------------------------------------------------

const literal = (value) => JSON.stringify(value);
const propKey = (key) => (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key));
const wrap = (type) => (/[|&]/.test(type) ? `(${type})` : type);

function doc(text, pad) {
  if (!text) return '';
  return `${pad}/** ${String(text).replace(/\*\//g, '*\\/').replace(/\s*\n\s*/g, ' ')} */\n`;
}

/** A small JSON Schema -> TypeScript converter (the subset the event schemas use). */
function schemaToTs(schema, depth) {
  if (!schema || typeof schema !== 'object' || Object.keys(schema).length === 0) return 'unknown';
  if (schema.$ref) return `components["schemas"][${literal(schema.$ref.replace('#/components/schemas/', ''))}]`;
  if ('const' in schema) return literal(schema.const);
  if (Array.isArray(schema.enum)) return schema.enum.map(literal).join(' | ');
  if (extensibleEnum(schema)) return [...extensibleEnum(schema).map(literal), '(string & {})'].join(' | ');
  const variants = schema.anyOf ?? schema.oneOf;
  if (Array.isArray(variants)) return variants.map((v) => wrap(schemaToTs(v, depth))).join(' | ');
  const types = Array.isArray(schema.type) ? schema.type : schema.type ? [schema.type] : schema.properties ? ['object'] : [];
  if (types.length === 0) return 'unknown';
  return types
    .map((t) => {
      switch (t) {
        case 'string':
          return 'string';
        case 'integer':
        case 'number':
          return 'number';
        case 'boolean':
          return 'boolean';
        case 'null':
          return 'null';
        case 'array':
          return `${wrap(schema.items ? schemaToTs(schema.items, depth) : 'unknown')}[]`;
        case 'object':
          return objectSchemaToTs(schema, depth);
        default:
          return 'unknown';
      }
    })
    .join(' | ');
}

function objectSchemaToTs(schema, depth) {
  const props = Object.entries(schema.properties ?? {});
  if (props.length === 0) return 'Record<string, unknown>';
  const required = new Set(schema.required ?? []);
  const pad = '  '.repeat(depth + 1);
  const lines = props.map(
    ([key, value]) => `${doc(value.description, pad)}${pad}${propKey(key)}${required.has(key) ? '' : '?'}: ${schemaToTs(value, depth + 1)};`,
  );
  return `{\n${lines.join('\n')}\n${'  '.repeat(depth)}}`;
}

/**
 * The type of an example value, using the schema at the same place (if any) for enums, nulls and
 * keys the example does not show. Keys present in the example are required; null values take the
 * schema's type or `unknown`.
 */
function exampleToTs(value, hint, depth) {
  if (hint && (Array.isArray(hint.enum) || extensibleEnum(hint) || 'const' in hint)) return schemaToTs(hint, depth);
  if (value === null || value === undefined) return hint && (hint.type || hint.$ref) ? schemaToTs(hint, depth) : 'unknown';
  if (Array.isArray(value)) {
    if (value.length === 0) return hint?.items ? `${wrap(schemaToTs(hint.items, depth))}[]` : 'unknown[]';
    return `${wrap(exampleToTs(value[0], hint?.items, depth))}[]`;
  }
  switch (typeof value) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'object': {
      const pad = '  '.repeat(depth + 1);
      const hintProps = hint?.properties ?? {};
      const keys = Object.keys(value);
      if (keys.length === 0 && Object.keys(hintProps).length === 0) return 'Record<string, unknown>';
      const lines = keys.map(
        (key) => `${doc(hintProps[key]?.description, pad)}${pad}${propKey(key)}: ${exampleToTs(value[key], hintProps[key], depth + 1)};`,
      );
      for (const [key, schema] of Object.entries(hintProps)) {
        if (key in value) continue;
        lines.push(`${doc(schema.description, pad)}${pad}${propKey(key)}?: ${schemaToTs(schema, depth + 1)};`);
      }
      return `{\n${lines.join('\n')}\n${'  '.repeat(depth)}}`;
    }
    default:
      return 'unknown';
  }
}

function eventStatus(post) {
  const status = post?.['x-fc-status'];
  if (status === 'planned' || status === 'live') return status;
  if (status === 'active') return 'live';
  return /planificad/i.test(post?.summary ?? '') ? 'planned' : 'live';
}

function generateEvents(merged, specHash) {
  const byType = new Map();
  for (const [key, item] of Object.entries(merged.webhooks ?? {})) {
    const type = eventTypeOfKey(key);
    const post = item.post ?? {};
    const content = post.requestBody?.content?.['application/json'] ?? {};
    const entry = byType.get(type) ?? {
      type,
      domains: [],
      status: eventStatus(post),
      description: post.description ?? null,
      pending: Boolean(post['x-fc-pending']),
      dataSchema: content.schema?.properties?.data ?? null,
      dataExample: content.example?.data ?? null,
    };
    const domain = post['x-fc-domain'];
    if (domain && !entry.domains.includes(domain)) entry.domains.push(domain);
    byType.set(type, entry);
  }
  const entries = [...byType.values()].sort((a, b) => a.type.localeCompare(b.type));

  const catalog = entries
    .map((e) => `  ${JSON.stringify({ type: e.type, domains: e.domains, status: e.status, pending: e.pending, description: e.description })},`)
    .join('\n');

  let usesComponents = false;
  const dataLines = entries.map((e) => {
    let type;
    let source;
    // A schema that lists its properties and which are required describes every case; an example
    // shows only one (keys it lacks would turn optional, keys it has required), so the schema wins.
    const explicit = Boolean(e.dataSchema?.properties && Array.isArray(e.dataSchema.required));
    if (explicit) {
      type = schemaToTs(e.dataSchema, 1);
      source = 'schema';
    } else if (e.dataExample !== null && typeof e.dataExample === 'object') {
      type = exampleToTs(e.dataExample, e.dataSchema, 1);
      source = e.dataSchema ? 'example + schema' : 'example';
    } else if (e.dataSchema) {
      type = schemaToTs(e.dataSchema, 1);
      source = 'schema';
    } else {
      type = 'Record<string, unknown>';
      source = 'no example or schema yet';
    }
    if (type.includes('components["schemas"]')) usesComponents = true;
    const notes = [`\`${e.type}\` (${e.status}${e.pending ? ', pending of the spec' : ''}; typed from: ${source}).`];
    if (e.description) notes.push(e.description);
    return `${doc(notes.join(' '), '  ')}  ${literal(e.type)}: ${type};`;
  });

  return `${HEADER(specHash)}${usesComponents ? "import type { components } from './openapi.js';\n\n" : ''}/** One entry of the webhook event catalog. \`pending\` = taken from spec/pending.json. */
export interface WebhookEventInfo {
  readonly type: string;
  readonly domains: readonly string[];
  /** \`live\`: emitted today. \`planned\`: you can subscribe, but nothing is emitted yet. */
  readonly status: 'live' | 'planned';
  readonly pending: boolean;
  readonly description: string | null;
}

/** Every webhook event type known to the spec (${entries.length}). */
export const webhookEvents = [
${catalog}
] as const satisfies readonly WebhookEventInfo[];

/** A webhook event type known to the spec. */
export type WebhookEventType = (typeof webhookEvents)[number]['type'];

/**
 * The \`data\` of each event. When the spec only has an example, the type is inferred from it:
 * keys in the example are required and \`null\` values are \`unknown\`.
 */
export interface WebhookEventDataMap {
${dataLines.join('\n')}
}
`;
}

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.spec) {
    if (args.check) throw new Error('--check and --spec cannot be combined');
    importSpec(args.spec, args.source, args.domains, args.expectSha256);
  }
  if (!existsSync(SPEC_FILE)) throw new Error('Missing spec/funnelchat.json: run `npm run generate -- --spec <file>`.');

  const bytes = readFileSync(SPEC_FILE);
  const specHash = sha256(bytes);
  if (existsSync(PROVENANCE_FILE)) {
    const provenance = JSON.parse(readFileSync(PROVENANCE_FILE, 'utf8'));
    if (provenance.sha256 !== specHash) {
      console.warn('warning: spec/funnelchat.json does not match the sha256 in spec/procedencia.json (was it edited by hand?).');
    }
  }

  const spec = JSON.parse(bytes.toString('utf8'));
  const pending = existsSync(PENDING_FILE) ? JSON.parse(readFileSync(PENDING_FILE, 'utf8')) : {};
  namePermissionsAsThePanel(spec, 'es');
  namePermissionsAsThePanel(pending, 'en');
  const { merged, report } = mergePending(spec, pending);
  const { groups, warnings, categories: catalog } = portalGroups(spec);
  const rows = routeRows(merged, groups);
  const groupList = groupRows(rows, groups);
  const eventCount = new Set(Object.keys(merged.webhooks).map(eventTypeOfKey)).size;

  const files = {
    'openapi.ts': await generateOpenapiTypes(merged, specHash),
    'routes.ts': generateRoutes(rows, groupList, specHash),
    'events.ts': generateEvents(merged, specHash),
  };
  assertPermissionNames(files);
  const readme = readFileSync(README_FILE, 'utf8');
  const newReadme = generateReadme(readme, readmeBlock(groupList, rows.length, eventCount, catalog));

  const categories = [...new Set(groupList.map((g) => g.category).filter(Boolean))];
  console.log(`spec: ${rows.length} operations, ${eventCount} webhook events, ${groupList.length} groups.`);
  console.log(
    categories.length
      ? `categories: ${categories.map((c) => `${c} (${plural(groupList.filter((g) => g.category === c).length, 'group')})`).join(', ')}` +
          `${groupList.some((g) => !g.category) ? `; without one: ${groupList.filter((g) => !g.category).map((g) => g.name).join(', ')}` : ''}.`
      : 'categories: the spec does not give the category of its groups yet.',
  );
  for (const warning of warnings) console.warn(`warning: ${warning}`);
  console.log(`pending of the spec: ${report.applied.length} entries applied.`);
  if (report.superseded.length) {
    console.log(`the snapshot already has ${report.superseded.length} entries of spec/pending.json; they can be deleted from it:`);
    for (const label of report.superseded) console.log(`  - ${label}`);
  }
  if (report.unpublished.length) {
    console.log(`${report.unpublished.length} events of spec/pending.json are not published by the spec, so they were not added; they can be deleted from it:`);
    for (const label of report.unpublished) console.log(`  - ${label}`);
  }
  if (report.missing.length) {
    console.warn(`warning: ${report.missing.length} patches did not find their operation in the snapshot:`);
    for (const label of report.missing) console.warn(`  - ${label}`);
  }

  if (args.check) {
    const stale = Object.entries(files)
      .filter(([name, content]) => {
        const file = resolve(OUT_DIR, name);
        return !existsSync(file) || readFileSync(file, 'utf8') !== content;
      })
      .map(([name]) => `src/generated/${name}`);
    if (newReadme !== readme) stale.push('README.md (generated block)');
    if (stale.length) {
      console.error(`out of date: ${stale.join(', ')}. Run \`npm run generate\`.`);
      process.exit(1);
    }
    console.log('src/generated and the generated block of README.md are up to date.');
    return;
  }

  mkdirSync(OUT_DIR, { recursive: true });
  for (const [name, content] of Object.entries(files)) writeFileSync(resolve(OUT_DIR, name), content);
  writeFileSync(README_FILE, newReadme);
  console.log(`generated: ${Object.keys(files).map((n) => `src/generated/${n}`).join(', ')} and the generated block of README.md`);
}

// The pure steps the tests exercise with specs of their own (test/generated.test.ts).
export { portalGroups, readmeBlock };

// Run only as a script, not when a test imports it (real paths, so a symlinked checkout still runs).
function runAsScript() {
  try {
    return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));
  } catch {
    return false;
  }
}

if (runAsScript()) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
