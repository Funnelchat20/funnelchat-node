import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  Funnelchat,
  InternalServerError,
  RateLimitError,
} from '../src/index.js';
import { MAX_RETRY_DELAY_MS, isRetryable, isSendRequest, retryDelayMs } from '../src/core/retry.js';
import { routes } from '../src/generated/routes.js';
import { type MockReply, TEST_API_KEY, hangUntilAborted, mockFetch, networkError } from './helpers.js';

const rateLimited = (retryAfter?: string): MockReply => ({
  status: 429,
  body: { error: 'rate_limited', message: 'Superaste el límite.' },
  headers: retryAfter === undefined ? {} : { 'retry-after': retryAfter },
});
const serverError = { status: 503, body: { message: 'Service Unavailable' } };
const ok = { status: 200, body: { data: [] } };

function client(fetchImpl: typeof fetch, options: Partial<ConstructorParameters<typeof Funnelchat>[0]> = {}) {
  return new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, ...options });
}

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('retries', () => {
  it('waits exactly Retry-After seconds on a 429 and then succeeds', async () => {
    const { fetch, calls } = mockFetch(rateLimited('2'), ok);
    const promise = client(fetch).request('GET', '/api/v1/tags');

    await vi.advanceTimersByTimeAsync(1999);
    expect(calls).toHaveLength(1);
    await vi.advanceTimersByTimeAsync(1);
    await expect(promise).resolves.toEqual({ data: [] });
    expect(calls).toHaveLength(2);
  });

  it('reads Retry-After as an HTTP date', async () => {
    vi.setSystemTime(new Date('2026-10-16T12:00:00Z'));
    const { fetch, calls } = mockFetch(rateLimited('Fri, 16 Oct 2026 12:00:03 GMT'), ok);
    const promise = client(fetch).request('GET', '/api/v1/tags');
    await vi.advanceTimersByTimeAsync(2999);
    expect(calls).toHaveLength(1);
    await vi.advanceTimersByTimeAsync(1);
    await expect(promise).resolves.toEqual({ data: [] });
  });

  it('does not wait for a Retry-After longer than 60 s: throws with retryAfter', async () => {
    const { fetch, calls } = mockFetch(rateLimited('3600'));
    const error = await client(fetch).request('GET', '/api/v1/tags').catch((e: unknown) => e);
    expect(error).toBeInstanceOf(RateLimitError);
    expect((error as RateLimitError).retryAfter).toBe(3600);
    expect(calls).toHaveLength(1);
  });

  it('retries 5xx with exponential backoff and gives up after maxRetries', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0); // no jitter: 500 ms, then 1000 ms
    const { fetch, calls } = mockFetch(serverError, serverError, serverError);
    const promise = client(fetch, { maxRetries: 2 }).request('GET', '/api/v1/tags').catch((e: unknown) => e);

    await vi.advanceTimersByTimeAsync(499);
    expect(calls).toHaveLength(1);
    await vi.advanceTimersByTimeAsync(1);
    expect(calls).toHaveLength(2);
    await vi.advanceTimersByTimeAsync(999);
    expect(calls).toHaveLength(2);
    await vi.advanceTimersByTimeAsync(1);
    expect(calls).toHaveLength(3);

    const error = await promise;
    expect(error).toBeInstanceOf(InternalServerError);
    expect((error as InternalServerError).status).toBe(503);
  });

  it('retries network errors', async () => {
    const { fetch, calls } = mockFetch(networkError(), ok);
    const promise = client(fetch).request('GET', '/api/v1/tags');
    await vi.runAllTimersAsync();
    await expect(promise).resolves.toEqual({ data: [] });
    expect(calls).toHaveLength(2);
  });

  it('turns a network error into APIConnectionError once retries run out', async () => {
    const { fetch } = mockFetch(networkError());
    const error = await client(fetch, { maxRetries: 0 }).request('GET', '/api/v1/tags').catch((e: unknown) => e);
    expect(error).toBeInstanceOf(APIConnectionError);
    expect((error as Error).cause).toBeInstanceOf(TypeError);
  });

  it('does not retry other 4xx', async () => {
    for (const status of [400, 401, 403, 404, 409, 422]) {
      const { fetch, calls } = mockFetch({ status, body: { error: 'x', message: 'no' } });
      await expect(client(fetch).request('GET', '/api/v1/tags')).rejects.toMatchObject({ status });
      expect(calls).toHaveLength(1);
    }
  });

  it('times out each attempt and retries an idempotent request', async () => {
    const { fetch, calls } = mockFetch(hangUntilAborted, ok);
    const promise = client(fetch, { timeoutMs: 1000 }).request('GET', '/api/v1/tags');
    await vi.runAllTimersAsync();
    await expect(promise).resolves.toEqual({ data: [] });
    expect(calls).toHaveLength(2);
  });

  it('throws APIConnectionTimeoutError when the last attempt times out', async () => {
    const { fetch } = mockFetch(hangUntilAborted);
    const promise = client(fetch, { timeoutMs: 1000, maxRetries: 0 }).request('GET', '/api/v1/tags').catch((e: unknown) => e);
    await vi.advanceTimersByTimeAsync(1000);
    expect(await promise).toBeInstanceOf(APIConnectionTimeoutError);
  });

  it('never retries when the caller aborts', async () => {
    const { fetch, calls } = mockFetch(hangUntilAborted, ok);
    const controller = new AbortController();
    const promise = client(fetch).request('GET', '/api/v1/tags', { signal: controller.signal }).catch((e: unknown) => e);
    controller.abort();
    expect(await promise).toBeInstanceOf(APIUserAbortError);
    await vi.runAllTimersAsync();
    expect(calls).toHaveLength(1);
  });

  it('per-request maxRetries overrides the client', async () => {
    const { fetch, calls } = mockFetch(serverError);
    await expect(client(fetch, { maxRetries: 5 }).request('GET', '/api/v1/tags', { maxRetries: 0 })).rejects.toBeInstanceOf(
      InternalServerError,
    );
    expect(calls).toHaveLength(1);
  });
});

