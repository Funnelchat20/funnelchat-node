import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type FormId = PathParams<'/api/v1/forms/{id}', 'GET'>['id'];
type FamilyId = PathParams<'/api/v1/forms/families/{familyId}/versions', 'GET'>['familyId'];
type RunId = PathParams<'/api/v1/forms/families/{familyId}/responses/{runId}', 'GET'>['runId'];
type DeviceId = PathParams<'/api/v1/forms/{id}/numbers/{deviceId}', 'DELETE'>['deviceId'];

/**
 * WhatsApp forms (conversations area): build them, publish them on your numbers and read the
 * answers. Reading needs **Contacts and conversations → View** (`conversations:read`); the rest,
 * **Contacts and conversations → Edit** (`conversations:write`).
 *
 * Two ids: `id` is one version of a form; `family_id` is the form itself (every version). You send
 * a form by its `family_id` with `messages.sendForm`, and `whatsapp_form.completed` brings it as
 * `form.id`.
 *
 * Errors of their own (`APIError.code`): `422 LINT` (with `lint`), `409 PUBLISHED`, `409 STALE`
 * (someone saved first: `current` in the body), `502 META` (Meta rejected it: `meta_code`),
 * `422 NUMBER_NOT_ELIGIBLE`, `422 PRIMARY_NUMBER`.
 */
export class Forms extends Resource {
  /** `GET /api/v1/forms`, paginated: filter by `q`, `status` or `device_id`. */
  list(query?: Query<'/api/v1/forms'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/forms', { ...options, query });
  }

  /** `GET /api/v1/forms/templates`: the starting points `create` accepts as `template_key`. */
  templates(options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/forms/templates', { ...options });
  }

  /** `POST /api/v1/forms`: a new draft from a template, on `device_id` (and `device_ids`). */
  create(body: Body<'/api/v1/forms', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/forms', { ...options, body });
  }

  /** `GET /api/v1/forms/{id}`: one version, with `lint`, `versions` and `numbers`. */
  retrieve(id: FormId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/forms/{id}', { ...options, path: { id } });
  }

  /**
   * `PUT /api/v1/forms/{id}`: saves the `definition` of a draft. Pass the `updated_at` you read as
   * `expected_updated_at` to get `409 STALE` instead of overwriting someone else's change.
   */
  update(id: FormId, body: Body<'/api/v1/forms/{id}', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/forms/{id}', { ...options, path: { id }, body });
  }

  /** `DELETE /api/v1/forms/{id}`: deletes a draft (a published version answers `409 PUBLISHED`). */
  delete(id: FormId, options?: RequestOptions) {
    return this.client.request('DELETE', '/api/v1/forms/{id}', { ...options, path: { id } });
  }

  /** `POST /api/v1/forms/{id}/versions`: opens a draft of a published form, or returns the open one (`created: false`). */
  createVersion(id: FormId, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/forms/{id}/versions', { ...options, path: { id } });
  }

  /** `POST /api/v1/forms/{id}/sync`: uploads the draft to Meta without publishing it. */
  sync(id: FormId, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/forms/{id}/sync', { ...options, path: { id } });
  }

  /** `POST /api/v1/forms/{id}/publish`: publishes the version on its numbers. */
  publish(id: FormId, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/forms/{id}/publish', { ...options, path: { id } });
  }

  /** `GET /api/v1/forms/{id}/numbers`: where the form is (or is being) published. */
  numbers(id: FormId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/forms/{id}/numbers', { ...options, path: { id } });
  }

  /** `POST /api/v1/forms/{id}/numbers`: publishes it on one more number. */
  addNumber(id: FormId, body: Body<'/api/v1/forms/{id}/numbers', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/forms/{id}/numbers', { ...options, path: { id }, body });
  }

  /** `DELETE /api/v1/forms/{id}/numbers/{deviceId}`: takes it off a number (not the primary one). */
  removeNumber(id: FormId, deviceId: DeviceId, options?: RequestOptions) {
    return this.client.request('DELETE', '/api/v1/forms/{id}/numbers/{deviceId}', { ...options, path: { id, deviceId } });
  }

  /** `POST /api/v1/forms/{id}/numbers/retry`: retries the numbers whose publication failed. */
  retryNumbers(id: FormId, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/forms/{id}/numbers/retry', { ...options, path: { id } });
  }

  /** `GET /api/v1/forms/families/{familyId}/definition`: the current definition of a form, or `data: null`. */
  definition(familyId: FamilyId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/forms/families/{familyId}/definition', { ...options, path: { familyId } });
  }

  /** `GET /api/v1/forms/families/{familyId}/versions`: every version of a form. */
  versions(familyId: FamilyId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/forms/families/{familyId}/versions', { ...options, path: { familyId } });
  }

  /** `GET /api/v1/forms/families/{familyId}/responses`, paginated: the answers, with their `columns`. */
  listResponses(familyId: FamilyId, query?: Query<'/api/v1/forms/families/{familyId}/responses'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/forms/families/{familyId}/responses', { ...options, path: { familyId }, query });
  }

  /** `GET /api/v1/forms/families/{familyId}/responses/{runId}`: one answer. */
  retrieveResponse(familyId: FamilyId, runId: RunId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/forms/families/{familyId}/responses/{runId}', { ...options, path: { familyId, runId } });
  }

  /** `GET /api/v1/forms/families/{familyId}/metrics`: the funnel (sent, opened, completed). */
  metrics(familyId: FamilyId, query?: Query<'/api/v1/forms/families/{familyId}/metrics'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/forms/families/{familyId}/metrics', { ...options, path: { familyId }, query });
  }
}
