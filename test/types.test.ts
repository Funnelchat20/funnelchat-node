/**
 * Compile-time checks of the typed API (run by `npm run typecheck`; at runtime they are no-ops).
 */
import { describe, expect, expectTypeOf, it } from 'vitest';
import type { Funnelchat, Page, WebhookEvent, WebhookEventOf, WebhookEventType, components } from '../src/index.js';

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
    // Sends resolve to the registered message (pending of the spec), or null while the API answers 204.
    expectTypeOf<NonNullable<Awaited<ReturnType<typeof client.messages.send>>>>().toEqualTypeOf<{ message: PublicMessage | null }>();
    // While the API answers 204 (documented in the pending layer), the type admits null.
    expectTypeOf<null>().toMatchTypeOf<Awaited<ReturnType<typeof client.messages.send>>>();
    expectTypeOf<null>().toMatchTypeOf<Awaited<ReturnType<typeof client.messages.sendContactCard>>>();
    expectTypeOf<NonNullable<Awaited<ReturnType<typeof client.messages.sendContactCard>>>>().toHaveProperty('messages');
    expectTypeOf<Awaited<ReturnType<typeof client.messages.forward>>>().toMatchTypeOf<{ contact_id: number; message: PublicMessage | null }[]>();
    expectTypeOf<Awaited<ReturnType<typeof client.templates.send>>>().toEqualTypeOf<{ message: PublicMessage | null }>();
    expectTypeOf<Awaited<ReturnType<typeof client.messages.get>>>().toEqualTypeOf<PublicMessage>();
    expectTypeOf<PublicMessage['status']>().toEqualTypeOf<'queued' | 'sent' | 'delivered' | 'read' | 'failed' | null>();
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
        expectTypeOf(event.data.device_id).toEqualTypeOf<number | null | undefined>();
      }
    };
    void handle;
    expectTypeOf<WebhookEventOf<'device.connected'>['data']['device']['id']>().toEqualTypeOf<number>();
  }
}
