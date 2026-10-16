import { WebhookVerificationError } from '../core/errors.js';
import type { WebhookEventDataMap, WebhookEventType } from '../generated/events.js';
import type { PendingEventData } from '../pending/events.js';
import { assertSignature, type RawBody, type VerifyOptions } from './signature.js';

export type { WebhookEventType } from '../generated/events.js';

/** The `data` of an event type: the generated type plus the pending-of-the-spec additions. */
export type WebhookEventData<T extends WebhookEventType> = WebhookEventDataMap[T] &
  (T extends keyof PendingEventData ? PendingEventData[T] : unknown);

/** The envelope every delivery shares. */
export interface WebhookEventEnvelope<T extends string = string, D = unknown> {
  /** Event id (`evt_…`). The same in every retry: use it to deduplicate. */
  id: string;
  type: T;
  /** Version of the `data` format. */
  version: number;
  /** When it happened, ISO 8601 UTC. Read it with a date parser, not by comparing text. */
  occurred_at: string;
  data: D;
}

/**
 * A verified webhook event, discriminated by `type`:
 *
 * ```ts
 * if (event.type === 'message.received') event.data.contact.phone;
 * ```
 *
 * New event types can arrive before this SDK knows them: answer `2xx` to the ones you do not
 * handle (a `switch` with a `default`).
 */
export type WebhookEvent = { [T in WebhookEventType]: WebhookEventEnvelope<T, WebhookEventData<T>> }[WebhookEventType];

/** The event of a given type. */
export type WebhookEventOf<T extends WebhookEventType> = Extract<WebhookEvent, { type: T }>;

/**
 * Verifies the signature and returns the parsed event. Throws {@link WebhookVerificationError}
 * (with `reason`) when the signature, the timestamp or the body are not valid.
 *
 * Pass the raw body as it arrived (with Express, `express.raw({ type: 'application/json' })`).
 */
export function constructEvent(rawBody: RawBody, signatureHeader: string | null | undefined, secret: string, options?: VerifyOptions): WebhookEvent {
  assertSignature(rawBody, signatureHeader, secret, options);
  const text = typeof rawBody === 'string' ? rawBody : Buffer.from(rawBody instanceof ArrayBuffer ? new Uint8Array(rawBody) : rawBody).toString('utf8');
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new WebhookVerificationError('invalid_json', 'La firma es válida pero el cuerpo no es JSON.');
  }
  if (!isEnvelope(parsed)) {
    throw new WebhookVerificationError('invalid_event', 'La firma es válida pero el cuerpo no tiene la forma de un evento (id, type, data).');
  }
  return parsed as WebhookEvent;
}

function isEnvelope(value: unknown): value is WebhookEventEnvelope {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;
  const v = value as Record<string, unknown>;
  return typeof v.id === 'string' && typeof v.type === 'string' && 'data' in v;
}
