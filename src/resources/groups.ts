import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type GroupId = PathParams<'/api/v1/groups/{group}', 'GET'>['group'];
type GroupUid = PathParams<'/api/v1/groups/{groupUid}/metadata', 'GET'>['groupUid'];
type DeviceId = PathParams<'/api/v1/devices/{device}/groups', 'GET'>['device'];
/** The WhatsApp uid of a group (`…@g.us`): the group actions take the uid, not the numeric id. */
type ActionGroup = PathParams<'/api/v1/groups/{group}/participants', 'POST'>['group'];
type ActionId = PathParams<'/api/v1/groups/actions/{action}', 'GET'>['action'];
type PhonesBody = Body<'/api/v1/groups/{group}/participants', 'POST'>;

/**
 * WhatsApp groups (communities area): read them, and act on them through one of your numbers.
 *
 * **Group actions** (create, participants, admins, name, description, photo, settings, invite
 * link, send, join requests) are **off by default**: until they are turned on for the API, they
 * answer `403 route_not_available`. Each one answers `202` with `{ action_id, status: 'queued' }`
 * and runs in the background: follow it with {@link Groups.action} or with the events
 * `group_action.completed` / `group_action.failed`. What each number can do is in
 * `capabilities.groups` of `devices.retrieve()`; the rest answers `422 provider_unsupported`.
 * Writes need `communities:operate`, sending `communities:send`, reads `communities:read`. Errors:
 * `GROUP_ACTION_ERROR_CODES`.
 */
export class Groups extends Resource {
  /** `GET /api/v1/groups`, paginated. */
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

  // ---- group actions ----------------------------------------------------------------------

  /** `GET /api/v1/groups/actions/{action}`: where an action is (`queued`, `running`, `completed`, `failed`) and its `result`. */
  action(action: ActionId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/groups/actions/{action}', { ...options, path: { action } });
  }

  /**
   * `POST /api/v1/groups`: creates a group from `device_id`. With a QR number, `participants` is
   * required; with an official one it is not accepted. The new group and its `invite_link` arrive
   * in the `result` of the action.
   */
  create(body: Body<'/api/v1/groups', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups', { ...options, body });
  }

  /** `POST /api/v1/groups/{group}/participants`: adds up to 20 phones (an official number invites them). */
  addParticipants(group: ActionGroup, body: PhonesBody, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups/{group}/participants', { ...options, path: { group }, body });
  }

  /** `POST /api/v1/groups/{group}/participants/remove`: removes up to 20 phones. */
  removeParticipants(group: ActionGroup, body: PhonesBody, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups/{group}/participants/remove', { ...options, path: { group }, body });
  }

  /** `POST /api/v1/groups/{group}/admins`: makes participants admins (QR numbers only). */
  promoteAdmins(group: ActionGroup, body: PhonesBody, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups/{group}/admins', { ...options, path: { group }, body });
  }

  /** `POST /api/v1/groups/{group}/admins/remove`: takes admin away (QR numbers only). */
  demoteAdmins(group: ActionGroup, body: PhonesBody, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups/{group}/admins/remove', { ...options, path: { group }, body });
  }

  /** `PUT /api/v1/groups/{group}/name`. */
  updateName(group: ActionGroup, body: Body<'/api/v1/groups/{group}/name', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/groups/{group}/name', { ...options, path: { group }, body });
  }

  /** `PUT /api/v1/groups/{group}/description`: `null` clears it (not on an official number). */
  updateDescription(group: ActionGroup, body: Body<'/api/v1/groups/{group}/description', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/groups/{group}/description', { ...options, path: { group }, body });
  }

  /** `PUT /api/v1/groups/{group}/photo`: `photo_url`, a public `https` JPG or PNG (QR numbers only). */
  updatePhoto(group: ActionGroup, body: Body<'/api/v1/groups/{group}/photo', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/groups/{group}/photo', { ...options, path: { group }, body });
  }

  /** `PUT /api/v1/groups/{group}/settings`: whether members can send messages (QR numbers only). */
  updateSettings(group: ActionGroup, body: Body<'/api/v1/groups/{group}/settings', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/groups/{group}/settings', { ...options, path: { group }, body });
  }

  /** `POST /api/v1/groups/{group}/invite-link/renew`: the new link arrives in `result.invite_link`. */
  renewInviteLink(group: ActionGroup, body: Body<'/api/v1/groups/{group}/invite-link/renew', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups/{group}/invite-link/renew', { ...options, path: { group }, body });
  }

  /** `GET /api/v1/groups/{group}/invite-link/live`: the current invite link, read from WhatsApp (cached 30 s). */
  inviteLink(group: ActionGroup, query: Query<'/api/v1/groups/{group}/invite-link/live'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/groups/{group}/invite-link/live', { ...options, path: { group }, query });
  }

  /**
   * `POST /api/v1/groups/{group}/messages`: sends text or a file (`media_url`) to the group. Like
   * every send, it is never retried automatically. The WhatsApp id arrives in `result.message.uid`.
   */
  sendMessage(group: ActionGroup, body: Body<'/api/v1/groups/{group}/messages', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups/{group}/messages', { ...options, path: { group }, body });
  }

  /** `GET /api/v1/groups/{group}/join-requests`: who asked to join (official numbers only, up to 100). */
  listJoinRequests(group: ActionGroup, query: Query<'/api/v1/groups/{group}/join-requests'>, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/groups/{group}/join-requests', { ...options, path: { group }, query });
  }

  /** `POST /api/v1/groups/{group}/join-requests/approve`, when `capabilities.groups.join_requests` is `list_and_decide`. */
  approveJoinRequests(group: ActionGroup, body: PhonesBody, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups/{group}/join-requests/approve', { ...options, path: { group }, body });
  }

  /** `POST /api/v1/groups/{group}/join-requests/reject`, when `capabilities.groups.join_requests` is `list_and_decide`. */
  rejectJoinRequests(group: ActionGroup, body: PhonesBody, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/groups/{group}/join-requests/reject', { ...options, path: { group }, body });
  }
}
