/**
 * PENDING OF THE SPEC — event fields the API sends that the snapshot in spec/funnelchat.json
 * does not describe yet. They are added to the generated
 * types in src/webhooks/events.ts. When a new snapshot describes a field, delete it here.
 *
 * Event types and payloads that are missing entirely live in spec/pending.json, which the
 * generator merges and replaces automatically.
 */

/** Fields every event carries, whatever its type. */
export interface PendingCommonEventData {
  /**
   * The workspace the event belongs to, which is the workspace of the subscription that receives it:
   * a subscription only receives the events of its own workspace (the one of the API key that created
   * it). An account with a single workspace, or without workspaces, gets its default workspace. `null`
   * only for an account with no workspace at all.
   *
   * In production since accounts v1.5.97 (558332bcf, 04-11-2026): written on every delivery by
   * Webhook/Services/EventWorkspaceRouting.php:65-85 (relayed events, the account's own and
   * `webhook.test`). The full unified spec of developers-portal c90565e4 does not describe it in
   * any event.
   */
  workspace_id: number | null;
}

/**
 * Fields of one event type, by type. Empty since the full unified spec of developers-portal
 * c90565e4: `device_id` of `message.received` is in its example and in the schema of
 * spec/pending.json.
 */
export type PendingEventData = Record<never, never>;
