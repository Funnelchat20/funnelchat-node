import type { PagePromise } from '../core/pagination.js';
import type { Body, IdempotentRequestOptions, ListItem, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type DeviceId = PathParams<'/api/v1/devices/{device}', 'GET'>['device'];
type Device = ListItem<'/api/v1/devices'>;

const REQUEST_OPTION_KEYS: ReadonlySet<string> = new Set(['headers', 'timeoutMs', 'maxRetries', 'retrySend', 'signal']);

/** Whether a lone argument is the options of the 0.1.2 signature `list(options)`: only request-option keys. */
function isRequestOptions(value: unknown): value is RequestOptions {
  if (typeof value !== 'object' || value === null) return false;
  const keys = Object.keys(value);
  return keys.length > 0 && keys.every((key) => REQUEST_OPTION_KEYS.has(key));
}

/** WhatsApp numbers of the account (accounts area). The `id` of a number is the `device_id` used to send. */
export class Devices extends Resource {
  /**
   * `GET /api/v1/devices`. Iterate it with `for await`, or `await` it for the first page.
   * `external_reference` keeps only the numbers with that reference (exact match).
   */
  list(query?: Query<'/api/v1/devices'>, options?: RequestOptions): PagePromise<Device>;
  /** @deprecated The 0.1.2 signature, still supported: pass the options second, `list({}, options)`. */
  list(options: RequestOptions): PagePromise<Device>;
  list(queryOrOptions?: Query<'/api/v1/devices'> | RequestOptions, options?: RequestOptions): PagePromise<Device> {
    if (options === undefined && isRequestOptions(queryOrOptions)) return this.client.paginate('/api/v1/devices', { ...queryOrOptions });
    return this.client.paginate('/api/v1/devices', { ...options, query: queryOrOptions as Query<'/api/v1/devices'> | undefined });
  }

  /**
   * `POST /api/v1/devices`: creates a number that connects by QR code (`connection: 'qr'`), with
   * `connected: false`. Then show its QR with `qr`, or send your customer a connect link
   * (`connectLinks.create`). Needs **WhatsApp numbers → Create, connect and delete**.
   * It takes a slot of the plan, with the panel's
   * rejections: `403 numbers_not_included`, `403 number_limit_reached`, `422 qr_requires_coexistence`
   * and `422 method_already_present` (`same_number_as` adds QR to a number in coexistence instead).
   * An account has at most one QR number waiting to be scanned: another one is `409
   * pending_number_exists`, with that number's `device_id` in `error.body`. `country` (two letters,
   * such as `'br'`) is the country of the phone that will scan the QR: the WhatsApp session is opened
   * from there.
   */
  create(body: Body<'/api/v1/devices', 'POST'>, options?: IdempotentRequestOptions) {
    return this.client.request('POST', '/api/v1/devices', { ...this.idempotent(options), body });
  }

  /**
   * `GET /api/v1/devices/{device}`. `capabilities` says what the number can do by API: message
   * types (`messages`) and the statuses `message.status_changed` reports (`statuses`).
   */
  retrieve(device: DeviceId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/devices/{device}', { ...options, path: { device } });
  }

  /**
   * `DELETE /api/v1/devices/{device}`: deletes the number and frees its slot of the plan. An
   * official number stops receiving through Funnelchat but stays registered with Meta; a QR one
   * logs out. Irreversible; needs **WhatsApp numbers → Create, connect and delete**.
   * Sends `device.deleted`.
   */
  delete(device: DeviceId, options?: RequestOptions) {
    return this.client.request('DELETE', '/api/v1/devices/{device}', { ...options, path: { device } });
  }

  /** `PUT /api/v1/devices/{device}`: also changes `external_reference`. */
  update(device: DeviceId, body: Body<'/api/v1/devices/{device}', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/devices/{device}', { ...options, path: { device }, body });
  }

  /**
   * `GET /api/v1/devices/{device}/qr`: the QR code to scan, as a PNG data URI (`qr_code`), or `null`
   * once `connected`. Ask for it every `expires_in` seconds (5 with a QR, 3 while the session starts,
   * 0 once connected) and have it scanned right away: WhatsApp changes the code every few seconds and
   * an old one no longer links, so show the latest and never store or forward a QR. Only for QR
   * numbers (an official one is `422 provider_unsupported`); needs
   * **WhatsApp numbers → Create, connect and delete**, since scanning it gives
   * control of a WhatsApp. A number that cannot connect now
   * answers `409` (`trial_number_blocked`, `number_suspended_by_plan`, `device_inactive`…).
   */
  qr(device: DeviceId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/devices/{device}/qr', { ...options, path: { device } });
  }

  /** `GET /api/v1/devices/{device}/status`: connection status. */
  status(device: DeviceId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/devices/{device}/status', { ...options, path: { device } });
  }

  /** `GET /api/v1/devices/{device}/health`. */
  health(device: DeviceId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/devices/{device}/health', { ...options, path: { device } });
  }

  /** `GET /api/v1/devices/{device}/me`: the WhatsApp profile of the number. */
  me(device: DeviceId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/devices/{device}/me', { ...options, path: { device } });
  }

  /** `GET /api/v1/devices/{device}/check-phone`: whether a phone has WhatsApp. */
  checkPhone(device: DeviceId, query: Query<'/api/v1/devices/{device}/check-phone'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/devices/{device}/check-phone', { ...options, path: { device }, query });
  }

  /** `GET /api/v1/devices/{device}/connection-history`, paginated. */
  listConnectionHistory(device: DeviceId, query?: Query<'/api/v1/devices/{device}/connection-history'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/devices/{device}/connection-history', { ...options, path: { device }, query });
  }
}
