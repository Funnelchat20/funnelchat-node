#!/usr/bin/env node
/**
 * The single generation script of the SDK (`npm run generate`).
 *
 *   node scripts/generate.mjs                 regenerate src/generated/* from spec/funnelchat.json
 *   node scripts/generate.mjs --spec <file>   copy a new unified spec into spec/, record where it came
 *                                             from in spec/procedencia.json, then regenerate
 *   node scripts/generate.mjs --check         regenerate in memory and fail if src/generated/* differs
 *
 * Steps:
 *   1. (with --spec) copy the spec and write spec/procedencia.json (repository, branch, commit, sha256).
 *   2. Merge spec/pending.json (the "pending of the spec" layer) into the snapshot: paths, operation
 *      and response patches, schema patches (properties added to a component schema) and webhooks.
 *      Every pending entry is applied only while the snapshot lacks it; the report lists the entries a new snapshot made
 *      obsolete so they can be deleted from spec/pending.json.
 *   3. src/generated/openapi.ts  — openapi-typescript over the merged spec (paths, components, webhooks).
 *   4. src/generated/routes.ts   — every operation: method, path, domain, permission, pending flag.
 *   5. src/generated/events.ts   — the webhook event catalog and the `data` type of each event (from its
 *                                  schema when it lists properties and `required`, otherwise inferred from
 *                                  its example).
 *
 * Nothing in src/generated/ is edited by hand.
 */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import openapiTS, { astToString } from 'openapi-typescript';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SPEC_FILE = resolve(ROOT, 'spec/funnelchat.json');
const PROVENANCE_FILE = resolve(ROOT, 'spec/procedencia.json');
const PENDING_FILE = resolve(ROOT, 'spec/pending.json');
const OUT_DIR = resolve(ROOT, 'src/generated');
const HTTP_METHODS = ['get', 'put', 'post', 'delete', 'patch'];

