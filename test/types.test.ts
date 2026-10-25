/**
 * Compile-time checks of the typed API (run by `npm run typecheck`; at runtime they are no-ops).
 */
import { describe, expect, expectTypeOf, it } from 'vitest';
import type { APIError, APIPromise, Funnelchat, KnownErrorCode, Page, WebhookEvent, WebhookEventOf, WebhookEventType, components } from '../src/index.js';

type PublicMessage = components['schemas']['PendingPublicMessage'];

describe('types', () => {
  it('compile (the checks below run in `npm run typecheck`)', () => {
    expect(typeof typeChecks).toBe('function');
  });
});

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
    // The capabilities of a number.
    expectTypeOf<Awaited<ReturnType<typeof client.devices.retrieve>>['capabilities']['statuses']>().toEqualTypeOf<('sent' | 'delivered' | 'read' | 'failed')[]>();
    expectTypeOf(client.forms.create).parameter(0).toHaveProperty('template_key');
    // Creating and connecting numbers.
    // The new fields of a number are optional: production does not send them until the deploy.
    expectTypeOf<Awaited<ReturnType<typeof client.devices.create>>['data']['connection']>().toEqualTypeOf<'qr' | 'coexistence' | 'dedicated' | null | undefined>();
    expectTypeOf<Awaited<ReturnType<typeof client.devices.qr>>['data']['qr_code']>().toEqualTypeOf<string | null>();
    expectTypeOf<Awaited<ReturnType<typeof client.connectLinks.create>>['data']['url']>().toEqualTypeOf<string>();
    expectTypeOf<Awaited<ReturnType<typeof client.connectLinks.get>>['data']['status']>().toEqualTypeOf<'pending' | 'completed' | 'failed' | 'expired' | 'revoked'>();
    // @ts-expect-error a meta link needs allowed_connection_types
    void (() => client.connectLinks.create({ type: 'meta' }));
    // @ts-expect-error only qr numbers are created directly
    void (() => client.devices.create({ connection: 'coexistence' }));
    void (() => client.devices.list({ external_reference: 'customer-81' }));
    void (() => client.devices.create({ connection: 'qr' }, { idempotencyKey: 'order-8841' }));
    // The country of the phone that scans the QR: on a QR number and a QR link, which returns it.
    void (() => client.devices.create({ connection: 'qr', country: 'br' }));
    void (() => client.connectLinks.create({ type: 'qr', country: 'br' }));
    // @ts-expect-error country only goes with a QR link
    void (() => client.connectLinks.create({ type: 'meta', allowed_connection_types: ['dedicated'], country: 'br' }));
    expectTypeOf<Awaited<ReturnType<typeof client.connectLinks.get>>['data']['country']>().toEqualTypeOf<string | null>();
    // The 0.1.2 signature `list(options)` still compiles.
    void (() => client.devices.list({ maxRetries: 0, signal: AbortSignal.timeout(1000) }));
    expectTypeOf(client.devices.delete).parameter(0).toEqualTypeOf<number>();
    // A route whose spec documents no body still returns whatever the API answers.
    expectTypeOf<Awaited<ReturnType<typeof client.webhooks.delete>>>().toBeUnknown();
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
        expectTypeOf(event.data.contact.phone).toEqualTypeOf<string>();
        expectTypeOf(event.data.device_id).toEqualTypeOf<number | null>();
      }
      if (event.type === 'whatsapp_form.completed') {
        expectTypeOf(event.data.form.id).toEqualTypeOf<number>();
        expectTypeOf(event.data.answers[0]!.value).toEqualTypeOf<boolean | number | string | string[] | null>();
      }
      if (event.type === 'group_action.failed') {
        expectTypeOf(event.data.action.uuid).toEqualTypeOf<string | null>();
      }
      if (event.type === 'group.message_received') {
        expectTypeOf(event.data.participant.identity_type).toEqualTypeOf<'phone' | 'whatsapp_user'>();
      }
    };
    void handle;
    expectTypeOf<WebhookEventOf<'device.connected'>['data']['device']['id']>().toEqualTypeOf<number>();
    // What the events add is optional until the deploy; connect_link_id is in the four.
    expectTypeOf<WebhookEventOf<'device.connected'>['data']['connect_link_id']>().toEqualTypeOf<number | null | undefined>();
    expectTypeOf<WebhookEventOf<'device.disconnected'>['data']['connect_link_id']>().toEqualTypeOf<number | null | undefined>();
    expectTypeOf<WebhookEventOf<'device.deleted'>['data']['connect_link_id']>().toEqualTypeOf<number | null | undefined>();
    expectTypeOf<WebhookEventOf<'device.health_changed'>['data']['connect_link_id']>().toEqualTypeOf<number | null | undefined>();
    expectTypeOf<WebhookEventOf<'device.connected'>['data']['device']['external_reference']>().toEqualTypeOf<string | null | undefined>();
    expectTypeOf<WebhookEventOf<'device.disconnected'>['data']['reason']>().toEqualTypeOf<
      'qr_logged_out' | 'meta_account_not_registered' | 'shadow_ban_protection' | 'provider_error' | 'unknown' | 'disconnected_by_user' | undefined
    >();
    expectTypeOf<WebhookEventOf<'device.disconnected'>['data']['disconnected_at']>().toEqualTypeOf<string>();
    expectTypeOf<WebhookEventOf<'device.health_changed'>['data']['state']>().toEqualTypeOf<'available' | 'limited' | 'blocked' | 'unknown'>();
    expectTypeOf<WebhookEventOf<'device.deleted'>['data']['device']['connection']>().toEqualTypeOf<'qr' | 'coexistence' | 'dedicated' | null | undefined>();
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
    expectTypeOf<'something_new'>().toMatchTypeOf<NonNullable<APIError['code']>>();
  }
}
