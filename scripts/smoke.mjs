#!/usr/bin/env node
/**
 * Smoke test of the BUILT package (dist/, ESM and CJS) with a fake fetch: no network, no real key.
 * It exists to check the runtime floor, which the dev tools cannot run on:
 *
 *   npm run build && npx -y -p node@18 node scripts/smoke.mjs
 */
import { createHmac } from 'node:crypto';
import { createRequire } from 'node:module';
import * as esm from '../dist/index.js';

const require = createRequire(import.meta.url);
const cjs = require('../dist/index.cjs');
const json = (body, init = {}) => new Response(JSON.stringify(body), { ...init, headers: { 'content-type': 'application/json', ...init.headers } });

let failures = 0;
const check = (label, condition) => {
  if (!condition) failures++;
  console.log(`${condition ? 'ok  ' : 'FAIL'} ${label}`);
};

for (const [format, sdk] of [['esm', esm], ['cjs', cjs]]) {
  const { Funnelchat, RateLimitError } = sdk;
  const replies = [
    json({ error: 'rate_limited', message: 'x' }, { status: 429, headers: { 'retry-after': '0' } }),
    json({ data: [{ id: 1 }], meta: { current_page: 1, last_page: 2 } }),
    json({ data: [{ id: 2 }], meta: { current_page: 2, last_page: 2 } }),
    json({ error: 'rate_limited', message: 'x' }, { status: 429, headers: { 'retry-after': '3' } }),
  ];
  const calls = [];
  const fetch = async (url, init) => {
    calls.push({ url, init });
    return replies.shift();
  };
  const client = new Funnelchat({ apiKey: '1|fc_live_smoke_test', fetch });

  const ids = [];
  for await (const tag of client.tags.list({ perPage: 1 })) ids.push(tag.id);
  check(`${format}: paginates after retrying a 429`, ids.join() === '1,2' && calls.length === 3);

  const error = await client.messages.send(2001, { device_id: 3, phone: '5491100000000', text: 'hola' }).catch((e) => e);
  check(`${format}: a send is not retried and keeps retryAfter`, error instanceof RateLimitError && error.retryAfter === 3 && calls.length === 4);
  check(`${format}: sends the User-Agent`, calls[0].init.headers['User-Agent'] === `funnelchat-node/${sdk.VERSION} node/${process.version}`);

  const t = Math.floor(Date.now() / 1000);
  const body = '{"id":"evt_1","type":"webhook.test","version":1,"occurred_at":"2026-10-01T12:00:00Z","data":{}}';
  const header = `t=${t},v1=${createHmac('sha256', 'whsec_smoke').update(`${t}.${body}`).digest('hex')}`;
  check(`${format}: verifies a webhook signature`, Funnelchat.webhooks.constructEvent(body, header, 'whsec_smoke').type === 'webhook.test');
}

console.log(`node ${process.version}: ${failures === 0 ? 'OK' : `${failures} failure(s)`}`);
process.exit(failures === 0 ? 0 : 1);
