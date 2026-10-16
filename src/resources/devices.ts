import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type DeviceId = PathParams<'/api/v1/devices/{device}', 'GET'>['device'];

/** WhatsApp numbers of the account (accounts area). The `id` of a number is the `device_id` used to send. */
export class Devices extends Resource {
  /** `GET /api/v1/devices`. Iterate it with `for await`, or `await` it for the first page. */
  list(options?: RequestOptions) {
    return this.client.paginate('/api/v1/devices', { ...options });
  }

  /** `GET /api/v1/devices/{device}`. */
  retrieve(device: DeviceId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/devices/{device}', { ...options, path: { device } });
  }

  /** `PUT /api/v1/devices/{device}`. */
  update(device: DeviceId, body: Body<'/api/v1/devices/{device}', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/devices/{device}', { ...options, path: { device }, body });
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