describe('sends are not retried unless asked', () => {
  const send = (c: Funnelchat, retrySend?: boolean) =>
    c.messages.send(2001, { device_id: 3, phone: '5491100000000', text: 'Hola' }, retrySend === undefined ? {} : { retrySend });

  it.each([
    ['429 with Retry-After', rateLimited('1')],
    ['503', serverError],
    ['network error', networkError()],
  ])('POST of a send is not retried on %s', async (_label, reply) => {
    const { fetch, calls } = mockFetch(reply, { status: 204 });
    await expect(send(client(fetch))).rejects.toBeDefined();
    await vi.runAllTimersAsync();
    expect(calls).toHaveLength(1);
  });

  it('keeps retryAfter on the error so the caller can retry by hand', async () => {
    const { fetch } = mockFetch(rateLimited('7'));
    const error = await send(client(fetch)).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(RateLimitError);
    expect(error).toMatchObject({ status: 429, code: 'rate_limited', retryAfter: 7 });
  });

  it('retries a send when the caller passes retrySend: true', async () => {
    const { fetch, calls } = mockFetch(rateLimited('1'), { status: 204 });
    const promise = send(client(fetch), true);
    await vi.advanceTimersByTimeAsync(1000);
    await expect(promise).resolves.toBeNull();
    expect(calls).toHaveLength(2);
  });

  it('applies the same rule to the generic request() on a send path', async () => {
    const { fetch, calls } = mockFetch(serverError);
    await expect(
      client(fetch).request('POST', '/api/v1/devices/{device}/templates/{template}/send-template', {
        path: { device: 3, template: '45' },
        body: { phone: '5491100000000', contact_id: 2001 },
      }),
    ).rejects.toBeInstanceOf(InternalServerError);
    await vi.runAllTimersAsync();
    expect(calls).toHaveLength(1);
  });

  it('still retries idempotent operations of the send area (reactions are PUT/DELETE)', async () => {
    const { fetch, calls } = mockFetch(serverError, { status: 202, body: {} });
    const promise = client(fetch).messages.react(2001, 99, { emoji: '👍' });
    await vi.runAllTimersAsync();
    await expect(promise).resolves.toEqual({});
    expect(calls).toHaveLength(2);
  });

  it('retries a non-send POST on 503 and 429: the write was not applied', async () => {
    const { fetch, calls } = mockFetch(serverError, rateLimited('0'), { status: 200, body: { id: 1 } });
    const promise = client(fetch).tags.create({ name: 'VIP' });
    await vi.runAllTimersAsync();
    await expect(promise).resolves.toEqual({ id: 1 });
    expect(calls).toHaveLength(3);
  });

  it.each([500, 502, 504])('does not retry a write on %i: it may have been applied', async (status) => {
    const { fetch, calls } = mockFetch({ status, body: { error: 'origin_unreachable', message: 'La API no está disponible en este momento.' } });
    const promise = client(fetch).tags.create({ name: 'VIP' });
    await expect(promise).rejects.toBeInstanceOf(InternalServerError);
    await vi.runAllTimersAsync();
    expect(calls).toHaveLength(1);
  });

  it('does not retry a write after a network error or a timeout', async () => {
    const { fetch, calls } = mockFetch(networkError());
    await expect(client(fetch).request('PATCH', '/api/v1/algo', { body: {} })).rejects.toBeInstanceOf(APIConnectionError);
    const second = mockFetch(hangUntilAborted);
    const promise = client(second.fetch, { timeoutMs: 100 }).tags.create({ name: 'VIP' });
    const assertion = expect(promise).rejects.toBeInstanceOf(APIConnectionTimeoutError);
    await vi.advanceTimersByTimeAsync(100);
    await assertion;
    await vi.runAllTimersAsync();
    expect(calls).toHaveLength(1);
    expect(second.calls).toHaveLength(1);
  });

  it('never retries a 429 of the monthly active contacts, even with retrySend', async () => {
    const { fetch, calls } = mockFetch({ status: 429, body: { error: 'mac_lockout_24h', message: 'x' } });
    await expect(send(client(fetch), true)).rejects.toBeInstanceOf(RateLimitError);
    await vi.runAllTimersAsync();
    expect(calls).toHaveLength(1);
  });

  it('retrySend makes a send follow the rule of every write: 429 yes, 502 no', async () => {
    const { fetch, calls } = mockFetch({ status: 502, body: { error: 'origin_unreachable' } });
    await expect(send(client(fetch), true)).rejects.toBeInstanceOf(InternalServerError);
    await vi.runAllTimersAsync();
    expect(calls).toHaveLength(1);
  });
});

