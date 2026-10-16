import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type ContactId = PathParams<'/api/v1/contacts/{contact}', 'GET'>['contact'];
type DeviceId = PathParams<'/api/v1/devices/{device}/contacts', 'GET'>['device'];
type NoteId = PathParams<'/api/v1/contacts/{contact}/notes/{note}', 'DELETE'>['note'];

/** Contacts (conversations area): search, create, update, custom fields, notes and the 24-hour window. */
export class Contacts extends Resource {
  /** `GET /api/v1/contacts`, paginated. Filter by `phone` without the `+`. */
  list(query?: Query<'/api/v1/contacts'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/contacts', { ...options, query });
  }

  /** `POST /api/v1/contacts`. */
  create(body: Body<'/api/v1/contacts', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts', { ...options, body });
  }

  /** `POST /api/v1/contacts/update-or-create`: creates the contact or updates the one with that phone. */
  upsert(body: Body<'/api/v1/contacts/update-or-create', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts/update-or-create', { ...options, body });
  }

  /** `GET /api/v1/contacts/{contact}`. */
  retrieve(contact: ContactId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/contacts/{contact}', { ...options, path: { contact } });
  }

  /** `PUT /api/v1/contacts/{contact}`. */
  update(contact: ContactId, body: Body<'/api/v1/contacts/{contact}', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/contacts/{contact}', { ...options, path: { contact }, body });
  }

  /** `POST /api/v1/contacts/delete`: deletes the contacts of the body (`contactIds`, or a filter). */
  delete(body: Body<'/api/v1/contacts/delete', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts/delete', { ...options, body });
  }

  /** `GET /api/v1/contacts/{contact}/tags`, paginated. */
  listTags(contact: ContactId, query?: Query<'/api/v1/contacts/{contact}/tags'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/contacts/{contact}/tags', { ...options, path: { contact }, query });
  }

  /** `GET /api/v1/contacts/{contact}/custom-fields`, paginated. */
  listCustomFields(contact: ContactId, query?: Query<'/api/v1/contacts/{contact}/custom-fields'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/contacts/{contact}/custom-fields', { ...options, path: { contact }, query });
  }

  /** `POST /api/v1/contacts/attach-custom-field`: sets a custom field on contacts. */
  attachCustomField(body: Body<'/api/v1/contacts/attach-custom-field', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts/attach-custom-field', { ...options, body });
  }

  /** `POST /api/v1/contacts/detach-custom-field`. */
  detachCustomField(body: Body<'/api/v1/contacts/detach-custom-field', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts/detach-custom-field', { ...options, body });
  }

  /**
   * `GET /api/v1/contacts/{contact}/meta-window`: whether the 24-hour window with the contact is
   * open on a WhatsApp Cloud number (`is_open`). Outside it, only templates can be sent.
   */
  metaWindow(contact: ContactId, query: Query<'/api/v1/contacts/{contact}/meta-window'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/contacts/{contact}/meta-window', { ...options, path: { contact }, query });
  }

  /** `GET /api/v1/devices/{device}/contacts`, paginated: the contacts of one number. */
  listByDevice(device: DeviceId, query?: Query<'/api/v1/devices/{device}/contacts'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/devices/{device}/contacts', { ...options, path: { device }, query });
  }

  /** `GET /api/v1/contacts/{contact}/notes`, paginated. */
  listNotes(contact: ContactId, query?: Query<'/api/v1/contacts/{contact}/notes'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/contacts/{contact}/notes', { ...options, path: { contact }, query });
  }

  /** `POST /api/v1/contacts/{contact}/notes`. */
  createNote(contact: ContactId, body: Body<'/api/v1/contacts/{contact}/notes', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts/{contact}/notes', { ...options, path: { contact }, body });
  }

  /** `DELETE /api/v1/contacts/{contact}/notes/{note}`. */
  deleteNote(contact: ContactId, note: NoteId, options?: RequestOptions) {
    return this.client.request('DELETE', '/api/v1/contacts/{contact}/notes/{note}', { ...options, path: { contact, note } });
  }
}
