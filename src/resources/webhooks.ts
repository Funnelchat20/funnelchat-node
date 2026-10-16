import type { Body, PathParams, Query, RequestOptions } from '../core/types.js';
import { constructEvent } from '../webhooks/events.js';
import { verify } from '../webhooks/signature.js';
import { Resource } from './base.js';

type SubscriptionId = PathParams<'/api/v1/webhooks/{id}', 'GET'>['id'];

/**
 * Webhook subscriptions (accounts area) and the verification of deliveries.
 *
 * PENDING OF THE SPEC: the `/api/v1/webhooks` subscription routes come from accounts
 * `origin/main` @ c34cba2c (unified subscriptions, in production since 13-10), not from the
 * snapshot; their types are in spec/pending.json until a snapshot brings them. At that commit
 * the routes are not in the gate's `allowed` list, so an API key may get
 * `403 route_not_available` until accounts opens them. The event catalog (`events()`) is in the
 * snapshot.
 */
export class Webhooks extends Resource {
  /** Same as `Funnelchat.webhooks.verify`. */
  readonly verify = verify;
  /** Same as `Funnelchat.webhooks.constructEvent`. */
  readonly constructEvent = constructEvent;

  /** `GET /api/v1/webhooks/events`: the event types you can subscribe to, each with `status`. */
  events(options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/webhooks/events', { ...options });
  }

  /** `GET /api/v1/webhooks`: every subscription of the account (at most 50), not only yours. */
  list(options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/webhooks', { ...options });
  }

  /** `POST /api/v1/webhooks`: the response brings `secret` once. Store it, and store the `id`. */
  create(body: Body<'/api/v1/webhooks', 'POST'>, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/webhooks', { ...options, body });
  }

  /** `GET /api/v1/webhooks/{id}` (without the secret). */
  retrieve(id: SubscriptionId, options?: RequestOptions) {
    return this.client.request('GET', '/api/v1/webhooks/{id}', { ...options, path: { id } });
  }

  /** `PUT /api/v1/webhooks/{id}`: replaces `url`, `events`, `description` and `filters`. The secret stays. */
  update(id: SubscriptionId, body: Body<'/api/v1/webhooks/{id}', 'PUT'>, options?: RequestOptions) {
    return this.client.request('PUT', '/api/v1/webhooks/{id}', { ...options, path: { id }, body });
  }

  /** `DELETE /api/v1/webhooks/{id}`. */
  delete(id: SubscriptionId, options?: RequestOptions) {
    return this.client.request('DELETE', '/api/v1/webhooks/{id}', { ...options, path: { id } });
  }

  /** `POST /api/v1/webhooks/{id}/rotate-secret`: the new secret comes once; the old one stops working. */
  rotateSecret(id: SubscriptionId, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/webhooks/{id}/rotate-secret', { ...options, path: { id } });
  }

  /** `POST /api/v1/webhooks/{id}/test`: delivers one signed `webhook.test` now. Check `succeeded`. */
  test(id: SubscriptionId, options?: RequestOptions) {
    return this.client.request('POST', '/api/v1/webhooks/{id}/test', { ...options, path: { id } });
  }

  /** `GET /api/v1/webhooks/{id}/deliveries`, paginated: one row per attempt, newest first. */
  listDeliveries(id: SubscriptionId, query?: Query<'/api/v1/webhooks/{id}/deliveries'>, options?: RequestOptions) {
    return this.client.paginate('/api/v1/webhooks/{id}/deliveries', { ...options, path: { id }, query });
  }
}
