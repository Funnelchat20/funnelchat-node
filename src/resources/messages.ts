import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type ContactId = PathParams<'/api/v1/contacts/{contact}/message', 'POST'>['contact'];
type MessageId = PathParams<'/api/v1/contacts/{contact}/messages/{message}/forward', 'POST'>['message'];
type HistoryContactId = PathParams<'/api/v1/contacts/{contactId}/messages', 'GET'>['contactId'];
type ShowPath = '/api/v1/contacts/{contact}/messages/{message}';
type SendMessageBody = Body<'/api/v1/contacts/{contact}/message', 'POST'>;
type FormContactId = PathParams<'/api/v1/contacts/{contact}/message/form', 'POST'>['contact'];

/** Body of {@link Messages.send}: `contact_id` is optional, it defaults to the contact of the route. */
export type SendMessageParams = Omit<SendMessageBody, 'contact_id'> & { contact_id?: SendMessageBody['contact_id'] };

/**
 * Messages to one contact (conversations area): send text, files, buttons and forms, read the
 * history or one message by id, forward, react.
 *
 * Every send answers right away with the registered message, `status: 'queued'`: accepted is not
 * delivered. The rest arrives by `message.status_changed` (with the same `id` as `message_id`) or
 * with {@link Messages.get}.
 *
 * Sending with an API key needs **Contacts and conversations → Send** and
 * is subject to the WhatsApp rules: `422 window_closed`, `422 antiblock_*`, `422 recipient_*`,
 * `422 provider_unsupported`, `429 rate_limited` (with `retryAfter`) and `429 mac_lockout_24h`. A
 * rejected send stores nothing (see `SEND_ERROR_CODES`). Sends are never retried automatically
 * unless you pass `retrySend: true`.
 */
export class Messages extends Resource {
  /**
   * `POST /api/v1/contacts/{contact}/message`: text, a file or buttons and lists (`options`).
   * Resolves to `{ message }`: the registered message, with its `id` and `status: 'queued'`.
   *
   * - Send `phone` (or `whatsapp_id`) of the same contact: the API checks it (`422 recipient_mismatch`).
   * - `file` is a URL. When it does not end in a known extension (a signed URL, or one without
   *   extension), send `file_type` (`image`, `video`, `audio`, `document`, `sticker`), and
   *   `file_name` for a document: otherwise `422 errors.file_type` / `errors.file_name`. An
   *   unsupported extension without `file_type` is a `415` ({@link UnsupportedMediaTypeError}).
   * - `client_reference` (1–64 visible ASCII characters) comes back in the history and in
   *   `message.status_changed`.
   */
  send(contact: ContactId, body: SendMessageParams, options?: RequestOptions) {
    const fullBody = { ...body, contact_id: body.contact_id ?? contact } as SendMessageBody;
    return this.client.request('POST', '/api/v1/contacts/{contact}/message', { ...options, path: { contact }, body: fullBody });
  }

  /**
   * `POST /api/v1/message/send-message`: the same send with `device_id` and `contact_id` in the
   * body and no `phone` check. Resolves to `{ message }`.
   */
  sendDirect(body: Body<'/api/v1/message/send-message', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/message/send-message', { ...options, body });
  }

  /**
   * `POST /api/v1/contacts/{contact}/message/form`: sends a published WhatsApp form (`form_id` is
   * the form's `family_id`). Resolves to `{ message }` with `type: 'whatsapp_form'`; the answers
   * arrive by `whatsapp_form.completed`. It is a send: same rules as {@link Messages.send}.
   */
  sendForm(contact: FormContactId, body: Body<'/api/v1/contacts/{contact}/message/form', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts/{contact}/message/form', { ...options, path: { contact }, body });
  }

  /**
   * `GET /api/v1/contacts/{contact}/messages/{message}`: one message by the id a send or a webhook
   * gave you (`message_id` of `message.status_changed`). `status` moves from `queued` to `sent`,
   * `delivered`, `read` or `failed` (then `error` says why).
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
   * `{ messages }`, one message per card in the order of `contact_card_ids`.
   */
  sendContactCard(contact: ContactId, body: Body<'/api/v1/contacts/{contact}/message/contact-card', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/contacts/{contact}/message/contact-card', { ...options, path: { contact }, body });
  }

  /**
   * `POST /api/v1/contacts/{contact}/messages/{message}/forward`: forwards a message to up to 5
   * contacts. Resolves to one item per destination, in order: `status` (`queued` or `blocked`, with
   * `reason`) and its `message`, or `null` when nothing was registered for that destination.
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
