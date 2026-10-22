/**
 * The forms (conversations v1.18.10): each method calls its route, and the route table carries the
 * permission each one needs.
 */
import { describe, expect, it } from 'vitest';
import { Funnelchat, routes } from '../src/index.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';

const client = (fetchImpl: typeof fetch) => new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, maxRetries: 0 });
const BASE = 'https://api.funnelchat.com/api/v1';

describe('forms', () => {
  it('calls each route with its method', async () => {
    const replies = Array.from({ length: 16 }, () => ({ status: 200, body: { data: [], numbers: [] } }));
    const { fetch, calls } = mockFetch(...replies);
    const forms = client(fetch).forms;
    await forms.list({ status: 'published' });
    await forms.templates();
    await forms.create({ device_id: 3, template_key: 'encuesta' });
    await forms.retrieve(34);
    await forms.update(34, { definition: {}, expected_updated_at: '2026-10-22T12:00:00Z' });
    await forms.delete(34);
    await forms.createVersion(34);
    await forms.sync(34);
    await forms.publish(34);
    await forms.numbers(34);
    await forms.addNumber(34, { device_id: 4 });
    await forms.removeNumber(34, 4);
    await forms.retryNumbers(34);
    await forms.definition(12);
    await forms.versions(12);
    await forms.metrics(12);
    expect(calls.map((c) => `${c.method} ${c.url.replace(BASE, '')}`)).toEqual([
      'GET /forms?status=published',
      'GET /forms/templates',
      'POST /forms',
      'GET /forms/34',
      'PUT /forms/34',
      'DELETE /forms/34',
      'POST /forms/34/versions',
      'POST /forms/34/sync',
      'POST /forms/34/publish',
      'GET /forms/34/numbers',
      'POST /forms/34/numbers',
      'DELETE /forms/34/numbers/4',
      'POST /forms/34/numbers/retry',
      'GET /forms/families/12/definition',
      'GET /forms/families/12/versions',
      'GET /forms/families/12/metrics',
    ]);
  });

  it('pages through the answers of a form', async () => {
    const { fetch, calls } = mockFetch(
      { body: { data: [{ id: 1 }], meta: { current_page: 1, last_page: 2 }, columns: [] } },
      { body: { data: [{ id: 2 }], meta: { current_page: 2, last_page: 2 }, columns: [] } },
    );
    const ids: unknown[] = [];
    for await (const answer of client(fetch).forms.listResponses(12, { version_id: 34 })) ids.push((answer as { id: number }).id);
    expect(ids).toEqual([1, 2]);
    expect(calls[1]?.url).toBe(`${BASE}/forms/families/12/responses?version_id=34&page=2`);
  });

  it('reads need conversations:read, writes conversations:write and the send conversations:send', () => {
    const permission = (method: string, path: string) => routes.find((r) => r.method === method && r.path === path)?.permission;
    expect(permission('GET', '/api/v1/forms')).toBe('conversations:read');
    expect(permission('POST', '/api/v1/forms/{id}/publish')).toBe('conversations:write');
    expect(permission('POST', '/api/v1/contacts/{contact}/message/form')).toBe('conversations:send');
  });
});
