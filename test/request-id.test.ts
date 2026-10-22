/**
 * `X-Request-Id`: the API sets it on every response, success or error (also the edge's own errors).
 * The SDK exposes it on every error and, through `withResponse()` and `Page.requestId`, on every
 * success.
 */
import { describe, expect, it } from 'vitest';
import { type APIError, APIPromise, Funnelchat, InternalServerError, NotFoundError } from '../src/index.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';

const client = (fetchImpl: typeof fetch) => new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, maxRetries: 0 });
const RID = '3f2b1c9e-6d0a-4b7e-9a51-0c2d4e6f8a10';

describe('X-Request-Id', () => {
  it('is on every API error', async () => {
    const { fetch } = mockFetch({ status: 404, body: { error: 'route_not_found', message: 'x' }, headers: { 'x-request-id': RID } });
    const error = await client(fetch).request('GET', '/api/v1/no-existe').catch((e: unknown) => e);
    expect(error).toBeInstanceOf(NotFoundError);
    expect((error as APIError).requestId).toBe(RID);
    expect((error as APIError).code).toBe('route_not_found');
  });

  it('is on the edge errors, which carry no Retry-After', async () => {
    const { fetch } = mockFetch({
      status: 502,
      body: { error: 'origin_unreachable', message: 'La API no está disponible en este momento.' },
      headers: { 'X-Request-Id': RID },
    });
    const error = (await client(fetch).request('GET', '/api/v1/tags').catch((e: unknown) => e)) as APIError;
    expect(error).toBeInstanceOf(InternalServerError);
    expect(error.requestId).toBe(RID);
    expect(error.retryAfter).toBeUndefined();
  });

  it('is undefined when the response has none', async () => {
    const { fetch } = mockFetch({ status: 400, body: { message: 'x' } });
    const error = (await client(fetch).request('GET', '/api/v1/tags').catch((e: unknown) => e)) as APIError;
    expect(error.requestId).toBeUndefined();
  });

  it('comes with the body through withResponse()', async () => {
    const { fetch } = mockFetch({ status: 200, body: { id: 2001 }, headers: { 'x-request-id': RID } });
    const promise = client(fetch).contacts.retrieve(2001);
    expect(promise).toBeInstanceOf(APIPromise);
    expect(promise).toBeInstanceOf(Promise);
    const { data, requestId, response } = await promise.withResponse();
    expect(data).toEqual({ id: 2001 });
    expect(requestId).toBe(RID);
    expect(response.status).toBe(200);
  });

  it('awaiting the promise still gives the body, once per request', async () => {
    const { fetch, calls } = mockFetch({ status: 200, body: { id: 2001 }, headers: { 'x-request-id': RID } });
    const promise = client(fetch).contacts.retrieve(2001);
    await expect(promise).resolves.toEqual({ id: 2001 });
    expect((await promise.withResponse()).requestId).toBe(RID);
    await expect(promise.then((c) => c)).resolves.toEqual({ id: 2001 });
    expect(calls).toHaveLength(1);
  });

  it('is on each page of a list', async () => {
    const { fetch } = mockFetch(
      { status: 200, body: { data: [{ id: 1 }], meta: { current_page: 1, last_page: 2 } }, headers: { 'x-request-id': 'a' } },
      { status: 200, body: { data: [{ id: 2 }], meta: { current_page: 2, last_page: 2 } }, headers: { 'x-request-id': 'b' } },
    );
    const first = await client(fetch).tags.list();
    expect(first.requestId).toBe('a');
    expect((await first.getNextPage()).requestId).toBe('b');
  });
});