function parseArgs(argv) {
  const args = { spec: null, check: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--check') args.check = true;
    else if (arg === '--spec') args.spec = argv[++i];
    else if (arg.startsWith('--spec=')) args.spec = arg.slice('--spec='.length);
    else throw new Error(`Argumento desconocido: ${arg}`);
  }
  if (args.spec === undefined) throw new Error('--spec necesita la ruta del archivo');
  return args;
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
function importSpec(source) {
  const sourcePath = resolve(source);
  const bytes = readFileSync(sourcePath);
  const spec = JSON.parse(bytes.toString('utf8'));
  const dir = dirname(sourcePath);
  const top = git(dir, 'rev-parse', '--show-toplevel');
  const relPath = top ? relative(top, sourcePath) : null;
  const tracked = top ? git(top, 'ls-files', '--error-unmatch', relPath) !== null : null;
  const dirty = top ? git(top, 'status', '--porcelain', '--untracked-files=no') : null;

  const provenance = {
    description:
      'De dónde salió spec/funnelchat.json. Lo escribe `npm run generate -- --spec <archivo>`; no lo edites a mano.',
    file: 'spec/funnelchat.json',
    sha256: sha256(bytes),
    bytes: bytes.length,
    source: {
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
      domains: (spec['x-fc-sources'] ?? []).map((s) => ({
        domain: s.domain,
        sha: s.sha,
        branch: s.branch,
        snapshot_at: s.snapshot_at,
      })),
    },
  };

  mkdirSync(dirname(SPEC_FILE), { recursive: true });
  writeFileSync(SPEC_FILE, bytes);
  writeFileSync(PROVENANCE_FILE, `${JSON.stringify(provenance, null, 2)}\n`);
  console.log(`spec: copiada de ${relPath ?? sourcePath} (${provenance.source.branch ?? '?'} @ ${provenance.source.commit?.slice(0, 7) ?? '?'})`);
}

function matches(target, condition) {
  if (!condition) return true;
  return Object.entries(condition).every(([key, value]) => JSON.stringify(target?.[key]) === JSON.stringify(value));
}

/** The event type a `webhooks` key stands for: "webhook.test (conversations)" -> "webhook.test". */
const eventTypeOfKey = (key) => key.replace(/\s*\(.*\)\s*$/, '');

/** Step 2: merge the pending layer into a copy of the snapshot. */
function mergePending(spec, pending) {
  const merged = structuredClone(spec);
  merged.components ??= {};
  merged.components.schemas ??= {};
  merged.paths ??= {};
  merged.webhooks ??= {};
  const report = { applied: [], superseded: [], missing: [] };

  for (const [name, schema] of Object.entries(pending.components?.schemas ?? {})) {
    if (merged.components.schemas[name]) {
      throw new Error(`spec/pending.json: el esquema ${name} ya existe en la instantánea; renombralo.`);
    }
    merged.components.schemas[name] = schema;
  }

  for (const [path, item] of Object.entries(pending.paths ?? {})) {
    for (const method of HTTP_METHODS) {
      if (!item[method]) continue;
      const label = `${method.toUpperCase()} ${path}`;
      if (merged.paths[path]?.[method]) {
        report.superseded.push(label);
        continue;
      }
      merged.paths[path] ??= {};
      merged.paths[path][method] = item[method];
      report.applied.push(label);
    }
  }

  for (const patch of pending.operationPatches ?? []) {
    const label = `${patch.method.toUpperCase()} ${patch.path} (parche: ${Object.keys(patch.requestBodyProperties ?? {}).join(', ')})`;
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
    if (!schema) {
      report.missing.push(label);
      continue;
    }
    schema.properties ??= {};
    for (const [prop, propSchema] of Object.entries(patch.requestBodyProperties ?? {})) {
      schema.properties[prop] ??= propSchema;
    }
    op['x-fc-pending'] = patch['x-fc-pending'];
    report.applied.push(label);
  }

  // Schema patches add properties to a component schema, each one only while the schema lacks it.
  for (const patch of pending.schemaPatches ?? []) {
    const label = `esquema ${patch.schema} (parche: ${Object.keys(patch.properties ?? {}).join(', ')})`;
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
    const label = `${patch.method.toUpperCase()} ${patch.path} (respuesta: ${Object.keys(patch.responses ?? {}).join(', ')})`;
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

  const snapshotTypes = new Map(Object.keys(merged.webhooks).map((key) => [eventTypeOfKey(key), key]));
  for (const [type, item] of Object.entries(pending.webhooks ?? {})) {
    const currentKey = snapshotTypes.get(type);
    const label = `webhook ${type}`;
    if (currentKey) {
      const replaceWhile = item.post?.['x-fc-replace-while'];
      if (!replaceWhile || !matches(merged.webhooks[currentKey].post, replaceWhile)) {
        report.superseded.push(label);
        continue;
      }
      delete merged.webhooks[currentKey];
    }
    merged.webhooks[type] = item;
    report.applied.push(label);
  }

  return { merged, report };
}

const HEADER = (specHash) =>
  [
    '/**',
    ' * GENERATED FILE — do not edit. Run `npm run generate`.',
    ` * Source: spec/funnelchat.json (sha256 ${specHash.slice(0, 16)}…) + spec/pending.json.`,
    ' */',
    '',
  ].join('\n');

/** Step 3: TypeScript types for the whole merged spec. */
async function generateOpenapiTypes(merged, specHash) {
  const ast = await openapiTS(merged, { emptyObjectsUnknown: true, silent: true });
  return `${HEADER(specHash)}/* eslint-disable */\n${astToString(ast)}`;
}

/** Step 4: the route table. */
function generateRoutes(merged, specHash) {
  const rows = [];
  for (const [path, item] of Object.entries(merged.paths)) {
    for (const method of HTTP_METHODS) {
      const op = item[method];
      if (!op) continue;
      rows.push({
        method: method.toUpperCase(),
        path,
        operationId: op.operationId ?? null,
        domain: op['x-fc-domain'] ?? null,
        permission: op['x-fc-permission'] ?? null,
        tag: op.tags?.[0] ?? null,
        summary: op.summary ?? null,
        pending: Boolean(op['x-fc-pending']),
      });
    }
  }
  rows.sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method));
  const body = rows.map((r) => `  ${JSON.stringify(r)},`).join('\n');
  return `${HEADER(specHash)}
/** One operation of the public API. \`pending\` = taken from spec/pending.json, not from the snapshot. */
export interface RouteInfo {
  readonly method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';
  readonly path: string;
  readonly operationId: string | null;
  readonly domain: string | null;
  readonly permission: string | null;
  readonly tag: string | null;
  readonly summary: string | null;
  readonly pending: boolean;
}

/** Every operation of the spec (${rows.length}), sorted by path. */
export const routes: readonly RouteInfo[] = [
${body}
];
`;
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
  if (hint && (Array.isArray(hint.enum) || 'const' in hint)) return schemaToTs(hint, depth);
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

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.spec) {
    if (args.check) throw new Error('--check y --spec no se combinan');
    importSpec(args.spec);
  }
  if (!existsSync(SPEC_FILE)) throw new Error('Falta spec/funnelchat.json: corré `npm run generate -- --spec <archivo>`.');

  const bytes = readFileSync(SPEC_FILE);
  const specHash = sha256(bytes);
  if (existsSync(PROVENANCE_FILE)) {
    const provenance = JSON.parse(readFileSync(PROVENANCE_FILE, 'utf8'));
    if (provenance.sha256 !== specHash) {
      console.warn('aviso: spec/funnelchat.json no coincide con el sha256 de spec/procedencia.json (¿la editaron a mano?).');
    }
  }

  const spec = JSON.parse(bytes.toString('utf8'));
  const pending = existsSync(PENDING_FILE) ? JSON.parse(readFileSync(PENDING_FILE, 'utf8')) : {};
  const { merged, report } = mergePending(spec, pending);

  const files = {
    'openapi.ts': await generateOpenapiTypes(merged, specHash),
    'routes.ts': generateRoutes(merged, specHash),
    'events.ts': generateEvents(merged, specHash),
  };

  console.log(`pendiente de la especificación: ${report.applied.length} entradas aplicadas.`);
  if (report.superseded.length) {
    console.log(`la instantánea ya trae ${report.superseded.length} entradas de spec/pending.json; se pueden borrar de ahí:`);
    for (const label of report.superseded) console.log(`  - ${label}`);
  }
  if (report.missing.length) {
    console.warn(`aviso: ${report.missing.length} parches no encontraron su operación en la instantánea:`);
    for (const label of report.missing) console.warn(`  - ${label}`);
  }

  if (args.check) {
    const stale = Object.entries(files).filter(([name, content]) => {
      const file = resolve(OUT_DIR, name);
      return !existsSync(file) || readFileSync(file, 'utf8') !== content;
    });
    if (stale.length) {
      console.error(`src/generated está desactualizado (${stale.map(([n]) => n).join(', ')}): corré \`npm run generate\`.`);
      process.exit(1);
    }
    console.log('src/generated está al día.');
    return;
  }

  mkdirSync(OUT_DIR, { recursive: true });
  for (const [name, content] of Object.entries(files)) writeFileSync(resolve(OUT_DIR, name), content);
  console.log(`generado: ${Object.keys(files).map((n) => `src/generated/${n}`).join(', ')}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
