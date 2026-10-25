/**
 * Creating and connecting numbers (contract 1022-alta-de-numeros, in production except Meta links): each
 * method calls its route, the creates send `Idempotency-Key`, the route table carries the
 * permissions, and the new error codes are not retried.
 */
import { describe, expect, it } from 'vitest';
import {
  ConflictError,
  Funnelchat,
  UnprocessableEntityError,
  IDEMPOTENCY_ERROR_CODES,
  InternalServerError,
  NUMBER_ERROR_CODES,
  PermissionDeniedError,
  RateLimitError,
  constructEvent,
  isNumberQuotaError,
  routes,
  webhookEvents,
} from '../src/index.js';
import { SECRET, sign } from './fixtures/portal-signature-vectors.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';

const client = (fetchImpl: typeof fetch, maxRetries = 0) => new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, maxRetries });
const BASE = 'https://api.funnelchat.com/api/v1';

describe('numbers and connect links', () => {
  it('calls each route with its method', async () => {
    const replies = Array.from({ length: 8 }, () => ({ status: 200, body: { data: [] } }));
    const { fetch, calls } = mockFetch(...replies.slice(0, 7), { status: 204 });
    const funnelchat = client(fetch);
    await funnelchat.devices.list({ external_reference: 'customer-81' });
    await funnelchat.devices.create({ connection: 'qr', alias: 'Sales', country: 'br', external_reference: 'customer-81' });
    await funnelchat.devices.qr(9);
    await funnelchat.devices.update(9, { external_reference: 'customer-82' });
    await funnelchat.connectLinks.create({ type: 'meta', allowed_connection_types: ['coexistence'] });
    await funnelchat.connectLinks.get(31);
    await funnelchat.connectLinks.list({ status: 'pending', external_reference: 'customer-81' });
    const revoked = await funnelchat.connectLinks.revoke(31);
    expect(calls.map((c) => `${c.method} ${c.url.replace(BASE, '')}`)).toEqual([
      'GET /devices?external_reference=customer-81',
      'POST /devices',
      'GET /devices/9/qr',
      'PUT /devices/9',
      'POST /connect-links',
      'GET /connect-links/31',
      'GET /connect-links?status=pending&external_reference=customer-81',
      'DELETE /connect-links/31',
    ]);
    expect(JSON.parse(calls[1]?.body ?? '')).toEqual({ connection: 'qr', alias: 'Sales', country: 'br', external_reference: 'customer-81' });
    expect(revoked).toBeNull();
  });

  it('keeps the 0.1.2 signature of devices.list, and deletes a number', async () => {
    const { fetch, calls } = mockFetch({ body: { data: [] } }, { body: { data: [] } }, { body: { data: [] } }, { status: 200, body: '' });
    const devices = client(fetch).devices;
    await devices.list({ headers: { 'X-Extra': '1' }, maxRetries: 0 });
    await devices.list({ perPage: 50 }, { headers: { 'X-Extra': '2' } });
    await devices.list();
    const deleted = await devices.delete(9);
    expect(calls.map((c) => `${c.method} ${c.url.replace(BASE, '')}`)).toEqual(['GET /devices', 'GET /devices?perPage=50', 'GET /devices', 'DELETE /devices/9']);
    expect(calls[0]?.headers['x-extra']).toBe('1');
    expect(calls[1]?.headers['x-extra']).toBe('2');
    expect(deleted).toBeNull();
  });

  it('sends Idempotency-Key only when asked, next to the other headers', async () => {
    const { fetch, calls } = mockFetch({ status: 201, body: { data: {} } }, { status: 201, body: { data: {} } }, { status: 201, body: { data: {} } });
    const funnelchat = client(fetch);
    await funnelchat.devices.create({ connection: 'qr' }, { idempotencyKey: 'order-8841', headers: { 'X-Extra': '1' } });
    await funnelchat.connectLinks.create({ type: 'qr', return_url: 'https://example.com/done' }, { idempotencyKey: 'link-8841' });
    await funnelchat.devices.create({ connection: 'qr' });
    expect(calls[0]?.headers['idempotency-key']).toBe('order-8841');
    expect(calls[0]?.headers['x-extra']).toBe('1');
    expect(calls[1]?.headers['idempotency-key']).toBe('link-8841');
    expect(calls[2]?.headers).not.toHaveProperty('idempotency-key');
  });

  it('reads need accounts:read; creating, the QR and revoking need accounts:operate', () => {
    const permission = (method: string, path: string) => routes.find((r) => r.method === method && r.path === path)?.permission;
    expect(permission('POST', '/api/v1/devices')).toBe('accounts:operate');
    expect(permission('GET', '/api/v1/devices/{device}/qr')).toBe('accounts:operate');
    expect(permission('POST', '/api/v1/connect-links')).toBe('accounts:operate');
    expect(permission('DELETE', '/api/v1/connect-links/{link}')).toBe('accounts:operate');
    expect(permission('GET', '/api/v1/connect-links')).toBe('accounts:read');
    expect(permission('GET', '/api/v1/connect-links/{link}')).toBe('accounts:read');
  });

  it('knows the four device events', () => {
    const types = webhookEvents.map((e) => e.type);
    expect(types).toEqual(expect.arrayContaining(['device.connected', 'device.disconnected', 'device.deleted', 'device.health_changed']));
  });

  it('verifies a device event as production sends it today, without the new fields', () => {
    const raw = Buffer.from(
      JSON.stringify({
        id: 'evt_0',
        type: 'device.disconnected',
        created_at: '2026-10-23T12:00:00Z',
        data: { device: { id: 9, name: 'Sales', number: '5491100000000' }, disconnected_at: '2026-10-23T12:00:00Z' },
      }),
      'utf8',
    );
    const event = constructEvent(raw, sign(raw, SECRET, Math.floor(Date.now() / 1000)), SECRET);
    if (event.type !== 'device.disconnected') throw new Error(event.type);
    expect(event.data.reason ?? 'unknown').toBe('unknown');
    expect(event.data.connect_link_id ?? null).toBeNull();
  });

  it('verifies a device.connected that came from a link', () => {
    const body = JSON.stringify({
      id: 'evt_1',
      type: 'device.connected',
      created_at: '2026-10-23T12:00:00Z',
      data: {
        device: { id: 9, name: 'Sales', number: '5491100000000', connection: 'qr', external_reference: 'customer-81' },
        connected_at: '2026-10-23T12:00:00Z',
        connect_link_id: 31,
      },
    });
    const raw = Buffer.from(body, 'utf8');
    const event = constructEvent(raw, sign(raw, SECRET, Math.floor(Date.now() / 1000)), SECRET);
    if (event.type !== 'device.connected') throw new Error(event.type);
    expect(event.data.connect_link_id).toBe(31);
    expect(event.data.device.external_reference).toBe('customer-81');
  });
});

