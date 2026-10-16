/**
 * GENERATED FILE — do not edit. Run `npm run generate`.
 * Source: spec/funnelchat.json (sha256 8bbbae569b4cab52…) + spec/pending.json.
 */
/** One entry of the webhook event catalog. `pending` = taken from spec/pending.json. */
export interface WebhookEventInfo {
  readonly type: string;
  readonly domains: readonly string[];
  /** `live`: emitted today. `planned`: you can subscribe, but nothing is emitted yet. */
  readonly status: 'live' | 'planned';
  readonly pending: boolean;
  readonly description: string | null;
}

/** Every webhook event type known to the spec (48). */
export const webhookEvents = [
  {"type":"account.blocked","domains":["accounts"],"status":"live","pending":true,"description":"La cuenta quedó bloqueada por consumo: terminó la gracia de 24 horas tras agotar los contactos activos mensuales."},
  {"type":"ai_quota.low_balance","domains":["accounts"],"status":"planned","pending":true,"description":"La cuota de mensajes de IA está por agotarse. Planificado: todavía no se emite."},
  {"type":"ai_quota.topup_failed","domains":["accounts"],"status":"planned","pending":true,"description":"Una recarga de cuota de IA no pudo procesarse. Planificado: todavía no se emite."},
  {"type":"ai_quota.topup_succeeded","domains":["accounts"],"status":"planned","pending":true,"description":"Una recarga de cuota de IA se acreditó. Planificado: todavía no se emite."},
  {"type":"billing.payment_failed","domains":["accounts"],"status":"live","pending":true,"description":"Un cobro de la suscripción no pudo procesarse (solo suscripciones de Stripe)."},
  {"type":"billing.plan_blocked","domains":["accounts"],"status":"planned","pending":true,"description":"El plan quedó bloqueado por un cobro no procesado. Planificado: todavía no se emite."},
  {"type":"billing.upcoming_charge","domains":["accounts"],"status":"live","pending":true,"description":"Se acerca el próximo cobro de la suscripción (solo suscripciones de Stripe)."},
  {"type":"broadcast.finished","domains":["conversations"],"status":"live","pending":false,"description":"Una campaña llegó a su estado final (enviada, fallida o con fallos parciales), con sus conteos.\n\n`status` es `success`, `failed` o `partially_failed`. `reason` dice por qué terminó: `completed` (se enviaron todas las páginas), `cancelled` (se cerró una campaña pausada), `template_rejected` (Meta rechazó la plantilla, o su categoría cambió, mientras la campaña esperaba), `approval_expired` (la plantilla no se aprobó a tiempo), `mac_lockout` (la cuenta alcanzó su límite de contactos activos), `no_recipients` (la audiencia quedó vacía) o `error` (el envío no pudo despacharse). `totals` son los conteos del envío: `processed` (destinatarios procesados), `failed` y `skipped_unreachable` (destinatarios que el canal no puede alcanzar); valen 0 si la campaña terminó antes de enviar. Se emite una sola vez por campaña."},
  {"type":"broadcast.paused","domains":["conversations"],"status":"live","pending":false,"description":"Una campaña se pausó sola, por ejemplo porque bajó la calidad del número.\n\n`reason` es `quality_degraded` (la calidad del número bajó respecto de la del inicio, o llegó a RED) o `quality_unreadable` (no se pudo leer la calidad en tres controles seguidos). `quality` y `quality_baseline` son la calidad de Meta leída en el control y la del inicio del envío (`GREEN`, `YELLOW`, `RED`), o `null` si no se pudo leer. Sólo las campañas con envío inteligente se pausan solas. Reanudar la campaña y que se pause otra vez emite otro evento."},
  {"type":"campaign.no_groups_available","domains":["communities"],"status":"live","pending":true,"description":"Una campaña no tiene grupos a los que dirigir a las personas que entran por su link."},
  {"type":"campaign.status_changed","domains":["communities"],"status":"live","pending":false,"description":"Una campaña se activó o se pausó."},
  {"type":"contact.created","domains":["conversations"],"status":"live","pending":false,"description":"Se creó un contacto nuevo en la cuenta.\n\nSe envía un evento por cada contacto nuevo, sea cual sea el canal: un mensaje entrante, la creación manual, una importación o la API. No se envía cuando el contacto ya existía y sólo se actualiza, ni para los contactos que la plataforma crea para sus propias notificaciones. En importaciones grandes el límite de volumen de la cuenta puede descartar parte de los eventos."},
  {"type":"contact.stage_changed","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto cambió de etapa en un tablero.\n\nSe envía un evento por cada contacto que cambia de etapa en un tablero por etapas. `kind` es entry (entra al tablero, `from_stage` es null), move (pasa de una etapa a otra), exit (sale del tablero, `to_stage` es null) o stage_deleted (se reubica porque su etapa se borró; el nombre de la etapa borrada es null). No se envía si el contacto se coloca en la etapa en la que ya estaba."},
  {"type":"contact.tag_added","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto recibió una etiqueta.\n\nSe envía un evento por cada contacto y etiqueta agregados, también en operaciones en bloque; no se envía si el contacto ya tenía la etiqueta. `source` indica el origen: manual, flow, bulk, import, sync, walink o ai. En operaciones en bloque grandes el límite de volumen de la cuenta puede descartar parte de los eventos."},
  {"type":"contact.tag_removed","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto perdió una etiqueta.\n\nSe envía un evento por cada contacto y etiqueta quitados, también en operaciones en bloque; no se envía si el contacto no tenía la etiqueta. No se envía al borrar la etiqueta, al borrar o fusionar contactos ni al desvincular etiquetas de un tablero. `source` indica el origen: manual, flow o bulk. En operaciones en bloque grandes el límite de volumen de la cuenta puede descartar parte de los eventos."},
  {"type":"conversation.assigned","domains":["conversations"],"status":"live","pending":false,"description":"Una conversación quedó asignada a una persona del equipo o a un agente de IA.\n\nSe envía cuando una conversación queda asignada a una persona del equipo (`assignee.type` = `human`) o a un agente de IA (`assignee.type` = `ai`), por cualquier camino. `assignee` trae el tipo y el nombre, nunca un identificador. No se envía al desasignar, ni cuando se vuelve a enviar el mismo asignado."},
  {"type":"conversation.closed","domains":["conversations"],"status":"live","pending":false,"description":"Una conversación pasó a cerrada.\n\nSe envía cuando una conversación pasa de abierta a cerrada. No se envía si la conversación ya estaba cerrada ni cuando se reabre."},
  {"type":"daily_report.generated","domains":["communities"],"status":"live","pending":true,"description":"Se generó el reporte diario de la cuenta (clics, ingresos y salidas)."},
  {"type":"device.connected","domains":["accounts"],"status":"live","pending":true,"description":"Uno de los números de la cuenta quedó conectado: al escanear el código QR o al terminar el alta de un número de WhatsApp Cloud."},
  {"type":"device.disconnected","domains":["accounts"],"status":"live","pending":true,"description":"Uno de los números de la cuenta se desconectó y dejó de poder enviar o recibir."},
  {"type":"flow.completed","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto terminó un flujo de automatización.\n\nSe envía una sola vez por cada ejecución de un flujo, cuando termina con éxito. No se envía si la ejecución se cortó, se canceló, quedó bloqueada o falló. `contact` es `null` si la ejecución no tiene un contacto asociado. Un flujo muy usado puede generar muchos eventos seguidos."},
  {"type":"flow.failed","domains":["conversations"],"status":"live","pending":false,"description":"La ejecución de un flujo para un contacto terminó por un error.\n\nSe envía una sola vez por cada ejecución de un flujo que termina por un error, no porque llegó al final. `reason` indica el motivo y toma uno de estos valores: `node_missing` (el paso a ejecutar ya no existe), `unknown_node_type` (el paso es de un tipo no reconocido), `missing_subflow` (el flujo que debía ejecutarse dentro de otro ya no existe), `malformed_node` (el paso tiene una configuración dañada), `loop_detected` (la ejecución dio vueltas sin esperar nada) y `execution_error` (un error inesperado detuvo la ejecución). No se envía si la ejecución se canceló, quedó bloqueada o se cortó porque se editó el flujo o se unieron contactos. `contact` es `null` si la ejecución no tiene un contacto asociado."},
  {"type":"group_action.failed","domains":["communities"],"status":"live","pending":true,"description":"Una acción automática sobre un grupo falló."},
  {"type":"group_participant.joined","domains":["communities"],"status":"live","pending":false,"description":"Una persona entró a un grupo de una campaña."},
  {"type":"group_participant.left","domains":["communities"],"status":"live","pending":false,"description":"Una persona salió de un grupo de una campaña."},
  {"type":"group.blocked","domains":["communities"],"status":"live","pending":false,"description":"Un grupo quedó inoperable: sin administrador conectado, con el link de invitación inválido o suspendido por WhatsApp."},
  {"type":"group.created","domains":["communities"],"status":"live","pending":false,"description":"Se creó o se importó un grupo dentro de una campaña de la cuenta."},
  {"type":"group.full","domains":["communities"],"status":"live","pending":true,"description":"Un grupo pasó de no estar lleno a estarlo."},
  {"type":"group.invite_link_down","domains":["communities"],"status":"live","pending":false,"description":"El enlace de invitación de un grupo quedó confirmado caído (WhatsApp respondió que no existe y la renovación no consiguió otro); no se publica por errores transitorios ni por grupos prohibidos o suspendidos, y se publica una sola vez por episodio de bloqueo."},
  {"type":"group.invite_link_renewed","domains":["communities"],"status":"live","pending":false,"description":"El enlace de invitación de un grupo cambió por una renovación, automática al detectarse inválido o pedida por el usuario; en v0 no se publican los cambios que detecta la sincronización ni el enlace inicial al crear el grupo."},
  {"type":"group.recovered","domains":["communities"],"status":"live","pending":false,"description":"Un grupo que estaba bloqueado volvió a operar."},
  {"type":"mac.expiring","domains":["accounts"],"status":"live","pending":true,"description":"Hay contactos activos mensuales que vencen en los próximos 7 días."},
  {"type":"mac.usage_100","domains":["accounts"],"status":"live","pending":true,"description":"La cuenta agotó sus contactos activos mensuales del ciclo; se abre una gracia de 24 horas."},
  {"type":"mac.usage_80","domains":["accounts"],"status":"live","pending":true,"description":"La cuenta alcanzó el 80 % de sus contactos activos mensuales del ciclo."},
  {"type":"message.received","domains":["conversations"],"status":"live","pending":false,"description":"Un contacto le escribió a un número de WhatsApp de la cuenta."},
  {"type":"message.status_changed","domains":["conversations"],"status":"planned","pending":true,"description":"Cambió el estado de entrega de un mensaje 1:1 enviado. Un aviso por transición, nunca uno que retroceda. Hay que pedirlo de forma explícita en `events`."},
  {"type":"pipeline.finished","domains":["communities"],"status":"live","pending":false,"description":"Terminó un pipeline de operaciones sobre grupos, con su resultado agregado."},
  {"type":"poll.voted","domains":["communities"],"status":"live","pending":false,"description":"Un participante votó en una encuesta enviada a un grupo, o cambió su voto."},
  {"type":"scheduled_message.finished","domains":["communities"],"status":"live","pending":false,"description":"Un envío programado terminó, con su resultado agregado."},
  {"type":"scheduled_message.group_delivery_failed","domains":["communities"],"status":"live","pending":false,"description":"Un envío programado falló en un grupo concreto, con el motivo desagregado."},
  {"type":"scheduled_message.response_received","domains":["communities"],"status":"live","pending":false,"description":"Alguien respondió a un envío programado votando una encuesta o respondiendo a un evento."},
  {"type":"subscription.cancellation_confirmed","domains":["accounts"],"status":"live","pending":true,"description":"Quedó confirmada la cancelación de la suscripción (solo suscripciones de Stripe)."},
  {"type":"subscription.dormant_ending","domains":["accounts"],"status":"live","pending":true,"description":"El período de cuenta en reposo está por terminar."},
  {"type":"subscription.expiring","domains":["accounts"],"status":"planned","pending":true,"description":"La suscripción está próxima a vencer. Planificado: todavía no se emite."},
  {"type":"subscription.reactivated","domains":["accounts"],"status":"live","pending":true,"description":"Se revirtió la cancelación programada de la suscripción (solo suscripciones de Stripe)."},
  {"type":"subscription.trial_ending","domains":["accounts"],"status":"live","pending":true,"description":"El período de prueba está por terminar."},
  {"type":"template.status_changed","domains":["conversations"],"status":"live","pending":false,"description":"Una plantilla cambió de estado de aprobación en Meta.\n\n`template` identifica la plantilla igual que `GET /templates` (`id`, `uid`, `name`, `category`). `previous_status` y `status` son los estados tal como los devuelve la API (por ejemplo `PENDING`, `APPROVED`, `REJECTED`, `PAUSED`); `previous_status` es `null` si la plantilla no tenía estado. `reason` trae la observación de rechazo (traducida como en la API y limitada a 500 caracteres) cuando el cambio es un rechazo informado al crear la plantilla, y es `null` en el resto. No se emite si Meta reenvía el estado que la plantilla ya tenía. Si una misma plantilla de Meta figura en varias cuentas, cada cuenta recibe su propio evento."},
  {"type":"webhook.test","domains":["conversations","communities"],"status":"live","pending":false,"description":"Evento de prueba enviado desde la ruta de prueba de una suscripción."},
] as const satisfies readonly WebhookEventInfo[];

