# funnelchat-node

SDK oficial de Node.js y TypeScript para la API pública de Funnelchat: contactos, conversaciones y mensajes, plantillas, etiquetas, campos personalizados, grupos, números y webhooks, con tipos generados de la especificación OpenAPI.

- TypeScript, ESM y CommonJS. Node 18 o posterior, con el `fetch` del propio Node.
- Sin dependencias en tiempo de ejecución.
- Reintentos con espera exponencial, paginación con `for await`, errores tipados y verificación de la firma de los webhooks.

> **Estado: v0, en desarrollo.** La API pública está en v0 y cambia sin aviso. El paquete todavía no está publicado en npm (está marcado `private` para que no se publique por accidente). Algunas piezas vienen de ramas sin mergear: están en [Pendiente de la especificación](#pendiente-de-la-especificación).

## Instalación

Cuando se publique:

```bash
npm install @funnelchat/sdk
```

Mientras tanto, desde este repo:

```bash
git clone git@github.com:Funnelchat20/funnelchat-node.git
cd funnelchat-node
npm install
npm run build
npm pack                      # genera funnelchat-sdk-0.1.0.tgz
# y en tu proyecto:
npm install ../funnelchat-node/funnelchat-sdk-0.1.0.tgz
```

## Primer llamado

Necesitás una clave de API (`<id>|fc_live_...`) creada en «Desarrolladores», con los permisos de lo que vas a usar. Guardala en una variable de entorno: el cliente la lee de `FUNNELCHAT_API_KEY` si no se la pasás.

```ts
import { Funnelchat } from '@funnelchat/sdk';
// CommonJS: const { Funnelchat } = require('@funnelchat/sdk');

const funnelchat = new Funnelchat({ apiKey: process.env.FUNNELCHAT_API_KEY });

// Tus números de WhatsApp (permiso accounts:read). El `id` de cada uno es el `device_id` con el que enviás.
for await (const device of funnelchat.devices.list()) {
  console.log(device.id, device.number);
}
```

Opciones del cliente:

| Opción | Qué es | Por defecto |
|---|---|---|
| `apiKey` | Tu clave. | `FUNNELCHAT_API_KEY` |
| `environment` | `production` (`https://api.funnelchat.com`) o `staging` (`https://api-staging.funnelchat.com`). | `production` |
| `baseUrl` | Otra URL base; gana sobre `environment`. | — |
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
| `funnelchat.messages` | `send`, `list` (el historial de un contacto), `sendContactCard`, `forward`, `react`, `removeReaction`. |
| `funnelchat.templates` | `list`, `create`, `retrieve`, `update`, `quickReplyButtons`, `send`, `delete`. |
| `funnelchat.tags` | `list`, `create`, `retrieve`, `update`, `delete`, `listContacts`. |
| `funnelchat.customFields` | `list`, `create`, `retrieve`, `update`, `delete`. |
| `funnelchat.groups` | `list`, `retrieve`, `listByDevice`, `metadata`, participantes, eventos, mensajes y acciones. |
| `funnelchat.devices` | `list`, `retrieve`, `update`, `status`, `health`, `me`, `checkPhone`, historial de conexión. |
| `funnelchat.webhooks` | Suscripciones (`list`, `create`, `retrieve`, `update`, `delete`, `rotateSecret`, `test`, `listDeliveries`), el catálogo (`events`), `verify` y `constructEvent`. |

Los parámetros, los cuerpos y las respuestas están tipados con la especificación. Para cualquier otra ruta, ver [Cualquier ruta](#cualquier-ruta).

## Enviar un mensaje

> **En camino.** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (contrato C2). Hasta que se despliegue conversations PR #2284, las rutas de envío responden `403 route_not_available` a cualquier clave.

**Ventana abierta: texto libre.** Con un número oficial de Meta solo podés mandar texto libre si el contacto te escribió en las últimas 24 horas. Mirá la ventana antes:

```ts
const window = await funnelchat.contacts.metaWindow(2001, { device_id: 3 });

if (window.is_open) {
  await funnelchat.messages.send(2001, {
    device_id: 3,
    phone: '5491100000000',            // el teléfono del mismo contacto, sin +
    text: '¡Hola! Te paso la info…',
    client_reference: 'pedido-8841',   // opcional: tu referencia para seguirlo
  });
}
```

- `send` responde `204`, sin cuerpo (devuelve `undefined`): hoy no trae el id del mensaje. Para relacionar el envío con sus estados, mandá `client_reference`; vuelve en el historial del contacto y en el evento `message.status_changed`.
- `contact_id` va en el cuerpo, pero `send` lo completa con el contacto de la ruta si no lo pasás.
- Mandá `phone` (o `whatsapp_id`) del mismo contacto: la API lo valida, y si no corresponde al contacto de la ruta responde `422 recipient_mismatch`.
- Con `file` (la URL de un archivo) mandás una imagen, un video, un documento o un audio; con `options`, botones o una lista.

**Ventana cerrada: una plantilla aprobada.** En la ruta van el número (`3`) y el id de la plantilla (`45`), que sale de `funnelchat.templates.list()`:

```ts
await funnelchat.templates.send(3, '45', {
  phone: '5491100000000',
  contact_id: 2001,
  template_variables: { body: ['Lucía'] }, // las variables del cuerpo, en orden
});
```

**Si te frenamos.** Si un envío rompe una regla de WhatsApp no sale ni se guarda: te llega un error.

| Error | Qué pasó | Qué hacer |
|---|---|---|
| `422 window_closed` | Texto libre con la ventana cerrada, en un número oficial. | Mandá una plantilla aprobada. |
| `422 antiblock_duplicate_content` | El mismo contenido repetido al mismo contacto. | Cambiá el texto o esperá. |
| `422 antiblock_unanswered_limit` | Demasiados mensajes seguidos a alguien que no contesta. | Esperá a que responda. |
| `422 recipient_mismatch` | El `phone` o `whatsapp_id` no es el del contacto de la ruta. | Usá los datos de ese contacto. |
| `422 recipient_unsupported` | El contacto es un grupo, una lista de difusión o un canal. | Por la API solo se escribe a personas. |
| `429 rate_limited` | Superaste el ritmo de tu número. Trae `retryAfter`. | Esperá esos segundos y reintentá. |

`isSendRuleError(error.code)` te dice si el error es una de estas reglas. Un envío **nunca se reintenta solo**, porque un reintento puede mandar el mismo mensaje dos veces. Si un `429 rate_limited` no envió nada y querés que el SDK reintente por vos, pedilo en ese llamado:

```ts
await funnelchat.messages.send(2001, body, { retrySend: true });
```

## Recibir webhooks con Express

Verificá la firma sobre el **cuerpo crudo**, tal como llegó. Si lo parseás y lo volvés a serializar, cambia la firma: usá `express.raw`, no `express.json`.

```ts
import express from 'express';
import { Funnelchat, WebhookVerificationError } from '@funnelchat/sdk';

const app = express();

app.post('/hooks/funnelchat', express.raw({ type: 'application/json' }), (req, res) => {
  let event;
  try {
    event = Funnelchat.webhooks.constructEvent(
      req.body,                              // Buffer: el cuerpo crudo
      req.get('X-Funnelchat-Signature'),
      process.env.FUNNELCHAT_WEBHOOK_SECRET!,  // el secreto completo, con whsec_
    );
  } catch (error) {
    if (error instanceof WebhookVerificationError) return res.sendStatus(400); // error.reason dice por qué
    throw error;
  }

  res.sendStatus(200); // respondé rápido (menos de 10 s) y procesá después
  queue.push(event);   // deduplicá por event.id: un reintento trae el mismo
});

function handle(event) {
  switch (event.type) {
    case 'message.received':
      console.log(event.data.contact.phone, event.data.message.text);
      break;
    case 'message.status_changed':
      console.log(event.data.message_id, event.data.status, event.data.client_reference);
      break;
    default:
      // Un tipo que tu código no conoce todavía: no es un error, respondé 2xx igual.
  }
}
```

- `constructEvent` verifica la firma y devuelve el evento tipado: con `event.type` TypeScript sabe la forma de `event.data`. Si algo falla, tira `WebhookVerificationError` con `reason`: `missing_header`, `malformed_header`, `timestamp_out_of_tolerance`, `signature_mismatch`, `invalid_body`, `invalid_json`…
- Si solo querés saber sí o no, `Funnelchat.webhooks.verify(rawBody, signatureHeader, secret)` devuelve `true` o `false` y nunca tira.
- Las dos rechazan una firma con un `t` a más de 300 segundos de tu reloj. Para cambiarlo: `{ toleranceSeconds: 600 }` como cuarto argumento.
- El algoritmo es exactamente el de los snippets del portal: `X-Funnelchat-Signature: t=<unix>,v1=<hex>`, donde `v1` es el HMAC-SHA256 con el secreto completo de `"<t>." + cuerpo crudo`, comparado en tiempo constante, y puede haber varias `v1`. Los tests usan los mismos vectores que `tests/test_firmas.py` del portal.
- También están en el cliente: `funnelchat.webhooks.verify` y `funnelchat.webhooks.constructEvent`.

### Suscribirte

```ts
const subscription = await funnelchat.webhooks.create({
  url: 'https://tu-servidor.example/hooks/funnelchat',
  events: ['message.received', 'message.status_changed'],
  description: 'Mi integración',
});
// Guardá subscription.id y subscription.secret: el secreto se muestra una sola vez.
```

Las suscripciones son de la cuenta: `list()` trae también las de otras integraciones. Para cambiar la URL usá `update(id, …)` (el secreto no cambia); si perdiste el secreto, `rotateSecret(id)`. `test(id)` manda un `webhook.test` firmado ahora mismo y `listDeliveries(id)` es el historial. El catálogo de eventos, con su estado (`active` o `planned`), es `funnelchat.webhooks.events()`; los tipos que conoce el SDK están en `webhookEvents`.

> Las rutas de suscripción (`/api/v1/webhooks`) son las de las suscripciones unificadas de accounts y todavía no están en la especificación: ver [Pendiente de la especificación](#pendiente-de-la-especificación).

## Paginación

Los métodos `list…` devuelven una página perezosa: no se pide nada hasta que la usás.

```ts
// Todos los ítems de todas las páginas:
for await (const contact of funnelchat.contacts.list({ perPage: 100, tag_mode: 'any', tag_ids: [12] })) {
  console.log(contact.id);
}

// Página por página:
let page = await funnelchat.tags.list({ perPage: 50 });
console.log(page.data);
while (page.hasNextPage()) {
  page = await page.getNextPage();
}
```

El SDK entiende las tres formas de paginar de la API: por número de página (`meta.current_page` y `meta.last_page`), por cursor (`meta.next_cursor`) y las listas que vienen enteras en un array. El tamaño de página se pide con el parámetro de cada ruta (`perPage`, `per_page` o `pageSize`, según la especificación).

## Errores

Todo lo que tira el SDK hereda de `FunnelchatError`. Cuando la API responde con un error, es un `APIError`:

| Propiedad | Qué es |
|---|---|
| `status` | El código HTTP. |
| `code` | El `error` estable del cuerpo (`window_closed`, `rate_limited`, `route_not_available`…), o `undefined` si no trae (por ejemplo un `422` de validación). |
| `message` | El `message` del cuerpo, para personas. Decidí por `status` y `code`, no por `message`. |
| `retryAfter` | Los segundos de `Retry-After`, si vino. |
| `errors` | En un `422` de validación, los mensajes por campo. |

Cada código HTTP tiene su clase: `BadRequestError` (400), `AuthenticationError` (401), `PermissionDeniedError` (403), `NotFoundError` (404), `ConflictError` (409), `UnprocessableEntityError` (422), `RateLimitError` (429) e `InternalServerError` (5xx). Sin respuesta: `APIConnectionError`, y `APIConnectionTimeoutError` si se pasó de `timeoutMs`. Si cancelaste con tu `AbortSignal`: `APIUserAbortError`.

```ts
import { APIError, RateLimitError } from '@funnelchat/sdk';

try {
  await funnelchat.contacts.retrieve(2001);
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log(`Esperá ${error.retryAfter} s`);
  } else if (error instanceof APIError) {
    console.log(error.status, error.code, error.message);
  } else {
    throw error;
  }
}
```

Un `403` con `code: 'route_not_available'` quiere decir que esa ruta todavía no está abierta a claves de API, aunque tu clave tenga el permiso.

## Reintentos

- Se reintenta ante un `429`, un `5xx` o un error de red (también si se pasó el `timeoutMs`), hasta `maxRetries` veces (2 por defecto).
- Con `Retry-After`, se espera exactamente lo que pide. Si pide más de 60 segundos, no se espera: el error sale enseguida con su `retryAfter` y decidís vos.
- Sin `Retry-After`, la espera es exponencial: 0,5 s, 1 s, 2 s… hasta 8 s, con un poco de azar.
- **Un envío nunca se reintenta solo**: los `POST` con el permiso `conversations:send` (mensajes, tarjetas de contacto, reenvíos, plantillas). Se reintentan solo si pasás `retrySend: true` en ese llamado. Las reacciones (`PUT` y `DELETE`) sí, porque repetirlas da lo mismo.
- Por llamado podés cambiar `maxRetries`, `timeoutMs` y `signal`:

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

Los tipos de la especificación también se exportan: `paths`, `components`, `operations`, y los atajos `Body<'/api/v1/tags', 'POST'>`, `Query<'/api/v1/contacts'>`, `ResponseBody<…>`. La tabla `routes` tiene cada operación con su dominio y su permiso.

## Cómo regenerar

Todo lo generado sale de un solo script:

```bash
# Con la especificación unificada nueva del portal:
npm run generate -- --spec ../developers-portal-worktrees/<rama>/out/specs/funnelchat.json

# Con la que ya está en spec/ (por ejemplo, después de tocar spec/pending.json):
npm run generate

# Para comprobar que src/generated está al día (sirve en CI):
npm run generate:check
```

Qué hace:

1. Con `--spec`, copia la especificación a `spec/funnelchat.json` y escribe `spec/procedencia.json`: repositorio, rama, commit, fecha y `sha256` del archivo.
2. Suma `spec/pending.json` (la capa [pendiente de la especificación](#pendiente-de-la-especificación)), pero **solo lo que la instantánea no trae**. Al terminar lista lo que la instantánea nueva ya trae, para que lo borres de `spec/pending.json`.
3. Escribe `src/generated/openapi.ts` (con [openapi-typescript](https://openapi-ts.dev)), `src/generated/routes.ts` (cada operación, con dominio y permiso) y `src/generated/events.ts` (el catálogo de eventos y la forma de `data` de cada uno, sacada del esquema o del ejemplo).

No hace falta tocar código a mano para regenerar. Si una ruta que usa un recurso cambia de nombre o de forma, `npm run typecheck` lo marca. Después de regenerar: `npm run typecheck && npm test && npm run build`.

**La instantánea actual** es la del portal, rama `feat/openapi-unificada` @ `0ef4abb` (PR developers-portal #11, sin mergear), del 15-10: 191 rutas y 230 operaciones de conversations `9d723d52c`, communities `fab0bb10` y accounts `c234b6f8`. El detalle está en `spec/procedencia.json`.

## Pendiente de la especificación

Esto ya está en la API, o en una rama sin mergear, pero la instantánea todavía no lo trae. Está en una capa aparte, marcada así en el código, que la próxima regeneración reemplaza sola cuando la instantánea lo traiga:

- `spec/pending.json`: rutas, campos y eventos, en formato OpenAPI.
- `src/pending/`: lo que no es OpenAPI (los códigos de error de las reglas de envío y `device_id` en `message.received`).

| Qué | De dónde sale | Estado |
|---|---|---|
| Suscripciones de webhooks: `/api/v1/webhooks`, `/{id}`, `rotate-secret`, `test`, `deliveries` | accounts `origin/main` @ `c34cba2c` | En producción desde el 13-10 (accounts #978). En ese commit las rutas **no están en el `allowed` del portero**: con clave pueden responder `403 route_not_available` hasta que accounts las abra. |
| Eventos de accounts (`device.connected`, `device.disconnected`, `billing.*`, `subscription.*`, `mac.*`, `account.blocked`, `ai_quota.*`) y cuatro de communities (`group_action.failed`, `daily_report.generated`, `campaign.no_groups_available`, `group.full`) | catálogo unificado de accounts `origin/main` @ `c34cba2c` | En producción. |
| `client_reference` en los cuerpos de envío | conversations `feat/armar-funnelchat-f1` @ `eadef46c` (PR #2284) | **Sin mergear.** |
| Los errores de las reglas de envío (`window_closed`, `antiblock_*`, `recipient_*`, `rate_limited`) | conversations `feat/armar-funnelchat-f1` @ `eadef46c` (PR #2284), contrato 1014 C2 | **Sin mergear.** Hasta que se despliegue, las rutas de envío responden `403 route_not_available`. |
| La forma de `data` de `message.status_changed` | conversations `feat/armar-funnelchat-f1` @ `eadef46c` (PR #2284), contrato 1014 C1 | **Sin mergear.** Figura como `planned`: todavía no se emite. |
| `device_id` en `message.received` | conversations `feat/armar-funnelchat-f1` @ `eadef46c` (PR #2284) | **Sin mergear.** Opcional en el tipo hasta que llegue. |

## Desarrollo

```bash
npm install
npm run generate:check   # lo generado está al día
npm run typecheck        # tsc, incluye los chequeos de tipos de test/types.test.ts
npm run lint
npm test                 # vitest, sin red ni claves: fetch simulado
npm run build            # dist/ en ESM y CJS, con .d.ts
```

El SDK corre en Node 18 o posterior; las herramientas de desarrollo (vitest 4, eslint 9) piden Node 20 o posterior.

```
spec/            la especificación, su procedencia y la capa pendiente
scripts/         generate.mjs, el único generador
src/generated/   lo generado (no se edita)
src/pending/     lo pendiente de la especificación que no es OpenAPI
src/core/        HTTP, reintentos, paginación, errores
src/resources/   las piezas
src/webhooks/    firma y eventos
test/            vitest
```
