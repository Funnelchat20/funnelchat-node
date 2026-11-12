import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { routeGroups, routes, webhookEvents } from '../src/index.js';

type Operation = Record<string, unknown>;
type PathItems = Record<string, Record<string, Operation>>;
interface Patch {
  method: string;
  path: string;
  while?: Record<string, unknown>;
  requestBodyProperties?: Record<string, unknown>;
  parameters?: { name: string; in: string }[];
}
interface SpecFile {
  paths?: PathItems;
  webhooks?: Record<string, unknown>;
  operationPatches?: Patch[];
  responsePatches?: Patch[];
}
interface PortalGroup {
  name: string;
  category: string | null;
  description: string | null;
}
interface PortalCategory {
  name: string;
  url: string | null;
}
interface Generator {
  portalGroups(spec: object): { groups: Map<string, PortalGroup>; warnings: string[]; categories: PortalCategory[] };
  readmeBlock(groups: { name: string; category: string | null }[], operations: number, events: number, catalog?: PortalCategory[]): string;
}

// A specifier the type checker does not resolve: the generator is a plain script.
const GENERATOR = new URL('../scripts/generate.mjs', import.meta.url).href;
const generator = (): Promise<Generator> => import(GENERATOR) as Promise<Generator>;

// Everything is derived from the spec files, so a regeneration does not need to touch this test.
const readJson = (file: string) => JSON.parse(readFileSync(new URL(`../spec/${file}`, import.meta.url), 'utf8')) as SpecFile;
const snapshot = readJson('funnelchat.json');
const pending = readJson('pending.json');
const METHODS = ['get', 'put', 'post', 'delete', 'patch'];
const operationsOf = (paths: PathItems = {}) =>
  Object.entries(paths).flatMap(([path, item]) => METHODS.filter((m) => m in item).map((m) => ({ method: m, path, op: item[m] as Operation })));
const key = (method: string, path: string) => `${method.toUpperCase()} ${path}`;
const routeKeys = new Map(routes.map((r) => [key(r.method, r.path), r]));
const snapshotOp = (method: string, path: string) => snapshot.paths?.[path]?.[method];
/** A key of `while` is a property of the operation, or a JSON Pointer into it when it starts with `/`. */
const at = (op: Operation, key: string): unknown =>
  key.startsWith('/')
    ? key
        .slice(1)
        .split('/')
        .map((part) => part.replace(/~1/g, '/').replace(/~0/g, '~'))
        .reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], op)
    : op[key];
const matches = (op: Operation | undefined, condition: Record<string, unknown> = {}) =>
  op !== undefined && Object.entries(condition).every(([k, v]) => JSON.stringify(at(op, k)) === JSON.stringify(v));
const eventType = (k: string) => k.replace(/\s*\(.*\)\s*$/, '');

describe('generated layer and the pending-of-the-spec layer', () => {
  it('has every operation of the snapshot, unflagged unless a pending patch applies', () => {
    const snapshotOps = operationsOf(snapshot.paths);
    expect(snapshotOps.length).toBeGreaterThan(0);
    for (const { method, path } of snapshotOps) expect(routeKeys.has(key(method, path))).toBe(true);
  });

  it('adds no operation the spec does not publish', () => {
    expect(pending.paths).toBeUndefined();
    expect(routes.filter((r) => !snapshotOp(r.method.toLowerCase(), r.path)).map((r) => key(r.method, r.path))).toEqual([]);
    expect(routes.length).toBe(operationsOf(snapshot.paths).length);
  });

  it('gives each route its group and whether it can be undone, as the spec says', () => {
    for (const r of routes) {
      const op = snapshotOp(r.method.toLowerCase(), r.path)!;
      const destructive = op['x-fc-destructive'];
      expect(r.destructive).toBe(typeof destructive === 'boolean' ? destructive : null);
      expect(r.tag).toBe((op.tags as string[] | undefined)?.[0] ?? null);
      expect(r.category).toBe(routeGroups.find((g) => g.name === r.tag)?.category ?? null);
    }
    expect(routeGroups.reduce((sum, g) => sum + g.operations, 0)).toBe(routes.filter((r) => r.tag).length);
  });

  // A patch without `while` applies while the snapshot operation lacks one of its properties or parameters.
  const lacksSomething = (op: Operation | undefined, patch: Patch) => {
    const body = (op?.requestBody as { content?: Record<string, { schema?: { properties?: object } }> } | undefined)?.content?.['application/json']?.schema;
    const params = (op?.parameters ?? []) as { name: string; in: string }[];
    return (
      Object.keys(patch.requestBodyProperties ?? {}).some((prop) => !(prop in (body?.properties ?? {}))) ||
      (patch.parameters ?? []).some((p) => !params.some((q) => q.name === p.name && q.in === p.in))
    );
  };

  it('flags the snapshot operations a pending patch still applies to', () => {
    for (const patch of [...(pending.operationPatches ?? []), ...(pending.responsePatches ?? [])]) {
      const op = snapshotOp(patch.method, patch.path);
      if (matches(op, patch.while) && (patch.while !== undefined || lacksSomething(op, patch))) {
        expect(routeKeys.get(key(patch.method, patch.path))?.pending).toBe(true);
      }
    }
  });

  it('knows exactly the events the spec publishes, once', () => {
    const types = webhookEvents.map((e) => e.type);
    expect(new Set(types).size).toBe(types.length);
    expect(new Set(types)).toEqual(new Set(Object.keys(snapshot.webhooks ?? {}).map(eventType)));
  });
});

