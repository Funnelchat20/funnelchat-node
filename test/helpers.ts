import { vi } from 'vitest';

export interface RecordedCall {
  url: string;
  method: string;
  headers: Record<string, string>;
  body: string | undefined;
}

export type MockReply =
  | { status?: number; body?: unknown; headers?: Record<string, string> }
  | Error
  | ((call: RecordedCall, init: RequestInit) => Promise<Response>);

/** A `fetch` that answers from a queue of canned replies and records every call. No network. */
export function mockFetch(...replies: MockReply[]) {
  const calls: RecordedCall[] = [];
  const queue = [...replies];
  const fn = vi.fn(async (input: string | URL | Request, init: RequestInit = {}) => {
    const headers: Record<string, string> = {};
    new Headers(init.headers).forEach((value, key) => {
      headers[key] = value;
    });
    const call: RecordedCall = {
      url: String(input),
      method: init.method ?? 'GET',
      headers,
      body: typeof init.body === 'string' ? init.body : undefined,
    };
    calls.push(call);
    const reply = queue.shift();
    if (reply === undefined) throw new Error(`mockFetch: no reply left for ${call.method} ${call.url}`);
    if (reply instanceof Error) throw reply;
    if (typeof reply === 'function') return reply(call, init);
    const status = reply.status ?? 200;
    const body = reply.body === undefined || status === 204 ? null : typeof reply.body === 'string' ? reply.body : JSON.stringify(reply.body);
    return new Response(body, { status, headers: { 'content-type': 'application/json', ...reply.headers } });
  });
  return { fetch: fn as unknown as typeof fetch, calls, mock: fn };
}

/** A fetch reply that only settles when the request is aborted (to test timeouts and cancellation). */
export function hangUntilAborted(_call: RecordedCall, init: RequestInit): Promise<Response> {
  return new Promise((_, reject) => {
    init.signal?.addEventListener('abort', () => reject(new DOMException('This operation was aborted', 'AbortError')));
  });
}

/** A fake API key with the real shape. Not a real credential. */
export const TEST_API_KEY = '1|fc_live_test_0000000000000000';

export function networkError(): TypeError {
  return new TypeError('fetch failed', { cause: new Error('ECONNRESET') });
}
