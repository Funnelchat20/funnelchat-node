import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type ContactId = PathParams<'/api/v1/contacts/{contact}/update', 'PUT'>['contact'];

/** Conversations (conversations area): the inbox, its counters and the state of each conversation. */
export class Conversations extends Resource {
  /** `GET /api/v1/conversations`, paginated by cursor. */
  list(query?: Query<'/api/v1/conversations'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/conversations', { ...options, query });
  }

  /** `PUT /api/v1/contacts/{contact}/update`: changes the conversation with a contact (open, assigned…). */
  update(contact: ContactId, body: Body<'/api/v1/contacts/{contact}/update', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/contacts/{contact}/update', { ...options, path: { contact }, body });
  }

  /** `GET /api/v1/conversations/count/unread`. */
  countUnread(query?: Query<'/api/v1/conversations/count/unread'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/conversations/count/unread', { ...options, query });
  }

  /** `GET /api/v1/conversations/count/open`. */
  countOpen(query?: Query<'/api/v1/conversations/count/open'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/conversations/count/open', { ...options, query });
  }

  /** `GET /api/v1/conversations/count/closed`. */
  countClosed(query?: Query<'/api/v1/conversations/count/closed'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/conversations/count/closed', { ...options, query });
  }

  /** `GET /api/v1/conversations/count/all`. */
  countAll(query?: Query<'/api/v1/conversations/count/all'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/conversations/count/all', { ...options, query });
  }

  /** `POST /api/v1/conversations/mark-all-read`. */
  markAllRead(body?: Body<'/api/v1/conversations/mark-all-read', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/conversations/mark-all-read', { ...options, body });
  }

  /** `POST /api/v1/conversations/mark-all-unread`. */
  markAllUnread(body?: Body<'/api/v1/conversations/mark-all-unread', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/conversations/mark-all-unread', { ...options, body });
  }
}