describe('groups and categories of the portal', () => {
  const tags = [{ name: 'Números' }, { name: 'Mensajes' }, { name: 'Ventas' }];
  const categories = async (spec: object) => {
    const { groups, warnings } = (await generator()).portalGroups(spec);
    return { categories: Object.fromEntries([...groups.values()].map((g) => [g.name, g.category])), warnings };
  };

  it('has no category while every x-tagGroups entry is one tag under its own name', async () => {
    const spec = { tags, 'x-tagGroups': tags.map((t) => ({ name: t.name, tags: [t.name] })) };
    expect(await categories(spec)).toEqual({ categories: { Números: null, Mensajes: null, Ventas: null }, warnings: [] });
  });

  it('reads the category of an x-tagGroups entry: a key of its own, an id the root names, or a group of tags', async () => {
    const own = {
      tags,
      'x-tagGroups': [
        { name: 'Números', tags: ['Números'], 'x-fc-categoria': 'Funciones de WhatsApp' },
        { name: 'Mensajes', tags: ['Mensajes'], 'x-fc-categoria': { nombre: 'Funciones de WhatsApp' } },
        { name: 'Ventas', tags: ['Ventas'], 'x-fc-categoria': 'funnelchat' },
      ],
      'x-fc-categorias': [{ id: 'funnelchat', title: 'Funciones de Funnelchat', url: 'https://developers-portal.funnelchat.app/docs/mas-funciones/funnelchat/' }],
    };
    const grouped = {
      tags,
      'x-tagGroups': [
        { name: 'Funciones de WhatsApp', tags: ['Números', 'Mensajes'] },
        { name: 'Funciones de Funnelchat', tags: ['Ventas'] },
      ],
    };
    const expected = { Números: 'Funciones de WhatsApp', Mensajes: 'Funciones de WhatsApp', Ventas: 'Funciones de Funnelchat' };
    expect(await categories(own)).toEqual({ categories: expected, warnings: [] });
    expect(await categories(grouped)).toEqual({ categories: expected, warnings: [] });
  });

  it('warns about a category it cannot read, and leaves that group without one', async () => {
    const spec = { tags, 'x-tagGroups': [{ name: 'Números', tags: ['Números'], 'x-fc-categoria': ['a', 'b'] }] };
    const { categories: found, warnings } = await categories(spec);
    expect(found['Números']).toBeNull();
    expect(warnings).toHaveLength(1);
  });

  it('lists the groups in the README by category once the spec gives one', async () => {
    const { readmeBlock } = await generator();
    expect(readmeBlock([{ name: 'Números', category: null }, { name: 'Ventas', category: null }], 2, 1)).toContain('\n- Números, Ventas.');
    const block = readmeBlock(
      [
        { name: 'Números', category: 'Funciones de WhatsApp' },
        { name: 'Ventas', category: 'Funciones de Funnelchat' },
        { name: 'Mensajes', category: 'Funciones de WhatsApp' },
      ],
      3,
      1,
    );
    expect(block).toContain('\n- **Funciones de WhatsApp:** Números, Mensajes.\n- **Funciones de Funnelchat:** Ventas.');
    // In the order of the spec's list of categories, each one with its page; a group without one goes last.
    const catalog = [
      { name: 'Funciones de Funnelchat', url: 'https://example.com/funnelchat/' },
      { name: 'Funciones de WhatsApp', url: null },
    ];
    const ordered = readmeBlock([{ name: 'Números', category: 'Funciones de WhatsApp' }, { name: 'Notas', category: null }, { name: 'Ventas', category: 'Funciones de Funnelchat' }], 3, 1, catalog);
    expect(ordered).toContain(
      '\n- **[Funciones de Funnelchat](https://example.com/funnelchat/):** Ventas.\n- **Funciones de WhatsApp:** Números.\n- **Without a category:** Notas.',
    );
  });

  it('keeps the README block up to date with the route table and the event catalog', async () => {
    const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
    const { portalGroups, readmeBlock } = await generator();
    expect(readme).toContain(readmeBlock([...routeGroups], routes.length, webhookEvents.length, portalGroups(snapshot).categories));
  });
});

describe('permission names', () => {
  // The docs name a permission as the panel does (**WhatsApp numbers → View**); the literal is only a value.
  const literal = /\b(?:accounts|communities|conversations|webhooks):(?:[a-z]+\b|\*)|\{area\}:[a-z]+\b/g;
  const src = new URL('../src/', import.meta.url);
  const sources = (readdirSync(src, { recursive: true }) as string[]).filter((file) => file.endsWith('.ts'));
  const literalsIn = (text: string) => [...text.matchAll(literal)].map(([lit]) => lit);

  it('never names one by its literal in the README', () => {
    expect(literalsIn(readFileSync(new URL('../README.md', import.meta.url), 'utf8'))).toEqual([]);
  });

  it('never names one by its literal in a comment of src/', () => {
    const found = sources.flatMap((file) => {
      const comments = readFileSync(new URL(file, src), 'utf8').match(/\/\*[\s\S]*?\*\/|\/\/.*$/gm) ?? [];
      return comments.flatMap(literalsIn).map((lit) => `${file}: ${lit}`);
    });
    expect(found).toEqual([]);
  });
});
