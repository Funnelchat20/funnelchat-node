/**
 * Compile-time checks of the typed API (run by `npm run typecheck`; at runtime they are no-ops).
 */
import { describe, expect, expectTypeOf, it } from 'vitest';
import type { APIError, APIPromise, Funnelchat, KnownErrorCode, Page, WebhookEvent, WebhookEventOf, WebhookEventType, components } from '../src/index.js';

type PublicMessage = components['schemas']['PublicMessageResource'];

describe('types', () => {
  it('compile (the checks below run in `npm run typecheck`)', () => {
    expect(typeof typeChecks).toBe('function');
    expect(typeof readmeFirstUse).toBe('function');
  });
});

/**
 * The code of the README's first use, receive messages, groups and workspaces, as written there
 * (only `show` and the webhook handler's arguments are stand-ins). Never called: it only has to
 * compile, so the README cannot drift from the types.
 */
async function readmeFirstUse(funnelchat: Funnelchat, event: WebhookEvent, show: (qrCode: string | null) => void) {
  // 2. Connect a number
  const { data: device } = await funnelchat.devices.create({ connection: 'qr' });

  while (true) {
    const { data: qr } = await funnelchat.devices.qr(device.id);
    if (qr.connected) break;
    show(qr.qr_code);
    await new Promise((resolve) => setTimeout(resolve, qr.expires_in * 1000));
  }
  const { data: link } = await funnelchat.connectLinks.create({ type: 'qr' });
  expectTypeOf(link.url).toEqualTypeOf<string>();

  // 3. Send a message
  const { message } = await funnelchat.messages.sendDirect({ device_id: device.id, phone: '5491100000000', text: 'Hi Ana!' });
  expectTypeOf(message.contact_id).toEqualTypeOf<number | null>();
  expectTypeOf(message.status).toEqualTypeOf<'queued' | 'sent' | 'delivered' | 'read' | 'failed' | null>();

  // 4. Know when it was read
  const subscription = await funnelchat.webhooks.create({
    url: 'https://your-app.example/hooks/funnelchat',
    events: ['message.status_changed'],
  });
  expectTypeOf(subscription.secret).toEqualTypeOf<string>();
  if (event.type === 'message.status_changed' && event.data.status === 'read') {
    expectTypeOf(event.data.message_id).toEqualTypeOf<number>();
  }
  expectTypeOf((await funnelchat.messages.get(message.contact_id ?? 0, message.id)).status).toEqualTypeOf<'queued' | 'sent' | 'delivered' | 'read' | 'failed' | null>();

  // Receive messages
  if (event.type === 'message.received') {
    const { message: received, contact: sender, device_id } = event.data;
    expectTypeOf(received.text ?? received.type).toEqualTypeOf<string>();
    expectTypeOf(sender.phone).toEqualTypeOf<string | null>();

    if (device_id && sender.id) {
      await funnelchat.messages.sendDirect({ device_id, contact_id: sender.id, text: 'Got it, thanks!' });
    }
  }

  // Groups
  for await (const group of funnelchat.groups.listByDevice(device.id)) {
    expectTypeOf(group.uid).toEqualTypeOf<string>();
  }
  const { action_id } = await funnelchat.groups.sendMessage('120363000000000001@g.us', {
    device_id: device.id,
    type: 'text',
    text: 'Hi everyone!',
  });
  expectTypeOf((await funnelchat.groups.retrieveAction(action_id)).data.result).not.toBeUnknown();
  const { data: followed } = await funnelchat.groups.follow('120363000000000001@g.us', { device_id: device.id });
  expectTypeOf(followed.is_admin).toEqualTypeOf<boolean>();

  // Workspaces
  expectTypeOf(event.data.workspace_id).toEqualTypeOf<number | null>();
}

