/**
 * The stable `error` codes of the API (`APIError.code`), with their HTTP status. Decide by `status`
 * and `code`, never by `message`: its text and language change by area.
 *
 * Sources (production, 22-10): platform-gate v0.8.0 as pinned by accounts v1.4.24; api-edge v0.3.0
 * (src/index.ts); conversations v1.18.10 (Message/Services/ApiSendGuard.php,
 * Message/Support/ApiKeySendResponse.php, WhatsappForm/Support/FormSendPreflight.php). The spec
 * does not document most of them yet; when it does, this list can be generated. The codes of
 * creating and connecting numbers come from contract 1022-alta-de-numeros v0 (22-10-2026), not from
 * production yet.
 */

/** Errors of the API entry and of the key gate, on any route. */
export const ACCESS_ERROR_CODES = {
  /** 401: missing or invalid API key. */
  unauthenticated: 401,
  /** 403: the key lacks the permission the route needs (`message` names it). */
  permission_denied: 403,
  /** 403: the route is not open to API keys (or is turned off). */
  route_not_available: 403,
  /** 404: the path does not exist in the public API. Answered by the entry, before any area. */
  route_not_found: 404,
  /** 429, with `Retry-After`: the daily call cap of the key in that area. */
  daily_cap_exceeded: 429,
  /** 500: the entry is not configured to reach the area. Our problem: report it with the `X-Request-Id`. */
  edge_misconfigured: 500,
  /**
   * 502: the entry could not reach the area. There is no guarantee the area did not get the call:
   * after a write, read the state before repeating it.
   */
  origin_unreachable: 502,
  /** 503, with `Retry-After`: the gate could not evaluate the call and let nothing through. Safe to retry. */
  gate_unavailable: 503,
} as const;

/** Rejections of a send with an API key: nothing was sent and nothing was stored. */
export const SEND_ERROR_CODES = {
  /** 429, with `Retry-After`: the number's pace (per second, or per minute to the same contact). */
  rate_limited: 429,
  /** 429: the account is in the 24-hour lockout after using up its monthly active contacts (MAC). Not worth retrying. */
  mac_lockout_24h: 429,
  /** 429: the account used up its monthly active contacts (MAC). Not worth retrying. */
  mac_limit_reached: 429,
  /** 422: free text outside the 24-hour window on a WhatsApp Cloud number. Send a template. */
  window_closed: 422,
  /** 422: the same content sent too many times to a contact that did not answer. */
  antiblock_duplicate_content: 422,
  /** 422: too many messages in a row to a contact that did not answer. */
  antiblock_unanswered_limit: 422,
  /** 422: the `phone` / `whatsapp_id` of the body is not the contact of the route. */
  recipient_mismatch: 422,
  /** 422: the contact is a group, a broadcast list or a channel. */
  recipient_unsupported: 422,
  /** 422: the number cannot send this (see `capabilities` of the number). */
  provider_unsupported: 422,
  /** 422: the number is not connected or cannot send now. */
  device_unavailable: 422,
  /** 422: the message could not be registered for sending. */
  not_sent: 422,
  /** 422: the contact cannot be reached on WhatsApp (forms). */
  recipient_unreachable: 422,
  /** 422: a template variable points to a field that does not exist (`placeholders`, `count`). */
  template_unresolved_placeholder: 422,
  /** 404: the template is not one this account can send. */
  template_not_found: 404,
  /** 404: the form does not exist. */
  form_not_found: 404,
  /** 422: the form is not published. */
  form_not_published: 422,
  /** 422: the form is not published on that number. */
  form_not_on_number: 422,
  /** 422: the number cannot send forms. */
  number_not_eligible: 422,
} as const;

/**
 * Rejections of creating a number (`devices.create`) or a connect link (`connectLinks.create`):
 * nothing was created. The first four are the quota of the plan, the same as in the panel.
 */
export const NUMBER_ERROR_CODES = {
  /** 403: the plan of the account does not include numbers. */
  numbers_not_included: 403,
  /** 403: the account already uses every number of its plan. */
  number_limit_reached: 403,
  /** 422: QR can only be added to an official number that is in coexistence. */
  qr_requires_coexistence: 422,
  /** 422: the number already has that connection method; the body brings its `device_id`. */
  method_already_present: 422,
  /** 429: the account has 20 connect links open. Revoke some, or wait for them to end. Not worth retrying. */
  too_many_open_links: 429,
  /** 503: official numbers (`type: 'meta'`) cannot be connected by link yet. QR links work. Not worth retrying. */
  meta_connect_disabled: 503,
} as const;

/** Rejections of a create sent with `idempotencyKey`. */
export const IDEMPOTENCY_ERROR_CODES = {
  /** 422: the key was already used with another body. Use a new key for a new resource. */
  idempotency_key_mismatch: 422,
  /** 409: the first call with that key, or another operation on the number, is still running. Read the state, or repeat it later. */
  operation_in_progress: 409,
} as const;

export type AccessErrorCode = keyof typeof ACCESS_ERROR_CODES;
/** An error code of a send rejected by the WhatsApp rules (`APIError.code`). */
export type SendErrorCode = keyof typeof SEND_ERROR_CODES;
/** An error code of creating a number or a connect link (`APIError.code`). */
export type NumberErrorCode = keyof typeof NUMBER_ERROR_CODES;
export type IdempotencyErrorCode = keyof typeof IDEMPOTENCY_ERROR_CODES;
/** Every `error` code the SDK knows. The API can send others: treat `code` as a `string`. */
export type KnownErrorCode = AccessErrorCode | SendErrorCode | NumberErrorCode | IdempotencyErrorCode;

const has = (table: object, code: string | undefined): boolean => code !== undefined && Object.prototype.hasOwnProperty.call(table, code);

/** Whether an `APIError.code` is a rejection of a send: nothing was sent and nothing was stored. */
export function isSendRuleError(code: string | undefined): code is SendErrorCode {
  return has(SEND_ERROR_CODES, code);
}

const QUOTA_CODES: ReadonlySet<string> = new Set(['numbers_not_included', 'number_limit_reached', 'qr_requires_coexistence', 'method_already_present']);

/** Whether an `APIError.code` is a rejection by the number quota of the plan (the same as the panel's). */
export function isNumberQuotaError(code: string | undefined): code is 'numbers_not_included' | 'number_limit_reached' | 'qr_requires_coexistence' | 'method_already_present' {
  return code !== undefined && QUOTA_CODES.has(code);
}

/**
 * Codes that a retry would only repeat: a `429` for the monthly active contacts or for the open
 * connect links is not a pace, and `503 meta_connect_disabled` is a switch, not an outage; so they
 * are never retried automatically.
 */
export const NOT_RETRYABLE_CODES: ReadonlySet<string> = new Set(['mac_lockout_24h', 'mac_limit_reached', 'too_many_open_links', 'meta_connect_disabled']);
