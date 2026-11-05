/**
 * The README's first use, end to end against funnelchat-sandbox: connect a QR number, create a
 * contact and send it a text, and learn by the signed `message.status_changed` (and by
 * `messages.get`) that it was read; then receive a message and answer it from the same number, and
 * list the groups and get a participant's join. A message to a group is not in the published
 * sandbox (0.2.0) yet: test/groups.test.ts covers it with a mocked fetch.
 *
 *   FUNNELCHAT_SANDBOX_URL=http://127.0.0.1:4010 npm run test:e2e
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import type { WebhookEventOf } from '../../src/index.js';
import { type Receiver, SANDBOX_URL, SEED, control, sandboxClient, startReceiver } from './sandbox.js';

describe.skipIf(!SANDBOX_URL)('the first use of the README against the sandbox', () => {
  const funnelchat = sandboxClient();
  let receiver: Receiver;

  beforeAll(async () => {
    receiver = await startReceiver();
  });

  afterAll(async () => {
    await receiver?.close();
  });

  beforeEach(async () => {
    await control('POST', '/reset');
    receiver.clear();
  });

  it('connect a number, send a message and know when it was read', async () => {
    const subscription = await funnelchat.webhooks.create({
      url: receiver.url,
      events: ['device.connected', 'message.status_changed'],
      description: 'e2e funnelchat-node first use',
    });
    receiver.setSecret(subscription.secret);

    // 2. Connect a number: its QR until it is scanned (the sandbox scans it on a control route).
    const { data: device } = await funnelchat.devices.create({ connection: 'qr' });
    const { data: first } = await funnelchat.devices.qr(device.id);
    expect(first.connected).toBe(false);
    expect(first.qr_code).toMatch(/^data:image\/png;base64,/);
    await control('POST', `/devices/${device.id}/connect`);
    const { data: scanned } = await funnelchat.devices.qr(device.id);
    expect(scanned.connected).toBe(true);
    await receiver.waitFor((event) => event.type === 'device.connected' && event.data.device.id === device.id);

    // 3. Send a message: the contact first, then the text from that number.
    const contact = await funnelchat.contacts.create({ phone: '5491155550101', name: 'Ana' });
    const { message } = await funnelchat.messages.sendDirect({ device_id: device.id, contact_id: contact.id, text: 'Hi Ana!' });
    expect(message.status).toBe('queued');

    // 4. Know when it was read.
    const read = (await receiver.waitFor(
      (event) => event.type === 'message.status_changed' && event.data.message_id === message.id && event.data.status === 'read',
    )) as WebhookEventOf<'message.status_changed'>;
    expect(read.data.contact_id).toBe(contact.id);
    expect((await funnelchat.messages.get(contact.id, message.id)).status).toBe('read');
    expect(receiver.rejected).toEqual([]);
  });

  it('receive a message and answer it from the number that received it', async () => {
    const subscription = await funnelchat.webhooks.create({ url: receiver.url, events: ['message.received'], description: 'e2e funnelchat-node receive' });
    receiver.setSecret(subscription.secret);
    await control('POST', '/inbound/message', { device_id: SEED.qrDevice, phone: '5491155550102', name: 'Bruno', text: 'Hello?' });
    const received = (await receiver.waitFor((event) => event.type === 'message.received')) as WebhookEventOf<'message.received'>;
    const { message, contact, device_id } = received.data;
    expect(message.text ?? message.type).toBe('Hello?');
    expect(contact.phone).toBe('+5491155550102');
    expect(device_id).toBe(SEED.qrDevice);

    const { message: reply } = await funnelchat.messages.sendDirect({ device_id: device_id!, contact_id: contact.id!, text: 'Got it, thanks!' });
    expect(reply.status).toBe('queued');
    expect(receiver.rejected).toEqual([]);
  });

  it('list the groups and learn who joined one', async () => {
    const subscription = await funnelchat.webhooks.create({ url: receiver.url, events: ['group_participant.joined'], description: 'e2e funnelchat-node groups' });
    receiver.setSecret(subscription.secret);

    const uids: string[] = [];
    for await (const group of funnelchat.groups.list()) uids.push(group.uid);
    expect(uids.length).toBeGreaterThan(0);

    await control('POST', '/events/group_participant.joined', {});
    const joined = (await receiver.waitFor((event) => event.type === 'group_participant.joined')) as WebhookEventOf<'group_participant.joined'>;
    expect(typeof joined.data.group.uid).toBe('string');
    expect(typeof joined.data.participant.identity).toBe('string');
    expect(receiver.rejected).toEqual([]);
  });
});
