import { readFileSync } from 'node:fs';
import { inspect } from 'node:util';
import { describe, expect, it, vi } from 'vitest';
import { BASE_URLS, Funnelchat, FunnelchatError, VERSION } from '../src/index.js';
import { serializeQuery } from '../src/core/url.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';

const client = (fetchImpl: typeof fetch, options: Partial<ConstructorParameters<typeof Funnelchat>[0]> = {}) =>
  new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, maxRetries: 0, ...options });

describe('client configuration', () => {
  it('uses production by default, staging on request, and baseUrl over both', async () => {
    const { fetch, calls } = mockFetch({ body: [] }, { body: [] }, { body: [] });
    await client(fetch).request('GET', '/api/v1/devices');
    await client(fetch, { environment: 'staging' }).request('GET', '/api/v1/devices');
    await client(fetch, { environment: 'staging', baseUrl: 'http://localhost:8011/' }).request('GET', '/api/v1/devices');
    expect(calls.map((c) => c.url)).toEqual([
      'https://api.funnelchat.com/api/v1/devices',
      'https://api-staging.funnelchat.com/api/v1/devices',
      'http://localhost:8011/api/v1/devices',
    ]);
    expect(BASE_URLS).toEqual({ production: 'https://api.funnelchat.com', staging: 'https://api-staging.funnelchat.com' });
  });

  it('reads the key from FUNNELCHAT_API_KEY when apiKey is not passed', async () => {
    vi.stubEnv('FUNNELCHAT_API_KEY', '2|fc_live_from_env');
    const { fetch, calls } = mockFetch({ body: [] });
    await new Funnelchat({ fetch }).request('GET', '/api/v1/devices');
    expect(calls[0]?.headers.authorization).toBe('Bearer 2|fc_live_from_env');
  });

  it('fails early without a key or with an unknown environment', () => {
    vi.stubEnv('FUNNELCHAT_API_KEY', '');
    expect(() => new Funnelchat({ fetch: vi.fn() as never })).toThrow(FunnelchatError);
    expect(() => new Funnelchat({ apiKey: TEST_API_KEY, environment: 'dev' as never })).toThrow(/Entorno desconocido/);
  });

  it('never exposes the key when the client is logged or serialized', () => {
    const c = client(vi.fn() as never);
    expect(inspect(c, { depth: 5 })).not.toContain('fc_live');
    expect(JSON.stringify(c)).not.toContain('fc_live');
  });

  it('keeps VERSION equal to package.json', () => {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as { version: string; name: string };
    expect(VERSION).toBe(pkg.version);
    expect(Funnelchat.VERSION).toBe(pkg.version);
    expect(pkg.name).toBe('@funnelchat/sdk');
  });
});

