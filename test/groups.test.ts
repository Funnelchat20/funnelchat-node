/**
 * Groups as production has them on 04-11 (communities v2.35.5): a message to a group is a queued
 * group action, a send that is never retried automatically, followed by its action and by
 * `group_action.completed`; the participant events and `workspace_id`, which every event carries.
 */
import { describe, expect, it } from 'vitest';
import {
  Funnelchat,
  GROUP_ACTION_ERROR_CODES,
  PermissionDeniedError,
  RateLimitError,
  UnprocessableEntityError,
  constructEvent,
  routes,
  webhookEvents,
} from '../src/index.js';
import { isSendRequest } from '../src/core/retry.js';
import { SECRET, sign } from './fixtures/portal-signature-vectors.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';

const client = (fetchImpl: typeof fetch, maxRetries = 2) => new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, maxRetries });
const BASE = 'https://api.funnelchat.com/api/v1';
const GROUP = '120363000000000001@g.us';
const ACTION = '9b2f0a8e-1c3d-4e5f-8a7b-6c5d4e3f2a10';

const signed = (event: object) => {
  const raw = Buffer.from(JSON.stringify(event), 'utf8');
  return constructEvent(raw, sign(raw, SECRET, Math.floor(Date.now() / 1000)), SECRET);
};

describe('a message to a group', () => {
  it('posts the body to the group by its uid and resolves to the queued action', async () => {
    const { fetch, calls } = mockFetch({ status: 202, body: { action_id: ACTION, status: 'queued' } });
    const accepted = await client(fetch).groups.sendMessage(GROUP, { device_id: 4, type: 'text', text: 'Hi everyone' });
    expect(accepted).toEqual({ action_id: ACTION, status: 'queued' });
    expect(calls[0]?.method).toBe('POST');
    expect(calls[0]?.url).toBe(`${BASE}/groups/120363000000000001%40g.us/messages`);
    expect(JSON.parse(calls[0]?.body ?? '')).toEqual({ device_id: 4, type: 'text', text: 'Hi everyone' });
  });

  it('reads the action with the action_id', async () => {
    const action = {
      action_id: ACTION,
      type: 'send_message',
      status: 'completed',
      device_id: 4,
      group: { uid: GROUP, name: 'Example group' },
      result: { message: { uid: '3EB0C767D26A1D4E5F6A' } },
      reason: null,
      created_at: '2026-11-04T12:00:00Z',
      started_at: '2026-11-04T12:00:01Z',
      completed_at: '2026-11-04T12:00:03Z',
      failed_at: null,
    };
    const { fetch, calls } = mockFetch({ status: 200, body: { data: action } });
    const { data } = await client(fetch).groups.retrieveAction(ACTION);
    expect(calls[0]?.url).toBe(`${BASE}/groups/actions/${ACTION}`);
    expect(data.result?.message?.uid).toBe('3EB0C767D26A1D4E5F6A');
  });

  it('is a send: the route table carries Send and it is never retried on its own', async () => {
    const route = routes.find((r) => r.method === 'POST' && r.path === '/api/v1/groups/{group}/messages');
    expect(route).toMatchObject({ domain: 'communities', permission: 'communities:send', pending: true });
    expect(isSendRequest('POST', `/api/v1/groups/${encodeURIComponent(GROUP)}/messages`)).toBe(true);
    expect(isSendRequest('GET', `/api/v1/groups/${encodeURIComponent(GROUP)}/messages`)).toBe(false);

    const { fetch, calls } = mockFetch({ status: 503, body: { error: 'gate_unavailable', message: '…' }, headers: { 'retry-after': '0' } });
    await expect(client(fetch).groups.sendMessage(GROUP, { device_id: 4, type: 'text', text: 'x' })).rejects.toBeDefined();
    expect(calls).toHaveLength(1);
  });

  it('too_many_pending_actions is not retried even with retrySend', async () => {
    const { fetch, calls } = mockFetch(
      { status: 429, body: { error: 'too_many_pending_actions', message: '…', max: 50 } },
      { status: 202, body: { action_id: ACTION, status: 'queued' } },
    );
    const error = await client(fetch)
      .groups.sendMessage(GROUP, { device_id: 4, type: 'text', text: 'x' }, { retrySend: true })
      .catch((e: unknown) => e);
    expect(error).toBeInstanceOf(RateLimitError);
    expect(calls).toHaveLength(1);
  });

  it.each([
    [403, 'permission_denied', PermissionDeniedError],
    [422, 'device_not_group_admin', UnprocessableEntityError],
    [422, 'window_closed', UnprocessableEntityError],
  ])('%i %s arrives as a typed error', async (status, code, Class) => {
    const { fetch } = mockFetch({ status, body: { error: code, message: '…' } });
    const error = await client(fetch)
      .groups.sendMessage(GROUP, { device_id: 4, type: 'image', media_url: 'https://files.example.com/a.jpg', caption: 'Look' })
      .catch((e: unknown) => e);
    expect(error).toBeInstanceOf(Class);
    expect(error).toMatchObject({ status, code });
  });

  it('lists the codes of a message to a group with their status', () => {
    expect(GROUP_ACTION_ERROR_CODES).toMatchObject({ group_not_found: 404, action_not_found: 404, device_not_group_admin: 422, too_many_pending_actions: 429 });
  });
});

describe('group events and the workspace of every event', () => {
  it('knows group_action.completed and the participant events', () => {
    const types = webhookEvents.map((e) => e.type);
    expect(types).toEqual(expect.arrayContaining(['group_action.completed', 'group_participant.joined', 'group_participant.left']));
  });

  it('a participant of a group without a campaign, with the workspace of the subscription', () => {
    const event = signed({
      id: 'evt_0f8e4b526c1d4c7a9a3e2b5d',
      type: 'group_participant.joined',
      version: 1,
      occurred_at: '2026-11-04T12:00:00Z',
      data: {
        group: { uid: GROUP, name: 'Example group' },
        campaign: null,
        participant: { identity: '5491100000000', identity_type: 'phone', name: null },
        workspace_id: 37,
      },
    });
    if (event.type !== 'group_participant.joined') throw new Error(event.type);
    expect(event.data.campaign).toBeNull();
    expect(event.data.participant.identity).toBe('5491100000000');
    expect(event.data.workspace_id).toBe(37);
  });

  it('a received file without caption: text null, the file in media', () => {
    const event = signed({
      id: 'evt_1',
      type: 'message.received',
      version: 1,
      occurred_at: '2026-11-04T12:00:00Z',
      data: {
        message: { id: 1001, type: 'image', text: null, media: { file: 'https://files.example.com/a.jpg' } },
        contact: { id: 2001, name: null, phone: '+5491100000000' },
        receiver: { phone: '+5491100000001' },
        device_id: 3,
        workspace_id: 37,
      },
    });
    if (event.type !== 'message.received') throw new Error(event.type);
    expect(event.data.message.text ?? '(no text)').toBe('(no text)');
    expect(event.data.message.media?.file).toBe('https://files.example.com/a.jpg');
    expect(event.data.workspace_id).toBe(37);
  });
});
