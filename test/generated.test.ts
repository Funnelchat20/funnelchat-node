import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { routes, webhookEvents } from '../src/index.js';

type PathItems = Record<string, Record<string, unknown>>;
const readJson = (file: string) => JSON.parse(readFileSync(new URL(`../spec/${file}`, import.meta.url), 'utf8')) as { paths?: PathItems };
const methods = ['get', 'put', 'post', 'delete', 'patch'];
const countOps = (paths: PathItems = {}) => Object.values(paths).reduce((n, item) => n + methods.filter((m) => m in item).length, 0);

describe('generated layer and the pending-of-the-spec layer', () => {
  it('has every operation of the snapshot plus the pending ones, flagged', () => {
    // Counted from the spec files, so a regeneration does not need to touch this test.
    const snapshotOps = countOps(readJson('funnelchat.json').paths);
    const pendingOps = routes.filter((r) => r.pending && r.path.startsWith('/api/v1/webhooks')).length;
    expect(snapshotOps).toBeGreaterThan(0);
    expect(routes.length).toBe(snapshotOps + pendingOps);
    expect(pendingOps).toBeLessThanOrEqual(countOps(readJson('pending.json').paths));
    const pending = routes.filter((r) => r.pending).map((r) => `${r.method} ${r.path}`);
    expect(pending).toEqual(
      expect.arrayContaining([
        'GET /api/v1/webhooks',
        'POST /api/v1/webhooks',
        'GET /api/v1/webhooks/{id}',
        'PUT /api/v1/webhooks/{id}',
        'DELETE /api/v1/webhooks/{id}',
        'POST /api/v1/webhooks/{id}/rotate-secret',
        'POST /api/v1/webhooks/{id}/test',
        'GET /api/v1/webhooks/{id}/deliveries',
        // Patched with client_reference while the snapshot says send_pending.
        'POST /api/v1/contacts/{contact}/message',
      ]),
    );
  });

  it('knows every event of the snapshot and the pending ones', () => {
    const types = webhookEvents.map((e) => e.type);
    expect(new Set(types).size).toBe(types.length);
    for (const type of ['message.received', 'group.created', 'webhook.test', 'message.status_changed', 'device.connected', 'device.disconnected']) {
      expect(types).toContain(type);
    }
    const statusChanged = webhookEvents.find((e) => e.type === 'message.status_changed');
    expect(statusChanged).toMatchObject({ status: 'planned', pending: true });
  });
});
