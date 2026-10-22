/**
 * End to end against funnelchat-sandbox: the send answers 200 with the queued message, the signed
 * `message.status_changed` arrives and verifies with the SDK, the message reads back by id, every
 * response carries `X-Request-Id`, and the send rules arrive as typed errors.
 *
 *   FUNNELCHAT_SANDBOX_URL=http://127.0.0.1:4010 npm run test:e2e
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { type APIError, RateLimitError, UnprocessableEntityError, type WebhookEventOf, isSendRuleError } from '../../src/index.js';
import { type Receiver, SANDBOX_URL, SEED, control, sandboxClient, startReceiver } from './sandbox.js';

describe.skipIf(!SANDBOX_URL)('against the sandbox', () => {
  const funnelchat = sandboxClient();
  let receiver: Receiver;

  beforeAll(async () => {
    receiver = await startReceiver();
  });

  afterAll(async () => {
    await receiver?.close();
  });

  beforeEach(async () => {
    await control('POST', '/reset');
  });

  it('a send answers the queued message, then the signed status changes arrive', async () => {
    const subscription = await funnelchat.webhooks.create({ url: receiver.url, events: ['message.status_changed'], description: 'e2e funnelchat-node' });
    receiver.setSecret(subscription.secret);

    const reference = `e2e-${Date.now()}`;
    const { data, requestId } = await funnelchat.messages
      .send(SEED.contact, { device_id: SEED.qrDevice, phone: SEED.phone, text: 'Hello from the e2e', client_reference: reference })
      .withResponse();
    expect(data.message.status).toBe('queued');
    expect(data.message.client_reference).toBe(reference);
    expect(typeof data.message.id).toBe('number');
    expect(requestId).toMatch(/^[0-9a-f-]{36}$/i);

    const sent = (await receiver.waitFor(
      (event) => event.type === 'message.status_changed' && event.data.message_id === data.message.id && event.data.status === 'sent',
    )) as WebhookEventOf<'message.status_changed'>;
    expect(sent.data.client_reference).toBe(reference);
    expect(sent.data.previous_status).toBeNull();
    expect(receiver.rejected).toEqual([]);

    const read = await funnelchat.messages.get(SEED.contact, data.message.id);
    expect(read.id).toBe(data.message.id);
    expect(['sent', 'delivered', 'read']).toContain(read.status);
  });

  it('a file by URL without extension goes with file_type and file_name', async () => {
    const { message } = await funnelchat.messages.send(SEED.contact, {
      device_id: SEED.qrDevice,
      phone: SEED.phone,
      file: 'https://files.example.com/download?signature=abc123',
      file_type: 'document',
      file_name: 'factura.pdf',
    });
    expect(message.status).toBe('queued');
    expect(message.type).toBe('document');
  });

  it('a send rule arrives as a typed error with its X-Request-Id, and is not retried', async () => {
    const error = (await funnelchat.messages
      .send(SEED.contact, { device_id: SEED.qrDevice, phone: SEED.phone, text: 'x' }, { headers: { 'X-Sandbox-Reject': 'window_closed' }, retrySend: true })
      .catch((e: unknown) => e)) as APIError;
    expect(error).toBeInstanceOf(UnprocessableEntityError);
    expect(error.code).toBe('window_closed');
    expect(isSendRuleError(error.code)).toBe(true);
    expect(error.requestId).toMatch(/^[0-9a-f-]{36}$/i);
  });

  it('rate_limited brings retryAfter', async () => {
    const error = (await funnelchat.messages
      .send(SEED.contact, { device_id: SEED.qrDevice, phone: SEED.phone, text: 'x' }, { headers: { 'X-Sandbox-Reject': 'rate_limited' } })
      .catch((e: unknown) => e)) as APIError;
    expect(error).toBeInstanceOf(RateLimitError);
    expect(error.retryAfter).toBeGreaterThan(0);
  });

  it('a route that does not exist is 404 route_not_found, with its X-Request-Id', async () => {
    const error = (await funnelchat.request('GET', '/api/v1/no-existe').catch((e: unknown) => e)) as APIError;
    expect(error.status).toBe(404);
    expect(error.code).toBe('route_not_found');
    expect(error.requestId).toMatch(/^[0-9a-f-]{36}$/i);
  });

  it('a page of a list carries its X-Request-Id', async () => {
    const page = await funnelchat.devices.list();
    expect(page.data.length).toBeGreaterThan(0);
    expect(page.requestId).toMatch(/^[0-9a-f-]{36}$/i);
  });
});
