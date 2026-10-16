/**
 * What each send answers (pending of the spec: conversations feat/envio-devuelve-id @ d3ac33994,
 * a local branch; the shapes may change) and the message lookup by id.
 */
import { describe, expect, it } from 'vitest';
import { type APIError, Funnelchat, InternalServerError, routes, type components } from '../src/index.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';

type PublicMessage = components['schemas']['PendingPublicMessage'];

const client = (fetchImpl: typeof fetch) => new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl });

const queued: PublicMessage = {
  id: 1002,
  contact_id: 2001,
  device_id: 3,
  direction: 'outbound',
  type: 'text',
  status: 'queued',
  error: null,
  client_reference: 'pedido-8841',
  created_at: '2026-10-16T12:00:00Z',
  updated_at: '2026-10-16T12:00:00Z',
};

describe('sends return what the API answers', () => {
  it('messages.send resolves to { message } with the id of the registered message', async () => {
    const { fetch } = mockFetch({ status: 200, body: { message: queued } });
    const result = await client(fetch).messages.send(2001, { device_id: 3, phone: '5491100000000', text: 'Hola', client_reference: 'pedido-8841' });
    expect(result?.message?.id).toBe(1002);
    expect(result?.message?.status).toBe('queued');
    expect(result?.message?.client_reference).toBe('pedido-8841');
  });

  it('messages.send resolves to null while the API answers 204', async () => {
    const { fetch } = mockFetch({ status: 204 });
    await expect(client(fetch).messages.send(2001, { device_id: 3, phone: '5491100000000', text: 'Hola' })).resolves.toBeNull();
  });

  it('messages.sendContactCard resolves to { messages }, one entry per card', async () => {
    const mark = { ...queued, id: null, type: 'contact', status: 'queued', created_at: null, updated_at: null };
    const { fetch } = mockFetch({ status: 200, body: { messages: [{ ...queued, type: 'contact' }, mark] } });
    const result = await client(fetch).messages.sendContactCard(2001, { device_id: 3, contact_card_ids: [7, 8] });
    expect(result?.messages).toHaveLength(2);
    expect(result?.messages[0]?.id).toBe(1002);
    expect(result?.messages[1]?.id).toBeNull();
  });

  it('messages.forward resolves to one item per destination, each with its message', async () => {
    const { fetch } = mockFetch({
      status: 200,
      body: [
        { contact_id: 2001, mode: 'native', status: 'queued', reason: null, message: queued },
        { contact_id: 2002, mode: 'internal', status: 'blocked', reason: 'window_closed', message: null },
      ],
    });
    const result = await client(fetch).messages.forward(2001, 99, { targets: [{ contact_id: 2001, device_id: 3 }, { contact_id: 2002, device_id: 3 }] });
    expect(result.map((item) => item.message?.id ?? null)).toEqual([1002, null]);
    expect(result[1]?.status).toBe('blocked');
  });

  it('templates.send resolves to { message }', async () => {
    const { fetch } = mockFetch({ status: 200, body: { message: { ...queued, type: 'template' } } });
    const result = await client(fetch).templates.send(3, '45', { phone: '5491100000000', contact_id: 2001 });
    expect(result.message?.type).toBe('template');
  });

  it('a template Meta rejected is a 502 with its body, and is not retried', async () => {
    const body = { error: 'Failed to send template', error_code: '132000', placeholders: ['{{1}}'], message: { ...queued, status: 'failed' } };
    const { fetch, calls } = mockFetch({ status: 502, body });
    const error = await client(fetch)
      .templates.send(3, '45', { phone: '5491100000000', contact_id: 2001 })
      .catch((e: unknown) => e);
    expect(error).toBeInstanceOf(InternalServerError);
    expect((error as APIError).status).toBe(502);
    expect((error as APIError).body).toEqual(body);
    expect(calls).toHaveLength(1);
  });
});

describe('messages.get', () => {
  it('reads one message by contact and id', async () => {
    const { fetch, calls } = mockFetch({ status: 200, body: { ...queued, status: 'delivered' } });
    const message = await client(fetch).messages.get(2001, 1002);
    expect(calls[0]?.method).toBe('GET');
    expect(calls[0]?.url).toBe('https://api.funnelchat.com/api/v1/contacts/2001/messages/1002');
    expect(message.status).toBe('delivered');
  });

  it('is in the route table, flagged as pending of the spec', () => {
    expect(routes.find((r) => r.method === 'GET' && r.path === '/api/v1/contacts/{contact}/messages/{message}')).toMatchObject({
      domain: 'conversations',
      permission: 'conversations:read',
      pending: true,
    });
  });
});
