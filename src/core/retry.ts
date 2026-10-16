import { routes } from '../generated/routes.js';

/** First backoff delay; it doubles on every retry. */
export const INITIAL_RETRY_DELAY_MS = 500;
/** Ceiling of the exponential backoff. */
export const MAX_RETRY_DELAY_MS = 8_000;
/**
 * A `Retry-After` longer than this is not waited for: the error is thrown right away with its
 * `retryAfter`, so the caller decides (a daily cap can ask for hours).
 */
export const MAX_RETRY_AFTER_SECONDS = 60;

/** Statuses worth retrying: rate limits and server errors. */
export function isRetryableStatus(status: number): boolean {
  return status === 429 || status >= 500;
}

/**
 * Milliseconds to wait before retry number `attempt` (0 = first retry), or `null` when the
 * server asked for a wait longer than {@link MAX_RETRY_AFTER_SECONDS}.
 * With `Retry-After` the wait is exactly what the server asked for; without it, exponential
 * backoff with up to 25 % of jitter.
 */
export function retryDelayMs(attempt: number, retryAfterSeconds: number | undefined, random: () => number = Math.random): number | null {
  if (retryAfterSeconds !== undefined) {
    if (retryAfterSeconds > MAX_RETRY_AFTER_SECONDS) return null;
    return Math.max(0, Math.ceil(retryAfterSeconds * 1000));
  }
  const base = Math.min(INITIAL_RETRY_DELAY_MS * 2 ** attempt, MAX_RETRY_DELAY_MS);
  return Math.round(base * (1 - 0.25 * random()));
}

const placeholder = /\{[^}]+\}/g;
const escape = (text: string) => text.replace(/[.*+?^$()|[\]\\]/g, '\\$&');

/**
 * The send operations of the spec (permission `conversations:send`) that are a `POST`: they
 * deliver a WhatsApp message and are not idempotent, so they are never retried automatically.
 * Built from the generated route table, so a regeneration keeps the list current.
 */
const SEND_POST_PATTERNS: readonly RegExp[] = routes
  .filter((route) => route.method === 'POST' && route.permission === 'conversations:send')
  .map((route) => new RegExp(`^${route.path.split(placeholder).map(escape).join('[^/]+')}/?$`));

/** Whether `method` + `pathname` (already interpolated, without query) is a non-idempotent send. */
export function isSendRequest(method: string, pathname: string): boolean {
  if (method.toUpperCase() !== 'POST') return false;
  return SEND_POST_PATTERNS.some((pattern) => pattern.test(pathname));
}