/** Never called: it only has to compile. */
function typeChecks(client: Funnelchat) {
  {
    expectTypeOf(client.request('GET', '/api/v1/contacts/{contact}', { path: { contact: 1 } })).resolves.not.toBeUnknown();

    // @ts-expect-error a required path parameter is missing
    void (() => client.request('GET', '/api/v1/contacts/{contact}'));
    // @ts-expect-error the method is not defined for that path
    void (() => client.request('PATCH', '/api/v1/contacts/{contact}', { path: { contact: 1 } }));
    // @ts-expect-error the body must match the spec
    void (() => client.request('POST', '/api/v1/tags/delete', { body: { tagIds: 'x' } }));

    // Any other path is accepted untyped.
    expectTypeOf(client.request<{ ok: boolean }>('GET', '/api/v1/not-in-the-spec')).resolves.toEqualTypeOf<{ ok: boolean }>();
  }

  {
    expectTypeOf(client.messages.send).parameter(1).toHaveProperty('device_id');
    expectTypeOf(client.messages.send).parameter(1).toHaveProperty('client_reference');
    expectTypeOf(client.webhooks.create).parameter(0).toHaveProperty('events');
    expectTypeOf<Awaited<ReturnType<typeof client.webhooks.create>>>().toHaveProperty('secret');
    expectTypeOf<Awaited<ReturnType<typeof client.tags.list>>>().toMatchTypeOf<Page<unknown>>();
    // Every send resolves to the registered message.
    expectTypeOf<Awaited<ReturnType<typeof client.messages.send>>>().toEqualTypeOf<{ message: PublicMessage }>();
    expectTypeOf<Awaited<ReturnType<typeof client.messages.sendDirect>>>().toEqualTypeOf<{ message: PublicMessage }>();
    expectTypeOf<Awaited<ReturnType<typeof client.messages.sendForm>>>().toEqualTypeOf<{ message: PublicMessage }>();
    expectTypeOf<Awaited<ReturnType<typeof client.messages.sendContactCard>>>().toEqualTypeOf<{ messages: PublicMessage[] }>();
    expectTypeOf<Awaited<ReturnType<typeof client.messages.forward>>>().toMatchTypeOf<{ contact_id: number; message: PublicMessage | null }[]>();
    expectTypeOf<Awaited<ReturnType<typeof client.templates.send>>>().toEqualTypeOf<{ message: PublicMessage }>();
    expectTypeOf<Awaited<ReturnType<typeof client.messages.get>>>().toEqualTypeOf<PublicMessage>();
    expectTypeOf<PublicMessage['status']>().toEqualTypeOf<'queued' | 'sent' | 'delivered' | 'read' | 'failed' | null>();
    expectTypeOf<NonNullable<PublicMessage['error']>['reason']>().toMatchTypeOf<string | null>();
    // A file by URL: file_type and file_name.
    expectTypeOf(client.messages.send).parameter(1).toHaveProperty('file_type');
    expectTypeOf(client.messages.send).parameter(1).toHaveProperty('file_name');
    expectTypeOf<NonNullable<Parameters<typeof client.messages.send>[1]['file_type']>>().toEqualTypeOf<'image' | 'video' | 'audio' | 'document' | 'sticker'>();
    // Each call returns an APIPromise: withResponse() brings the X-Request-Id.
    expectTypeOf(client.contacts.retrieve(1)).toMatchTypeOf<APIPromise<unknown>>();
    expectTypeOf<Awaited<ReturnType<ReturnType<typeof client.messages.get>['withResponse']>>['requestId']>().toEqualTypeOf<string | undefined>();
    // The capabilities of a number (the spec types the statuses as strings: sent, delivered, read, failed).
    expectTypeOf<Awaited<ReturnType<typeof client.devices.retrieve>>['capabilities']['statuses']>().toEqualTypeOf<string[]>();
    expectTypeOf(client.forms.create).parameter(0).toHaveProperty('template_key');
    // Creating and connecting numbers.
    // Production sends how a number connects and your reference since accounts v1.4.38.
    expectTypeOf<Awaited<ReturnType<typeof client.devices.create>>['data']['connection']>().toEqualTypeOf<'qr' | 'coexistence' | 'dedicated' | null>();
    expectTypeOf<Awaited<ReturnType<typeof client.devices.retrieve>>['external_reference']>().toEqualTypeOf<string | null>();
    expectTypeOf<Awaited<ReturnType<typeof client.devices.qr>>['data']['qr_code']>().toEqualTypeOf<string | null>();
    expectTypeOf<Awaited<ReturnType<typeof client.connectLinks.create>>['data']['url']>().toEqualTypeOf<string>();
    // The spec types the status of a link as a string: pending, completed, failed, expired or revoked.
    expectTypeOf<Awaited<ReturnType<typeof client.connectLinks.get>>['data']['status']>().toEqualTypeOf<string>();
    // The spec no longer ties the fields of a link to its type: the API still answers 422 to a meta link
    // without allowed_connection_types, and to a country on a meta link.
    void (() => client.connectLinks.create({ type: 'meta', allowed_connection_types: ['dedicated'] }));
    // @ts-expect-error only qr numbers are created directly
    void (() => client.devices.create({ connection: 'coexistence' }));
    void (() => client.devices.list({ external_reference: 'customer-81' }));
    void (() => client.devices.create({ connection: 'qr' }, { idempotencyKey: 'order-8841' }));
    // The country of the phone that scans the QR: on a QR number and a QR link, which returns it.
    void (() => client.devices.create({ connection: 'qr', country: 'br' }));
    void (() => client.connectLinks.create({ type: 'qr', country: 'br' }));
    expectTypeOf<Awaited<ReturnType<typeof client.connectLinks.get>>['data']['country']>().toEqualTypeOf<string | null>();
    // The 0.1.2 signature `list(options)` still compiles.
    void (() => client.devices.list({ maxRetries: 0, signal: AbortSignal.timeout(1000) }));
    expectTypeOf(client.devices.delete).parameter(0).toEqualTypeOf<number>();
    // A route whose spec documents no body still returns whatever the API answers.
    expectTypeOf<Awaited<ReturnType<typeof client.webhooks.delete>>>().toBeUnknown();
    // A message to a group: queued, followed by its action.
    expectTypeOf<Awaited<ReturnType<typeof client.groups.sendMessage>>>().toEqualTypeOf<{ action_id: string; status: 'queued' }>();
    expectTypeOf(client.groups.sendMessage).parameter(0).toEqualTypeOf<string>();
    expectTypeOf<Parameters<typeof client.groups.sendMessage>[1]['type']>().toEqualTypeOf<'text' | 'image' | 'video' | 'audio' | 'document'>();
    // @ts-expect-error device_id is required
    void (() => client.groups.sendMessage('120363000000000001@g.us', { type: 'text', text: 'Hi' }));
    expectTypeOf<Awaited<ReturnType<typeof client.groups.retrieveAction>>['data']['status']>().toEqualTypeOf<'queued' | 'running' | 'completed' | 'failed'>();
    // Whether a template can be sent.
    expectTypeOf<Awaited<ReturnType<typeof client.templates.retrieve>>['available']>().toEqualTypeOf<boolean>();
  }

  {
    expectTypeOf<'message.received'>().toMatchTypeOf<WebhookEventType>();
    expectTypeOf<'message.status_changed'>().toMatchTypeOf<WebhookEventType>();
    expectTypeOf<'device.disconnected'>().toMatchTypeOf<WebhookEventType>();

    const handle = (event: WebhookEvent) => {
      if (event.type === 'message.status_changed') {
        expectTypeOf(event.data.status).toEqualTypeOf<'sent' | 'delivered' | 'read' | 'failed'>();
        expectTypeOf(event.data.client_reference).toEqualTypeOf<string | null>();
      }
      if (event.type === 'message.received') {
        // As production sends it: no text for a file without caption, no phone for a `@lid`.
        expectTypeOf(event.data.contact.phone).toEqualTypeOf<string | null>();
        expectTypeOf(event.data.message.text).toEqualTypeOf<string | null>();
        expectTypeOf(event.data.message.media).toEqualTypeOf<{ file: string } | null>();
        expectTypeOf(event.data.device_id).toEqualTypeOf<number | null>();
        // The types the spec lists, and any other: new ones can arrive before the spec lists them.
        expectTypeOf<'text'>().toMatchTypeOf<typeof event.data.message.type>();
        expectTypeOf<'a_type_from_tomorrow'>().toMatchTypeOf<typeof event.data.message.type>();
      }
      if (event.type === 'group_join_request.created' || event.type === 'group_join_request.revoked') {
        // Not sent without the participant's identity.
        expectTypeOf(event.data.participant.identity).toEqualTypeOf<string>();
        expectTypeOf(event.data.participant.identity_type).toEqualTypeOf<'phone' | 'whatsapp_user'>();
        expectTypeOf(event.data.participant.name).toEqualTypeOf<string | null>();
      }
      if (event.type === 'group_participant.joined' || event.type === 'group_participant.left') {
        expectTypeOf(event.data.campaign).toEqualTypeOf<{ uuid: string } | null>();
        expectTypeOf(event.data.participant.identity_type).toEqualTypeOf<'phone' | 'whatsapp_user'>();
      }
      if (event.type === 'group_action.completed') {
        expectTypeOf(event.data.action.uuid).toEqualTypeOf<string>();
      }
      // Every event says which workspace it belongs to.
      expectTypeOf(event.data.workspace_id).toEqualTypeOf<number | null>();
      if (event.type === 'whatsapp_form.completed') {
        expectTypeOf(event.data.form.id).toEqualTypeOf<number>();
        expectTypeOf(event.data.answers[0]!.value).toEqualTypeOf<boolean | number | string | string[] | null>();
        // A question without a label brings its name.
        expectTypeOf(event.data.answers[0]!.label).toEqualTypeOf<string>();
      }
      if (event.type === 'group_action.failed') {
        expectTypeOf(event.data.action.uuid).toEqualTypeOf<string | null>();
      }
      if (event.type === 'group.message_received') {
        expectTypeOf(event.data.participant.identity_type).toEqualTypeOf<'phone' | 'whatsapp_user'>();
      }
    };
    void handle;
    // Production sends the message of a group as `uid` (communities v2.35.28), as the portal's example says since v0.6.14.
    expectTypeOf<WebhookEventOf<'group.message_received'>['data']['message']['uid']>().toEqualTypeOf<string>();
    expectTypeOf<WebhookEventOf<'group.reaction_added'>['data']['message']['uid']>().toEqualTypeOf<string>();
    expectTypeOf<WebhookEventOf<'device.connected'>['data']['device']['id']>().toEqualTypeOf<number>();
    // In production since accounts v1.4.38, so no longer optional: connect_link_id is in all of them.
    expectTypeOf<WebhookEventOf<'device.connected'>['data']['connect_link_id']>().toEqualTypeOf<number | null>();
    expectTypeOf<WebhookEventOf<'device.disconnected'>['data']['connect_link_id']>().toEqualTypeOf<number | null>();
    expectTypeOf<WebhookEventOf<'device.deleted'>['data']['connect_link_id']>().toEqualTypeOf<number | null>();
    expectTypeOf<WebhookEventOf<'device.health_changed'>['data']['connect_link_id']>().toEqualTypeOf<number | null>();
    expectTypeOf<WebhookEventOf<'device.quality_changed'>['data']['connect_link_id']>().toEqualTypeOf<number | null>();
    expectTypeOf<WebhookEventOf<'device.connected'>['data']['device']['external_reference']>().toEqualTypeOf<string | null>();
    expectTypeOf<WebhookEventOf<'device.connected'>['data']['workspace_id']>().toEqualTypeOf<number | null>();
    expectTypeOf<WebhookEventOf<'device.disconnected'>['data']['reason']>().toEqualTypeOf<
      'qr_logged_out' | 'meta_account_not_registered' | 'shadow_ban_protection' | 'provider_error' | 'unknown' | 'disconnected_by_user'
    >();
    expectTypeOf<WebhookEventOf<'device.disconnected'>['data']['disconnected_at']>().toEqualTypeOf<string>();
    expectTypeOf<WebhookEventOf<'device.health_changed'>['data']['state']>().toEqualTypeOf<'available' | 'limited' | 'blocked' | 'unknown'>();
    expectTypeOf<WebhookEventOf<'device.deleted'>['data']['device']['connection']>().toEqualTypeOf<'qr' | 'coexistence' | 'dedicated' | null>();
    expectTypeOf<'group.reaction_added'>().toMatchTypeOf<WebhookEventType>();
    expectTypeOf<'group_join_request.created'>().toMatchTypeOf<WebhookEventType>();
  }

  {
    // The known error codes autocomplete, and any other string is still accepted.
    expectTypeOf<'mac_lockout_24h'>().toMatchTypeOf<KnownErrorCode>();
    expectTypeOf<'origin_unreachable'>().toMatchTypeOf<KnownErrorCode>();
    expectTypeOf<'too_many_open_links'>().toMatchTypeOf<KnownErrorCode>();
    expectTypeOf<'idempotency_key_mismatch'>().toMatchTypeOf<KnownErrorCode>();
    expectTypeOf<'pending_number_exists'>().toMatchTypeOf<KnownErrorCode>();
    expectTypeOf<'credentials_not_allowed'>().toMatchTypeOf<KnownErrorCode>();
    expectTypeOf<'device_not_group_admin'>().toMatchTypeOf<KnownErrorCode>();
    // The common format of every area.
    expectTypeOf<'validation_failed' | 'not_found' | 'payment_required' | 'rate_limited'>().toMatchTypeOf<KnownErrorCode>();
    // Named by the spec the portal publishes since v0.6.16.
    expectTypeOf<
      'gate_misconfigured' | 'device_not_meta' | 'device_not_ready' | 'unsupported_provider' | 'meta_error' | 'plan_cap_reached' | 'webhooks_limit_reached'
    >().toMatchTypeOf<KnownErrorCode>();
    expectTypeOf<'something_new'>().toMatchTypeOf<NonNullable<APIError['code']>>();
  }
}
