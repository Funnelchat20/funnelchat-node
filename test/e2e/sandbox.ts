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

/**
 * The records every sandbox session starts with, by the fixed ids funnelchat-sandbox gives them (the
 * two example numbers, the example contact, its tag and the approved template). `checkSeed()` confirms
 * them against `GET /_sandbox/state` and the API before the tests run.
 */
export const SEED = {
  officialDevice: 'dev_Sandbox0Oficial00000000',
  qrDevice: 'dev_Sandbox0QR0000000000000',
  contact: 'ctc_Sandbox0Contacto0000000',
  phone: '5491100000000',
  tag: 'tag_Sandbox0Cliente00000000',
  template: 'tpl_Sandbox0Bienvenida00000',
} as const;

/**
 * Fails with what to do when the sandbox does not seed `SEED`: another version of it, or one that
 * is not a fresh session. It resets the sandbox first.
 */
export async function checkSeed(): Promise<void> {
  await control('POST', '/reset');
  const state = (await control('GET', '/state')) as { devices?: { id: string; connection: string | null }[] };
  const connection = new Map((state.devices ?? []).map((device) => [device.id, device.connection]));
  const funnelchat = sandboxClient();
  const problems: string[] = [];
  if (!connection.has(SEED.officialDevice) || connection.get(SEED.officialDevice) === 'qr') problems.push(`the official number ${SEED.officialDevice}`);
  if (connection.get(SEED.qrDevice) !== 'qr') problems.push(`the QR number ${SEED.qrDevice}`);
  const contact = await funnelchat.contacts.retrieve(SEED.contact).catch(() => null);
  if (contact?.phone !== SEED.phone) problems.push(`the contact ${SEED.contact} with the phone ${SEED.phone}`);
  const tags = await funnelchat.tags.list().catch(() => null);
  if (!tags?.data.some((tag) => tag.id === SEED.tag)) problems.push(`the tag ${SEED.tag}`);
  const template = await funnelchat.templates.retrieve(SEED.template).catch(() => null);
  if (!template) problems.push(`the template ${SEED.template}`);
  if (problems.length) {
    throw new Error(
      `The sandbox at ${SANDBOX_URL} does not seed ${problems.join(', ')}. ` +
        'Run the version the CI runs (npx @funnelchat-hq/sandbox@0.7.0), or update SEED in test/e2e/sandbox.ts.',
    );
  }
}

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
  /** Forgets the events received so far: after a sandbox reset, ids repeat. */
  clear(): void;
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
    clear: () => {
      events.length = 0;
      rejected.length = 0;
    },
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
