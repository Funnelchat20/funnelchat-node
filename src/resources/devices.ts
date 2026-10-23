import type { Body, IdempotentRequestOptions, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type DeviceId = PathParams<'/api/v1/devices/{device}', 'GET'>['device'];

/** WhatsApp numbers of the account (accounts area). The `id` of a number is the `device_id` used to send. */
export class Devices extends Resource {
  /**
   * `GET /api/v1/devices`. Iterate it with `for await`, or `await` it for the first page.
   * `external_reference` keeps only the numbers with that reference (exact match).
   */
  list(query?: Query<'/api/v1/devices'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/devices', { ...options, query });
  }

  /**
   * `POST /api/v1/devices`: creates a number that connects by QR code (`connection: 'qr'`), with
   * `connected: false`. Then show its QR with `qr`, or send your customer a connect link
   * (`connectLinks.create`). Needs `accounts:operate`. It takes a slot of the plan, with the panel's
   * rejections: `403 numbers_not_included`, `403 number_limit_reached`, `422 qr_requires_coexistence`
   * and `422 method_already_present` (`same_number_as` adds QR to a number in coexistence instead).
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

  /** `PUT /api/v1/devices/{device}`: also changes `external_reference`. */
  update(device: DeviceId, body: Body<'/api/v1/devices/{device}', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/devices/{device}', { ...options, path: { device }, body });
  }

  /**
   * `GET /api/v1/devices/{device}/qr`: the QR code to scan, as a PNG data URI (`qr_code`), or `null`
   * once `connected`. Ask again after `expires_in` seconds. Only for QR numbers (an official one is
   * `422 provider_unsupported`); needs `accounts:operate`, since scanning it gives control of a WhatsApp.
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
