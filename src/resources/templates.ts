import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type TemplateId = PathParams<'/api/v1/templates/{template}', 'GET'>['template'];
type SendPath = '/api/v1/devices/{device}/templates/{template}/send-template';
type DeviceId = PathParams<SendPath, 'POST'>['device'];
type SendTemplateId = PathParams<SendPath, 'POST'>['template'];
type DeleteTemplateId = PathParams<'/api/v1/devices/{device}/templates/{template}', 'DELETE'>['template'];
type SyncDeviceId = PathParams<'/api/v1/devices/{device}/templates', 'POST'>['device'];

/** WhatsApp message templates (conversations area): list, bring from Meta, create, edit, send. */
export class Templates extends Resource {
  /** `GET /api/v1/templates`, paginated. */
  list(query?: Query<'/api/v1/templates'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/templates', { ...options, query });
  }

  /**
   * `POST /api/v1/devices/{device}/templates`: brings the templates an official number has in Meta,
   * such as one you just created there, so you can list and send them. No body. Resolves to
   * `{ status }`: `completed` when it is done, or `in_progress` when the first page (up to 100) is
   * in and the rest keeps coming in the background: list again in a few seconds. It also drops the
   * templates of a WhatsApp Business account the number no longer uses.
   *
   * Needs **Contacts and conversations → Edit**. Errors (`TEMPLATE_ERROR_CODES`): `404` (the number
   * is not in the key's workspace), `409 template_sync_in_progress` (one is already running for that
   * number: do not start another), `422 number_not_connected_to_meta` (a QR number, or one without
   * its WhatsApp Business account or credentials), `422 meta_rejected` (Meta refused; `meta_code`
   * in `APIError.body`, nothing was brought) and `502 meta_unavailable` (Meta did not answer).
   */
  sync(device: SyncDeviceId, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/devices/{device}/templates', { ...options, path: { device } });
  }

  /** `POST /api/v1/templates`: creates a template and submits it to Meta. */
  create(body: Body<'/api/v1/templates', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/templates', { ...options, body });
  }

  /** `GET /api/v1/templates/{template}`. */
  retrieve(template: TemplateId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/templates/{template}', { ...options, path: { template } });
  }

  /** `PUT /api/v1/templates/{template}`. */
  update(template: TemplateId, body: Body<'/api/v1/templates/{template}', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/templates/{template}', { ...options, path: { template }, body });
  }

  /**
   * `POST /api/v1/devices/{device}/templates/{template}/send-template`: sends an approved template
   * (the way to write to a contact outside the 24-hour window). `phone` and `contact_id` are
   * required; `template_variables.body` fills the body variables in order.
   *
   * Resolves to `{ message }`, the registered message with `status: 'queued'`. A variable that
   * points to a field that does not exist is a `422 template_unresolved_placeholder` with
   * `placeholders` and `count` in `APIError.body`; a template this account cannot send,
   * `404 template_not_found`. Like every send, it is never retried automatically.
   */
  send(device: DeviceId, template: SendTemplateId, body: Body<SendPath, 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/devices/{device}/templates/{template}/send-template', {
      ...options,
      path: { device, template },
      body,
    });
  }

  /** `DELETE /api/v1/devices/{device}/templates/{template}`. */
  delete(device: DeviceId, template: DeleteTemplateId, options?: RequestOptions) {
    return this.client.request('DELETE', '/api/v1/devices/{device}/templates/{template}', { ...options, path: { device, template } });
  }
}