describe('request building', () => {
  it('sends the auth, accept, user-agent and content-type headers', async () => {
    const { fetch, calls } = mockFetch({ status: 201, body: { id: 7 } });
    await client(fetch, { defaultHeaders: { 'X-Trace': 'abc' } }).tags.create({ name: 'VIP' }, { headers: { 'X-Extra': '1' } });
    const call = calls[0];
    expect(call?.method).toBe('POST');
    expect(call?.headers.authorization).toBe(`Bearer ${TEST_API_KEY}`);
    expect(call?.headers.accept).toBe('application/json');
    expect(call?.headers['content-type']).toBe('application/json');
    expect(call?.headers['user-agent']).toBe(`funnelchat-node/${VERSION} node/${process.version}`);
    expect(call?.headers['x-trace']).toBe('abc');
    expect(call?.headers['x-extra']).toBe('1');
    expect(JSON.parse(call?.body ?? '')).toEqual({ name: 'VIP' });
  });

  it('does not send a content-type without a body', async () => {
    const { fetch, calls } = mockFetch({ body: {} });
    await client(fetch).contacts.retrieve(2001);
    expect(calls[0]?.headers['content-type']).toBeUndefined();
  });

  it('interpolates and encodes path parameters', async () => {
    const { fetch, calls } = mockFetch({ body: {} });
    await client(fetch).groups.metadata('120363000000000001@g.us', { device_id: 3, group_uid: '120363000000000001@g.us' });
    expect(calls[0]?.url).toBe(
      'https://api.funnelchat.com/api/v1/groups/120363000000000001%40g.us/metadata?device_id=3&group_uid=120363000000000001%40g.us',
    );
  });

  it('refuses to send a request with a missing path parameter', async () => {
    const { fetch, calls } = mockFetch({ body: {} });
    await expect(client(fetch).request('GET', '/api/v1/contacts/{contact}', { path: {} as never })).rejects.toThrow(/contact/);
    expect(calls).toHaveLength(0);
  });

  it('returns null for a 204', async () => {
    const { fetch } = mockFetch({ status: 204 });
    await expect(client(fetch).webhooks.delete('00000000-0000-4000-8000-000000000001')).resolves.toBeNull();
  });

  it('returns the body even when the spec documents no body', async () => {
    const { fetch } = mockFetch({ status: 200, body: { deleted: true } });
    await expect(client(fetch).webhooks.delete('00000000-0000-4000-8000-000000000001')).resolves.toEqual({ deleted: true });
  });

  it('calls a route outside the spec with the untyped request()', async () => {
    const { fetch, calls } = mockFetch({ body: { ok: true } });
    const result = await client(fetch).request<{ ok: boolean }>('POST', '/api/v1/groups/{group}/something-new', {
      path: { group: 'g1' },
      query: { dry_run: true },
      body: { a: 1 },
    });
    expect(result.ok).toBe(true);
    expect(calls[0]?.url).toBe('https://api.funnelchat.com/api/v1/groups/g1/something-new?dry_run=1');
  });
});

describe('query serialization (Laravel style)', () => {
  it.each([
    [{ perPage: 25, name: 'Ana' }, 'perPage=25&name=Ana'],
    [{ 'tag_ids[]': [1, 2] }, 'tag_ids%5B%5D=1&tag_ids%5B%5D=2'],
    [{ tag_ids: [1, 2] }, 'tag_ids%5B%5D=1&tag_ids%5B%5D=2'],
    [{ withContactCount: true, noCampaign: false }, 'withContactCount=1&noCampaign=0'],
    [{ a: undefined, b: null, c: 'x' }, 'c=x'],
    [{ tag_filters: [{ mode: 'all', tag_ids: [3] }] }, 'tag_filters%5B0%5D%5Bmode%5D=all&tag_filters%5B0%5D%5Btag_ids%5D%5B%5D=3'],
    [{ filters: { campaign_ids: ['abc123'] } }, 'filters%5Bcampaign_ids%5D%5B%5D=abc123'],
    [{ created_from: new Date('2026-10-01T00:00:00Z') }, 'created_from=2026-10-01T00%3A00%3A00.000Z'],
  ])('%j', (query, expected) => {
    expect(serializeQuery(query)).toBe(expected);
  });
});

