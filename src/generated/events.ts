/**
 * GENERATED FILE — do not edit. Run `npm run generate`.
 * Source: spec/funnelchat.json (sha256 8bbbae569b4cab52…) + spec/pending.json.
 */
import type { components } from './openapi.js';

/** One entry of the webhook event catalog. `pending` = taken from spec/pending.json. */
export interface WebhookEventInfo {
  readonly type: string;
  readonly domains: readonly string[];
  /** `live`: emitted today. `planned`: you can subscribe, but nothing is emitted yet. */
  readonly status: 'live' | 'planned';
  readonly pending: boolean;
  readonly description: string | null;
}

/** Every webhook event type known to the spec (55). */
export const webhookEvents = [
  {"type":"account.blocked","domains":["accounts"],"status":"live","pending":true,"description":"The account was blocked by usage: the 24-hour grace period after using up the monthly active contacts ended."},
  {"type":"ai_quota.low_balance","domains":["accounts"],"status":"planned","pending":true,"description":"The AI message quota is about to run out. Planned: not emitted yet."},
  {"type":"ai_quota.topup_failed","domains":["accounts"],"status":"planned","pending":true,"description":"An AI quota top-up could not be processed. Planned: not emitted yet."},
  {"type":"ai_quota.topup_succeeded","domains":["accounts"],"status":"planned","pending":true,"description":"An AI quota top-up was credited. Planned: not emitted yet."},
  {"type":"billing.payment_failed","domains":["accounts"],"status":"live","pending":true,"description":"A charge of the subscription could not be processed (Stripe subscriptions only)."},
  {"type":"billing.plan_blocked","domains":["accounts"],"status":"planned","pending":true,"description":"The plan was blocked by an unprocessed charge. Planned: not emitted yet."},
  {"type":"billing.upcoming_charge","domains":["accounts"],"status":"live","pending":true,"description":"The next charge of the subscription is coming up (Stripe subscriptions only)."},
  {"type":"broadcast.finished","domains":["conversations"],"status":"live","pending":false,"description":"Una campaña llegó a su estado final (enviada, fallida o con fallos parciales), con sus conteos.\n\n`status` es `success`, `failed` o `partially_failed`. `reason` dice por qué terminó: `completed` (se enviaron todas las páginas), `cancelled` (se cerró una campaña pausada), `template_rejected` (Meta rechazó la plantilla, o su categoría cambió, mientras la campaña esperaba), `approval_expired` (la plantilla no se aprobó a tiempo), `mac_lockout` (la cuenta alcanzó su límite de contactos activos), `no_recipients` (la audiencia quedó vacía) o `error` (el envío no pudo despacharse). `totals` son los conteos del envío: `processed` (destinatarios procesados), `failed` y `skipped_unreachable` (destinatarios que el canal no puede alcanzar); valen 0 si la campaña terminó antes de enviar. Se emite una sola vez por campaña."},
  {"type":"broadcast.paused","domains":["conversations"],"status":"live","pending":false,"description":"Una campaña se pausó sola, por ejemplo porque bajó la calidad del número.\n\n`reason` es `quality_degraded` (la calidad del número bajó respecto de la del inicio, o llegó a RED) o `quality_unreadable` (no se pudo leer la calidad en tres controles seguidos). `quality` y `quality_baseline` son la calidad de Meta leída en el control y la del inicio del envío (`GREEN`, `YELLOW`, `RED`), o `null` si no se pudo leer. Sólo las campañas con envío inteligente se pausan solas. Reanudar la campaña y que se pause otra vez emite otro evento."},
  {"type":"campaign.no_groups_available","domains":["communities"],"status":"live","pending":true,"description":"A campaign has no groups to send the people who come through its link to."},
  {"type":"campaign.status_changed","domains":["communities"],"status":"live","pending":false,"description":"Una campaña se activó o se pausó."},
  {"type":"contact.created","domains":["conversations"],"status":"live","pending":false,"description":"Se creó un contacto nuevo en la cuenta.\n\nSe envía un evento por cada contacto nuevo, sea cual sea el canal: un mensaje entrante, la creación manual, una importación o la API. No se envía cuando el contacto ya existía y sólo se actualiza, ni para los contactos que la plataforma crea para sus propias notificaciones. En importaciones grandes el límite de volumen de la cuenta puede descartar parte de los eventos."},
  {"type":"contact.stage_changed","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto cambió de etapa en un tablero.\n\nSe envía un evento por cada contacto que cambia de etapa en un tablero por etapas. `kind` es entry (entra al tablero, `from_stage` es null), move (pasa de una etapa a otra), exit (sale del tablero, `to_stage` es null) o stage_deleted (se reubica porque su etapa se borró; el nombre de la etapa borrada es null). No se envía si el contacto se coloca en la etapa en la que ya estaba."},
  {"type":"contact.tag_added","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto recibió una etiqueta.\n\nSe envía un evento por cada contacto y etiqueta agregados, también en operaciones en bloque; no se envía si el contacto ya tenía la etiqueta. `source` indica el origen: manual, flow, bulk, import, sync, walink o ai. En operaciones en bloque grandes el límite de volumen de la cuenta puede descartar parte de los eventos."},
  {"type":"contact.tag_removed","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto perdió una etiqueta.\n\nSe envía un evento por cada contacto y etiqueta quitados, también en operaciones en bloque; no se envía si el contacto no tenía la etiqueta. No se envía al borrar la etiqueta, al borrar o fusionar contactos ni al desvincular etiquetas de un tablero. `source` indica el origen: manual, flow o bulk. En operaciones en bloque grandes el límite de volumen de la cuenta puede descartar parte de los eventos."},
  {"type":"conversation.assigned","domains":["conversations"],"status":"live","pending":false,"description":"Una conversación quedó asignada a una persona del equipo o a un agente de IA.\n\nSe envía cuando una conversación queda asignada a una persona del equipo (`assignee.type` = `human`) o a un agente de IA (`assignee.type` = `ai`), por cualquier camino. `assignee` trae el tipo y el nombre, nunca un identificador. No se envía al desasignar, ni cuando se vuelve a enviar el mismo asignado."},
  {"type":"conversation.closed","domains":["conversations"],"status":"live","pending":false,"description":"Una conversación pasó a cerrada.\n\nSe envía cuando una conversación pasa de abierta a cerrada. No se envía si la conversación ya estaba cerrada ni cuando se reabre."},
  {"type":"daily_report.generated","domains":["communities"],"status":"live","pending":true,"description":"The daily report of the account was generated (clicks, joins and leaves)."},
  {"type":"device.connected","domains":["accounts"],"status":"live","pending":true,"description":"One of the numbers of the account got connected: by scanning the QR code, by finishing the sign-up of a WhatsApp Cloud number, or through a connect link."},
  {"type":"device.deleted","domains":["accounts"],"status":"planned","pending":true,"description":"A number of the account was deleted: its slot of the plan is free again."},
  {"type":"device.disconnected","domains":["accounts"],"status":"live","pending":true,"description":"One of the numbers of the account disconnected and can no longer send or receive: a QR session that closed, or an official number that failed its re-registration or was protected from a shadow ban."},
  {"type":"device.health_changed","domains":["accounts"],"status":"planned","pending":true,"description":"The health of an official number changed (what Meta lets it do). Emitted only when the overall state changes."},
  {"type":"flow.completed","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto terminó un flujo de automatización.\n\nSe envía una sola vez por cada ejecución de un flujo, cuando termina con éxito. No se envía si la ejecución se cortó, se canceló, quedó bloqueada o falló. `contact` es `null` si la ejecución no tiene un contacto asociado. Un flujo muy usado puede generar muchos eventos seguidos."},
  {"type":"flow.failed","domains":["conversations"],"status":"live","pending":false,"description":"La ejecución de un flujo para un contacto terminó por un error.\n\nSe envía una sola vez por cada ejecución de un flujo que termina por un error, no porque llegó al final. `reason` indica el motivo y toma uno de estos valores: `node_missing` (el paso a ejecutar ya no existe), `unknown_node_type` (el paso es de un tipo no reconocido), `missing_subflow` (el flujo que debía ejecutarse dentro de otro ya no existe), `malformed_node` (el paso tiene una configuración dañada), `loop_detected` (la ejecución dio vueltas sin esperar nada) y `execution_error` (un error inesperado detuvo la ejecución). No se envía si la ejecución se canceló, quedó bloqueada o se cortó porque se editó el flujo o se unieron contactos. `contact` es `null` si la ejecución no tiene un contacto asociado."},
  {"type":"group_action.failed","domains":["communities"],"status":"live","pending":true,"description":"An action on a group of a campaign failed."},
  {"type":"group_join_request.created","domains":["communities"],"status":"live","pending":true,"description":"Someone asked to join a group that requires approval."},
  {"type":"group_join_request.revoked","domains":["communities"],"status":"live","pending":true,"description":"Someone withdrew their request to join a group."},
  {"type":"group_participant.joined","domains":["communities"],"status":"live","pending":false,"description":"Una persona entró a un grupo de una campaña."},
  {"type":"group_participant.left","domains":["communities"],"status":"live","pending":false,"description":"Una persona salió de un grupo de una campaña."},
  {"type":"group.blocked","domains":["communities"],"status":"live","pending":false,"description":"Un grupo quedó inoperable: sin administrador conectado, con el link de invitación inválido o suspendido por WhatsApp."},
  {"type":"group.created","domains":["communities"],"status":"live","pending":false,"description":"Se creó o se importó un grupo dentro de una campaña de la cuenta."},
  {"type":"group.full","domains":["communities"],"status":"live","pending":true,"description":"A group went from not full to full."},
  {"type":"group.invite_link_down","domains":["communities"],"status":"live","pending":false,"description":"El enlace de invitación de un grupo quedó confirmado caído (WhatsApp respondió que no existe y la renovación no consiguió otro); no se publica por errores transitorios ni por grupos prohibidos o suspendidos, y se publica una sola vez por episodio de bloqueo."},
  {"type":"group.invite_link_renewed","domains":["communities"],"status":"live","pending":false,"description":"El enlace de invitación de un grupo cambió por una renovación, automática al detectarse inválido o pedida por el usuario; en v0 no se publican los cambios que detecta la sincronización ni el enlace inicial al crear el grupo."},
  {"type":"group.message_received","domains":["communities"],"status":"live","pending":true,"description":"Someone wrote in a group of one of your numbers. Not emitted for the messages of your own numbers."},
  {"type":"group.reaction_added","domains":["communities"],"status":"live","pending":true,"description":"Someone reacted to a message of a group."},
  {"type":"group.recovered","domains":["communities"],"status":"live","pending":false,"description":"Un grupo que estaba bloqueado volvió a operar."},
  {"type":"mac.expiring","domains":["accounts"],"status":"live","pending":true,"description":"Some monthly active contacts expire in the next 7 days."},
  {"type":"mac.usage_100","domains":["accounts"],"status":"live","pending":true,"description":"The account used up its monthly active contacts of the cycle; a 24-hour grace period starts."},
  {"type":"mac.usage_80","domains":["accounts"],"status":"live","pending":true,"description":"The account reached 80% of its monthly active contacts of the cycle."},
  {"type":"message.received","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto le escribió a un número de WhatsApp de la cuenta."},
  {"type":"message.status_changed","domains":["conversations"],"status":"live","pending":true,"description":"The delivery status of a message you sent with the API changed. One notice per transition, never one that goes back; `queued` is not reported. It must be asked for explicitly in `events`."},
  {"type":"pipeline.finished","domains":["communities"],"status":"live","pending":false,"description":"Terminó un pipeline de operaciones sobre grupos, con su resultado agregado."},
  {"type":"poll.voted","domains":["communities"],"status":"live","pending":false,"description":"Un participante votó en una encuesta enviada a un grupo, o cambió su voto."},
  {"type":"scheduled_message.finished","domains":["communities"],"status":"live","pending":false,"description":"Un envío programado terminó, con su resultado agregado."},
  {"type":"scheduled_message.group_delivery_failed","domains":["communities"],"status":"live","pending":false,"description":"Un envío programado falló en un grupo concreto, con el motivo desagregado."},
  {"type":"scheduled_message.response_received","domains":["communities"],"status":"live","pending":false,"description":"Alguien respondió a un envío programado votando una encuesta o respondiendo a un evento."},
  {"type":"subscription.cancellation_confirmed","domains":["accounts"],"status":"live","pending":true,"description":"The cancellation of the subscription was confirmed (Stripe subscriptions only)."},
  {"type":"subscription.dormant_ending","domains":["accounts"],"status":"live","pending":true,"description":"The dormant-account period is about to end."},
  {"type":"subscription.expiring","domains":["accounts"],"status":"planned","pending":true,"description":"The subscription is about to expire. Planned: not emitted yet."},
  {"type":"subscription.reactivated","domains":["accounts"],"status":"live","pending":true,"description":"The scheduled cancellation of the subscription was reverted (Stripe subscriptions only)."},
  {"type":"subscription.trial_ending","domains":["accounts"],"status":"live","pending":true,"description":"The trial period is about to end."},
  {"type":"template.status_changed","domains":["conversations"],"status":"live","pending":false,"description":"Una plantilla cambió de estado de aprobación en Meta.\n\n`template` identifica la plantilla igual que `GET /templates` (`id`, `uid`, `name`, `category`). `previous_status` y `status` son los estados tal como los devuelve la API (por ejemplo `PENDING`, `APPROVED`, `REJECTED`, `PAUSED`); `previous_status` es `null` si la plantilla no tenía estado. `reason` trae la observación de rechazo (traducida como en la API y limitada a 500 caracteres) cuando el cambio es un rechazo informado al crear la plantilla, y es `null` en el resto. No se emite si Meta reenvía el estado que la plantilla ya tenía. Si una misma plantilla de Meta figura en varias cuentas, cada cuenta recibe su propio evento."},
  {"type":"webhook.test","domains":["conversations","communities"],"status":"live","pending":false,"description":"Evento de prueba enviado desde la ruta de prueba de una suscripción."},
  {"type":"whatsapp_form.completed","domains":["conversations"],"status":"live","pending":true,"description":"A contact completed a form you sent them."},
] as const satisfies readonly WebhookEventInfo[];

