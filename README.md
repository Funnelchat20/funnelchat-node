# funnelchat-node

Official Node.js and TypeScript SDK for the [Funnelchat public API](https://developers-portal.funnelchat.app/docs/): contacts, conversations and messages, WhatsApp forms, templates, tags, custom fields, groups, numbers and webhooks, with types generated from the OpenAPI spec.

- TypeScript, ESM and CommonJS. Node 18 or later, with Node's own `fetch`.
- No runtime dependencies.
- Safe retries, pagination with `for await`, typed errors carrying the `X-Request-Id` of each response, and webhook signature verification.

> **v0.** The public API is in v0 and may change. What the API already has but its spec does not describe yet is listed in [Pending of the spec](#pending-of-the-spec).

## Install

```bash
npm install @funnelchat-hq/sdk
```

## First call

You need an API key (`<id>|fc_live_...`) created in the "Developers" section of the panel, with the permissions of what you are going to use. Keep it in an environment variable: the client reads `FUNNELCHAT_API_KEY` when you do not pass it.

```ts
import { Funnelchat } from '@funnelchat-hq/sdk';
// CommonJS: const { Funnelchat } = require('@funnelchat-hq/sdk');

const funnelchat = new Funnelchat({ apiKey: process.env.FUNNELCHAT_API_KEY });

// Your WhatsApp numbers (permission accounts:read). The `id` of each one is the `device_id` you send with.
for await (const device of funnelchat.devices.list()) {
  console.log(device.id, device.number, device.capabilities.messages.templates);
}
```

Client options:

| Option | What it is | Default |
|---|---|---|
| `apiKey` | Your key. | `FUNNELCHAT_API_KEY` |
| `environment` | `production` (`https://api.funnelchat.com`) or `staging`. | `production` |
| `baseUrl` | Another base URL, for example the [sandbox](#test-against-the-sandbox)'s; it wins over `environment`. | — |
| `timeoutMs` | Maximum time of each attempt. | `30000` |
| `maxRetries` | Automatic retries (see [Retries](#retries)). `0` turns them off. | `2` |
| `defaultHeaders` | Headers sent with every request. | — |
| `fetch` | Another `fetch` implementation. | Node's |

Every request sends `Authorization: Bearer <key>`, `Accept: application/json` and `User-Agent: funnelchat-node/<version> node/<version>`. The key never shows up in a `console.log` of the client or in an error.

## The pieces

| Resource | What it has |
|---|---|
| `funnelchat.contacts` | `list`, `create`, `upsert`, `retrieve`, `update`, `delete`, the tags and fields of a contact, `metaWindow` (the 24-hour window), notes. |
| `funnelchat.conversations` | `list`, `update`, counters, mark everything as read or unread. |
| `funnelchat.messages` | `send`, `sendDirect`, `sendForm`, `sendContactCard`, `forward`, `get` (one message by id), `list` (the history of a contact), `react`, `removeReaction`. |
| `funnelchat.forms` | WhatsApp forms: `list`, `templates`, `create`, `retrieve`, `update`, `delete`, `createVersion`, `sync`, `publish`, numbers, `versions`, answers and `metrics`. |
| `funnelchat.templates` | `list`, `create`, `retrieve`, `update`, `quickReplyButtons`, `send`, `delete`. |
| `funnelchat.tags` | `list`, `create`, `retrieve`, `update`, `delete`, `listContacts`. |
| `funnelchat.customFields` | `list`, `create`, `retrieve`, `update`, `delete`. |
| `funnelchat.groups` | Read groups, participants, events and messages; the [group actions](#groups) and the join requests. |
| `funnelchat.devices` | `list`, `retrieve` (with `capabilities`), `update`, `status`, `health`, `me`, `checkPhone`, connection history. |
| `funnelchat.webhooks` | Subscriptions (`list`, `create`, `retrieve`, `update`, `delete`, `test`, `listDeliveries`), the catalog (`events`), `verify` and `constructEvent`. |

Parameters, bodies and responses are typed from the spec. For any other route, see [Any route](#any-route).

## Send a message

Sending with a key needs the `conversations:send` permission and follows the WhatsApp rules. **Every send answers right away with the registered message, `status: 'queued'`:** accepted is not delivered. What happens next arrives by the `message.status_changed` webhook, or is read with `messages.get`.

**Open window: free text.** With an official Meta number you can only send free text if the contact wrote to you in the last 24 hours. Check the window first:

```ts
const window = await funnelchat.contacts.metaWindow(2001, { device_id: 3 });

if (window.is_open) {
  const { message } = await funnelchat.messages.send(2001, {
    device_id: 3,
    phone: '5491100000000',            // the phone of the same contact, without +
    text: 'Hi! Here is the info…',
    client_reference: 'order-8841',    // optional: your reference to follow it
  });
  console.log(message.id, message.status); // 1002 'queued'
}
```

- `message.id` is the same `message_id` of `message.status_changed`. With it, `funnelchat.messages.get(2001, message.id)` tells you how it is going: `status` moves from `queued` to `sent`, `delivered`, `read` or `failed`, and a `failed` one carries `error` (`code`, `title` and `reason`).
- `client_reference` (1 to 64 visible ASCII characters, no spaces) comes back in the history of the contact and in `message.status_changed`.
- `contact_id` goes in the body, but `send` fills it with the contact of the route when you leave it out. Send the `phone` (or `whatsapp_id`) of the same contact: when it does not match, the API answers `422 recipient_mismatch`.
- `sendDirect` is the same operation through `POST /api/v1/message/send-message`, with `device_id` and `contact_id` in the body.
- Contact cards (`sendContactCard`) return `{ messages }`, one per card; a forward (`forward`) one item per destination with its `message` (or `null` when that destination was blocked); a template (`templates.send`) and a form (`sendForm`) `{ message }`.

**A file by URL.** `file` is the URL of the file. When it does not end in a known extension (a signed URL, or one without extension), say what it is with `file_type` and, for a document, the name it arrives with:

```ts
await funnelchat.messages.send(2001, {
  device_id: 3,
  phone: '5491100000000',
  file: 'https://files.example.com/download?signature=abc123',
  file_type: 'document',        // image, video, audio, document or sticker
  file_name: 'invoice.pdf',
});
```

Without `file_type`, a URL without a known extension answers `422` with `errors.file_type`, and an unsupported extension `415` (`UnsupportedMediaTypeError`, with `supported_file_types` in `error.body`).

**Closed window: an approved template.** The route takes the number (`3`) and the id of the template (`45`), which comes from `funnelchat.templates.list()`:

```ts
const { message } = await funnelchat.templates.send(3, '45', {
  phone: '5491100000000',
  contact_id: 2001,
  template_variables: { body: ['Lucía'] }, // the body variables, in order
});
```

**When a send is stopped.** A send that breaks a rule is neither sent nor stored: you get an error with its `code`.

| Error | What happened | What to do |
|---|---|---|
| `422 window_closed` | Free text with the window closed, on an official number. | Send an approved template. |
| `422 antiblock_duplicate_content` | The same content repeated to the same contact. | Change the text or wait. |
| `422 antiblock_unanswered_limit` | Too many messages in a row to someone who does not answer. | Wait until they answer. |
| `422 recipient_mismatch` | The `phone` or `whatsapp_id` is not the contact of the route. | Use that contact's data. |
| `422 recipient_unsupported` | The contact is a group, a broadcast list or a channel. | This route only writes to people. |
| `422 provider_unsupported` | The number cannot send that. | Check the `capabilities` of the number. |
| `422 device_unavailable` | The number is not connected. | Reconnect it. |
| `429 rate_limited` | You went over the pace of your number. It carries `retryAfter`. | Wait those seconds and retry. |
| `429 mac_lockout_24h` | The account is in the 24-hour lockout after using up the monthly active contacts. | Waiting a few seconds does not fix it. |

`isSendRuleError(error.code)` tells you whether the error is a rejected send; `SEND_ERROR_CODES` has all of them, with their HTTP status. A send is **never retried automatically** (see [Retries](#retries)).

## Forms

A WhatsApp form is built, published on one or more numbers and sent to a contact. There are two ids: `id` is one version; `family_id` is the form itself, the one you send it with and the one that comes back as `form.id` in `whatsapp_form.completed`.

```ts
const { data: draft } = await funnelchat.forms.create({ device_id: 3, template_key: 'lead' }); // permission conversations:write
await funnelchat.forms.publish(draft.id);

const { message } = await funnelchat.messages.sendForm(2001, {
  form_id: draft.family_id,
  device_id: 3,
  text: 'How did it go?',
  client_reference: 'survey-8841',
});
```

The answers arrive by the `whatsapp_form.completed` webhook (`answers`: `key`, `label` and `value`) and are read with `forms.listResponses(familyId)`. `forms.templates()` lists the templates to start from; `forms.update(id, { definition, expected_updated_at })` saves a draft and answers `409 STALE` when someone saved it first.

## Groups

Besides reading groups, the API can **act on them through one of your numbers**: create them, add and remove participants, change admins, name, description, photo and settings, renew the invite link, send messages and decide the join requests.

> Group actions are **off by default**. Until they are enabled, they answer `403 route_not_available`.

Each action answers `202` with its `action_id` and runs in the background:

```ts
const { action_id } = await funnelchat.groups.addParticipants('120363000000000001@g.us', {
  device_id: 4,                       // your number, admin of the group
  phones: ['5491100000001'],          // up to 20
});

const { data: action } = await funnelchat.groups.action(action_id);
console.log(action.status, action.result); // 'completed', { participants: [{ identity, status: 'added', … }] }
```

- The group goes by its WhatsApp uid (`…@g.us`).
- What each number can do is in `capabilities.groups` of `funnelchat.devices.retrieve(id)`: a QR number can do everything except deciding join requests; an official one creates, invites (instead of adding), removes, changes name and description and handles the invite link. Anything else answers `422 provider_unsupported`.
- The end arrives by `group_action.completed` (or `group_action.failed`) with the same `action_id` in `action.uuid`.
- Permissions: `communities:operate` for the actions, `communities:send` for `sendMessage` and `communities:read` to read. Their own errors are in `GROUP_ACTION_ERROR_CODES`.

## Receive webhooks with Express

Verify the signature over the **raw body**, exactly as it arrived. If you parse it and serialize it again, the signature changes: use `express.raw`, not `express.json`.

```ts
import express from 'express';
import { Funnelchat, WebhookVerificationError } from '@funnelchat-hq/sdk';

const app = express();

app.post('/hooks/funnelchat', express.raw({ type: 'application/json' }), (req, res) => {
  let event;
  try {
    event = Funnelchat.webhooks.constructEvent(
      req.body,                                // Buffer: the raw body
      req.get('X-Funnelchat-Signature'),
      process.env.FUNNELCHAT_WEBHOOK_SECRET!,  // the full secret, with whsec_
    );
  } catch (error) {
    if (error instanceof WebhookVerificationError) return res.sendStatus(400); // error.reason says why
    throw error;
  }

  res.sendStatus(200); // answer fast (under 10 s) and process later
  queue.push(event);   // deduplicate by event.id: a retry brings the same one
});

function handle(event) {
  switch (event.type) {
    case 'message.received':
      console.log(event.data.device_id, event.data.contact.phone, event.data.message.text);
      break;
    case 'message.status_changed':
      console.log(event.data.message_id, event.data.status, event.data.client_reference);
      break;
    case 'whatsapp_form.completed':
      console.log(event.data.form.id, event.data.answers);
      break;
    default:
      // A type your code does not know yet: it is not an error, answer 2xx anyway.
  }
}
```

- `constructEvent` verifies the signature and returns the typed event: with `event.type`, TypeScript knows the shape of `event.data`. When something fails, it throws `WebhookVerificationError` with `reason`: `missing_header`, `malformed_header`, `timestamp_out_of_tolerance`, `signature_mismatch`, `invalid_body`, `invalid_json`…
- To just get a yes or no, `Funnelchat.webhooks.verify(rawBody, signatureHeader, secret)` returns `true` or `false` and never throws.
- Both reject a signature whose `t` is more than 300 seconds away from your clock. To change it: `{ toleranceSeconds: 600 }` as the fourth argument.
- The algorithm is the portal's: `X-Funnelchat-Signature: t=<unix>,v1=<hex>`, where `v1` is the HMAC-SHA256, with the full secret, of `"<t>." + raw body`, compared in constant time; there can be several `v1`. The tests use the portal's test vectors.
- `webhookEvents` lists the types the SDK knows, with their status (`live` or `planned`).

### Subscribe

```ts
const subscription = await funnelchat.webhooks.create({
  url: 'https://your-server.example/hooks/funnelchat',
  events: ['message.received', 'message.status_changed', 'whatsapp_form.completed'],
  description: 'My integration',
});
// Store subscription.id and subscription.secret: the secret is shown only once.
```

- Permissions: `webhooks:read` to read and `webhooks:write` for the rest. Also, a key can only subscribe to events of the areas it can read (`conversations:read`, `communities:read`, `accounts:read`): asking for others is a `422` on `events`.
- Subscriptions belong to the account: `list()` also brings the ones of other integrations. To change the URL use `update(id, …)` (the secret stays). `test(id)` sends a signed `webhook.test` right now and `listDeliveries(id)` is the history.
- `rotateSecret(id)` is **not open to API keys** (`403 route_not_available`): rotate the secret from the panel.

## Pagination

`list…` methods return a lazy page: nothing is requested until you use it.

```ts
// Every item of every page:
for await (const contact of funnelchat.contacts.list({ perPage: 100, tag_mode: 'any', tag_ids: [12] })) {
  console.log(contact.id);
}

// Page by page:
let page = await funnelchat.tags.list({ perPage: 50 });
console.log(page.data, page.requestId);
while (page.hasNextPage()) {
  page = await page.getNextPage();
}
```

The SDK understands the three ways the API paginates: by page number (`meta.current_page` and `meta.last_page`), by cursor (`meta.next_cursor`) and lists that come whole in an array. The page size is asked with the parameter of each route (`perPage`, `per_page` or `pageSize`, as the spec says).

## Errors

Everything the SDK throws extends `FunnelchatError`. When the API answers with an error, it is an `APIError`:

| Property | What it is |
|---|---|
| `status` | The HTTP status. |
| `code` | The stable `error` of the body (`window_closed`, `rate_limited`, `route_not_available`…), or `undefined` when there is none (for example a validation `422`). |
| `message` | The `message` of the body, meant for people. Decide by `status` and `code`, not by `message`. |
| `requestId` | The `X-Request-Id` of the response. **Quote it when you report a problem.** |
| `retryAfter` | The seconds of `Retry-After`, when present. |
| `errors` | In a validation `422`, the messages per field. |
| `body` | The full body, with the fields of each error. |

Each HTTP status has its class: `BadRequestError` (400), `AuthenticationError` (401), `PermissionDeniedError` (403), `NotFoundError` (404), `ConflictError` (409), `UnsupportedMediaTypeError` (415), `UnprocessableEntityError` (422), `RateLimitError` (429) and `InternalServerError` (5xx). No response: `APIConnectionError`, and `APIConnectionTimeoutError` when it went over `timeoutMs`. Aborted with your own `AbortSignal`: `APIUserAbortError`.

```ts
import { APIError, RateLimitError } from '@funnelchat-hq/sdk';

try {
  await funnelchat.contacts.retrieve(2001);
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log(`Wait ${error.retryAfter} s`);
  } else if (error instanceof APIError) {
    console.log(error.status, error.code, error.message, error.requestId);
  } else {
    throw error;
  }
}
```

The errors of the API entry and of access control apply to any route (`ACCESS_ERROR_CODES`):

| Error | What happened |
|---|---|
| `401 unauthenticated` | The key is missing or not valid. |
| `403 permission_denied` | The key lacks the permission of the route. |
| `403 route_not_available` | The route is not open to API keys (or it is turned off). |
| `404 route_not_found` | The route does not exist in the public API. |
| `429 daily_cap_exceeded` | The daily call cap of the key was reached. It carries `Retry-After`. |
| `500 edge_misconfigured` | A problem on our side: report it with the `requestId`. |
| `502 origin_unreachable` | The API could not reach the area of the route. Treat it as a timeout: if it was a write, check whether it was applied before repeating it. |
| `503 gate_unavailable` | The call could not be evaluated and nothing ran. It carries `Retry-After`. |

**The `X-Request-Id` of a successful response** is at hand too: every call returns a promise with `withResponse()`.

```ts
const { data, requestId, response } = await funnelchat.contacts.retrieve(2001).withResponse();
```

## Retries

- Reads and writes that give the same result when repeated (`GET`, `PUT`, `DELETE`) are retried on a `429`, a `5xx` or a network error (also when `timeoutMs` ran out), up to `maxRetries` times (2 by default).
- Other writes (`POST`, `PATCH`) are retried **only when the API guarantees they were not applied**: `429` and `503`. A `500`, `502` or `504`, a timeout or a dropped connection can come after the write was applied, so the error is thrown right away: read the state before repeating it.
- **A send is never retried automatically**: the `POST`s with the `conversations:send` or `communities:send` permission (messages, forms, cards, forwards, templates, group messages). If a `429 rate_limited` sent nothing and you want the SDK to retry for you, ask for it in that call with `{ retrySend: true }`: it then follows the rule of writes. `mac_lockout_24h` and `mac_limit_reached` are never retried.
- With `Retry-After`, the wait is exactly what it asks for. If it asks for more than 60 seconds, there is no wait: the error is thrown right away with its `retryAfter` and you decide. Without `Retry-After`, the wait is exponential: 0.5 s, 1 s, 2 s… up to 8 s, with some jitter.
- Per call you can change `maxRetries`, `timeoutMs` and `signal`:

```ts
await funnelchat.tags.list({}, { maxRetries: 0, timeoutMs: 5000, signal: AbortSignal.timeout(10_000) });
```

## Any route

`request` calls any route. With a route of the spec, the path parameters, the query, the body and the response are typed:

```ts
const contact = await funnelchat.request('GET', '/api/v1/contacts/{contact}', { path: { contact: 2001 } });

const stats = await funnelchat.request('GET', '/api/v1/broadcasts/{broadcast}/statistics', { path: { broadcast: 77 } });
```

A route that is not in the spec yet works the same, untyped (or with the types you pass):

```ts
const result = await funnelchat.request<{ ok: boolean }>('POST', '/api/v1/something-new', { body: { a: 1 } });
```

`paginate` is the same for lists: `for await (const item of funnelchat.paginate('/api/v1/broadcasts'))`.

The query is built the way Laravel reads it: arrays as `key[]=a&key[]=b`, objects with brackets and booleans as `1` and `0`.

The types of the spec are exported too: `paths`, `components`, `operations`, and the shorthands `Body<'/api/v1/tags', 'POST'>`, `Query<'/api/v1/contacts'>`, `ResponseBody<…>`. The `routes` table has every operation with its area and its permission.

## Test against the sandbox

[funnelchat-sandbox](https://github.com/Funnelchat20/funnelchat-sandbox) imitates the API on your machine: sends with their status cycle, signed webhooks and the WhatsApp rules, without a real account. Point the client at it:

```ts
const funnelchat = new Funnelchat({ apiKey: '1|fc_live_sandbox', baseUrl: 'http://localhost:4010' });
```

## Pending of the spec

The published spec does not describe everything the API in production already has yet. What is missing lives in a separate layer, `spec/pending.json`, which generation adds to the types **only while the spec does not bring it**; each entry cites where it came from:

- what sends answer (the queued message), `messages.get`, `client_reference`, `file_type` and `file_name`;
- forms and `messages.sendForm`;
- group actions and join requests;
- the `capabilities` of numbers;
- webhook subscriptions and the events the spec does not bring (`message.status_changed` with its shape, `whatsapp_form.completed`, the group ones and the account ones).

`src/pending/` has what is not OpenAPI (`device_id` in `message.received`) and `src/core/error-codes.ts` the error codes.

## Development

```bash
npm install
npm run generate:check   # the generated files and spec/pending.json are up to date
npm run typecheck        # tsc, including the type checks of test/types.test.ts
npm run lint
npm test                 # vitest, no network and no keys: a mocked fetch
npm run build            # dist/ in ESM and CJS, with .d.ts
FUNNELCHAT_SANDBOX_URL=http://127.0.0.1:4010 npm run test:e2e   # against a running sandbox
```

The SDK runs on Node 18 or later; the development tools (vitest 4, eslint 9) need Node 20 or later.

To release, push a `vX.Y.Z` tag on `main` matching the `version` in `package.json`; GitHub Actions (`.github/workflows/publish.yml`) publishes it to npm with provenance.

Everything generated comes from one script:

```bash
npm run generate -- --spec <path>/funnelchat.json   # with a new unified spec of the portal
npm run generate                                    # with the one in spec/, for example after editing spec/pending.json
```

1. With `--spec`, it copies the spec to `spec/funnelchat.json` and writes `spec/procedencia.json`: repository, branch, commit, date and `sha256` of the file.
2. It adds `spec/pending.json`, but only what the spec does not bring, and lists what it already brings so you can delete it from there.
3. It writes `src/generated/openapi.ts` (with [openapi-typescript](https://openapi-ts.dev)), `src/generated/routes.ts` (every operation, with area and permission) and `src/generated/events.ts` (the event catalog and the shape of the `data` of each one).

```
spec/            the spec, its provenance and the pending layer
scripts/         generate.mjs (the generator) and format-pending.mjs
src/generated/   generated code (never edited by hand)
src/pending/     what is pending of the spec and is not OpenAPI
src/core/        HTTP, retries, pagination, errors and their codes
src/resources/   the pieces
src/webhooks/    signature and events
test/            vitest; test/e2e against the sandbox
```

## License

[MIT](LICENSE)