describe('errors of creating numbers', () => {
  it.each([
    [403, 'numbers_not_included', PermissionDeniedError],
    [403, 'number_limit_reached', PermissionDeniedError],
    [409, 'operation_in_progress', ConflictError],
    [409, 'pending_number_exists', ConflictError],
    [422, 'connection_type_mismatch', UnprocessableEntityError],
    [429, 'too_many_open_links', RateLimitError],
    [503, 'meta_connect_disabled', InternalServerError],
  ])('%i %s is thrown at once, without retries', async (status, code, Class) => {
    const { fetch, calls } = mockFetch({ status, body: { error: code, message: '…' } }, { status: 201, body: { data: {} } });
    const error = await client(fetch, 2)
      .connectLinks.create({ type: 'qr' })
      .catch((e: unknown) => e);
    expect(error).toBeInstanceOf(Class);
    expect(error).toMatchObject({ status, code });
    expect(calls).toHaveLength(1);
  });

  it('lists the codes with their status and tells the quota ones apart', () => {
    expect(NUMBER_ERROR_CODES).toMatchObject({ numbers_not_included: 403, qr_requires_coexistence: 422, method_already_present: 422, too_many_open_links: 429 });
    expect(NUMBER_ERROR_CODES).toMatchObject({ pending_number_exists: 409, connection_type_mismatch: 422, link_not_pending: 409, invalid_reference_device: 422, credentials_not_allowed: 403 });
    expect(IDEMPOTENCY_ERROR_CODES).toEqual({ idempotency_key_mismatch: 422, invalid_idempotency_key: 422, operation_in_progress: 409 });
    expect(isNumberQuotaError('number_limit_reached')).toBe(true);
    expect(isNumberQuotaError('pending_number_exists')).toBe(true);
    expect(isNumberQuotaError('too_many_open_links')).toBe(false);
    expect(isNumberQuotaError(undefined)).toBe(false);
  });
});