/** A webhook event type known to the spec. */
export type WebhookEventType = (typeof webhookEvents)[number]['type'];

/**
 * The `data` of each event. When the spec only has an example, the type is inferred from it:
 * keys in the example are required and `null` values are `unknown`.
 */
export interface WebhookEventDataMap {
  /** `account.blocked` (live, pending of the spec; typed from: example). The account was blocked by usage: the 24-hour grace period after using up the monthly active contacts ended. */
  "account.blocked": {
    reason: string;
    grace_started_at: string;
    grace_expired_at: string;
  };
  /** `ai_quota.low_balance` (planned, pending of the spec; typed from: no example or schema yet). The AI message quota is about to run out. Planned: not emitted yet. */
  "ai_quota.low_balance": Record<string, unknown>;
  /** `ai_quota.topup_failed` (planned, pending of the spec; typed from: no example or schema yet). An AI quota top-up could not be processed. Planned: not emitted yet. */
  "ai_quota.topup_failed": Record<string, unknown>;
  /** `ai_quota.topup_succeeded` (planned, pending of the spec; typed from: no example or schema yet). An AI quota top-up was credited. Planned: not emitted yet. */
  "ai_quota.topup_succeeded": Record<string, unknown>;
  /** `billing.payment_failed` (live, pending of the spec; typed from: example). A charge of the subscription could not be processed (Stripe subscriptions only). */
  "billing.payment_failed": {
    amount_cents: number;
    currency: string;
  };
  /** `billing.plan_blocked` (planned, pending of the spec; typed from: no example or schema yet). The plan was blocked by an unprocessed charge. Planned: not emitted yet. */
  "billing.plan_blocked": Record<string, unknown>;
  /** `billing.upcoming_charge` (live, pending of the spec; typed from: example). The next charge of the subscription is coming up (Stripe subscriptions only). */
  "billing.upcoming_charge": {
    charge_date: string;
    amount_cents: number;
    currency: string;
  };
  /** `broadcast.finished` (live; typed from: example). Una campaña llegó a su estado final (enviada, fallida o con fallos parciales), con sus conteos. `status` es `success`, `failed` o `partially_failed`. `reason` dice por qué terminó: `completed` (se enviaron todas las páginas), `cancelled` (se cerró una campaña pausada), `template_rejected` (Meta rechazó la plantilla, o su categoría cambió, mientras la campaña esperaba), `approval_expired` (la plantilla no se aprobó a tiempo), `mac_lockout` (la cuenta alcanzó su límite de contactos activos), `no_recipients` (la audiencia quedó vacía) o `error` (el envío no pudo despacharse). `totals` son los conteos del envío: `processed` (destinatarios procesados), `failed` y `skipped_unreachable` (destinatarios que el canal no puede alcanzar); valen 0 si la campaña terminó antes de enviar. Se emite una sola vez por campaña. */
  "broadcast.finished": {
    broadcast: {
      id: number;
      name: string;
    };
    status: string;
    reason: string;
    totals: {
      processed: number;
      failed: number;
      skipped_unreachable: number;
    };
  };
  /** `broadcast.paused` (live; typed from: example). Una campaña se pausó sola, por ejemplo porque bajó la calidad del número. `reason` es `quality_degraded` (la calidad del número bajó respecto de la del inicio, o llegó a RED) o `quality_unreadable` (no se pudo leer la calidad en tres controles seguidos). `quality` y `quality_baseline` son la calidad de Meta leída en el control y la del inicio del envío (`GREEN`, `YELLOW`, `RED`), o `null` si no se pudo leer. Sólo las campañas con envío inteligente se pausan solas. Reanudar la campaña y que se pause otra vez emite otro evento. */
  "broadcast.paused": {
    broadcast: {
      id: number;
      name: string;
    };
    reason: string;
    quality: string;
    quality_baseline: string;
  };
  /** `campaign.no_groups_available` (live, pending of the spec; typed from: example). A campaign has no groups to send the people who come through its link to. */
  "campaign.no_groups_available": {
    campaign: {
      uuid: string;
      name: string;
    };
    reason: string;
  };
  /** `campaign.status_changed` (live; typed from: example). Una campaña se activó o se pausó. */
  "campaign.status_changed": {
    campaign: {
      uuid: string;
      name: string;
    };
    from: string;
    to: string;
  };
  /** `contact.created` (live; typed from: example). Se creó un contacto nuevo en la cuenta. Se envía un evento por cada contacto nuevo, sea cual sea el canal: un mensaje entrante, la creación manual, una importación o la API. No se envía cuando el contacto ya existía y sólo se actualiza, ni para los contactos que la plataforma crea para sus propias notificaciones. En importaciones grandes el límite de volumen de la cuenta puede descartar parte de los eventos. */
  "contact.created": {
    contact: {
      id: number;
      name: string;
      phone: string;
      email: string;
    };
  };
  /** `contact.stage_changed` (live; typed from: example). Un contacto cambió de etapa en un tablero. Se envía un evento por cada contacto que cambia de etapa en un tablero por etapas. `kind` es entry (entra al tablero, `from_stage` es null), move (pasa de una etapa a otra), exit (sale del tablero, `to_stage` es null) o stage_deleted (se reubica porque su etapa se borró; el nombre de la etapa borrada es null). No se envía si el contacto se coloca en la etapa en la que ya estaba. */
  "contact.stage_changed": {
    contact: {
      id: number;
      name: string;
      phone: string;
    };
    board: {
      id: number;
      name: string;
    };
    kind: string;
    from_stage: {
      id: number;
      name: string;
      position: number;
    };
    to_stage: {
      id: number;
      name: string;
      position: number;
    };
  };
  /** `contact.tag_added` (live; typed from: example). Un contacto recibió una etiqueta. Se envía un evento por cada contacto y etiqueta agregados, también en operaciones en bloque; no se envía si el contacto ya tenía la etiqueta. `source` indica el origen: manual, flow, bulk, import, sync, walink o ai. En operaciones en bloque grandes el límite de volumen de la cuenta puede descartar parte de los eventos. */
  "contact.tag_added": {
    contact: {
      id: number;
      name: string;
      phone: string;
    };
    tag: {
      id: number;
      name: string;
    };
    source: string;
  };
  /** `contact.tag_removed` (live; typed from: example). Un contacto perdió una etiqueta. Se envía un evento por cada contacto y etiqueta quitados, también en operaciones en bloque; no se envía si el contacto no tenía la etiqueta. No se envía al borrar la etiqueta, al borrar o fusionar contactos ni al desvincular etiquetas de un tablero. `source` indica el origen: manual, flow o bulk. En operaciones en bloque grandes el límite de volumen de la cuenta puede descartar parte de los eventos. */
  "contact.tag_removed": {
    contact: {
      id: number;
      name: string;
      phone: string;
    };
    tag: {
      id: number;
      name: string;
    };
    source: string;
  };
  /** `conversation.assigned` (live; typed from: example). Una conversación quedó asignada a una persona del equipo o a un agente de IA. Se envía cuando una conversación queda asignada a una persona del equipo (`assignee.type` = `human`) o a un agente de IA (`assignee.type` = `ai`), por cualquier camino. `assignee` trae el tipo y el nombre, nunca un identificador. No se envía al desasignar, ni cuando se vuelve a enviar el mismo asignado. */
  "conversation.assigned": {
    contact: {
      id: number;
      name: string;
      phone: string;
    };
    assignee: {
      type: string;
      name: string;
    };
  };
  /** `conversation.closed` (live; typed from: example). Una conversación pasó a cerrada. Se envía cuando una conversación pasa de abierta a cerrada. No se envía si la conversación ya estaba cerrada ni cuando se reabre. */
  "conversation.closed": {
    contact: {
      id: number;
      name: string;
      phone: string;
    };
  };
  /** `daily_report.generated` (live, pending of the spec; typed from: example). The daily report of the account was generated (clicks, joins and leaves). */
  "daily_report.generated": {
    period: {
      date: string;
      timezone: string;
    };
    clicks: number;
    joins: number;
    leaves: number;
    conversion_rate: number;
  };
  /** `device.connected` (live, pending of the spec; typed from: schema). One of the numbers of the account got connected: by scanning the QR code, by finishing the sign-up of a WhatsApp Cloud number, or through a connect link. */
  "device.connected": {
    device: components["schemas"]["PendingWebhookDevice"];
    connected_at: string;
    /** The connect link it came from, or `null`. */
    connect_link_id: number | null;
  };
  /** `device.deleted` (planned, pending of the spec; typed from: schema). A number of the account was deleted: its slot of the plan is free again. */
  "device.deleted": {
    device: components["schemas"]["PendingWebhookDevice"];
    deleted_at: string;
  };
  /** `device.disconnected` (live, pending of the spec; typed from: schema). One of the numbers of the account disconnected and can no longer send or receive: a QR session that closed, or an official number that failed its re-registration or was protected from a shadow ban. */
  "device.disconnected": {
    device: components["schemas"]["PendingWebhookDevice"];
    disconnected_at: string;
    reason: "qr_logged_out" | "meta_account_not_registered" | "shadow_ban_protection" | "provider_error" | "unknown";
  };
  /** `device.health_changed` (planned, pending of the spec; typed from: schema). The health of an official number changed (what Meta lets it do). Emitted only when the overall state changes. */
  "device.health_changed": {
    device: components["schemas"]["PendingWebhookDevice"];
    previous_state: "available" | "limited" | "blocked" | "unknown";
    state: "available" | "limited" | "blocked" | "unknown";
    changed_at: string;
  };
  /** `flow.completed` (live; typed from: example). Un contacto terminó un flujo de automatización. Se envía una sola vez por cada ejecución de un flujo, cuando termina con éxito. No se envía si la ejecución se cortó, se canceló, quedó bloqueada o falló. `contact` es `null` si la ejecución no tiene un contacto asociado. Un flujo muy usado puede generar muchos eventos seguidos. */
  "flow.completed": {
    flow: {
      id: number;
      name: string;
    };
    contact: {
      id: number;
      name: string;
      phone: string;
    };
  };
  /** `flow.failed` (live; typed from: example). La ejecución de un flujo para un contacto terminó por un error. Se envía una sola vez por cada ejecución de un flujo que termina por un error, no porque llegó al final. `reason` indica el motivo y toma uno de estos valores: `node_missing` (el paso a ejecutar ya no existe), `unknown_node_type` (el paso es de un tipo no reconocido), `missing_subflow` (el flujo que debía ejecutarse dentro de otro ya no existe), `malformed_node` (el paso tiene una configuración dañada), `loop_detected` (la ejecución dio vueltas sin esperar nada) y `execution_error` (un error inesperado detuvo la ejecución). No se envía si la ejecución se canceló, quedó bloqueada o se cortó porque se editó el flujo o se unieron contactos. `contact` es `null` si la ejecución no tiene un contacto asociado. */
  "flow.failed": {
    flow: {
      id: number;
      name: string;
    };
    contact: {
      id: number;
      name: string;
      phone: string;
    };
    reason: string;
  };
  /** `group_action.failed` (live, pending of the spec; typed from: schema). An action on a group of a campaign failed. */
  "group_action.failed": {
    campaign: ({
      uuid: string;
      name: string | null;
    }) | null;
    pipeline: ({
      uuid: string;
      name: string | null;
    }) | null;
    group: ({
      uid: string;
      name: string | null;
    }) | null;
    action: {
      /** `null` for the actions of a campaign. */
      uuid: string | null;
      type: string;
    };
    reason: string;
  };
  /** `group_join_request.created` (live, pending of the spec; typed from: schema). Someone asked to join a group that requires approval. */
  "group_join_request.created": {
    group: {
      uid: string;
      name: string | null;
    };
    participant: {
      identity: string;
      identity_type: "phone" | "whatsapp_user";
      name: string | null;
    };
  };
  /** `group_join_request.revoked` (live, pending of the spec; typed from: schema). Someone withdrew their request to join a group. */
  "group_join_request.revoked": {
    group: {
      uid: string;
      name: string | null;
    };
    participant: {
      identity: string;
      identity_type: "phone" | "whatsapp_user";
      name: string | null;
    };
  };
  /** `group_participant.joined` (live; typed from: example). Una persona entró a un grupo de una campaña. */
  "group_participant.joined": {
    group: {
      uid: string;
      name: string;
    };
    campaign: {
      uuid: string;
    };
    participant: {
      identity: string;
      identity_type: string;
      name: string;
    };
  };
  /** `group_participant.left` (live; typed from: example). Una persona salió de un grupo de una campaña. */
  "group_participant.left": {
    group: {
      uid: string;
      name: string;
    };
    campaign: {
      uuid: string;
    };
    participant: {
      identity: string;
      identity_type: string;
      name: string;
    };
  };
  /** `group.blocked` (live; typed from: example). Un grupo quedó inoperable: sin administrador conectado, con el link de invitación inválido o suspendido por WhatsApp. */
  "group.blocked": {
    group: {
      uid: string;
      name: string;
    };
    campaign: {
      uuid: string;
    };
    reason: string;
  };
  /** `group.created` (live; typed from: example). Se creó o se importó un grupo dentro de una campaña de la cuenta. */
  "group.created": {
    group: {
      uid: string;
      name: string;
      type: string;
    };
    campaign: {
      uuid: string;
      name: string;
    };
    source: string;
  };
  /** `group.full` (live, pending of the spec; typed from: example). A group went from not full to full. */
  "group.full": {
    group: {
      uid: string;
      name: string;
      type: string;
    };
    campaign: {
      uuid: string;
      name: string;
    };
    trigger: string;
    participants: number;
  };
  /** `group.invite_link_down` (live; typed from: example). El enlace de invitación de un grupo quedó confirmado caído (WhatsApp respondió que no existe y la renovación no consiguió otro); no se publica por errores transitorios ni por grupos prohibidos o suspendidos, y se publica una sola vez por episodio de bloqueo. */
  "group.invite_link_down": {
    group: {
      uid: string;
      name: string;
      type: string;
    };
    campaign: {
      uuid: string;
      name: string;
    };
    reason: string;
    renewal_attempted: boolean;
  };
  /** `group.invite_link_renewed` (live; typed from: example). El enlace de invitación de un grupo cambió por una renovación, automática al detectarse inválido o pedida por el usuario; en v0 no se publican los cambios que detecta la sincronización ni el enlace inicial al crear el grupo. */
  "group.invite_link_renewed": {
    group: {
      uid: string;
      name: string;
      type: string;
    };
    campaign: {
      uuid: string;
      name: string;
    };
    invite_link: string;
    previous_invite_link: string;
    trigger: string;
    recovered: boolean;
  };
  /** `group.message_received` (live, pending of the spec; typed from: schema). Someone wrote in a group of one of your numbers. Not emitted for the messages of your own numbers. */
  "group.message_received": {
    group: {
      uid: string;
      name: string | null;
    };
    message: {
      uid: string;
      type: string;
      /** Only with `type: text`. */
      text: string | null;
      caption: string | null;
      media_url: string | null;
      mime_type: string | null;
      file_name: string | null;
      quoted_uid: string | null;
    };
    participant: {
      identity: string;
      identity_type: "phone" | "whatsapp_user";
      name: string | null;
    };
  };
  /** `group.reaction_added` (live, pending of the spec; typed from: schema). Someone reacted to a message of a group. */
  "group.reaction_added": {
    group: {
      uid: string;
      name: string | null;
    };
    message: {
      uid: string;
    };
    participant: {
      identity: string;
      identity_type: "phone" | "whatsapp_user";
      name: string | null;
    };
    reaction: string;
  };
  /** `group.recovered` (live; typed from: example). Un grupo que estaba bloqueado volvió a operar. */
  "group.recovered": {
    group: {
      uid: string;
      name: string;
    };
    campaign: {
      uuid: string;
    };
    reason: string;
  };
  /** `mac.expiring` (live, pending of the spec; typed from: example). Some monthly active contacts expire in the next 7 days. */
  "mac.expiring": {
    contacts_expiring: number;
    expires_at: string;
  };
  /** `mac.usage_100` (live, pending of the spec; typed from: example). The account used up its monthly active contacts of the cycle; a 24-hour grace period starts. */
  "mac.usage_100": {
    used: number;
    limit: number;
    percentage: number;
    cycle_started_at: string;
    grace_expires_at: string;
  };
  /** `mac.usage_80` (live, pending of the spec; typed from: example). The account reached 80% of its monthly active contacts of the cycle. */
  "mac.usage_80": {
    used: number;
    limit: number;
    percentage: number;
    cycle_started_at: string;
  };
  /** `message.received` (live; typed from: example + schema). Un contacto le escribió a un número de WhatsApp de la cuenta. */
  "message.received": {
    message: {
      id: number;
      type: "text" | "image" | "video" | "document" | "sticker" | "contact" | "audio" | "note" | "action" | "invalid" | "interactive" | "location" | "voice_call" | "video_call" | "event" | "button" | "template" | "notification" | "option_list" | "template_button_reply" | "poll" | "whatsapp_form" | "call_permission_request" | "call_permission_reply";
      text: string;
      media: unknown;
    };
    contact: {
      id: number;
      name: string;
      phone: string;
    };
    receiver: {
      phone: string;
    };
  };
  /** `message.status_changed` (live, pending of the spec; typed from: schema). The delivery status of a message you sent with the API changed. One notice per transition, never one that goes back; `queued` is not reported. It must be asked for explicitly in `events`. */
  "message.status_changed": {
    /** The `id` of the message in the history of the contact. */
    message_id: number;
    contact_id: number;
    /** The number of your account that sent the message. */
    device_id: number | null;
    status: "sent" | "delivered" | "read" | "failed";
    previous_status: "sent" | "delivered" | "read" | "failed" | null;
    /** Only when `status` is `failed`. */
    error?: components["schemas"]["PendingMessageError"];
    occurred_at: string;
    /** The `client_reference` you sent with the message, or `null`. */
    client_reference: string | null;
  };
  /** `pipeline.finished` (live; typed from: example). Terminó un pipeline de operaciones sobre grupos, con su resultado agregado. */
  "pipeline.finished": {
    campaign: {
      uuid: string;
    };
    pipeline: {
      uuid: string;
      name: string;
    };
    outcome: string;
    actions: {
      total: number;
      succeeded: number;
      failed: number;
      skipped: number;
      cancelled: number;
    };
  };
  /** `poll.voted` (live; typed from: example). Un participante votó en una encuesta enviada a un grupo, o cambió su voto. */
  "poll.voted": {
    poll: {
      uid: string;
    };
    group: {
      uid: string;
    };
    scheduled_message: {
      uuid: string;
    };
    participant: {
      identity: string;
      identity_type: string;
      name: unknown;
    };
    options: string[];
  };
  /** `scheduled_message.finished` (live; typed from: example). Un envío programado terminó, con su resultado agregado. */
  "scheduled_message.finished": {
    scheduled_message: {
      uuid: string;
      name: string;
    };
    outcome: string;
    groups: {
      total: number;
      failed: number;
      partially_failed: number;
    };
    occurrence: number;
  };
  /** `scheduled_message.group_delivery_failed` (live; typed from: example). Un envío programado falló en un grupo concreto, con el motivo desagregado. */
  "scheduled_message.group_delivery_failed": {
    scheduled_message: {
      uuid: string;
    };
    group: {
      uid: string;
      name: string;
    };
    reason: string;
    partial: boolean;
    occurrence: number;
  };
  /** `scheduled_message.response_received` (live; typed from: example). Alguien respondió a un envío programado votando una encuesta o respondiendo a un evento. */
  "scheduled_message.response_received": {
    scheduled_message: {
      uuid: string;
    };
    group: {
      uid: string;
    };
    participant: {
      identity: string;
      identity_type: string;
      name: string;
    };
    response: {
      type: string;
      options: string[];
      rsvp: unknown;
    };
  };
  /** `subscription.cancellation_confirmed` (live, pending of the spec; typed from: example). The cancellation of the subscription was confirmed (Stripe subscriptions only). */
  "subscription.cancellation_confirmed": {
    access_until: string;
  };
  /** `subscription.dormant_ending` (live, pending of the spec; typed from: example). The dormant-account period is about to end. */
  "subscription.dormant_ending": {
    charge_date: string;
    amount_cents: number;
    currency: string;
  };
  /** `subscription.expiring` (planned, pending of the spec; typed from: no example or schema yet). The subscription is about to expire. Planned: not emitted yet. */
  "subscription.expiring": Record<string, unknown>;
  /** `subscription.reactivated` (live, pending of the spec; typed from: example). The scheduled cancellation of the subscription was reverted (Stripe subscriptions only). */
  "subscription.reactivated": {
    renews_at: string;
  };
  /** `subscription.trial_ending` (live, pending of the spec; typed from: example). The trial period is about to end. */
  "subscription.trial_ending": {
    trial_ends_at: string;
  };
  /** `template.status_changed` (live; typed from: example). Una plantilla cambió de estado de aprobación en Meta. `template` identifica la plantilla igual que `GET /templates` (`id`, `uid`, `name`, `category`). `previous_status` y `status` son los estados tal como los devuelve la API (por ejemplo `PENDING`, `APPROVED`, `REJECTED`, `PAUSED`); `previous_status` es `null` si la plantilla no tenía estado. `reason` trae la observación de rechazo (traducida como en la API y limitada a 500 caracteres) cuando el cambio es un rechazo informado al crear la plantilla, y es `null` en el resto. No se emite si Meta reenvía el estado que la plantilla ya tenía. Si una misma plantilla de Meta figura en varias cuentas, cada cuenta recibe su propio evento. */
  "template.status_changed": {
    template: {
      id: number;
      uid: string;
      name: string;
      category: string;
    };
    previous_status: string;
    status: string;
    reason: unknown;
  };
  /** `webhook.test` (live; typed from: example). Evento de prueba enviado desde la ruta de prueba de una suscripción. */
  "webhook.test": {
    subscription: string;
    sent_at: string;
  };
  /** `whatsapp_form.completed` (live, pending of the spec; typed from: schema). A contact completed a form you sent them. */
  "whatsapp_form.completed": {
    form: {
      /** The form (`family_id`). */
      id: number;
      name: string;
      version_id: number;
    };
    message_id: number | null;
    contact_id: number | null;
    device_id: number | null;
    answers: ({
      key: string;
      label: string | null;
      value: boolean | number | string | string[] | null;
    })[];
    occurred_at: string;
  };
}
