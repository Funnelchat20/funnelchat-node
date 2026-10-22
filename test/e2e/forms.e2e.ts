/**
 * End to end against funnelchat-sandbox: a form from a template, published, sent and completed
 * (the signed `whatsapp_form.completed` verifies with the SDK); a file extension the API does not
 * take; and the `capabilities` of a number.
 *
 *   FUNNELCHAT_SANDBOX_URL=http://127.0.0.1:4010 npm run test:e2e
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { type APIError, UnsupportedMediaTypeError, type WebhookEventOf } from '../../src/index.js';
import { type Receiver, SANDBOX_URL, SEED, control, sandboxClient, startReceiver } from './sandbox.js';

describe.skipIf(!SANDBOX_URL)('against the sandbox', () => {
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
  });

  it('a form is built, published, sent and its answers arrive signed', async () => {
    const subscription = await funnelchat.webhooks.create({ url: receiver.url, events: ['whatsapp_form.completed'], description: 'e2e funnelchat-node' });
    receiver.setSecret(subscription.secret);

    const { data: draft } = await funnelchat.forms.create({ device_id: SEED.officialDevice, template_key: 'lead' });
    expect(draft.status).toBe('draft');
    const published = await funnelchat.forms.publish(draft.id);
    expect(published.data.status).toBe('published');

    // A form is free-form content: on an official number it needs the 24-hour window open.
    await control('POST', '/window', { contact_id: SEED.contact, device_id: SEED.officialDevice, open: true });
    const { message } = await funnelchat.messages.sendForm(SEED.contact, { form_id: draft.family_id, device_id: SEED.officialDevice, client_reference: 'e2e-form' });
    expect(message.type).toBe('whatsapp_form');
    expect(message.status).toBe('queued');

    await control('POST', '/forms/complete', { message_id: message.id });
    const completed = (await receiver.waitFor(
      (event) => event.type === 'whatsapp_form.completed' && event.data.message_id === message.id,
    )) as WebhookEventOf<'whatsapp_form.completed'>;
    expect(completed.data.form.id).toBe(draft.family_id);
    expect(completed.data.answers.length).toBeGreaterThan(0);
    expect(receiver.rejected).toEqual([]);
  });

  it('an extension the API does not take, without file_type, is a 415', async () => {
    const error = (await funnelchat.messages
      .send(SEED.contact, { device_id: SEED.qrDevice, phone: SEED.phone, file: 'https://files.example.com/backup.zip' })
      .catch((e: unknown) => e)) as APIError;
    expect(error).toBeInstanceOf(UnsupportedMediaTypeError);
    expect(error.body).toHaveProperty('supported_file_types');
  });

  it('each number says what it can do', async () => {
    const official = await funnelchat.devices.retrieve(SEED.officialDevice);
    const qr = await funnelchat.devices.retrieve(SEED.qrDevice);
    expect(official.capabilities.messages.templates).toBe(true);
    expect(qr.capabilities.messages.templates).toBe(false);
  });
});
