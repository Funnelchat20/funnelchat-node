/**
 * What each send answers (conversations v1.18.10: Message/Support/ApiKeySendResponse.php) and the
 * message lookup by id.
 */
import { describe, expect, it } from 'vitest';
import { type APIError, Funnelchat, UnprocessableEntityError, UnsupportedMediaTypeError, routes, type components } from '../src/index.js';
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
  created_at: '2026-10-22T12:00:00Z',
  updated_at: '2026-10-22T12:00:00Z',
};

describe('sends return what the API answers', () => {
  it('messages.send resolves to { message } with the id of the registered message', async () => {
    const { fetch } = mockFetch({ status: 200, body: { message: queued } });
    const result = await client(fetch).messages.send(2001, { device_id: 3, phone: '5491100000000', text: 'Hola', client_reference: 'pedido-8841' });
    expect(result.message.id).toBe(1002);
    expect(result.message.status).toBe('queued');
    expect(result.message.client_reference).toBe('pedido-8841');
  });

  it('sends a file by URL with file_type and file_name', async () => {
    const { fetch, calls } = mockFetch({ status: 200, body: { message: { ...queued, type: 'document' } } });
    await client(fetch).messages.send(2001, {
      device_id: 3,
      phone: '5491100000000',
      file: 'https://files.example.com/download?sig=abc',
      file_type: 'document',
      file_name: 'factura.pdf',
    });
    expect(JSON.parse(calls[0]?.body ?? '{}')).toMatchObject({ file_type: 'document', file_name: 'factura.pdf', contact_id: 2001 });
  });

  it('an unsupported extension without file_type is a 415', async () => {
    const { fetch } = mockFetch({ status: 415, body: { error: 'Unsupported file type: php', supported_file_types: ['jpg', 'pdf'] } });
    const error = await client(fetch)
      .messages.send(2001, { device_id: 3, phone: '5491100000000', file: 'https://example.com/x.php' })
      .catch((e: unknown) => e);
    expect(error).toBeInstanceOf(UnsupportedMediaTypeError);
    expect((error as APIError).body).toMatchObject({ supported_file_types: ['jpg', 'pdf'] });
  });

  it('a URL without a known extension and no file_type is a 422 on errors.file_type', async () => {
    const { fetch } = mockFetch({ status: 422, body: { message: 'Indicá file_type.', errors: { file_type: ['Indicá file_type.'] } } });
    const error = (await client(fetch)
      .messages.send(2001, { device_id: 3, phone: '5491100000000', file: 'https://files.example.com/download?sig=abc' })
      .catch((e: unknown) => e)) as APIError;
    expect(error).toBeInstanceOf(UnprocessableEntityError);
    expect(error.errors?.file_type).toEqual(['Indicá file_type.']);
  });

  it('messages.sendDirect posts to send-message and resolves to { message }', async () => {
    const { fetch, calls } = mockFetch({ status: 200, body: { message: queued } });
    const result = await client(fetch).messages.sendDirect({ device_id: 3, contact_id: 2001, text: 'Hola' });
    expect(calls[0]?.url).toBe('https://api.funnelchat.com/api/v1/message/send-message');
    expect(result.message.id).toBe(1002);
  });

  it('messages.sendForm sends a form by its family id and resolves to { message }', async () => {
    const { fetch, calls } = mockFetch({ status: 200, body: { message: { ...queued, type: 'whatsapp_form' } } });
    const result = await client(fetch).messages.sendForm(2001, { form_id: 12, device_id: 3, client_reference: 'encuesta-1' });
    expect(calls[0]?.method).toBe('POST');
    expect(calls[0]?.url).toBe('https://api.funnelchat.com/api/v1/contacts/2001/message/form');
    expect(result.message.type).toBe('whatsapp_form');
  });

  it('messages.sendContactCard resolves to { messages }, one message per card', async () => {
    const { fetch } = mockFetch({ status: 200, body: { messages: [{ ...queued, type: 'contact' }, { ...queued, id: 1003, type: 'contact' }] } });
    const result = await client(fetch).messages.sendContactCard(2001, { device_id: 3, contact_card_ids: [7, 8] });
    expect(result.messages.map((m) => m.id)).toEqual([1002, 1003]);
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

  it('a template variable without its field is a 422 with placeholders, and is not retried', async () => {
    const body = { error: 'template_unresolved_placeholder', message: 'x', placeholders: ['{{campo}}'], count: 1 };
    const { fetch, calls } = mockFetch({ status: 422, body });
    const error = await client(fetch)
      .templates.send(3, '45', { phone: '5491100000000', contact_id: 2001 })
      .catch((e: unknown) => e);
    expect(error).toBeInstanceOf(UnprocessableEntityError);
    expect((error as APIError).code).toBe('template_unresolved_placeholder');
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

  it('is in the route table, flagged as pending of the spec (the snapshot does not have it yet)', () => {
    expect(routes.find((r) => r.method === 'GET' && r.path === '/api/v1/contacts/{contact}/messages/{message}')).toMatchObject({
      domain: 'conversations',
      permission: 'conversations:read',
      pending: true,
    });
  });
});
