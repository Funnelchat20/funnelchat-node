/**
 * PENDING OF THE SPEC — event fields the API sends that the spec in spec/funnelchat.json does not
 * describe yet. They are added to the generated types in src/webhooks/events.ts. When a new spec
 * describes a field, delete it here.
 *
 * The payloads the spec shows only by an example, or without one, are corrected in
 * spec/pending.json, which the generator applies while the spec still lacks them.
 */

/** Fields every event carries, whatever its type. */
export interface PendingCommonEventData {
  /**
   * The workspace the event belongs to, which is the workspace of the subscription that receives it:
   * a subscription only receives the events of its own workspace (the one of the API key that created
   * it). An account with a single workspace, or without workspaces, gets its default workspace. `null`
   * only for an account with no workspace at all.
   *
   * In production since accounts v1.5.97 (04-11-2026), on every delivery: the events relayed from
   * the other areas, the account's own and `webhook.test`. The spec the portal publishes
   * (spec/funnelchat.json) shows it only in the examples of some events, and in no schema.
   */
  workspace_id: number | null;
}

/**
 * Fields of one event type, by type. Empty: `device_id` of `message.received` is in the example of
 * the spec the portal publishes and in the schema of spec/pending.json.
 */
export type PendingEventData = Record<never, never>;
