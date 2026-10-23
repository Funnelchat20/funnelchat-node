/**
 * The stable `error` codes of the API (`APIError.code`), with their HTTP status. Decide by `status`
 * and `code`, never by `message`: its text and language change by area.
 *
 * Sources (production, 22-10): platform-gate v0.8.0 as pinned by accounts v1.4.24; api-edge v0.3.0
 * (src/index.ts); conversations v1.18.10 (Message/Services/ApiSendGuard.php,
 * Message/Support/ApiKeySendResponse.php, WhatsappForm/Support/FormSendPreflight.php). The spec
 * does not document most of them yet; when it does, this list can be generated. The codes of
 * creating and connecting numbers come from contract 1022-alta-de-numeros v0.1 (23-10-2026, with
 * its amendment from accounts feat/alta-de-numeros-api 52d49b319), not from production yet.
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
 * Rejections of creating a number (`devices.create`), asking for its QR (`devices.qr`) or creating,
 * reading or revoking a connect link: nothing was created. The quota of the plan is the same as in
 * the panel. A code that comes with two statuses has the one of the create here; the other is noted.
 */
export const NUMBER_ERROR_CODES = {
  /** 403: the plan of the account does not include numbers. */
  numbers_not_included: 403,
  /** 403: the account already uses every number of its plan (`limit`, `used`, `pending_device_ids` in the body). */
  number_limit_reached: 403,
  /** 403: the account cannot connect numbers now. */
  connect_not_allowed: 403,
  /** 403: `devices.qr` of a number whose payment is due. */
  payment_required: 403,
  /**
   * 409: the account already has a QR number waiting to be scanned (at most one): its `device_id`
   * comes in the body. Show that one's QR, or delete it, instead of creating another.
   */
  pending_number_exists: 409,
  /** 422 (409 on `devices.qr`): QR can only be added to an official number that is in coexistence. */
  qr_requires_coexistence: 422,
  /** 422: the number already has that connection method; the body brings its `device_id`. */
  method_already_present: 422,
  /** 422: `same_number_as` or `device_id` is not a number of the account that can take it. */
  invalid_reference_device: 422,
  /** 422: a connect link with `device_id` of a number that connects another way than `type`. */
  connection_type_mismatch: 422,
  /** 422 (409 on `devices.qr`): the number is suspended because the plan has fewer numbers than the account uses. */
  number_suspended_by_plan: 422,
  /** 422: the body is not valid; `errors` says which fields. */
  invalid_request: 422,
  /** 409: `devices.qr` of a trial number that is blocked. */
  trial_number_blocked: 409,
  /** 409: `devices.qr` of a number that is turned off. */
  device_inactive: 409,
  /** 409: `devices.qr` when no more QR sessions can be started now. */
  provisioning_quota_exceeded: 409,
  /** 409: revoking a connect link that is no longer `pending`. */
  link_not_pending: 409,
  /** 429: the account has 20 connect links open. Revoke some, or wait for them to end. Not worth retrying. */
  too_many_open_links: 429,
  /** 500 (502 on `devices.qr`): the WhatsApp provider failed. */
  provider_error: 500,
  /** 503: official numbers (`type: 'meta'`) cannot be connected by link yet. QR links work. Not worth retrying. */
  meta_connect_disabled: 503,
  /** 403: the connect page was opened with an API key or a session. The page is for your customer, without credentials. */
  credentials_not_allowed: 403,
} as const;

/** Rejections of a create sent with `idempotencyKey`. */
export const IDEMPOTENCY_ERROR_CODES = {
  /** 422: the key was already used with another body. Use a new key for a new resource. */
  idempotency_key_mismatch: 422,
  /** 422: the key is not 1 to 255 characters. */
  invalid_idempotency_key: 422,
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

const QUOTA_CODES: ReadonlySet<string> = new Set([
  'numbers_not_included',
  'number_limit_reached',
  'pending_number_exists',
  'qr_requires_coexistence',
  'method_already_present',
]);

/** Whether an `APIError.code` is a rejection by the number quota of the plan (the same as the panel's). */
export function isNumberQuotaError(
  code: string | undefined,
): code is 'numbers_not_included' | 'number_limit_reached' | 'pending_number_exists' | 'qr_requires_coexistence' | 'method_already_present' {
  return code !== undefined && QUOTA_CODES.has(code);
}

/**
 * Codes that a retry would only repeat: a `429` for the monthly active contacts or for the open
 * connect links is not a pace, and `503 meta_connect_disabled` is a switch, not an outage; so they
 * are never retried automatically.
 */
export const NOT_RETRYABLE_CODES: ReadonlySet<string> = new Set(['mac_lockout_24h', 'mac_limit_reached', 'too_many_open_links', 'meta_connect_disabled']);
