/**
 * The forms (conversations v1.18.10) and the group actions (communities v2.34.52): each method
 * calls its route, and the route table carries the permission each one needs.
 */
import { describe, expect, it } from 'vitest';
import { type APIError, Funnelchat, GROUP_ACTION_ERROR_CODES, PermissionDeniedError, routes } from '../src/index.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';

const client = (fetchImpl: typeof fetch) => new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, maxRetries: 0 });
const BASE = 'https://api.funnelchat.com/api/v1';
const GROUP = '120363000000000001@g.us';
const accepted = { action_id: '9b2f0a8e-1c3d-4e5f-8a7b-6c5d4e3f2a10', status: 'queued' };

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

describe('group actions', () => {
  it('answer 202 with the action id, on the uid of the group', async () => {
    const { fetch, calls } = mockFetch({ status: 202, body: accepted });
    const result = await client(fetch).groups.addParticipants(GROUP, { device_id: 4, phones: ['5491100000001'] });
    expect(result).toEqual(accepted);
    expect(calls[0]?.method).toBe('POST');
    expect(calls[0]?.url).toBe(`${BASE}/groups/120363000000000001%40g.us/participants`);
  });

  it('call each route with its method', async () => {
    const replies = Array.from({ length: 16 }, () => ({ status: 202, body: accepted }));
    const { fetch, calls } = mockFetch(...replies);
    const groups = client(fetch).groups;
    const phones = { device_id: 4, phones: ['5491100000001'] };
    await groups.create({ device_id: 4, name: 'Nuevo', participants: ['5491100000001'] });
    await groups.action(accepted.action_id);
    await groups.removeParticipants(GROUP, phones);
    await groups.promoteAdmins(GROUP, phones);
    await groups.demoteAdmins(GROUP, phones);
    await groups.updateName(GROUP, { device_id: 4, name: 'Otro' });
    await groups.updateDescription(GROUP, { device_id: 4, description: null });
    await groups.updatePhoto(GROUP, { device_id: 4, photo_url: 'https://example.com/a.png' });
    await groups.updateSettings(GROUP, { device_id: 4, members_can_send_messages: false });
    await groups.renewInviteLink(GROUP, { device_id: 4 });
    await groups.inviteLink(GROUP, { device_id: 4 });
    await groups.sendMessage(GROUP, { device_id: 4, type: 'text', text: 'Hola' });
    await groups.listJoinRequests(GROUP, { device_id: 3 });
    await groups.approveJoinRequests(GROUP, phones);
    await groups.rejectJoinRequests(GROUP, phones);
    const g = `/groups/${encodeURIComponent(GROUP)}`;
    expect(calls.map((c) => `${c.method} ${c.url.replace(BASE, '')}`)).toEqual([
      'POST /groups',
      `GET /groups/actions/${accepted.action_id}`,
      `POST ${g}/participants/remove`,
      `POST ${g}/admins`,
      `POST ${g}/admins/remove`,
      `PUT ${g}/name`,
      `PUT ${g}/description`,
      `PUT ${g}/photo`,
      `PUT ${g}/settings`,
      `POST ${g}/invite-link/renew`,
      `GET ${g}/invite-link/live?device_id=4`,
      `POST ${g}/messages`,
      `GET ${g}/join-requests?device_id=3`,
      `POST ${g}/join-requests/approve`,
      `POST ${g}/join-requests/reject`,
    ]);
  });

  it('while they are off, a key gets 403 route_not_available', async () => {
    const { fetch } = mockFetch({ status: 403, body: { error: 'route_not_available', message: 'This operation is not available.' } });
    const error = (await client(fetch).groups.create({ device_id: 4, name: 'Nuevo' }).catch((e: unknown) => e)) as APIError;
    expect(error).toBeInstanceOf(PermissionDeniedError);
    expect(error.code).toBe('route_not_available');
  });

  it('a rejection carries its code and its extra fields', async () => {
    const { fetch } = mockFetch({ status: 422, body: { error: 'provider_unsupported', message: 'x', provider: 'official' } });
    const error = (await client(fetch).groups.updatePhoto(GROUP, { device_id: 3, photo_url: 'https://example.com/a.png' }).catch((e: unknown) => e)) as APIError;
    expect(error.code).toBe('provider_unsupported');
    expect(GROUP_ACTION_ERROR_CODES.provider_unsupported).toBe(422);
    expect(error.body).toMatchObject({ provider: 'official' });
  });

  it('writes need communities:operate, sending communities:send and reads communities:read', () => {
    const permission = (method: string, path: string) => routes.find((r) => r.method === method && r.path === path)?.permission;
    expect(permission('POST', '/api/v1/groups')).toBe('communities:operate');
    expect(permission('POST', '/api/v1/groups/{group}/join-requests/approve')).toBe('communities:operate');
    expect(permission('POST', '/api/v1/groups/{group}/messages')).toBe('communities:send');
    expect(permission('GET', '/api/v1/groups/actions/{action}')).toBe('communities:read');
  });
});
