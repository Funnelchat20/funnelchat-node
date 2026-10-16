import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type ContactId = PathParams<'/api/v1/contacts/{contact}/message', 'POST'>['contact'];
type MessageId = PathParams<'/api/v1/contacts/{contact}/messages/{message}/forward', 'POST'>['message'];
type HistoryContactId = PathParams<'/api/v1/contacts/{contactId}/messages', 'GET'>['contactId'];
type SendMessageBody = Body<'/api/v1/contacts/{contact}/message', 'POST'>;

/** Body of {@link Messages.send}: `contact_id` is optional, it defaults to the contact of the route. */
export type SendMessageParams = Omit<SendMessageBody, 'contact_id'> & { contact_id?: SendMessageBody['contact_id'] };

/**
 * Messages to one contact (conversations area): send text, files and buttons, read the history,
 * forward, react.
 *
 * Sending with an API key needs the `conversations:send` permission and is subject to the
 * WhatsApp rules: `422 window_closed`, `422 antiblock_*`, `422 recipient_*` and
 * `429 rate_limited` (with `retryAfter`). A rejected send stores nothing. Send operations are
 * never retried automatically unless you pass `retrySend: true`.
 */
export class Messages extends Resource {
  /**
   * `POST /api/v1/contacts/{contact}/message`: text, a file (`file` with a URL) or buttons and
   * lists (`options`). Answers `204` with no body.
   *
   * Send `phone` (or `whatsapp_id`) of the same contact: the API validates it. `client_reference`
   * (pending of the spec) comes back in the history and in `message.status_changed`.
   */
  send(contact: ContactId, body: SendMessageParams, options?: RequestOptions) {
    const fullBody = { ...body, contact_id: body.contact_id ?? contact } as SendMessageBody;
    return this.client.request('POST', '/api/v1/contacts/{contact}/message', { ...options, path: { contact }, body: fullBody });
  }

  /** `GET /api/v1/contacts/{contactId}/messages`, paginated by cursor: the history of a contact. */
  list(contactId: HistoryContactId, query?: Query<'/api/v1/contacts/{contactId}/messages'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/contacts/{contactId}/messages', { ...options, path: { contactId }, query });
  }

  /** `POST /api/v1/contacts/{contact}/message/contact-card`: sends up to 5 contact cards. */
  sendContactCard(contact: ContactId, body: Body<'/api/v1/contacts/{contact}/message/contact-card', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts/{contact}/message/contact-card', { ...options, path: { contact }, body });
  }

  /** `POST /api/v1/contacts/{contact}/messages/{message}/forward`: forwards a message to up to 5 contacts. */
  forward(
    contact: ContactId,
    message: MessageId,
    body: Body<'/api/v1/contacts/{contact}/messages/{message}/forward', 'POST'>,
    options?: RequestOptions,
  ) {
    return this.client.request('POST', '/api/v1/contacts/{contact}/messages/{message}/forward', {
      ...options,
      path: { contact, message },
      body,
    });
  }

  /** `PUT /api/v1/contacts/{contact}/messages/{message}/reaction`: reacts with an emoji. */
  react(
    contact: ContactId,
    message: MessageId,
    body: Body<'/api/v1/contacts/{contact}/messages/{message}/reaction', 'PUT'>,
    options?: RequestOptions,
  ) {
    return this.client.request('PUT', '/api/v1/contacts/{contact}/messages/{message}/reaction', {
      ...options,
      path: { contact, message },
      body,
    });
  }

  /** `DELETE /api/v1/contacts/{contact}/messages/{message}/reaction`: removes your reaction. */
  removeReaction(contact: ContactId, message: MessageId, options?: RequestOptions) {
    return this.client.request('DELETE', '/api/v1/contacts/{contact}/messages/{message}/reaction', {
      ...options,
      path: { contact, message },
    });
  }
}
