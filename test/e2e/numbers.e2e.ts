/**
 * End to end against funnelchat-sandbox: creating a QR number with an idempotency key, its QR and
 * the external_reference filter; connect links by QR and by Meta through the sandbox's test page,
 * which does not use the link when opened and connects at once on its button (or fails); revoking a link; disconnections, health and the quota of the
 * plan through the sandbox's control routes; and the signed `device.*` webhooks verified by the SDK. The Meta sign-up by link
 * is off in the sandbox by default, like production: the tests of Meta links turn it on first.
 *
 *   FUNNELCHAT_SANDBOX_URL=http://127.0.0.1:4010 npm run test:e2e
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import {
  type APIError,
  ConflictError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
  type WebhookEventOf,
  isNumberQuotaError,
} from '../../src/index.js';
import { type Receiver, SANDBOX_URL, SEED, control, sandboxClient, startReceiver } from './sandbox.js';

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
    receiver.clear();
    const subscription = await funnelchat.webhooks.create({ url: receiver.url, events: DEVICE_EVENTS, description: 'e2e funnelchat-node numbers' });
    receiver.setSecret(subscription.secret);
  });

  /** Turns on the Meta sign-up by link, off by default like production (`503 meta_connect_disabled`). */
  async function enableMeta(): Promise<void> {
    await control('POST', '/numbers', { meta_connect: true });
  }

  /**
   * Opens the test page of a link the way a customer would, without a key, then presses its button
   * (`start`, or `complete` for the end of the Meta sign-up), and returns where it sends them.
   */
  async function openPage(url: string, query = '', step: 'start' | 'complete' = 'start'): Promise<URL | null> {
    expect((await fetch(url, { redirect: 'manual' })).status).toBe(200);
    const response = await fetch(`${url}/${step}${query}`, { method: 'POST', redirect: 'manual' });
    const location = response.headers.get('location');
    return location ? new URL(location) : null;
  }

  it('a QR number is created once per idempotency key, shows its QR, connects and is deleted', async () => {
    const body = { connection: 'qr', alias: 'Sales', country: 'br', external_reference: 'customer-81' } as const;
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
    expect(qr.expires_in).toBe(5); // a QR is asked for every 5 seconds and scanned at once

    const ids: number[] = [];
    for await (const number of funnelchat.devices.list({ external_reference: 'customer-81' })) ids.push(number.id);
    expect(ids).toEqual([device.id]);

    // At most one QR number waiting to be scanned: another create points at it.
    const pending = (await funnelchat.devices.create({ connection: 'qr' }).catch((e: unknown) => e)) as APIError;
    expect(pending).toBeInstanceOf(ConflictError);
    expect(pending.code).toBe('pending_number_exists');
    expect(pending.body).toMatchObject({ device_id: device.id });

    await control('POST', `/devices/${device.id}/connect`);
    const connected = (await receiver.waitFor(
      (event) => event.type === 'device.connected' && event.data.device.id === device.id,
    )) as WebhookEventOf<'device.connected'>;
    expect(connected.data.device).toMatchObject({ connection: 'qr', external_reference: 'customer-81' });
    expect(connected.data.connect_link_id).toBeNull();

    await funnelchat.devices.delete(device.id);
    const deleted = (await receiver.waitFor(
      (event) => event.type === 'device.deleted' && event.data.device.id === device.id,
    )) as WebhookEventOf<'device.deleted'>;
    expect(deleted.data.device.external_reference).toBe('customer-81');
    expect(receiver.rejected).toEqual([]);
  });

  it('a QR link connects on its page, returns to return_url and says so by webhook and by get', async () => {
    const { data: link } = await funnelchat.connectLinks.create(
      { type: 'qr', country: 'BR', external_reference: 'customer-82', return_url: 'https://example.com/done' },
      { idempotencyKey: 'e2e-link-82' },
    );
    expect(link).toMatchObject({ type: 'qr', status: 'pending', device_id: null, country: 'br', external_reference: 'customer-82' });
    expect(link.url).toMatch(/\/connect\/[A-Za-z0-9_-]+$/);

    // Opening the page (a messenger's preview, for example) does not use the link.
    await fetch(link.url, { redirect: 'manual' });
    expect((await funnelchat.connectLinks.get(link.id)).data.status).toBe('pending');

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

    // Every device event carries the link that last connected the number.
    await funnelchat.devices.delete(done.device_id!);
    const deleted = (await receiver.waitFor(
      (event) => event.type === 'device.deleted' && event.data.device.id === done.device_id,
    )) as WebhookEventOf<'device.deleted'>;
    expect(deleted.data.connect_link_id).toBe(link.id);
  });

  it('a QR link takes no country when it reconnects, and a Meta link none at all: 422 invalid_request', async () => {
    await enableMeta();
    const reconnect = (await funnelchat.connectLinks.create({ type: 'qr', country: 'br', device_id: SEED.qrDevice }).catch((e: unknown) => e)) as APIError;
    expect(reconnect).toBeInstanceOf(UnprocessableEntityError);
    expect(reconnect.code).toBe('invalid_request');
    const meta = (await funnelchat.connectLinks
      // @ts-expect-error country only goes with a QR link; the API refuses it too
      .create({ type: 'meta', allowed_connection_types: ['dedicated'], country: 'br' })
      .catch((e: unknown) => e)) as APIError;
    expect(meta.code).toBe('invalid_request');
    const { data: plain } = await funnelchat.connectLinks.create({ type: 'qr' });
    expect(plain.country).toBeNull();
  });

  it('a Meta link lets the customer choose coexistence', async () => {
    await enableMeta();
    const { data: link } = await funnelchat.connectLinks.create({ type: 'meta', allowed_connection_types: ['coexistence', 'dedicated'] });
    await openPage(link.url, '?connection=coexistence', 'complete');
    const connected = (await receiver.waitFor(
      (event) => event.type === 'device.connected' && event.data.connect_link_id === link.id,
    )) as WebhookEventOf<'device.connected'>;
    expect(connected.data.device.connection).toBe('coexistence');
  });

  it('a Meta link survives failures of Meta until the fifth, which ends it failed', async () => {
    await enableMeta();
    const { data: link } = await funnelchat.connectLinks.create({ type: 'meta', allowed_connection_types: ['coexistence'] });
    for (let attempt = 1; attempt <= 5; attempt++) {
      await fetch(`${link.url}/complete?outcome=failed&error_code=meta_error`, { method: 'POST', redirect: 'manual', headers: { Accept: 'application/json' } });
      const { data } = await funnelchat.connectLinks.get(link.id);
      if (attempt < 5) expect(data).toMatchObject({ status: 'pending', error_code: null });
      else expect(data).toMatchObject({ status: 'failed', error_code: 'meta_error' });
    }
  });

  it('a pool number must be dedicated and cannot reconnect: 422 invalid_request', async () => {
    await enableMeta();
    const coexistence = (await funnelchat.connectLinks
      .create({ type: 'meta', allowed_connection_types: ['coexistence'], provision_us_number: true })
      .catch((e: unknown) => e)) as APIError;
    expect(coexistence).toBeInstanceOf(UnprocessableEntityError);
    expect(coexistence.code).toBe('invalid_request');
    expect(coexistence.errors).toBeDefined();

    const reconnect = (await funnelchat.connectLinks
      .create({ type: 'meta', allowed_connection_types: ['dedicated'], provision_us_number: true, device_id: SEED.officialDevice })
      .catch((e: unknown) => e)) as APIError;
    expect(reconnect.code).toBe('invalid_request');

    const { data: pool } = await funnelchat.connectLinks.create({ type: 'meta', allowed_connection_types: ['dedicated'], provision_us_number: true });
    expect(pool.provision_us_number).toBe(true);
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

  it('a link that fails on its page says why, by return_url and by get', async () => {
    const { data: link } = await funnelchat.connectLinks.create({ type: 'qr', return_url: 'https://example.com/done' });
    const back = await openPage(link.url, '?outcome=failed&error_code=qr_timeout');
    expect(back?.searchParams.get('status')).toBe('failed');
    expect(back?.searchParams.get('error_code')).toBe('qr_timeout');
    const { data: failed } = await funnelchat.connectLinks.get(link.id);
    expect(failed).toMatchObject({ status: 'failed', error_code: 'qr_timeout' });
  });

  it('an official number disconnected from the panel says why, and its health changes only once per state', async () => {
    await control('POST', `/devices/${SEED.officialDevice}/disconnect`, { reason: 'disconnected_by_user' });
    const disconnected = (await receiver.waitFor(
      (event) => event.type === 'device.disconnected' && event.data.device.id === SEED.officialDevice,
    )) as WebhookEventOf<'device.disconnected'>;
    expect(disconnected.data.reason).toBe('disconnected_by_user');
    expect(disconnected.data).toHaveProperty('connect_link_id');
    expect(['coexistence', 'dedicated']).toContain(disconnected.data.device.connection);

    await control('POST', `/devices/${SEED.officialDevice}/health`, { state: 'limited' });
    const changed = (await receiver.waitFor(
      (event) => event.type === 'device.health_changed' && event.data.device.id === SEED.officialDevice,
    )) as WebhookEventOf<'device.health_changed'>;
    expect(changed.data.state).toBe('limited');
    expect(changed.data.previous_state).not.toBe('limited');
    const same = (await control('POST', `/devices/${SEED.officialDevice}/health`, { state: 'limited' })) as { event: unknown };
    expect(same.event).toBeNull();
    expect(receiver.rejected).toEqual([]);
  });

  it('the quota of the plan and the Meta switch, off by default, refuse with their codes', async () => {
    const off = (await funnelchat.connectLinks.create({ type: 'meta', allowed_connection_types: ['dedicated'] }).catch((e: unknown) => e)) as APIError;
    expect(off).toBeInstanceOf(InternalServerError);
    expect(off).toMatchObject({ status: 503, code: 'meta_connect_disabled' });

    const { in_use: inUse } = (await control('GET', '/numbers')) as { in_use: number };
    await control('POST', '/numbers', { limit: inUse });
    const full = (await funnelchat.devices.create({ connection: 'qr' }).catch((e: unknown) => e)) as APIError;
    expect(full).toBeInstanceOf(PermissionDeniedError);
    expect(full.code).toBe('number_limit_reached');
    expect(isNumberQuotaError(full.code)).toBe(true);

    await control('POST', '/numbers', { limit: inUse + 5, included: false });
    const notIncluded = (await funnelchat.connectLinks.create({ type: 'qr' }).catch((e: unknown) => e)) as APIError;
    expect(notIncluded.code).toBe('numbers_not_included');

    await control('POST', '/numbers', { included: true });
    const qr = await funnelchat.connectLinks.create({ type: 'qr' });
    expect(qr.data.status).toBe('pending');
  });
});
