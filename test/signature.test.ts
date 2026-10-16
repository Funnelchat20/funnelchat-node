import { afterEach, describe, expect, it, vi } from 'vitest';
import { Funnelchat, WebhookVerificationError, constructEvent, verify } from '../src/index.js';
import { BODY, FIXED_T, FIXED_VECTORS, SECRET, portalCases, sign } from './fixtures/portal-signature-vectors.js';
import { TEST_API_KEY } from './helpers.js';

afterEach(() => {
  vi.useRealTimers();
});

describe('webhook signature: the portal vectors (tests/test_firmas.py)', () => {
  const now = Math.floor(Date.now() / 1000);
  for (const c of portalCases(now)) {
    it(`${c.name} -> ${c.expected ? 'accepts' : 'rejects'}`, () => {
      expect(Funnelchat.webhooks.verify(c.body, c.header, c.secret)).toBe(c.expected);
      // The same body as a string must give the same answer.
      expect(verify(c.body.toString('utf8'), c.header, c.secret)).toBe(c.expected);
    });
  }
});

describe('webhook signature: fixed vectors computed with Python hmac', () => {
  it('pins the HMAC of "<t>." + raw body with the full secret', () => {
    vi.useFakeTimers({ now: FIXED_T * 1000 });
    expect(verify(BODY, `t=${FIXED_T},v1=${FIXED_VECTORS.body}`, SECRET)).toBe(true);
    expect(verify(BODY, `t=${FIXED_T},v1=${FIXED_VECTORS.bodyWithSecretWithoutPrefix}`, '9f3a1c7e5b2d4a6c8e0f1a3b5c7d9e1f')).toBe(true);
    const utf8 = Buffer.from('{"texto":"Ñandú 🚀 — acentos: áéíóú"}', 'utf8');
    expect(verify(utf8, `t=${FIXED_T},v1=${FIXED_VECTORS.utf8Body}`, SECRET)).toBe(true);
    expect(sign(BODY, SECRET, FIXED_T)).toBe(`t=${FIXED_T},v1=${FIXED_VECTORS.body}`);
  });

  it('accepts any of several v1 and tolerates spaces around the parts', () => {
    vi.useFakeTimers({ now: FIXED_T * 1000 });
    const other = 'a'.repeat(64);
    expect(verify(BODY, `t=${FIXED_T}, v1=${other} , v1=${FIXED_VECTORS.body}`, SECRET)).toBe(true);
    expect(verify(BODY, `v1=${FIXED_VECTORS.body},t=${FIXED_T}`, SECRET)).toBe(true);
  });

  it('applies the 300 s tolerance on both sides, and a custom toleranceSeconds', () => {
    const header = `t=${FIXED_T},v1=${FIXED_VECTORS.body}`;
    vi.useFakeTimers({ now: (FIXED_T + 300) * 1000 });
    expect(verify(BODY, header, SECRET)).toBe(true);
    vi.setSystemTime((FIXED_T + 301) * 1000);
    expect(verify(BODY, header, SECRET)).toBe(false);
    vi.setSystemTime((FIXED_T - 301) * 1000);
    expect(verify(BODY, header, SECRET)).toBe(false);
    expect(verify(BODY, header, SECRET, { toleranceSeconds: 600 })).toBe(true);
  });

  it('accepts Uint8Array and ArrayBuffer bodies', () => {
    vi.useFakeTimers({ now: FIXED_T * 1000 });
    const header = `t=${FIXED_T},v1=${FIXED_VECTORS.body}`;
    const bytes = new Uint8Array(BODY);
    expect(verify(bytes, header, SECRET)).toBe(true);
    expect(verify(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), header, SECRET)).toBe(true);
  });

  it('never throws from verify: bad inputs are false', () => {
    vi.useFakeTimers({ now: FIXED_T * 1000 });
    const header = `t=${FIXED_T},v1=${FIXED_VECTORS.body}`;
    expect(verify(BODY, header, '')).toBe(false);
    expect(verify(BODY, undefined, SECRET)).toBe(false);
    expect(verify(BODY, null, SECRET)).toBe(false);
    expect(verify(BODY, `t=abc,v1=${FIXED_VECTORS.body}`, SECRET)).toBe(false);
    // A parsed body (express.json) is not the raw body.
    expect(verify(JSON.parse(BODY.toString('utf8')) as never, header, SECRET)).toBe(false);
  });
});

describe('constructEvent', () => {
  const header = `t=${FIXED_T},v1=${FIXED_VECTORS.body}`;

  it('returns the typed event when the signature is valid', () => {
    vi.useFakeTimers({ now: FIXED_T * 1000 });
    const event = constructEvent(BODY, header, SECRET);
    expect(event.id).toBe('evt_000000000000000000000001');
    expect(event.type).toBe('message.received');
    if (event.type === 'message.received') {
      expect(event.data.contact.phone).toBe('+5491100000000');
      expect(event.data.message.text).toBe('Hola, quiero más información');
    }
  });

  it('is the same function on the class and on a client', () => {
    vi.useFakeTimers({ now: FIXED_T * 1000 });
    const client = new Funnelchat({ apiKey: TEST_API_KEY, fetch: vi.fn() as never });
    expect(Funnelchat.webhooks.constructEvent(BODY, header, SECRET)).toEqual(client.webhooks.constructEvent(BODY, header, SECRET));
    expect(client.webhooks.verify(BODY, header, SECRET)).toBe(true);
  });

  it.each([
    ['missing_header', BODY, undefined, SECRET],
    ['malformed_header', BODY, 'sha256=abc', SECRET],
    ['signature_mismatch', BODY, header, `${SECRET}x`],
    ['missing_secret', BODY, header, ''],
    ['invalid_body', { parsed: true }, header, SECRET],
  ] as const)('throws WebhookVerificationError with reason %s', (reason, body, sig, secret) => {
    vi.useFakeTimers({ now: FIXED_T * 1000 });
    try {
      constructEvent(body as never, sig, secret);
      expect.unreachable('constructEvent should have thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(WebhookVerificationError);
      expect((error as WebhookVerificationError).reason).toBe(reason);
    }
  });

  it('reports an old timestamp as timestamp_out_of_tolerance', () => {
    vi.useFakeTimers({ now: (FIXED_T + 3600) * 1000 });
    expect(() => constructEvent(BODY, header, SECRET)).toThrowError(
      expect.objectContaining({ reason: 'timestamp_out_of_tolerance' }) as Error,
    );
  });

  it('rejects a validly signed body that is not JSON or not an event', () => {
    vi.useFakeTimers({ now: FIXED_T * 1000 });
    const notJson = Buffer.from('hola', 'utf8');
    expect(() => constructEvent(notJson, sign(notJson, SECRET, FIXED_T), SECRET)).toThrowError(
      expect.objectContaining({ reason: 'invalid_json' }) as Error,
    );
    const notEvent = Buffer.from('{"hola":1}', 'utf8');
    expect(() => constructEvent(notEvent, sign(notEvent, SECRET, FIXED_T), SECRET)).toThrowError(
      expect.objectContaining({ reason: 'invalid_event' }) as Error,
    );
  });
});
