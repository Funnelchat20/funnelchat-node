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
   * `webhook.test`); the snapshot does not describe it yet.
   */
  workspace_id: number | null;
}

export interface PendingEventData {
  'message.received': {
    /**
     * The number of your account that received the message: the same `device_id` you send to
     * reply through it. `null` when the message has no number.
     *
     * In production (conversations v1.18.10, Webhook/Payloads/MessageReceivedPayload.php); the
     * snapshot does not describe it yet.
     */
    device_id: number | null;
  };
}
