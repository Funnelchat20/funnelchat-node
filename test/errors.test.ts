import { describe, expect, it } from 'vitest';
import {
  APIError,
  AuthenticationError,
  BadRequestError,
  ConflictError,
  FunnelchatError,
  Funnelchat,
  InternalServerError,
  NotFoundError,
  PermissionDeniedError,
  RateLimitError,
  UnprocessableEntityError,
  isSendRuleError,
} from '../src/index.js';
import { parseRetryAfter } from '../src/core/errors.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';

const client = (fetchImpl: typeof fetch) => new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, maxRetries: 0 });

async function errorFor(reply: Parameters<typeof mockFetch>[0]): Promise<APIError> {
  const { fetch } = mockFetch(reply);
  const error = await client(fetch)
    .request('GET', '/api/v1/tags')
    .catch((e: unknown) => e);
  expect(error).toBeInstanceOf(APIError);
  return error as APIError;
}

describe('typed errors', () => {
  it.each([
    [400, BadRequestError],
    [401, AuthenticationError],
    [403, PermissionDeniedError],
    [404, NotFoundError],
    [409, ConflictError],
    [422, UnprocessableEntityError],
    [429, RateLimitError],
    [500, InternalServerError],
    [502, InternalServerError],
  ])('%i -> %o', async (status, Class) => {
    const error = await errorFor({ status, body: { error: 'some_code', message: 'Algo pasó.' } });
    expect(error).toBeInstanceOf(Class);
    expect(error).toBeInstanceOf(APIError);
    expect(error).toBeInstanceOf(FunnelchatError);
    expect(error.status).toBe(status);
  });

  it('takes code from `error` and message from `message`', async () => {
    const error = await errorFor({
      status: 422,
      body: { error: 'window_closed', message: 'No se envió: pasaron más de 24 horas desde el último mensaje del contacto.' },
    });
    expect(error.code).toBe('window_closed');
    expect(error.message).toBe('No se envió: pasaron más de 24 horas desde el último mensaje del contacto.');
    expect(error.retryAfter).toBeUndefined();
    expect(error.name).toBe('UnprocessableEntityError');
    expect(isSendRuleError(error.code)).toBe(true);
  });

  it('exposes retryAfter of a 429', async () => {
    const error = await errorFor({ status: 429, body: { error: 'rate_limited', message: 'Espera.' }, headers: { 'retry-after': '12' } });
    expect(error).toMatchObject({ status: 429, code: 'rate_limited', message: 'Espera.', retryAfter: 12 });
  });

  it('keeps the field errors of a Laravel 422 (no code)', async () => {
    const error = await errorFor({
      status: 422,
      body: { message: 'The phone field is required when whatsapp id is not present.', errors: { phone: ['The phone field is required when whatsapp id is not present.'] } },
    });
    expect(error.code).toBeUndefined();
    expect(error.errors).toEqual({ phone: ['The phone field is required when whatsapp id is not present.'] });
    expect(isSendRuleError(error.code)).toBe(false);
  });

  it('handles the gate rejection of a route closed to keys', async () => {
    const error = await errorFor({ status: 403, body: { error: 'route_not_available', message: 'Esta ruta no está disponible para claves de API.' } });
    expect(error).toBeInstanceOf(PermissionDeniedError);
    expect(error.code).toBe('route_not_available');
  });

  it('works with a body that is not JSON', async () => {
    const error = await errorFor({ status: 502, body: '<html>Bad Gateway</html>', headers: { 'content-type': 'text/html' } });
    expect(error.status).toBe(502);
    expect(error.code).toBeUndefined();
    expect(error.body).toBe('<html>Bad Gateway</html>');
    expect(error.message).toBe('<html>Bad Gateway</html>');
  });

  it('has a fallback message for an empty body', async () => {
    const error = await errorFor({ status: 500 });
    expect(error.message).toBe('La API respondió 500.');
    expect(error.body).toBeNull();
  });

  it('records method and URL without the query string, and never the key', async () => {
    const { fetch } = mockFetch({ status: 404, body: { message: 'No encontrado.' } });
    const error = (await client(fetch)
      .contacts.list({ phone: '5491100000000' })
      .then(
        () => null,
        (e: unknown) => e,
      )) as APIError;
    expect(error.method).toBe('GET');
    expect(error.url).toBe('https://api.funnelchat.com/api/v1/contacts');
    expect(JSON.stringify({ ...error, message: error.message })).not.toContain('fc_live');
  });
});

describe('parseRetryAfter', () => {
  const now = Date.parse('2026-10-16T12:00:00Z');
  it.each([
    ['5', 5],
    [' 30 ', 30],
    ['0', 0],
    ['1.5', 1.5],
    ['Fri, 16 Oct 2026 12:00:10 GMT', 10],
    ['Fri, 16 Oct 2026 11:59:00 GMT', 0],
    ['', undefined],
    ['soon', undefined],
    [null, undefined],
  ])('%s -> %s', (value, expected) => {
    expect(parseRetryAfter(value, now)).toBe(expected);
  });
});