describe('retry policy helpers', () => {
  it('detects every POST with a *:send permission in the spec, and nothing else', () => {
    const sendPosts = routes.filter((r) => r.method === 'POST' && r.permission?.endsWith(':send'));
    expect(sendPosts.length).toBeGreaterThanOrEqual(7);
    for (const route of sendPosts) {
      expect(isSendRequest('POST', route.path.replace(/\{[^}]+\}/g, '123'))).toBe(true);
    }
    expect(isSendRequest('POST', '/api/v1/contacts/2001/message')).toBe(true);
    expect(isSendRequest('POST', '/api/v1/message/send-message')).toBe(true);
    expect(isSendRequest('GET', '/api/v1/contacts/2001/messages')).toBe(false);
    expect(isSendRequest('POST', '/api/v1/contacts/delete')).toBe(false);
    expect(isSendRequest('POST', '/api/v1/contacts')).toBe(false);
    expect(isSendRequest('POST', '/api/v1/contacts/2001/message/form')).toBe(true);
    expect(isSendRequest('POST', '/api/v1/groups/120363000000000001@g.us/messages')).toBe(false);
    expect(isSendRequest('PUT', '/api/v1/contacts/2001/messages/9/reaction')).toBe(false);
  });

  it('repeats reads and idempotent writes on any transient failure, other writes only when not applied', () => {
    for (const method of ['GET', 'PUT', 'DELETE']) {
      for (const failure of [429, 500, 502, 503, 504, 'network'] as const) expect(isRetryable(method, failure)).toBe(true);
    }
    for (const method of ['POST', 'PATCH']) {
      expect(isRetryable(method, 429)).toBe(true);
      expect(isRetryable(method, 503)).toBe(true);
      for (const failure of [500, 502, 504, 'network'] as const) expect(isRetryable(method, failure)).toBe(false);
    }
    expect(isRetryable('GET', 404)).toBe(false);
  });

  it('caps the exponential backoff', () => {
    expect(retryDelayMs(0, undefined, () => 0)).toBe(500);
    expect(retryDelayMs(1, undefined, () => 0)).toBe(1000);
    expect(retryDelayMs(10, undefined, () => 0)).toBe(MAX_RETRY_DELAY_MS);
    expect(retryDelayMs(0, undefined, () => 1)).toBe(375);
    expect(retryDelayMs(3, 2)).toBe(2000);
    expect(retryDelayMs(0, 61)).toBeNull();
  });
});
