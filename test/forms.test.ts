/**
 * The forms (conversations v1.18.10): each method calls its route, and the route table carries the
 * permission each one needs.
 */
import { describe, expect, it } from 'vitest';
import { Funnelchat, routes } from '../src/index.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';
import { DEVICE, DEVICE_2, FORM, FORM_2, FORM_RUN as RUN, FORM_RUN_2 as RUN_2, FORM_VERSION } from './ids.js';

const client = (fetchImpl: typeof fetch) => new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, maxRetries: 0 });
const BASE = 'https://api.funnelchat.com/api/v1';

describe('forms', () => {
  it('calls each route with its method', async () => {
    const replies = Array.from({ length: 16 }, () => ({ status: 200, body: { data: [], numbers: [] } }));
    const { fetch, calls } = mockFetch(...replies);
    const forms = client(fetch).forms;
    await forms.list({ status: 'published' });
    await forms.templates();
    await forms.create({ device_id: DEVICE, template_key: 'encuesta' });
    await forms.retrieve(FORM);
    await forms.update(FORM, { definition: { screens: [] }, expected_updated_at: '2026-10-22T12:00:00Z' });
    await forms.delete(FORM);
    await forms.createVersion(FORM);
    await forms.sync(FORM);
    await forms.publish(FORM);
    await forms.numbers(FORM);
    await forms.addNumber(FORM, { device_id: DEVICE_2 });
    await forms.removeNumber(FORM, DEVICE_2);
    await forms.retryNumbers(FORM);
    await forms.definition(FORM_2);
    await forms.versions(FORM_2);
    await forms.metrics(FORM_2);
    expect(calls.map((c) => `${c.method} ${c.url.replace(BASE, '')}`)).toEqual([
      'GET /forms?status=published',
      'GET /forms/templates',
      'POST /forms',
      `GET /forms/${FORM}`,
      `PUT /forms/${FORM}`,
      `DELETE /forms/${FORM}`,
      `POST /forms/${FORM}/versions`,
      `POST /forms/${FORM}/sync`,
      `POST /forms/${FORM}/publish`,
      `GET /forms/${FORM}/numbers`,
      `POST /forms/${FORM}/numbers`,
      `DELETE /forms/${FORM}/numbers/${DEVICE_2}`,
      `POST /forms/${FORM}/numbers/retry`,
      `GET /forms/families/${FORM_2}/definition`,
      `GET /forms/families/${FORM_2}/versions`,
      `GET /forms/families/${FORM_2}/metrics`,
    ]);
  });

  it('pages through the answers of a form', async () => {
    const { fetch, calls } = mockFetch(
      { body: { data: [{ id: RUN }], meta: { current_page: 1, last_page: 2 }, columns: [] } },
      { body: { data: [{ id: RUN_2 }], meta: { current_page: 2, last_page: 2 }, columns: [] } },
    );
    const ids: string[] = [];
    for await (const answer of client(fetch).forms.listResponses(FORM_2, { version_id: FORM_VERSION })) ids.push(answer.id);
    expect(ids).toEqual([RUN, RUN_2]);
    expect(calls[1]?.url).toBe(`${BASE}/forms/families/${FORM_2}/responses?version_id=${FORM_VERSION}&page=2`);
  });

  it('reads need conversations:read, writes conversations:write and the send conversations:send', () => {
    const permission = (method: string, path: string) => routes.find((r) => r.method === method && r.path === path)?.permission;
    expect(permission('GET', '/api/v1/forms')).toBe('conversations:read');
    expect(permission('POST', '/api/v1/forms/{id}/publish')).toBe('conversations:write');
    expect(permission('POST', '/api/v1/contacts/{contact}/message/form')).toBe('conversations:send');
  });
});
