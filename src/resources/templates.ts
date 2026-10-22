import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type TemplateId = PathParams<'/api/v1/templates/{template}', 'GET'>['template'];
type SendPath = '/api/v1/devices/{device}/templates/{template}/send-template';
type DeviceId = PathParams<SendPath, 'POST'>['device'];
type SendTemplateId = PathParams<SendPath, 'POST'>['template'];
type DeleteTemplateId = PathParams<'/api/v1/devices/{device}/templates/{template}', 'DELETE'>['template'];

/** WhatsApp message templates (conversations area): list, create, edit, send. */
export class Templates extends Resource {
  /** `GET /api/v1/templates`, paginated. */
  list(query?: Query<'/api/v1/templates'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/templates', { ...options, query });
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

  /** `GET /api/v1/templates/{template}/quick-reply-buttons`. */
  quickReplyButtons(template: TemplateId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/templates/{template}/quick-reply-buttons', { ...options, path: { template } });
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