describe('resources build the right requests', () => {
  async function capture(run: (c: Funnelchat) => Promise<unknown>, reply: Parameters<typeof mockFetch>[0] = { body: {} }) {
    const { fetch, calls } = mockFetch(reply);
    await run(client(fetch));
    const call = calls[0];
    if (!call) throw new Error('no call');
    const url = new URL(call.url);
    return { method: call.method, path: url.pathname, search: url.search, body: call.body ? (JSON.parse(call.body) as unknown) : undefined };
  }

  it('messages.send fills contact_id from the route and carries client_reference', async () => {
    const req = await capture(
      (c) => c.messages.send(2001, { device_id: 3, phone: '5491100000000', text: '¡Hola! Te paso la info…', client_reference: 'pedido-123' }),
      { status: 204 },
    );
    expect(req).toEqual({
      method: 'POST',
      path: '/api/v1/contacts/2001/message',
      search: '',
      body: { device_id: 3, phone: '5491100000000', text: '¡Hola! Te paso la info…', client_reference: 'pedido-123', contact_id: 2001 },
    });
  });

  it('templates.send', async () => {
    const req = await capture((c) =>
      c.templates.send(3, '45', { phone: '5491100000000', contact_id: 2001, template_variables: { body: ['Lucía'] } }),
    );
    expect(req).toMatchObject({
      method: 'POST',
      path: '/api/v1/devices/3/templates/45/send-template',
      body: { phone: '5491100000000', contact_id: 2001, template_variables: { body: ['Lucía'] } },
    });
  });

  it('contacts.metaWindow', async () => {
    const req = await capture((c) => c.contacts.metaWindow(2001, { device_id: 3 }));
    expect(req).toMatchObject({ method: 'GET', path: '/api/v1/contacts/2001/meta-window', search: '?device_id=3' });
  });

  it('contacts.upsert and contacts.delete', async () => {
    expect(await capture((c) => c.contacts.upsert({ phone: '+5491100000099', name: 'Ana' }))).toMatchObject({
      method: 'POST',
      path: '/api/v1/contacts/update-or-create',
    });
    expect(await capture((c) => c.contacts.delete({ contactIds: [1, 2] }))).toMatchObject({
      method: 'POST',
      path: '/api/v1/contacts/delete',
      body: { contactIds: [1, 2] },
    });
  });

  it('messages.react and removeReaction', async () => {
    expect(await capture((c) => c.messages.react(2001, 99, { emoji: '👍' }))).toMatchObject({
      method: 'PUT',
      path: '/api/v1/contacts/2001/messages/99/reaction',
      body: { emoji: '👍' },
    });
    expect(await capture((c) => c.messages.removeReaction(2001, 99), { status: 204 })).toMatchObject({
      method: 'DELETE',
      path: '/api/v1/contacts/2001/messages/99/reaction',
    });
  });

  it('webhooks subscriptions (pending of the spec)', async () => {
    const id = '00000000-0000-4000-8000-000000000001';
    expect(
      await capture((c) => c.webhooks.create({ url: 'https://example.com/hooks', events: ['message.received', 'message.status_changed'] }), {
        status: 201,
        body: {},
      }),
    ).toMatchObject({ method: 'POST', path: '/api/v1/webhooks', body: { url: 'https://example.com/hooks', events: ['message.received', 'message.status_changed'] } });
    expect(await capture((c) => c.webhooks.update(id, { url: 'https://example.com/v2', events: ['message.received'] }))).toMatchObject({
      method: 'PUT',
      path: `/api/v1/webhooks/${id}`,
    });
    expect(await capture((c) => c.webhooks.rotateSecret(id))).toMatchObject({ method: 'POST', path: `/api/v1/webhooks/${id}/rotate-secret` });
    expect(await capture((c) => c.webhooks.test(id))).toMatchObject({ method: 'POST', path: `/api/v1/webhooks/${id}/test` });
    expect(await capture((c) => c.webhooks.listDeliveries(id, { per_page: 50 }).then((p) => p.data))).toMatchObject({
      method: 'GET',
      path: `/api/v1/webhooks/${id}/deliveries`,
      search: '?per_page=50',
    });
    expect(await capture((c) => c.webhooks.events())).toMatchObject({ method: 'GET', path: '/api/v1/webhooks/events' });
  });

  it.each([
    ['devices.retrieve', (c: Funnelchat) => c.devices.retrieve(3), 'GET', '/api/v1/devices/3'],
    ['devices.status', (c: Funnelchat) => c.devices.status(3), 'GET', '/api/v1/devices/3/status'],
    ['groups.retrieve', (c: Funnelchat) => c.groups.retrieve('xK9mQz'), 'GET', '/api/v1/groups/xK9mQz'],
    ['customFields.retrieve', (c: Funnelchat) => c.customFields.retrieve(5), 'GET', '/api/v1/custom-fields/5'],
    ['tags.retrieve', (c: Funnelchat) => c.tags.retrieve(8), 'GET', '/api/v1/tags/8'],
    ['templates.retrieve', (c: Funnelchat) => c.templates.retrieve(45), 'GET', '/api/v1/templates/45'],
    ['conversations.countUnread', (c: Funnelchat) => c.conversations.countUnread(), 'GET', '/api/v1/conversations/count/unread'],
    ['contacts.createNote', (c: Funnelchat) => c.contacts.createNote(2001, { body: 'nota' }), 'POST', '/api/v1/contacts/2001/notes'],
  ] as const)('%s', async (_name, run, method, path) => {
    expect(await capture(run)).toMatchObject({ method, path });
  });
});
