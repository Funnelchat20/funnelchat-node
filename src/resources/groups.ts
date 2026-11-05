import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type GroupId = PathParams<'/api/v1/groups/{group}', 'GET'>['group'];
type GroupUid = PathParams<'/api/v1/groups/{groupUid}/metadata', 'GET'>['groupUid'];
type DeviceId = PathParams<'/api/v1/devices/{device}/groups', 'GET'>['device'];
type SendGroup = PathParams<'/api/v1/groups/{group}/messages', 'POST'>['group'];
type ActionId = PathParams<'/api/v1/groups/actions/{action}', 'GET'>['action'];

/**
 * WhatsApp groups (communities area): read them, their participants, events and messages, and send a
 * message to a group. Reading needs **Groups and campaigns → View**; sending,
 * **Groups and campaigns → Send**.
 *
 * Whoever joins or leaves a group arrives by the `group_participant.joined` and
 * `group_participant.left` events.
 */
export class Groups extends Resource {
  /** `GET /api/v1/groups`, paginated. Each group's `uid` (`…@g.us`) is what {@link Groups.sendMessage} takes. */
  list(query?: Query<'/api/v1/groups'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/groups', { ...options, query });
  }

  /** `GET /api/v1/groups/{group}`. */
  retrieve(group: GroupId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/groups/{group}', { ...options, path: { group } });
  }

  /** `GET /api/v1/devices/{device}/groups`, paginated (`page`, `pageSize`): the groups of one number. */
  listByDevice(device: DeviceId, query?: Query<'/api/v1/devices/{device}/groups'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/devices/{device}/groups', { ...options, path: { device }, query });
  }

  /** `GET /api/v1/groups/{groupUid}/metadata`: live metadata of a group by its WhatsApp uid, read through one number. */
  metadata(groupUid: GroupUid, query: Query<'/api/v1/groups/{groupUid}/metadata'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/groups/{groupUid}/metadata', { ...options, path: { groupUid }, query });
  }

  /** `GET /api/v1/groups/participants`, paginated: the participants of one group (`groupUid`). */
  listParticipants(query: Query<'/api/v1/groups/participants'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/groups/participants', { ...options, query });
  }

  /** `GET /api/v1/groups/{group}/participant-events`, paginated: joins and leaves. */
  listParticipantEvents(group: GroupId, query?: Query<'/api/v1/groups/{group}/participant-events'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/groups/{group}/participant-events', { ...options, path: { group }, query });
  }

  /** `GET /api/v1/groups/{group}/messages`, paginated. */
  listMessages(group: GroupId, query?: Query<'/api/v1/groups/{group}/messages'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/groups/{group}/messages', { ...options, path: { group }, query });
  }

  /** `GET /api/v1/groups/{group}/scheduled-messages`, paginated. */
  listScheduledMessages(group: GroupId, query?: Query<'/api/v1/groups/{group}/scheduled-messages'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/groups/{group}/scheduled-messages', { ...options, path: { group }, query });
  }

  /** `GET /api/v1/groups/{group}/actions`, paginated. */
  listActions(group: GroupId, query?: Query<'/api/v1/groups/{group}/actions'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/groups/{group}/actions', { ...options, path: { group }, query });
  }

  /**
   * `POST /api/v1/groups/{group}/messages`: sends a text (`type: 'text'`) or one file (`image`,
   * `video`, `audio` or `document`, by its `https` `media_url`) to the group, from `device_id`. It
   * answers `202` with `{ action_id, status: 'queued' }` and goes out in the background: the result
   * arrives by `group_action.completed` (or `group_action.failed`), with the same `action_id` in
   * `action.uuid`, or with {@link Groups.retrieveAction}; `result.message.uid` is the id of the message in
   * WhatsApp.
   *
   * `group` is the `uid` of the group (`…@g.us`). A QR number must be admin of the group; an official
   * number, the one the group belongs to. Rejections: `GROUP_ACTION_ERROR_CODES`. Like every send, it
   * is never retried automatically.
   */
  sendMessage(group: SendGroup, body: Body<'/api/v1/groups/{group}/messages', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups/{group}/messages', { ...options, path: { group }, body });
  }

  /**
   * `GET /api/v1/groups/actions/{action}`: where a group action, such as a message sent with
   * {@link Groups.sendMessage}, is (`queued`, `running`, `completed` or `failed`) and its `result`.
   */
  retrieveAction(action: ActionId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/groups/actions/{action}', { ...options, path: { action } });
  }
}
