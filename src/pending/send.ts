/**
 * PENDING OF THE SPEC — the error codes of sending with an API key (contract 1014, C2).
 *
 * Source: conversations `feat/armar-funnelchat-f1` @ eadef46c (PR #2284, NOT merged):
 * `ApiSendRejection`, `ApiSendGuardSurface` and `lang/es/public_api.php`. Until that change is
 * deployed, every send route answers `403 route_not_available` to any key. When a snapshot
 * documents these codes, this list can be generated instead.
 */
export const SEND_ERROR_CODES = {
  /** 429, with `Retry-After`: the number's pace (per second, or per minute to the same contact). */
  rate_limited: 429,
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
} as const;

/** An error code of a send rejected by the WhatsApp rules (`APIError.code`). */
export type SendErrorCode = keyof typeof SEND_ERROR_CODES;

/** Whether an `APIError.code` is one of the send rules: nothing was sent and nothing was stored. */
export function isSendRuleError(code: string | undefined): code is SendErrorCode {
  return code !== undefined && Object.prototype.hasOwnProperty.call(SEND_ERROR_CODES, code);
}
