import type { Body, IdempotentRequestOptions, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type LinkId = PathParams<'/api/v1/connect-links/{link}', 'GET'>['link'];

/**
 * Connect links (accounts area): a single-use page, on the Funnelchat domain, where your customer
 * connects a WhatsApp number to your account, by QR code (`type: 'qr'`) or as an official number
 * through the Meta sign-up (`type: 'meta'`). The number is created when the page finishes; with
 * `device_id` the link reconnects that number instead, without taking a new slot. The Meta sign-up
 * is not available in production yet: `type: 'meta'` answers `503 meta_connect_disabled` until it is.
 *
 * Reading needs `accounts:read`; creating and revoking, `accounts:operate`. The result arrives three
 * ways: the `device.connected` webhook (with `connect_link_id` and `external_reference`), the
 * `return_url`, or `get`. The other `device.*` events carry the link that last connected the number.
 *
 * Errors of their own (`APIError.code`): the rejections of `devices.create`, `429
 * too_many_open_links` (20 open links per account), `503 meta_connect_disabled`, `422
 * connection_type_mismatch` (`device_id` of a number that connects another way) and `409
 * link_not_pending` (revoking a link that already ended).
 */
export class ConnectLinks extends Resource {
  /**
   * `POST /api/v1/connect-links`. `url` is the page to send your customer to: it carries the token
   * and comes only in this response.
   *
   * `provision_us_number` (a US number of the pool, always dedicated) needs `dedicated` in
   * `allowed_connection_types` and does not go with `device_id`: otherwise `422 invalid_request`.
   * A Meta link stays `pending` after a failure of Facebook or Meta, so your customer can try again;
   * the fifth failed attempt turns it `failed`.
   *
   * `country` (only `qr`, not with `device_id`) is the country of the phone that will scan the QR, in
   * two letters: the WhatsApp session is opened from there. The link returns it, lowercase.
   */
  create(body: Body<'/api/v1/connect-links', 'POST'>, options?: IdempotentRequestOptions) {
    return this.client.request('POST', '/api/v1/connect-links', { ...this.idempotent(options), body });
  }

  /** `GET /api/v1/connect-links/{link}`: its `status`, and `device_id` and `error_code` once it ends. */
  get(link: LinkId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/connect-links/{link}', { ...options, path: { link } });
  }

  /** `GET /api/v1/connect-links`, paginated, newest first: filter by `status` or `external_reference`. */
  list(query?: Query<'/api/v1/connect-links'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/connect-links', { ...options, query });
  }

  /** `DELETE /api/v1/connect-links/{link}`: revokes a `pending` link (any other is `409 link_not_pending`). */
  revoke(link: LinkId, options?: RequestOptions) {
    return this.client.request('DELETE', '/api/v1/connect-links/{link}', { ...options, path: { link } });
  }
}
