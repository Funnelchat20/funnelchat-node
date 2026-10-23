/**
 * End to end against funnelchat-sandbox: creating a QR number with an idempotency key, its QR and
 * the external_reference filter; connect links by QR and by Meta through the sandbox's test page,
 * which connects at once; revoking a link; and the signed `device.*` webhooks verified by the SDK.
 *
 *   FUNNELCHAT_SANDBOX_URL=http://127.0.0.1:4010 npm run test:e2e
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { type APIError, ConflictError, UnprocessableEntityError, type WebhookEventOf } from '../../src/index.js';
import { type Receiver, SANDBOX_URL, control, sandboxClient, startReceiver } from './sandbox.js';

const DEVICE_EVENTS = ['device.connected', 'device.disconnected', 'device.deleted', 'device.health_changed'];

describe.skipIf(!SANDBOX_URL)('numbers against the sandbox', () => {
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
    const subscription = await funnelchat.webhooks.create({ url: receiver.url, events: DEVICE_EVENTS, description: 'e2e funnelchat-node numbers' });
    receiver.setSecret(subscription.secret);
  });

  /** Opens the test page of a link the way a customer would, without a key, and returns where it sends them. */
  async function openPage(url: string, query = ''): Promise<URL | null> {
    const response = await fetch(`${url}${query}`, { redirect: 'manual' });
    const location = response.headers.get('location');
    return location ? new URL(location) : null;
  }

  it('a QR number is created once per idempotency key, shows its QR, connects and is deleted', async () => {
    const body = { connection: 'qr', alias: 'Sales', external_reference: 'customer-81' } as const;
    const { data: device } = await funnelchat.devices.create(body, { idempotencyKey: 'e2e-qr-81' });
    expect(device).toMatchObject({ connection: 'qr', external_reference: 'customer-81' });
    expect(Boolean(device.connected)).toBe(false);

    const again = await funnelchat.devices.create(body, { idempotencyKey: 'e2e-qr-81' });
    expect(again.data.id).toBe(device.id);
    const mismatch = (await funnelchat.devices.create({ ...body, alias: 'Other' }, { idempotencyKey: 'e2e-qr-81' }).catch((e: unknown) => e)) as APIError;
    expect(mismatch).toBeInstanceOf(UnprocessableEntityError);
    expect(mismatch.code).toBe('idempotency_key_mismatch');

    const { data: qr } = await funnelchat.devices.qr(device.id);
    expect(qr.connected).toBe(false);
    expect(qr.qr_code).toMatch(/^data:image\/png;base64,/);
    expect(qr.expires_in).toBeGreaterThan(0);

    const ids: number[] = [];
    for await (const number of funnelchat.devices.list({ external_reference: 'customer-81' })) ids.push(number.id);
    expect(ids).toEqual([device.id]);

    await control('POST', `/devices/${device.id}/connect`);
    const connected = (await receiver.waitFor(
      (event) => event.type === 'device.connected' && event.data.device.id === device.id,
    )) as WebhookEventOf<'device.connected'>;
    expect(connected.data.device).toMatchObject({ connection: 'qr', external_reference: 'customer-81' });
    expect(connected.data.connect_link_id).toBeNull();

    await funnelchat.request('DELETE', '/api/v1/devices/{device}', { path: { device: device.id } });
    const deleted = (await receiver.waitFor(
      (event) => event.type === 'device.deleted' && event.data.device.id === device.id,
    )) as WebhookEventOf<'device.deleted'>;
    expect(deleted.data.device.external_reference).toBe('customer-81');
    expect(receiver.rejected).toEqual([]);
  });

  it('a QR link connects on its page, returns to return_url and says so by webhook and by get', async () => {
    const { data: link } = await funnelchat.connectLinks.create(
      { type: 'qr', external_reference: 'customer-82', return_url: 'https://example.com/done' },
      { idempotencyKey: 'e2e-link-82' },
    );
    expect(link).toMatchObject({ type: 'qr', status: 'pending', device_id: null, external_reference: 'customer-82' });
    expect(link.url).toMatch(/\/connect\/[A-Za-z0-9_-]+$/);

    const back = await openPage(link.url);
    expect(back?.origin + (back?.pathname ?? '')).toBe('https://example.com/done');
    expect(back?.searchParams.get('status')).toBe('completed');
    expect(back?.searchParams.get('connect_link_id')).toBe(String(link.id));

    const { data: done } = await funnelchat.connectLinks.get(link.id);
    expect(done.status).toBe('completed');
    expect(done.device_id).not.toBeNull();
    expect(done.url ?? null).toBeNull();

    const connected = (await receiver.waitFor(
      (event) => event.type === 'device.connected' && event.data.connect_link_id === link.id,
    )) as WebhookEventOf<'device.connected'>;
    expect(connected.data.device).toMatchObject({ id: done.device_id, connection: 'qr', external_reference: 'customer-82' });
  });

  it('a Meta link lets the customer choose coexistence', async () => {
    const { data: link } = await funnelchat.connectLinks.create({ type: 'meta', allowed_connection_types: ['coexistence', 'dedicated'] });
    await openPage(link.url, '?connection=coexistence');
    const connected = (await receiver.waitFor(
      (event) => event.type === 'device.connected' && event.data.connect_link_id === link.id,
    )) as WebhookEventOf<'device.connected'>;
    expect(connected.data.device.connection).toBe('coexistence');
  });

  it('a pending link is revoked once, and is listed by its status', async () => {
    const { data: link } = await funnelchat.connectLinks.create({ type: 'qr', external_reference: 'customer-83' });
    const pending = await funnelchat.connectLinks.list({ status: 'pending', external_reference: 'customer-83' });
    expect(pending.data.map((l) => l.id)).toEqual([link.id]);

    await funnelchat.connectLinks.revoke(link.id);
    expect((await funnelchat.connectLinks.get(link.id)).data.status).toBe('revoked');
    const again = await funnelchat.connectLinks.revoke(link.id).catch((e: unknown) => e);
    expect(again).toBeInstanceOf(ConflictError);
  });
});
