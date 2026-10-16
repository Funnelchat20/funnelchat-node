import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type TagId = PathParams<'/api/v1/tags/{tag}', 'GET'>['tag'];

/** Tags (conversations area). */
export class Tags extends Resource {
  /** `GET /api/v1/tags`, paginated. */
  list(query?: Query<'/api/v1/tags'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/tags', { ...options, query });
  }

  /** `POST /api/v1/tags`. */
  create(body: Body<'/api/v1/tags', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/tags', { ...options, body });
  }

  /** `GET /api/v1/tags/{tag}`. */
  retrieve(tag: TagId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/tags/{tag}', { ...options, path: { tag } });
  }

  /** `PUT /api/v1/tags/{tag}`. */
  update(tag: TagId, body: Body<'/api/v1/tags/{tag}', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/tags/{tag}', { ...options, path: { tag }, body });
  }

  /** `POST /api/v1/tags/delete`: deletes the tags in `tagIds`. */
  delete(body: Body<'/api/v1/tags/delete', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/tags/delete', { ...options, body });
  }

  /** `GET /api/v1/tags/{tag}/contacts`, paginated: the contacts with a tag. */
  listContacts(tag: TagId, query?: Query<'/api/v1/tags/{tag}/contacts'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/tags/{tag}/contacts', { ...options, path: { tag }, query });
  }
}
