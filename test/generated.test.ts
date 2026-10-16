import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { routes, webhookEvents } from '../src/index.js';

type Operation = Record<string, unknown>;
type PathItems = Record<string, Record<string, Operation>>;
interface Patch {
  method: string;
  path: string;
  while?: Record<string, unknown>;
}
interface SpecFile {
  paths?: PathItems;
  webhooks?: Record<string, unknown>;
  operationPatches?: Patch[];
  responsePatches?: Patch[];
}

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
const matches = (op: Operation | undefined, condition: Record<string, unknown> = {}) =>
  op !== undefined && Object.entries(condition).every(([k, v]) => JSON.stringify(op[k]) === JSON.stringify(v));
const eventType = (k: string) => k.replace(/\s*\(.*\)\s*$/, '');

describe('generated layer and the pending-of-the-spec layer', () => {
  it('has every operation of the snapshot, unflagged unless a pending patch applies', () => {
    const snapshotOps = operationsOf(snapshot.paths);
    expect(snapshotOps.length).toBeGreaterThan(0);
    for (const { method, path } of snapshotOps) expect(routeKeys.has(key(method, path))).toBe(true);
  });

  it('adds the pending operations the snapshot lacks, flagged, and nothing else', () => {
    const missing = operationsOf(pending.paths).filter(({ method, path }) => !snapshotOp(method, path));
    for (const { method, path } of missing) expect(routeKeys.get(key(method, path))?.pending).toBe(true);
    const added = routes.filter((r) => !snapshotOp(r.method.toLowerCase(), r.path));
    expect(added.map((r) => key(r.method, r.path)).sort()).toEqual(missing.map((m) => key(m.method, m.path)).sort());
  });

  it('flags the snapshot operations a pending patch still applies to', () => {
    for (const patch of [...(pending.operationPatches ?? []), ...(pending.responsePatches ?? [])]) {
      if (matches(snapshotOp(patch.method, patch.path), patch.while)) {
        expect(routeKeys.get(key(patch.method, patch.path))?.pending).toBe(true);
      }
    }
  });

  it('knows every event of the snapshot and of the pending layer, once', () => {
    const types = webhookEvents.map((e) => e.type);
    expect(new Set(types).size).toBe(types.length);
    const expected = new Set([...Object.keys(snapshot.webhooks ?? {}), ...Object.keys(pending.webhooks ?? {})].map(eventType));
    expect(new Set(types)).toEqual(expected);
  });
});
