/**
 * PENDING OF THE SPEC — event fields the API sends that the snapshot in spec/funnelchat.json
 * does not describe yet. They are added to the generated
 * types in src/webhooks/events.ts. When a new snapshot describes a field, delete it here.
 *
 * Event types and payloads that are missing entirely live in spec/pending.json, which the
 * generator merges and replaces automatically.
 */
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
