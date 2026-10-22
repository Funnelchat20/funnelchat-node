# funnelchat-node

SDK oficial de Node.js y TypeScript para la [API pública de Funnelchat](https://developers-portal.funnelchat.app/docs/): contactos, conversaciones y mensajes, formularios de WhatsApp, plantillas, etiquetas, campos personalizados, grupos, números y webhooks, con tipos generados de la especificación OpenAPI.

- TypeScript, ESM y CommonJS. Node 18 o posterior, con el `fetch` del propio Node.
- Sin dependencias en tiempo de ejecución.
- Reintentos seguros, paginación con `for await`, errores tipados con el `X-Request-Id` de cada respuesta y verificación de la firma de los webhooks.

> **v0.** La API pública está en v0 y puede cambiar. Lo que la API ya tiene pero su especificación todavía no describe está en [Pendiente de la especificación](#pendiente-de-la-especificación).

## Instalación

```bash
npm install @funnelchat/sdk
```

## Primera llamada

Necesitas una clave de API (`<id>|fc_live_...`) creada en «Desarrolladores», con los permisos de lo que vas a usar. Guárdala en una variable de entorno: el cliente la lee de `FUNNELCHAT_API_KEY` si no se la pasas.

```ts
import { Funnelchat } from '@funnelchat/sdk';
// CommonJS: const { Funnelchat } = require('@funnelchat/sdk');

const funnelchat = new Funnelchat({ apiKey: process.env.FUNNELCHAT_API_KEY });

// Tus números de WhatsApp (permiso accounts:read). El `id` de cada uno es el `device_id` con el que envías.
for await (const device of funnelchat.devices.list()) {
  console.log(device.id, device.number, device.capabilities.messages.templates);
}
```

Opciones del cliente:

| Opción | Qué es | Por defecto |
|---|---|---|
| `apiKey` | Tu clave. | `FUNNELCHAT_API_KEY` |
| `environment` | `production` (`https://api.funnelchat.com`) o `staging`. | `production` |
| `baseUrl` | Otra URL base, por ejemplo la del [sandbox](#probar-contra-el-sandbox); gana sobre `environment`. | — |
| `timeoutMs` | Tiempo máximo de cada intento. | `30000` |
| `maxRetries` | Reintentos automáticos (ver [Reintentos](#reintentos)). `0` los apaga. | `2` |
| `defaultHeaders` | Cabeceras que van en todos los pedidos. | — |
| `fetch` | Otra implementación de `fetch`. | la de Node |

Cada pedido manda `Authorization: Bearer <clave>`, `Accept: application/json` y `User-Agent: funnelchat-node/<versión> node/<versión>`. La clave nunca aparece en un `console.log` del cliente ni en un error.

## Las piezas

| Recurso | Qué tiene |
|---|---|
| `funnelchat.contacts` | `list`, `create`, `upsert`, `retrieve`, `update`, `delete`, etiquetas y campos de un contacto, `metaWindow` (la ventana de 24 horas), notas. |
| `funnelchat.conversations` | `list`, `update`, contadores, marcar todo como leído o no leído. |
| `funnelchat.messages` | `send`, `sendDirect`, `sendForm`, `sendContactCard`, `forward`, `get` (un mensaje por id), `list` (el historial de un contacto), `react`, `removeReaction`. |
| `funnelchat.forms` | Formularios de WhatsApp: `list`, `templates`, `create`, `retrieve`, `update`, `delete`, `createVersion`, `sync`, `publish`, números, `versions`, respuestas y `metrics`. |
| `funnelchat.templates` | `list`, `create`, `retrieve`, `update`, `quickReplyButtons`, `send`, `delete`. |
| `funnelchat.tags` | `list`, `create`, `retrieve`, `update`, `delete`, `listContacts`. |
| `funnelchat.customFields` | `list`, `create`, `retrieve`, `update`, `delete`. |
| `funnelchat.groups` | Leer grupos, participantes, eventos y mensajes; las [acciones de grupo](#grupos) y las solicitudes de unión. |
| `funnelchat.devices` | `list`, `retrieve` (con `capabilities`), `update`, `status`, `health`, `me`, `checkPhone`, historial de conexión. |
| `funnelchat.webhooks` | Suscripciones (`list`, `create`, `retrieve`, `update`, `delete`, `test`, `listDeliveries`), el catálogo (`events`), `verify` y `constructEvent`. |

Los parámetros, los cuerpos y las respuestas están tipados con la especificación. Para cualquier otra ruta, ver [Cualquier ruta](#cualquier-ruta).

## Enviar un mensaje

Enviar con una clave pide el permiso `conversations:send` y sigue las reglas de WhatsApp. **Cada envío responde enseguida con el mensaje registrado, `status: 'queued'`:** aceptado no es entregado. Lo que pasa después llega por el webhook `message.status_changed` o se lee con `messages.get`.

**Ventana abierta: texto libre.** Con un número oficial de Meta solo puedes mandar texto libre si el contacto te escribió en las últimas 24 horas. Mira la ventana antes:

```ts
const window = await funnelchat.contacts.metaWindow(2001, { device_id: 3 });

if (window.is_open) {
  const { message } = await funnelchat.messages.send(2001, {
    device_id: 3,
    phone: '5491100000000',            // el teléfono del mismo contacto, sin +
    text: '¡Hola! Te paso la info…',
    client_reference: 'pedido-8841',   // opcional: tu referencia para seguirlo
  });
  console.log(message.id, message.status); // 1002 'queued'
}
```

- `message.id` es el mismo `message_id` de `message.status_changed`. Con él, `funnelchat.messages.get(2001, message.id)` te dice cómo va: `status` pasa de `queued` a `sent`, `delivered`, `read` o `failed`, y en `failed` trae `error` (`code`, `title` y `reason`).
- `client_reference` (de 1 a 64 caracteres ASCII visibles, sin espacios) vuelve en el historial del contacto y en `message.status_changed`.
- `contact_id` va en el cuerpo, pero `send` lo completa con el contacto de la ruta si no lo pasas. Manda `phone` (o `whatsapp_id`) del mismo contacto: si no corresponde, la API responde `422 recipient_mismatch`.
- `sendDirect` es la misma operación por `POST /api/v1/message/send-message`, con `device_id` y `contact_id` en el cuerpo.
- Las tarjetas de contacto (`sendContactCard`) devuelven `{ messages }`, uno por tarjeta; el reenvío (`forward`) un ítem por destino con su `message` (o `null` si ese destino se bloqueó); la plantilla (`templates.send`) y el formulario (`sendForm`) `{ message }`.

**Un archivo por URL.** `file` es la URL del archivo. Si no termina en una extensión conocida (una URL firmada o sin extensión), di qué es con `file_type` y, si es un documento, con qué nombre llega:

```ts
await funnelchat.messages.send(2001, {
  device_id: 3,
  phone: '5491100000000',
  file: 'https://files.example.com/download?signature=abc123',
  file_type: 'document',        // image, video, audio, document o sticker
  file_name: 'factura.pdf',
});
```

Sin `file_type`, una URL sin extensión conocida responde `422` con `errors.file_type`, y una extensión no soportada `415` (`UnsupportedMediaTypeError`, con `supported_file_types` en `error.body`).

**Ventana cerrada: una plantilla aprobada.** En la ruta van el número (`3`) y el id de la plantilla (`45`), que sale de `funnelchat.templates.list()`:

```ts
const { message } = await funnelchat.templates.send(3, '45', {
  phone: '5491100000000',
  contact_id: 2001,
  template_variables: { body: ['Lucía'] }, // las variables del cuerpo, en orden
});
```

**Si te frenamos.** Si un envío rompe una regla, no sale ni se guarda: te llega un error con su `code`.

| Error | Qué pasó | Qué hacer |
|---|---|---|
| `422 window_closed` | Texto libre con la ventana cerrada, en un número oficial. | Manda una plantilla aprobada. |
| `422 antiblock_duplicate_content` | El mismo contenido repetido al mismo contacto. | Cambia el texto o espera. |
| `422 antiblock_unanswered_limit` | Demasiados mensajes seguidos a alguien que no contesta. | Espera a que responda. |
| `422 recipient_mismatch` | El `phone` o `whatsapp_id` no es el del contacto de la ruta. | Usa los datos de ese contacto. |
| `422 recipient_unsupported` | El contacto es un grupo, una lista de difusión o un canal. | Por esta ruta solo se escribe a personas. |
| `422 provider_unsupported` | El número no puede mandar eso. | Mira `capabilities` del número. |
| `422 device_unavailable` | El número no está conectado. | Reconéctalo. |
| `429 rate_limited` | Superaste el ritmo de tu número. Trae `retryAfter`. | Espera esos segundos y reintenta. |
| `429 mac_lockout_24h` | La cuenta está en el bloqueo de 24 horas por agotar los contactos activos del mes. | Esperar unos segundos no lo resuelve. |

`isSendRuleError(error.code)` te dice si el error es un rechazo de envío; `SEND_ERROR_CODES` tiene todos, con su código HTTP. Un envío **nunca se reintenta solo** (ver [Reintentos](#reintentos)).

## Formularios

Un formulario de WhatsApp se arma, se publica en uno o más números y se envía a un contacto. Hay dos ids: `id` es una versión; `family_id` es el formulario, el que usas para enviarlo y el que vuelve como `form.id` en `whatsapp_form.completed`.

```ts
const { data: draft } = await funnelchat.forms.create({ device_id: 3, template_key: 'encuesta' }); // permiso conversations:write
await funnelchat.forms.publish(draft.id);

const { message } = await funnelchat.messages.sendForm(2001, {
  form_id: draft.family_id,
  device_id: 3,
  text: '¿Nos cuentas cómo te fue?',
  client_reference: 'encuesta-8841',
});
```

Las respuestas llegan por el webhook `whatsapp_form.completed` (`answers`: `key`, `label` y `value`) y se leen con `forms.listResponses(familyId)`. `forms.templates()` lista las plantillas para empezar; `forms.update(id, { definition, expected_updated_at })` guarda un borrador y responde `409 STALE` si alguien lo guardó antes.

## Grupos

Además de leer grupos, la API puede **actuar sobre ellos a través de uno de tus números**: crearlos, agregar y sacar participantes, cambiar admins, nombre, descripción, foto y permisos, renovar el enlace de invitación, enviar mensajes y decidir las solicitudes de unión.

> Las acciones de grupo están **apagadas por defecto**. Mientras no estén habilitadas, responden `403 route_not_available`.

Cada acción responde `202` con su `action_id` y corre en segundo plano:

```ts
const { action_id } = await funnelchat.groups.addParticipants('120363000000000001@g.us', {
  device_id: 4,                       // tu número, admin del grupo
  phones: ['5491100000001'],          // hasta 20
});

const { data: action } = await funnelchat.groups.action(action_id);
console.log(action.status, action.result); // 'completed', { participants: [{ identity, status: 'added', … }] }
```

- El grupo va por su uid de WhatsApp (`…@g.us`).
- Lo que puede hacer cada número está en `capabilities.groups` de `funnelchat.devices.retrieve(id)`: un número QR puede todo menos decidir solicitudes; uno oficial crea, invita (en vez de agregar), saca, cambia nombre y descripción y maneja el enlace. Lo demás responde `422 provider_unsupported`.
- El final llega por `group_action.completed` (o `group_action.failed`) con el mismo `action_id` en `action.uuid`.
- Permisos: `communities:operate` para las acciones, `communities:send` para `sendMessage` y `communities:read` para leer. Los errores propios están en `GROUP_ACTION_ERROR_CODES`.

## Recibir webhooks con Express

Verifica la firma sobre el **cuerpo crudo**, tal como llegó. Si lo parseas y lo vuelves a serializar, cambia la firma: usa `express.raw`, no `express.json`.

```ts
import express from 'express';
import { Funnelchat, WebhookVerificationError } from '@funnelchat/sdk';

const app = express();

app.post('/hooks/funnelchat', express.raw({ type: 'application/json' }), (req, res) => {
  let event;
  try {
    event = Funnelchat.webhooks.constructEvent(
      req.body,                                // Buffer: el cuerpo crudo
      req.get('X-Funnelchat-Signature'),
      process.env.FUNNELCHAT_WEBHOOK_SECRET!,  // el secreto completo, con whsec_
    );
  } catch (error) {
    if (error instanceof WebhookVerificationError) return res.sendStatus(400); // error.reason dice por qué
    throw error;
  }

  res.sendStatus(200); // responde rápido (menos de 10 s) y procesa después
  queue.push(event);   // deduplica por event.id: un reintento trae el mismo
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
      // Un tipo que tu código no conoce todavía: no es un error, responde 2xx igual.
  }
}
```

- `constructEvent` verifica la firma y devuelve el evento tipado: con `event.type` TypeScript sabe la forma de `event.data`. Si algo falla, lanza `WebhookVerificationError` con `reason`: `missing_header`, `malformed_header`, `timestamp_out_of_tolerance`, `signature_mismatch`, `invalid_body`, `invalid_json`…
- Si solo quieres saber sí o no, `Funnelchat.webhooks.verify(rawBody, signatureHeader, secret)` devuelve `true` o `false` y nunca lanza errores.
- Las dos rechazan una firma con un `t` a más de 300 segundos de tu reloj. Para cambiarlo: `{ toleranceSeconds: 600 }` como cuarto argumento.
- El algoritmo es el del portal: `X-Funnelchat-Signature: t=<unix>,v1=<hex>`, donde `v1` es el HMAC-SHA256 con el secreto completo de `"<t>." + cuerpo crudo`, comparado en tiempo constante, y puede haber varias `v1`. Los tests usan los vectores de prueba del portal.
- `webhookEvents` lista los tipos que conoce el SDK, con su estado (`live` o `planned`).

### Suscribirte

```ts
const subscription = await funnelchat.webhooks.create({
  url: 'https://tu-servidor.example/hooks/funnelchat',
  events: ['message.received', 'message.status_changed', 'whatsapp_form.completed'],
  description: 'Mi integración',
});
// Guarda subscription.id y subscription.secret: el secreto se muestra una sola vez.
```

- Permisos: `webhooks:read` para leer y `webhooks:write` para el resto. Además, la clave solo puede suscribirse a eventos de las áreas que puede leer (`conversations:read`, `communities:read`, `accounts:read`): pedir otros es un `422` en `events`.
- Las suscripciones son de la cuenta: `list()` trae también las de otras integraciones. Para cambiar la URL usa `update(id, …)` (el secreto no cambia). `test(id)` manda un `webhook.test` firmado ahora mismo y `listDeliveries(id)` es el historial.
- `rotateSecret(id)` **no está abierta a claves de API** (`403 route_not_available`): rota el secreto desde el panel.

## Paginación

Los métodos `list…` devuelven una página perezosa: no se pide nada hasta que la usas.

```ts
// Todos los ítems de todas las páginas:
for await (const contact of funnelchat.contacts.list({ perPage: 100, tag_mode: 'any', tag_ids: [12] })) {
  console.log(contact.id);
}

// Página por página:
let page = await funnelchat.tags.list({ perPage: 50 });
console.log(page.data, page.requestId);
while (page.hasNextPage()) {
  page = await page.getNextPage();
}
```

El SDK entiende las tres formas de paginar de la API: por número de página (`meta.current_page` y `meta.last_page`), por cursor (`meta.next_cursor`) y las listas que vienen enteras en un array. El tamaño de página se pide con el parámetro de cada ruta (`perPage`, `per_page` o `pageSize`, según la especificación).

## Errores

Todo lo que lanza el SDK hereda de `FunnelchatError`. Cuando la API responde con un error, es un `APIError`:

| Propiedad | Qué es |
|---|---|
| `status` | El código HTTP. |
| `code` | El `error` estable del cuerpo (`window_closed`, `rate_limited`, `route_not_available`…), o `undefined` si no trae (por ejemplo un `422` de validación). |
| `message` | El `message` del cuerpo, para personas. Decide por `status` y `code`, no por `message`. |
| `requestId` | El `X-Request-Id` de la respuesta. **Cítalo cuando reportes un problema.** |
| `retryAfter` | Los segundos de `Retry-After`, si vino. |
| `errors` | En un `422` de validación, los mensajes por campo. |
| `body` | El cuerpo completo, con los campos propios de cada error. |

Cada código HTTP tiene su clase: `BadRequestError` (400), `AuthenticationError` (401), `PermissionDeniedError` (403), `NotFoundError` (404), `ConflictError` (409), `UnsupportedMediaTypeError` (415), `UnprocessableEntityError` (422), `RateLimitError` (429) e `InternalServerError` (5xx). Sin respuesta: `APIConnectionError`, y `APIConnectionTimeoutError` si se pasó de `timeoutMs`. Si cancelaste con tu `AbortSignal`: `APIUserAbortError`.

```ts
import { APIError, RateLimitError } from '@funnelchat/sdk';

try {
  await funnelchat.contacts.retrieve(2001);
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log(`Espera ${error.retryAfter} s`);
  } else if (error instanceof APIError) {
    console.log(error.status, error.code, error.message, error.requestId);
  } else {
    throw error;
  }
}
```

Los errores de la entrada de la API y del control de acceso valen para cualquier ruta (`ACCESS_ERROR_CODES`):

| Error | Qué pasó |
|---|---|
| `401 unauthenticated` | Falta la clave o no es válida. |
| `403 permission_denied` | La clave no tiene el permiso de la ruta. |
| `403 route_not_available` | La ruta no está abierta a claves de API (o está apagada). |
| `404 route_not_found` | La ruta no existe en la API pública. |
| `429 daily_cap_exceeded` | Se superó el tope diario de llamadas de la clave. Trae `Retry-After`. |
| `500 edge_misconfigured` | Un problema de nuestro lado: repórtalo con el `requestId`. |
| `502 origin_unreachable` | La API no pudo llegar al área de la ruta. Trátalo como un timeout: si era una escritura, comprueba si se aplicó antes de repetirla. |
| `503 gate_unavailable` | No se pudo evaluar la llamada y no se ejecutó nada. Trae `Retry-After`. |

**El `X-Request-Id` de una respuesta que salió bien** también está a mano: cada llamada devuelve una promesa con `withResponse()`.

```ts
const { data, requestId, response } = await funnelchat.contacts.retrieve(2001).withResponse();
```

## Reintentos

- Las lecturas y las escrituras que dan lo mismo repetidas (`GET`, `PUT`, `DELETE`) se reintentan ante un `429`, un `5xx` o un error de red (también si se pasó el `timeoutMs`), hasta `maxRetries` veces (2 por defecto).
- Las demás escrituras (`POST`, `PATCH`) se reintentan **solo cuando la API asegura que no se aplicaron**: `429` y `503`. Un `500`, `502` o `504`, un timeout o una conexión cortada pueden llegar después de que la escritura se aplicó, así que el error sale enseguida: lee el estado antes de repetirla.
- **Un envío nunca se reintenta solo**: los `POST` con permiso `conversations:send` o `communities:send` (mensajes, formularios, tarjetas, reenvíos, plantillas, mensajes a grupos). Si un `429 rate_limited` no envió nada y quieres que el SDK reintente por ti, pídelo en esa llamada con `{ retrySend: true }`: sigue la regla de las escrituras. `mac_lockout_24h` y `mac_limit_reached` no se reintentan nunca.
- Con `Retry-After`, se espera exactamente lo que pide. Si pide más de 60 segundos, no se espera: el error sale enseguida con su `retryAfter` y decides tú. Sin `Retry-After`, la espera es exponencial: 0,5 s, 1 s, 2 s… hasta 8 s, con un poco de azar.
- Por llamada puedes cambiar `maxRetries`, `timeoutMs` y `signal`:

```ts
await funnelchat.tags.list({}, { maxRetries: 0, timeoutMs: 5000, signal: AbortSignal.timeout(10_000) });
```

## Cualquier ruta

`request` llama a cualquier ruta. Con una ruta de la especificación, los parámetros de ruta, la query, el cuerpo y la respuesta están tipados:

```ts
const contact = await funnelchat.request('GET', '/api/v1/contacts/{contact}', { path: { contact: 2001 } });

const stats = await funnelchat.request('GET', '/api/v1/broadcasts/{broadcast}/statistics', { path: { broadcast: 77 } });
```

Con una ruta que todavía no está en la especificación funciona igual, sin tipos (o con los que le pases):

```ts
const result = await funnelchat.request<{ ok: boolean }>('POST', '/api/v1/algo-nuevo', { body: { a: 1 } });
```

`paginate` es lo mismo para listas: `for await (const item of funnelchat.paginate('/api/v1/broadcasts'))`.

La query se arma como la lee Laravel: los arrays van como `clave[]=a&clave[]=b`, los objetos con corchetes y los booleanos como `1` y `0`.

Los tipos de la especificación también se exportan: `paths`, `components`, `operations`, y los atajos `Body<'/api/v1/tags', 'POST'>`, `Query<'/api/v1/contacts'>`, `ResponseBody<…>`. La tabla `routes` tiene cada operación con su área y su permiso.

## Probar contra el sandbox

[funnelchat-sandbox](https://github.com/Funnelchat20/funnelchat-sandbox) imita la API en tu máquina: envíos con su ciclo de estados, webhooks firmados y las reglas de WhatsApp, sin cuenta real. Apunta el cliente a él:

```ts
const funnelchat = new Funnelchat({ apiKey: '1|fc_live_sandbox', baseUrl: 'http://localhost:4010' });
```

## Pendiente de la especificación

La especificación publicada todavía no describe todo lo que la API en producción ya tiene. Lo que falta está en una capa aparte, `spec/pending.json`, que la generación suma a los tipos **solo mientras la especificación no lo traiga**, y cada entrada cita de dónde salió:

- lo que responden los envíos (el mensaje en cola), `messages.get`, `client_reference`, `file_type` y `file_name`;
- los formularios y `messages.sendForm`;
- las acciones de grupo y las solicitudes de unión;
- `capabilities` de los números;
- las suscripciones de webhooks y los eventos que la especificación no trae (`message.status_changed` con su forma, `whatsapp_form.completed`, los de grupos y los de la cuenta).

`src/pending/` tiene lo que no es OpenAPI (`device_id` en `message.received`) y `src/core/error-codes.ts` los códigos de error.

## Desarrollo

```bash
npm install
npm run generate:check   # lo generado y spec/pending.json están al día
npm run typecheck        # tsc, incluye los chequeos de tipos de test/types.test.ts
npm run lint
npm test                 # vitest, sin red ni claves: fetch simulado
npm run build            # dist/ en ESM y CJS, con .d.ts
FUNNELCHAT_SANDBOX_URL=http://127.0.0.1:4010 npm run test:e2e   # contra un sandbox corriendo
```

El SDK corre en Node 18 o posterior; las herramientas de desarrollo (vitest 4, eslint 9) piden Node 20 o posterior.

Todo lo generado sale de un solo script:

```bash
npm run generate -- --spec <ruta>/funnelchat.json   # con una especificación unificada nueva del portal
npm run generate                                    # con la de spec/, por ejemplo después de tocar spec/pending.json
```

1. Con `--spec`, copia la especificación a `spec/funnelchat.json` y escribe `spec/procedencia.json`: repositorio, rama, commit, fecha y `sha256` del archivo.
2. Suma `spec/pending.json`, pero solo lo que la especificación no trae, y lista lo que ya trae para que lo borres de ahí.
3. Escribe `src/generated/openapi.ts` (con [openapi-typescript](https://openapi-ts.dev)), `src/generated/routes.ts` (cada operación, con área y permiso) y `src/generated/events.ts` (el catálogo de eventos y la forma de `data` de cada uno).

```
spec/            la especificación, su procedencia y la capa pendiente
scripts/         generate.mjs (el generador) y format-pending.mjs
src/generated/   lo generado (no se edita)
src/pending/     lo pendiente de la especificación que no es OpenAPI
src/core/        HTTP, reintentos, paginación, errores y sus códigos
src/resources/   las piezas
src/webhooks/    firma y eventos
test/            vitest; test/e2e contra el sandbox
```

## Licencia

[MIT](LICENSE)
