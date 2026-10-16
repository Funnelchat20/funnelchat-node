import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type CustomFieldId = PathParams<'/api/v1/custom-fields/{customField}', 'GET'>['customField'];

/** Custom fields of contacts (conversations area). To set a value on a contact, see `contacts.attachCustomField`. */
export class CustomFields extends Resource {
  /** `GET /api/v1/custom-fields`, paginated. */
  list(query?: Query<'/api/v1/custom-fields'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/custom-fields', { ...options, query });
  }

  /** `POST /api/v1/custom-fields`. */
  create(body: Body<'/api/v1/custom-fields', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/custom-fields', { ...options, body });
  }

  /** `GET /api/v1/custom-fields/{customField}`. */
  retrieve(customField: CustomFieldId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/custom-fields/{customField}', { ...options, path: { customField } });
  }

  /** `PUT /api/v1/custom-fields/{customField}`. */
  update(customField: CustomFieldId, body: Body<'/api/v1/custom-fields/{customField}', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/custom-fields/{customField}', { ...options, path: { customField }, body });
  }

  /** `POST /api/v1/custom-fields/delete`. */
  delete(body: Body<'/api/v1/custom-fields/delete', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/custom-fields/delete', { ...options, body });
  }
}