/** A webhook event type known to the spec. */
export type WebhookEventType = (typeof webhookEvents)[number]['type'];

/**
 * The `data` of each event. When the spec only has an example, the type is inferred from it:
 * keys in the example are required and `null` values are `unknown`.
 */
export interface WebhookEventDataMap {
  /** `account.blocked` (live, pending of the spec; typed from: example). La cuenta quedó bloqueada por consumo: terminó la gracia de 24 horas tras agotar los contactos activos mensuales. */
  "account.blocked": {
    reason: string;
    grace_started_at: string;
    grace_expired_at: string;
  };
  /** `ai_quota.low_balance` (planned, pending of the spec; typed from: no example or schema yet). La cuota de mensajes de IA está por agotarse. Planificado: todavía no se emite. */
  "ai_quota.low_balance": Record<string, unknown>;
  /** `ai_quota.topup_failed` (planned, pending of the spec; typed from: no example or schema yet). Una recarga de cuota de IA no pudo procesarse. Planificado: todavía no se emite. */
  "ai_quota.topup_failed": Record<string, unknown>;
  /** `ai_quota.topup_succeeded` (planned, pending of the spec; typed from: no example or schema yet). Una recarga de cuota de IA se acreditó. Planificado: todavía no se emite. */
  "ai_quota.topup_succeeded": Record<string, unknown>;
  /** `billing.payment_failed` (live, pending of the spec; typed from: example). Un cobro de la suscripción no pudo procesarse (solo suscripciones de Stripe). */
  "billing.payment_failed": {
    amount_cents: number;
    currency: string;
  };
  /** `billing.plan_blocked` (planned, pending of the spec; typed from: no example or schema yet). El plan quedó bloqueado por un cobro no procesado. Planificado: todavía no se emite. */
  "billing.plan_blocked": Record<string, unknown>;
  /** `billing.upcoming_charge` (live, pending of the spec; typed from: example). Se acerca el próximo cobro de la suscripción (solo suscripciones de Stripe). */
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
  /** `campaign.no_groups_available` (live, pending of the spec; typed from: example). Una campaña no tiene grupos a los que dirigir a las personas que entran por su link. */
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
  /** `daily_report.generated` (live, pending of the spec; typed from: example). Se generó el reporte diario de la cuenta (clics, ingresos y salidas). */
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
  /** `device.connected` (live, pending of the spec; typed from: schema). Uno de los números de la cuenta quedó conectado: al escanear el código QR o al terminar el alta de un número de WhatsApp Cloud. */
  "device.connected": {
    device: {
      id: number;
      name: string | null;
      /** Solo dígitos, sin `+`. */
      number: string | null;
    };
    connected_at: string;
  };
  /** `device.disconnected` (live, pending of the spec; typed from: schema). Uno de los números de la cuenta se desconectó y dejó de poder enviar o recibir. */
  "device.disconnected": {
    device: {
      id: number;
      name: string | null;
      /** Solo dígitos, sin `+`. */
      number: string | null;
    };
    disconnected_at: string;
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
  /** `group_action.failed` (live, pending of the spec; typed from: example). Una acción automática sobre un grupo falló. */
  "group_action.failed": {
    campaign: {
      uuid: string;
      name: string;
    };
    pipeline: {
      uuid: string;
      name: string;
    };
    group: {
      uid: string;
      name: string;
    };
    action: {
      type: string;
    };
    reason: string;
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
  /** `group.full` (live, pending of the spec; typed from: example). Un grupo pasó de no estar lleno a estarlo. */
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
  /** `mac.expiring` (live, pending of the spec; typed from: example). Hay contactos activos mensuales que vencen en los próximos 7 días. */
  "mac.expiring": {
    contacts_expiring: number;
    expires_at: string;
  };
  /** `mac.usage_100` (live, pending of the spec; typed from: example). La cuenta agotó sus contactos activos mensuales del ciclo; se abre una gracia de 24 horas. */
  "mac.usage_100": {
    used: number;
    limit: number;
    percentage: number;
    cycle_started_at: string;
    grace_expires_at: string;
  };
  /** `mac.usage_80` (live, pending of the spec; typed from: example). La cuenta alcanzó el 80 % de sus contactos activos mensuales del ciclo. */
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
  /** `message.status_changed` (planned, pending of the spec; typed from: schema). Cambió el estado de entrega de un mensaje 1:1 enviado. Un aviso por transición, nunca uno que retroceda. Hay que pedirlo de forma explícita en `events`. */
  "message.status_changed": {
    /** El `id` del mensaje en el historial del contacto. */
    message_id: number;
    contact_id: number;
    /** El número de tu cuenta que envió el mensaje. */
    device_id: number | null;
    status: "sent" | "delivered" | "read" | "failed";
    previous_status: "sent" | "delivered" | "read" | "failed" | null;
    /** Solo cuando `status` es `failed`. */
    error?: {
      code: number | null;
      title: string | null;
    };
    occurred_at: string;
    /** La `client_reference` que mandaste en el envío, o `null`. */
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
  /** `subscription.cancellation_confirmed` (live, pending of the spec; typed from: example). Quedó confirmada la cancelación de la suscripción (solo suscripciones de Stripe). */
  "subscription.cancellation_confirmed": {
    access_until: string;
  };
  /** `subscription.dormant_ending` (live, pending of the spec; typed from: example). El período de cuenta en reposo está por terminar. */
  "subscription.dormant_ending": {
    charge_date: string;
    amount_cents: number;
    currency: string;
  };
  /** `subscription.expiring` (planned, pending of the spec; typed from: no example or schema yet). La suscripción está próxima a vencer. Planificado: todavía no se emite. */
  "subscription.expiring": Record<string, unknown>;
  /** `subscription.reactivated` (live, pending of the spec; typed from: example). Se revirtió la cancelación programada de la suscripción (solo suscripciones de Stripe). */
  "subscription.reactivated": {
    renews_at: string;
  };
  /** `subscription.trial_ending` (live, pending of the spec; typed from: example). El período de prueba está por terminar. */
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
}
