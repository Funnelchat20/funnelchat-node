import type { PathParams, Query, RequestOptions } from '../core/types.js';
import { Resource } from './base.js';

type GroupId = PathParams<'/api/v1/groups/{group}', 'GET'>['group'];
type GroupUid = PathParams<'/api/v1/groups/{groupUid}/metadata', 'GET'>['groupUid'];
type DeviceId = PathParams<'/api/v1/devices/{device}/groups', 'GET'>['device'];

/** WhatsApp groups (communities area): read them, their participants, events and messages. Permission: **Groups and campaigns → View**. */
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
}
