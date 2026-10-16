import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type ContactId = PathParams<'/api/v1/contacts/{contact}/message', 'POST'>['contact'];
type MessageId = PathParams<'/api/v1/contacts/{contact}/messages/{message}/forward', 'POST'>['message'];
type HistoryContactId = PathParams<'/api/v1/contacts/{contactId}/messages', 'GET'>['contactId'];
type ShowPath = '/api/v1/contacts/{contact}/messages/{message}';
type SendMessageBody = Body<'/api/v1/contacts/{contact}/message', 'POST'>;

/** Body of {@link Messages.send}: `contact_id` is optional, it defaults to the contact of the route. */
export type SendMessageParams = Omit<SendMessageBody, 'contact_id'> & { contact_id?: SendMessageBody['contact_id'] };

/**
 * Messages to one contact (conversations area): send text, files and buttons, read the history or
 * one message by id, forward, react.
 *
 * Sending with an API key needs the `conversations:send` permission and is subject to the
 * WhatsApp rules: `422 window_closed`, `422 antiblock_*`, `422 recipient_*` and
 * `429 rate_limited` (with `retryAfter`). A rejected send stores nothing. Send operations are
 * never retried automatically unless you pass `retrySend: true`.
 */
export class Messages extends Resource {
  /**
   * `POST /api/v1/contacts/{contact}/message`: text, a file (`file` with a URL) or buttons and
   * lists (`options`). Resolves to `{ message }`: the registered message, with its `id` and
   * `status: 'queued'`, or `null` while the API answers `204`.
   *
   * Send `phone` (or `whatsapp_id`) of the same contact: the API validates it. `client_reference`
   * (pending of the spec) comes back in the history and in `message.status_changed`.
   *
   * The response is PENDING OF THE SPEC (conversations `feat/envio-devuelve-id` @ d3ac33994, a
   * local branch with no PR yet): its shape may change.
   */
  send(contact: ContactId, body: SendMessageParams, options?: RequestOptions) {
    const fullBody = { ...body, contact_id: body.contact_id ?? contact } as SendMessageBody;
    return this.client.request('POST', '/api/v1/contacts/{contact}/message', { ...options, path: { contact }, body: fullBody });
  }

  /**
   * `GET /api/v1/contacts/{contact}/messages/{message}`: one message by the id a send or a webhook
   * gave you (`message_id` of `message.status_changed`). Accepted is not delivered: `status` moves
   * from `queued` to `sent`, `delivered`, `read` or `failed`.
   *
   * PENDING OF THE SPEC: the route comes from conversations `feat/envio-devuelve-id` @ d3ac33994
   * (a local branch with no PR yet). Until it is deployed it does not exist.
   */
  get(contact: PathParams<ShowPath, 'GET'>['contact'], message: PathParams<ShowPath, 'GET'>['message'], options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/contacts/{contact}/messages/{message}', { ...options, path: { contact, message } });
  }

  /** `GET /api/v1/contacts/{contactId}/messages`, paginated by cursor: the history of a contact. */
  list(contactId: HistoryContactId, query?: Query<'/api/v1/contacts/{contactId}/messages'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/contacts/{contactId}/messages', { ...options, path: { contactId }, query });
  }

  /**
   * `POST /api/v1/contacts/{contact}/message/contact-card`: sends up to 5 contact cards. Resolves to
   * `{ messages }`, one entry per card in order (the first is the message; the others a `queued` or
   * `failed` mark without id), or `null` while the API answers `204`. Pending of the spec, like `send`.
   */
  sendContactCard(contact: ContactId, body: Body<'/api/v1/contacts/{contact}/message/contact-card', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts/{contact}/message/contact-card', { ...options, path: { contact }, body });
  }

  /**
   * `POST /api/v1/contacts/{contact}/messages/{message}/forward`: forwards a message to up to 5
   * contacts. Resolves to one item per destination, in order, each with its `message` (or `null`).
   * Pending of the spec, like `send`.
   */
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
