/**
 * Helpers of the end-to-end tests: a client pointed at funnelchat-sandbox and a local receiver of
 * signed webhooks. No real key and no real API: everything runs against the sandbox.
 */
import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { Funnelchat, type WebhookEvent } from '../../src/index.js';

/** Where the sandbox listens (`FUNNELCHAT_SANDBOX_URL`), or `undefined` to skip the e2e tests. */
export const SANDBOX_URL = process.env.FUNNELCHAT_SANDBOX_URL?.replace(/\/+$/, '') || undefined;

/** Any key with the shape of a real one works against the sandbox. */
export const SANDBOX_KEY = '1|fc_live_sandbox';

/** Seed data of every sandbox session. */
export const SEED = { officialDevice: 3, qrDevice: 4, contact: 2001, phone: '5491100000000', tag: 4001, template: '45' } as const;

export function sandboxClient(): Funnelchat {
  return new Funnelchat({ apiKey: SANDBOX_KEY, baseUrl: SANDBOX_URL, maxRetries: 0 });
}

/** A call to the sandbox's own control routes (`/_sandbox/...`), which take no key. */
export async function control(method: string, path: string, body?: unknown): Promise<unknown> {
  const response = await fetch(`${SANDBOX_URL}/_sandbox${path}`, {
    method,
    headers: body === undefined ? {} : { 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`/_sandbox${path}: ${response.status} ${await response.text()}`);
  const text = await response.text();
  return text === '' ? null : JSON.parse(text);
}

export interface Receiver {
  url: string;
  /** Sets the secret the deliveries are verified with. */
  setSecret(secret: string): void;
  /** Resolves with the first verified event that matches, or rejects after `timeoutMs`. */
  waitFor<E extends WebhookEvent>(match: (event: WebhookEvent) => event is E, timeoutMs?: number): Promise<E>;
  waitFor(match: (event: WebhookEvent) => boolean, timeoutMs?: number): Promise<WebhookEvent>;
  /** Deliveries whose signature did not verify. */
  readonly rejected: string[];
  close(): Promise<void>;
}

/** An HTTP receiver that verifies every delivery with `Funnelchat.webhooks.constructEvent`. */
export async function startReceiver(): Promise<Receiver> {
  let secret = '';
  const events: WebhookEvent[] = [];
  const rejected: string[] = [];
  const waiters = new Set<() => void>();

  const server: Server = createServer((req, res) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => {
      try {
        events.push(Funnelchat.webhooks.constructEvent(Buffer.concat(chunks), req.headers['x-funnelchat-signature'] as string | undefined, secret));
        res.writeHead(200).end();
      } catch (error) {
        rejected.push(error instanceof Error ? error.message : String(error));
        res.writeHead(400).end();
      }
      for (const wake of waiters) wake();
    });
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address() as AddressInfo;

  return {
    url: `http://127.0.0.1:${port}/hooks/funnelchat`,
    setSecret: (value: string) => {
      secret = value;
    },
    rejected,
    waitFor(match: (event: WebhookEvent) => boolean, timeoutMs = 15_000): Promise<WebhookEvent> {
      return new Promise((resolve, reject) => {
        const check = () => {
          const found = events.find(match);
          if (!found) return false;
          cleanup();
          resolve(found);
          return true;
        };
        const timer = setTimeout(() => {
          cleanup();
          reject(new Error(`The expected event did not arrive within ${timeoutMs} ms. Arrived: ${events.map((e) => e.type).join(', ') || 'none'}.`));
        }, timeoutMs);
        const cleanup = () => {
          clearTimeout(timer);
          waiters.delete(check);
        };
        if (!check()) waiters.add(check);
      });
    },
    close: () => new Promise<void>((resolve) => server.close(() => resolve())),
  } as Receiver;
}
