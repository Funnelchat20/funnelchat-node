/**
 * GENERATED FILE — do not edit. Run `npm run generate`.
 * Source: spec/funnelchat.json (sha256 8bbbae569b4cab52…) + spec/pending.json.
 */
/* eslint-disable */
export interface paths {
    "/api/v1/broadcasts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar difusiones
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["broadcast.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Buscar contactos para una difusión
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["broadcast.contacts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/contacts-count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Contar contactos para una difusión
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["broadcast.contactsCount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/cost-tiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver los tramos de costo
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["broadcast.costTiers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/move-to-folder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mover difusiones a una carpeta
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["broadcast.moveToFolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/{broadcast}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver una difusión
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["broadcast.show"];
        put?: never;
        post?: never;
        /**
         * Eliminar una difusión
         * @description **Permiso requerido:** `conversations:write`
         */
        delete: operations["broadcast.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/{broadcast}/statistics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver las estadísticas de una difusión
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["broadcast.statistics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/{broadcast}/cost": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el costo de una difusión
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["broadcast.cost"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/{broadcast}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los contactos de una difusión
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["broadcast.broadcastContacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/{broadcast}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancelar una difusión
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["broadcast.cancel"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/{broadcast}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los mensajes de una difusión
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["broadcast.broadcastMessages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/folders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar carpetas de difusiones
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["broadcastFolder.index"];
        put?: never;
        /**
         * Crear una carpeta de difusiones
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["broadcastFolder.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/broadcasts/folders/{broadcastFolder}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Actualizar una carpeta de difusiones
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["broadcastFolder.update"];
        post?: never;
        /**
         * Eliminar una carpeta de difusiones
         * @description **Permiso requerido:** `conversations:write`
         */
        delete: operations["broadcastFolder.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar contactos
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["contact.index"];
        put?: never;
        /**
         * Crear un contacto
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["contact.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/update-or-create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Crear o actualizar un contacto
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["contact.updateOrCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/attach-custom-field": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Asignar un campo personalizado a contactos
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["contact.attachCustomField"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/detach-custom-field": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Quitar un campo personalizado de contactos
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["contact.detachCustomField"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un contacto
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["contact.show"];
        /**
         * Actualizar un contacto
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["contact.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las etiquetas de un contacto
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["contact.tags"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los campos personalizados de un contacto
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["contact.customFields"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/meta-window": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver la ventana de 24 horas de un contacto
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["contact.metaWindow"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los contactos de un número
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["contact.contactsByDevice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Eliminar contactos
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["contact.destroy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/pause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pausar un contacto
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["contactAutomation.pause"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/flows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los flujos de un contacto
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["contactAutomation.flows"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/message/contact-card": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enviar una tarjeta de contacto
         * @description > **Nota del portal (v0):** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (ventana de 24 horas y frenos contra spam): está en camino. Hasta que se habilite, esta ruta responde `403 route_not_available` a cualquier clave. (Q19; cierra D21)
         *
         *     **Permiso requerido:** `conversations:send`
         */
        post: operations["contactCard.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/lead-score": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el lead score de un contacto
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["contactLeadScore.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las notas de un contacto
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["contactNote.index"];
        put?: never;
        /**
         * Agregar una nota a un contacto
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["contactNote.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/notes/{note}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Eliminar una nota
         * @description **Permiso requerido:** `conversations:write`
         */
        delete: operations["contactNote.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar conversaciones
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["conversation.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/count/unread": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Contar conversaciones sin leer
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["conversation.countUnread"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/count/open": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Contar conversaciones abiertas
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["conversation.countOpen"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/count/closed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Contar conversaciones cerradas
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["conversation.countClosed"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/count/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Contar todas las conversaciones
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["conversation.countAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/mark-all-read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Marcar todas como leídas
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["conversation.markAllAsRead"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/mark-all-unread": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Marcar todas como no leídas
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["conversation.markAllAsUnread"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Actualizar la conversación de un contacto
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["conversation.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enviar un mensaje a un contacto
         * @description > **Nota del portal (v0):** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (ventana de 24 horas y frenos contra spam): está en camino. Hasta que se habilite, esta ruta responde `403 route_not_available` a cualquier clave. (Q19; cierra D21)
         *
         *     **Permiso requerido:** `conversations:send`
         */
        post: operations["conversation.sendMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contactId}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los mensajes de un contacto
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["conversation.getLatestMessages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar campos personalizados
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["customField.index"];
        put?: never;
        /**
         * Crear un campo personalizado
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["customField.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/custom-fields/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Eliminar campos personalizados
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["customField.destroy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/custom-fields/{customField}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un campo personalizado
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["customField.show"];
        /**
         * Actualizar un campo personalizado
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["customField.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contact-flows/{contactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los flujos en curso de un contacto
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["flow.contactFlowHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contact-flows/{contactFlowId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Cancelar un flujo en curso
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["flow.cancelContactFlow"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/flows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar flujos
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["flow.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/flows/{flow}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un flujo
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["flow.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/flows/{flow}/nodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los nodos de un flujo
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["flow.nodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/flows/{flow}/active-contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Contar los contactos activos de un flujo
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["flow.activeContacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/flows/{flow}/active-contacts-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los contactos activos de un flujo
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["flow.activeContactsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/flows/{flow}/flow-contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los contactos de un flujo
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["flow.flowContactsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/folders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar carpetas
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["folder.index"];
        put?: never;
        /**
         * Crear una carpeta
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["folder.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/folders/{folder}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver una carpeta
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["folder.show"];
        /**
         * Actualizar una carpeta
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["folder.update"];
        post?: never;
        /**
         * Eliminar una carpeta
         * @description **Permiso requerido:** `conversations:write`
         */
        delete: operations["folder.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/messages/{message}/forward": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reenviar un mensaje
         * @description > **Nota del portal (v0):** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (ventana de 24 horas y frenos contra spam): está en camino. Hasta que se habilite, esta ruta responde `403 route_not_available` a cualquier clave. (Q19; cierra D21)
         *
         *     **Permiso requerido:** `conversations:send`
         */
        post: operations["forwardMessage.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/message/poll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enviar una encuesta
         * @description > **Nota del portal (v0):** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (ventana de 24 horas y frenos contra spam): está en camino. Hasta que se habilite, esta ruta responde `403 route_not_available` a cualquier clave. (Q19; cierra D21)
         *
         *     **Permiso requerido:** `conversations:send`
         */
        post: operations["interactiveMessage.storePoll"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/message/event": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enviar una invitación a un evento
         * @description > **Nota del portal (v0):** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (ventana de 24 horas y frenos contra spam): está en camino. Hasta que se habilite, esta ruta responde `403 route_not_available` a cualquier clave. (Q19; cierra D21)
         *
         *     **Permiso requerido:** `conversations:send`
         */
        post: operations["interactiveMessage.storeEvent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar tableros
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["kanbanSetting.index"];
        put?: never;
        /**
         * Crear un tablero
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["kanbanSetting.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un tablero
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["kanbanSetting.show"];
        /**
         * Actualizar un tablero
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["kanbanSetting.update"];
        post?: never;
        /**
         * Eliminar un tablero
         * @description **Permiso requerido:** `conversations:write`
         */
        delete: operations["kanbanSetting.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver los miembros de un tablero
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["kanbanSetting.members"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/kanban-stages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver las etapas de un contacto en los tableros
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["kanbanStage.contactStages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}/move-contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mover un contacto de etapa
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["kanbanStage.moveContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}/bulk-move": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mover contactos de etapa en bloque
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["kanbanStage.bulkMove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}/remove-contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sacar un contacto del tablero
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["kanbanStage.removeContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}/bulk-remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sacar contactos del tablero en bloque
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["kanbanStage.bulkRemove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}/stages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Crear una etapa
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["kanbanStage.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}/stages/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reordenar las etapas
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["kanbanStage.reorder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}/stages/{stage}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Actualizar una etapa
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["kanbanStage.update"];
        post?: never;
        /**
         * Eliminar una etapa
         * @description **Permiso requerido:** `conversations:write`
         */
        delete: operations["kanbanStage.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/kanban-settings/{kanbanSetting}/stages/{stage}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los contactos de una etapa
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["kanbanStage.contacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/lead-score/distribution": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver la distribución del lead score
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["leadScoreDistribution.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/lead-score/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Registrar un evento de lead score
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["leadScoreEventIngest.ingest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/lead-score/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver la configuración del lead score
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["leadScoreSettings.show"];
        /**
         * Actualizar la configuración del lead score
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["leadScoreSettings.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/lead-score/adjustments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Ajustar el lead score de un contacto
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["leadScoreSettings.adjust"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/mac/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el consumo de MACs
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["mac.status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/mac/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los contactos que cuentan como MAC
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["mac.contacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/mac/contacts/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el historial de MACs
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["mac.contactsHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/message/send-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enviar un mensaje
         * @description > **Nota del portal (v0):** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (ventana de 24 horas y frenos contra spam): está en camino. Hasta que se habilite, esta ruta responde `403 route_not_available` a cualquier clave. (Q19; cierra D21)
         *
         *     **Permiso requerido:** `conversations:send`
         */
        post: operations["message.sendMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/messages/{message}/reaction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Reaccionar a un mensaje
         * @description > **Nota del portal (v0):** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (ventana de 24 horas y frenos contra spam): está en camino. Hasta que se habilite, esta ruta responde `403 route_not_available` a cualquier clave. (Q19; cierra D21)
         *
         *     **Permiso requerido:** `conversations:send`
         */
        put: operations["messageReaction.update"];
        post?: never;
        /**
         * Quitar una reacción
         * @description > **Nota del portal (v0):** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (ventana de 24 horas y frenos contra spam): está en camino. Hasta que se habilite, esta ruta responde `403 route_not_available` a cualquier clave. (Q19; cierra D21)
         *
         *     **Permiso requerido:** `conversations:send`
         */
        delete: operations["messageReaction.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar plantillas
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["messageTemplate.templates"];
        put?: never;
        /**
         * Crear una plantilla
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["messageTemplate.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/templates/{template}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver una plantilla
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["messageTemplate.template"];
        /**
         * Actualizar una plantilla
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["messageTemplate.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/templates/{template}/quick-reply-buttons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver los botones de respuesta rápida de una plantilla
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["messageTemplate.quickReplyButtons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/templates/{template}/send-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enviar una plantilla
         * @description > **Nota del portal (v0):** El envío con clave se abre con el permiso `conversations:send` y las reglas de WhatsApp (ventana de 24 horas y frenos contra spam): está en camino. Hasta que se habilite, esta ruta responde `403 route_not_available` a cualquier clave. (Q19; cierra D21)
         *
         *     **Permiso requerido:** `conversations:send`
         */
        post: operations["messageTemplate.send"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/templates/{template}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Eliminar una plantilla de un número
         * @description **Permiso requerido:** `conversations:write`
         */
        delete: operations["messageTemplate.delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/payments/products/{platform}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los productos de una plataforma de pagos
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["paymentProduct.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/quick-replies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar respuestas rápidas
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["quickReply.index"];
        put?: never;
        /**
         * Crear una respuesta rápida
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["quickReply.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/quick-replies/{quickReply}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver una respuesta rápida
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["quickReply.show"];
        /**
         * Actualizar una respuesta rápida
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["quickReply.update"];
        post?: never;
        /**
         * Eliminar una respuesta rápida
         * @description **Permiso requerido:** `conversations:write`
         */
        delete: operations["quickReply.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/sales/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver las métricas de ventas
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["salesDashboard.metrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/sales/funnel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el embudo de ventas
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["salesDashboard.funnel"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/sales/by-platform": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver las ventas por plataforma
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["salesDashboard.byPlatform"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/sales": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar ventas
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["salesDashboard.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar etiquetas
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["tag.index"];
        put?: never;
        /**
         * Crear una etiqueta
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["tag.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tags/{tag}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver una etiqueta
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["tag.show"];
        /**
         * Actualizar una etiqueta
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["tag.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tags/{tag}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los contactos con una etiqueta
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["tag.contacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tags/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Eliminar etiquetas
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["tag.destroy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tickets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar tickets
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["ticket.index"];
        put?: never;
        /**
         * Crear un ticket
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["ticket.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tickets/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un ticket
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["ticket.show"];
        /**
         * Actualizar un ticket
         * @description **Permiso requerido:** `conversations:write`
         */
        put: operations["ticket.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tickets/assign": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Asignar tickets
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["ticket.assignTicketToUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tickets/{id}/close": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cerrar un ticket
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["ticket.closeTicket"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tickets/{id}/reopen": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reabrir un ticket
         * @description **Permiso requerido:** `conversations:write`
         */
        post: operations["ticket.reOpenTicket"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/agents/{user}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un agente
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["user.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/agents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar agentes
         * @description **Permiso requerido:** `conversations:read`
         */
        get: operations["user.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar campañas
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `created_at`, `id`, `name`, `updated_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["campaign.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["campaign.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/conditionals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver las condicionales de una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["campaignConditional.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/available-groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los grupos que se pueden sumar a una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `pageSize` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["campaign.availableGroups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los grupos de una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `id`, `name`, `created_at`, `updated_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["campaign.groups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/pipelines": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los pipelines de una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `per_page` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `id`, `name`, `group_index`, `created_at`, `updated_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["campaign.indexPipelines"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/pipelines/{pipeline}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un pipeline
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["campaign.showPipeline"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/operation-plans/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver la configuración de los planes de operación
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["operationPlan.config"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/operation-plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los planes de operación de una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `per_page` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["operationPlan.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/operation-plans/{plan}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un plan de operación
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["operationPlan.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las acciones de sesión de una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** página fija de 15 elementos; se recorre con `page`.
         */
        get: operations["campaign.actions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/actions/{action}/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los grupos alcanzados por una acción
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `name`, `status`, `created_at`, `updated_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["groupManagement.actionGroup"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar grupos
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `created_at`, `id`, `name`, `updated_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["group.index"];
        put?: never;
        /**
         * Crear un grupo
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Con un número QR, `participants` es obligatorio; con uno oficial no se acepta (los invitás después).
         */
        post: operations["pendingGroups.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los grupos que administra un número
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `pageSize` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["group.groups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/ad-groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los grupos de anuncios de un número
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `pageSize` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["group.adGroups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los canales de un número
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `pageSize` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["group.channels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{groupUid}/metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver los datos actuales de un grupo en WhatsApp
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["groupMetadata.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un grupo
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["group.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las acciones de sesión sobre un grupo
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `status`, `created_at`, `updated_at`, `completed_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["group.actions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los mensajes enviados a un grupo
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** página fija de 3 elementos; se recorre con `page`.
         */
        get: operations["group.messages"];
        put?: never;
        /**
         * Enviar un mensaje a un grupo
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     El id de WhatsApp del mensaje llega en `result.message.uid` de la acción.
         */
        post: operations["pendingGroups.sendMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/scheduled-messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los envíos programados que incluyen un grupo
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `id`, `name`, `created_at`, `updated_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["group.scheduledMessages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los participantes de una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `updated_at`, `id`, `created_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["campaign.participants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/campaign-participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los participantes con su grupo actual
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `joined_at`, `left_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["campaign.campaignParticipants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/participant-events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar entradas y salidas de una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["campaign.participantEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los participantes de un grupo
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `created_at`, `id`, `updated_at`; dirección `orderDirection`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["group.participants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/participant-events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar entradas y salidas de un grupo
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["group.participantEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/scheduled-messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar envíos programados
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `created_at`, `id`, `name`, `updated_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["scheduledMessage.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/scheduled-messages/{scheduledMessage}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un envío programado
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["scheduledMessage.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/scheduled-messages/{scheduledMessage}/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los grupos destino de un envío
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** página fija de 3 elementos; se recorre con `page`. Orden: `orderBy` acepta `created_at`, `id`, `name`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["scheduledMessage.groups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/scheduled-messages/{scheduledMessage}/group-messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el resultado por grupo de un envío
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `group_message_template.id`, `group_message_template.status`, `groups.name`, `group_message_template.created_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["scheduledMessage.groupMessages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/scheduled-messages/{scheduledMessage}/readed-played-rates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver las tasas de lectura y reproducción de un envío
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["scheduledMessage.readedAndPlayedRates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/scheduled-messages/{scheduledMessage}/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las ocurrencias de un envío recurrente
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["scheduledMessage.runs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/scheduled-messages/folders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las carpetas de envíos
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["scheduledMessageFolder.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/scheduled-messages/{scheduledMessage}/responses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las respuestas a un envío
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["scheduledMessage.responses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/scheduled-messages/{scheduledMessage}/response-tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las etiquetas que se aplican a quien responde
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["scheduledMessage.responseTags"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stats/participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver participantes por período
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** `start_date` y `end_date` son obligatorios, con formato `AAAA-MM-DD`, y el rango entre los dos, ambos incluidos, admite como máximo 366 días (un año completo, bisiesto incluido). Si falta una de las dos fechas, si una es inválida, si `end_date` es anterior a `start_date` o si el rango es mayor, responde `422`.
         */
        get: operations["stats.participantStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stats/active-participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver participantes activos
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** `start_date` y `end_date` son obligatorios, con formato `AAAA-MM-DD`, y el rango entre los dos, ambos incluidos, admite como máximo 366 días (un año completo, bisiesto incluido). Si falta una de las dos fechas, si una es inválida, si `end_date` es anterior a `start_date` o si el rango es mayor, responde `422`.
         */
        get: operations["stats.activeParticipants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stats/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver grupos por estado
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** `start_date` y `end_date` son obligatorios, con formato `AAAA-MM-DD`, y el rango entre los dos, ambos incluidos, admite como máximo 366 días (un año completo, bisiesto incluido). Si falta una de las dos fechas, si una es inválida, si `end_date` es anterior a `start_date` o si el rango es mayor, responde `422`.
         */
        get: operations["stats.groupStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stats/clicks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver clics en links
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** `start_date` y `end_date` son obligatorios, con formato `AAAA-MM-DD`, y el rango entre los dos, ambos incluidos, admite como máximo 366 días (un año completo, bisiesto incluido). Si falta una de las dos fechas, si una es inválida, si `end_date` es anterior a `start_date` o si el rango es mayor, responde `422`.
         */
        get: operations["stats.clickStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stats/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar registros de clics
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `per_page` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["stats.statsRecords"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stats/country-metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver métricas por país
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["stats.countryMetrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stats/countries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar países presentes
         * @description **Permiso requerido:** `communities:read` (Leer)
         */
        get: operations["stats.countryList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los webhooks de una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Nota:** Webhooks legados de campaña, con otro formato; no reciben los eventos de plataforma (ver `/webhooks`).
         */
        get: operations["campaignWebhook.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campaigns/{campaign}/webhooks/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las entregas de los webhooks de una campaña
         * @description **Permiso requerido:** `communities:read` (Leer)
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `per_page` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`).
         */
        get: operations["campaignWebhook.logs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver mi cuenta
         * @description **Lectura** · requiere el permiso `accounts:read`.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description `UserResource` */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AccountsUserResource"] & Record<string, unknown>;
                    };
                };
                401: components["responses"]["AccountsAuthenticationException"];
                403: components["responses"]["AccountsAuthorizationException"];
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/alerts/campaigns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las campañas para alertas
         * @description List campaigns visible to the authenticated account (owner + agents
         *     scope), reading from the read-only `groups` connection. Paginated,
         *     searchable by `name`. Degrades to 503 when the `groups` connection is
         *     unavailable instead of leaking a 500 / stack trace
         *
         *     **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `per_page` · orden fijo: id ascendente · no acepta parámetros de orden.
         */
        get: operations["alertCampaign.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/alerts/catalog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el catálogo de alertas
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     Stripe-only alerts (concepts/events that only exist for accounts billed
         *     through Stripe, e.g. subscription reactivation, dormant period ending)
         *     are excluded when the owner's payment_provider is not Stripe (Hotmart
         *     or null).
         */
        get: operations["alertCatalog.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/alerts/daily-report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el reporte diario
         * @description Return the daily report configuration for the authenticated owner.
         *     Returns a default structure if no record exists yet
         *
         *     **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["alertDailyReport.show"];
        /**
         * Configurar el reporte diario
         * @description Upsert the daily report configuration for the authenticated owner.
         *     Ensures exactly one row per owner (unique(owner_id))
         *
         *     **Escritura** · requiere el permiso `accounts:write`.
         *
         *     When `all_campaigns` is false, the submitted `campaign_ids` are pruned
         *     to only those that still resolve to a visible campaign (owner + agents
         *     scope) in the `groups` database, dropping orphans silently. The purge
         *     is best-effort: if the `groups` connection is unavailable, the
         *     submitted ids are persisted unpruned rather than being wiped out.
         */
        put: operations["alertDailyReport.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/alerts/destinations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los destinos de alertas
         * @description List destinations for the authenticated owner.
         *     Seed lazy: if the owner has no destinations and has a phone number,
         *     create an unverified phone destination from it
         *
         *     **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         */
        get: operations["alertDestination.index"];
        put?: never;
        /**
         * Crear un destino de alertas
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     Enforces, para `webhook`:
         *       - tope de {@see self::WEBHOOK_DESTINATION_LIMIT} destinos por cuenta;
         *       - `SsrfGuard::assertSafe()` ANTES de persistir. Hasta este incremento el
         *         unico chequeo en el alta era `str_starts_with($destination, 'https://')`,
         *         y el guard corria solo en el boton de prueba manual: se podia guardar
         *         tranquilamente un destino apuntando a `https://127.0.0.1/...` o al
         *         endpoint de metadata de la nube, y quedaba ahi esperando a que el
         *         transporte de entrega lo usara;
         *       - `verified_at` en null. Un webhook NO se auto-verifica: hay que pasar
         *         por `POST alerts/destinations/{id}/verify`, que exige que el destino
         *         devuelva un challenge firmado (ver AlertWebhookVerificationController);
         *       - generacion del secreto de firma, devuelto en texto plano UNA sola vez
         *         en esta respuesta 201 y nunca mas.
         */
        post: operations["alertDestination.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/alerts/destinations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Eliminar un destino de alertas
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     Returns 404 for both non-existent and other-owner destinations to prevent
         *     resource-existence enumeration by unauthenticated/unauthorized callers.
         */
        delete: operations["alertDestination.destroy"];
        options?: never;
        head?: never;
        /**
         * Actualizar un destino de alertas
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     La URL de un `phone` sigue siendo de solo lectura post-creacion (se
         *     verifica por OTP contra ese numero; cambiarlo seria crear otro destino).
         *     Para un `webhook` se permite corregirla, y esa es justamente la razon por
         *     la que el guard anti-SSRF tiene que correr TAMBIEN aca: si solo corriera
         *     en el alta, editar seria la puerta de atras para dejar persistida una URL
         *     que apunta a la red interna.
         *
         *     Cambiar la URL resetea `verified_at`: lo que se verifico fue un endpoint
         *     concreto, no el registro.
         *
         *     Returns 404 for both non-existent and other-owner destinations to prevent
         *     resource-existence enumeration by unauthenticated/unauthorized callers.
         */
        patch: operations["alertDestination.update"];
        trace?: never;
    };
    "/api/v1/alerts/destinations/{id}/otp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enviar un código de verificación
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     HTTP 202: OTP dispatched.
         *     HTTP 422: destination is not a phone or is already verified.
         *     HTTP 429: cooldown active or hourly limit reached.
         */
        post: operations["alertOtp.send"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/alerts/destinations/{id}/otp/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Verificar el código
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     HTTP 200: verified — returns updated destination resource.
         *     HTTP 422: destination not a phone, already verified, or wrong/expired code.
         */
        post: operations["alertOtp.verify"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/alerts/quiet-hours": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el horario de silencio
         * @description Return the quiet hours configuration for the authenticated owner.
         *     Returns an empty/default structure if no record exists yet
         *
         *     **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["alertQuietHour.show"];
        /**
         * Configurar el horario de silencio
         * @description Upsert the quiet hours configuration for the authenticated owner.
         *     Ensures exactly one row per owner (unique(owner_id))
         *
         *     **Escritura** · requiere el permiso `accounts:write`.
         */
        put: operations["alertQuietHour.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/alerts/destinations/{id}/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Activar o desactivar una alerta
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     - Validates that the module/action pair exists in AlertCatalog.
         *     - Validates that the destination is verified (verified_at not null).
         *     - Enforces unique(alert_destination_id, module, action) via updateOrCreate.
         *     - Owner-scoped: returns 404 for both non-existent and other-owner destinations
         *       to prevent resource-existence enumeration.
         */
        put: operations["alertSetting.upsert"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/alerts/destinations/{id}/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Probar un destino webhook
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     - Owner-scoped: returns 404 for both non-existent and other-owner destinations
         *       to prevent resource-existence enumeration.
         *     - Only webhook-type destinations are allowed.
         *     - SSRF guard is applied inside WebhookTestService before any HTTP call.
         */
        post: operations["alertWebhookTest.test"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/capi/dataset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Configurar el dataset de Conversions API
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     Idempotently create or recover the Meta Conversions API dataset for the
         *     device's WABA and persist it in `waba_capi_datasets`.
         *
         *     Authorized for the device owner only (DevicePolicy::update) — agents cannot
         *     provision or manage CAPI datasets.
         */
        post: operations["capiConnection.dataset"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/capi/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Probar la conexión con Conversions API
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     "Probar conexión": verifies the device token has the
         *     `whatsapp_business_manage_events` scope (`GET /debug_token`) and that the
         *     WABA has a dataset (`GET /{WABA_ID}/dataset`), persists the result, and
         *     returns an aggregated status + a link to Meta's Events Manager.
         *
         *     NEVER sends `POST /{DATASET_ID}/events` — Meta does not offer a
         *     `test_event_code` for business messaging and a test Purchase would inject
         *     a fake sale (design.md D6).
         *
         *     Authorized for the device owner only (DevicePolicy::update) — agents cannot
         *     check CAPI connection status.
         */
        get: operations["capiConnection.test"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/capi/datasets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los datasets de Conversions API
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         *
         *     Read-only status snapshot: returns the authenticated owner's already
         *     persisted `waba_capi_datasets` rows, one per WABA they've connected.
         *
         *     Unlike `test()`, this endpoint NEVER calls Meta and NEVER writes — it only
         *     reads what a previous `dataset`/`test` call (or the Meta connection flow)
         *     already persisted. Powers the connection card showing CAPI status as soon
         *     as it opens, without requiring the user to press "Probar conexión" first.
         *
         *     Not device-scoped: not authorized via `DevicePolicy` against a single
         *     `Device` — it is scoped to `auth()->id()` directly, since
         *     `waba_capi_datasets.user_id` always holds the account owner's id (see
         *     `WabaCapiDataset`). Agents share the owner's account (`payment-valid` +
         *     `user-admin` gates on the route already require an owner-level token).
         */
        get: operations["capiConnection.datasets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/custom-domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar dominios propios
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         */
        get: operations["customDomain.index"];
        put?: never;
        /**
         * Registrar un dominio propio
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     `StoreCustomDomainRequest` already sanitized `hostname` and validated
         *     shape + uniqueness (422, no Cloudflare call) before this method runs.
         *     Cloudflare is called next; on failure NOTHING is persisted locally
         *     (spec scenario "Cloudflare API failure on creation").
         *
         *     Requests `HTTP` DCV by default (design.md D9 — supersedes the original
         *     TXT-only MVP default): `CloudflareCustomHostnameClient::create()`
         *     defaults to `SslValidationMethod::Http`, so no explicit method is passed
         *     here. With HTTP DCV the certificate is issued once the CNAME resolves,
         *     so `ssl_validation_string` (TXT-specific) is expected to stay `null` for
         *     new domains — `DnsRecordBuilder` renders a single routing record (no
         *     TXT) accordingly. A domain can later fall back to `TXT` via
         *     `switchValidationMethod()`.
         *
         *     Also autodetects the DNS provider from the hostname's nameservers
         *     (design.md D14-D17, Increment 6) and persists it as `detected_provider`
         *     — a best-effort UX hint, never blocking creation. `null` when detection
         *     fails or the domain was just registered and its NS do not resolve yet
         *     (the "sticky" re-detection on `verify()` covers that case).
         *
         *     Since Increment 9 (design.md Addendum 5 D32/D34), a Custom Hostname
         *     alone gets a certificate but routes no traffic — a **Worker Route**
         *     (`{hostname}/*` -> the `custom-hostnames` Worker) is required for the
         *     domain to actually work. It is created right after the Custom Hostname,
         *     using the script name from `config('services.cloudflare.worker_script')`
         *     (D36), and its id is persisted as `cloudflare_route_id` (internal
         *     bookkeeping only — never exposed via `CustomDomainResource`). If the
         *     Custom Hostname succeeds but the Worker Route fails, the just-created
         *     Custom Hostname is rolled back (best-effort delete, logged on failure)
         *     and NOTHING is persisted locally — a domain with a hostname but no route
         *     would be a silently dead domain (SSL may go ACTIVE but no traffic ever
         *     reaches the resolver), which is worse than failing the request outright.
         */
        post: operations["customDomain.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/custom-domains/{customDomain}/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Verificar un dominio propio
         * @description Actively re-trigger Cloudflare Domain Control Validation for a domain
         *     and persist the resolved canonical status ("verify now", design.md
         *     D4/D6/D10)
         *
         *     **Escritura** · requiere el permiso `accounts:write`.
         *
         *     Scoped to the authenticated admin: a domain id belonging to another
         *     account resolves to a `ModelNotFoundException`, which the app's global
         *     exception handler (`bootstrap/app.php`) renders as a 404 JSON response
         *     for API requests — same behavior a mismatched implicit route-model
         *     binding would produce.
         *
         *     Confirmed against a live Cloudflare response: a plain `GET` never
         *     re-kicks validation, so a customer who just published DNS would see
         *     "nothing happen" until Cloudflare's own background re-check eventually
         *     ran. This method issues a `PATCH` (via `patchSsl()`) with the domain's
         *     CURRENT `ssl_validation_method` — a re-trigger, not a method switch —
         *     which Cloudflare confirmed re-kicks the DCV check instantly. The
         *     resulting state is still asynchronous: it may not reflect `ACTIVE` in
         *     this same response, but is captured here or on a subsequent
         *     verify/sweep.
         *
         *     If Cloudflare is unreachable or rejects the request, the domain's
         *     persisted `status` is left untouched and a 502 is returned (the
         *     `CloudflareApiException` thrown by the client already logs the raw
         *     error before this method ever sees it).
         *
         *     `ssl_validation_string` is TXT-specific (design.md D9): it is only
         *     re-captured from the response when the domain's method is `TXT`. For
         *     the `HTTP` default it stays `null`, matching `DnsRecordBuilder`'s
         *     method-aware branching (design.md D12).
         *
         *     Also re-detects the DNS provider hint (design.md D15, Increment 6)
         *     following a STICKY policy: `detected_provider` is only overwritten
         *     when the detector returns a non-null value. A transient `null` (e.g. a
         *     flaky lookup) never clobbers a previously good hint. This covers the
         *     common case where NS did not resolve yet at `store()` time (freshly
         *     registered domain) but do resolve by the time the admin verifies.
         */
        post: operations["customDomain.verify"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/custom-domains/{customDomain}/switch-validation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cambiar el método de validación SSL
         * @description Switch a domain's SSL Domain Control Validation (DCV) method between
         *     `HTTP` (default) and `TXT` (fallback, design.md D11)
         *
         *     **Escritura** · requiere el permiso `accounts:write`.
         *
         *     This is the escape hatch for domains whose CNAME does not yet route to
         *     Cloudflare: HTTP DCV cannot complete without traffic reaching the
         *     origin, but TXT DCV validates purely from a DNS record. Scoped to the
         *     authenticated admin via `findOwned()` (404 if not owned). Calls
         *     `patchSsl()` with the NEW method (a "switch", as opposed to `verify()`'s
         *     same-method "re-trigger") and persists it. When switching TO `TXT`, the
         *     `ssl_validation_string` is captured best-effort from the response —
         *     Cloudflare frequently has not yet populated `ssl.validation_records` at
         *     PATCH time (confirmed against a live Cloudflare response: it is filled
         *     in asynchronously, a few seconds later). When the PATCH response comes
         *     back empty, a best-effort follow-up `get()` is issued immediately to try
         *     to capture it right away — this covers the common case where the value
         *     is already available a moment later, so the customer sees the TXT
         *     record without having to wait for a subsequent `verify()`/sweep. The
         *     follow-up is best-effort: if it also comes back empty, or Cloudflare
         *     fails/is unreachable for it, the switch still succeeds and a later
         *     `verify()`/sweep captures the value once available (bug fix: the TXT
         *     `dns_record` was never shown to the user when the PATCH raced
         *     Cloudflare's population of `ssl.validation_records`).
         */
        post: operations["customDomain.switchValidationMethod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/custom-domains/{customDomain}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Eliminar un dominio propio
         * @description Unregister a custom domain: delete it from Cloudflare, then hard-delete
         *     the local row (design.md D6)
         *
         *     **Escritura** · requiere el permiso `accounts:operate`.
         *
         *     > ⚠️ **Operación irreversible.** No hay papelera ni deshacer: resetear o limpiar un número mata su sesión de WhatsApp (hay que volver a escanear el código), purgar la cola descarta los mensajes encolados sin dejar registro de lo descartado, y los borrados eliminan el recurso.
         *
         *     By design the local row is removed even when the Cloudflare delete
         *     call fails (`communities` must stop treating the hostname as
         *     resolvable immediately) — the failure is logged with the
         *     `cloudflare_id` for later manual cleanup of the orphaned Custom
         *     Hostname (design.md Risks: "Cloudflare falla el DELETE pero borramos
         *          * local"). `CloudflareCustomHostnameClient::delete()` already logs the
         *     raw Cloudflare error before throwing; this method logs the follow-up
         *     decision to proceed with the local deletion anyway.
         *
         *     Since Increment 9 (design.md Addendum 5 D35), the Worker Route created
         *     in `store()` is also torn down here, best-effort and INDEPENDENTLY from
         *     the Custom Hostname delete (each in its own try/catch — one failing
         *     never prevents attempting the other). Guarded by `cloudflare_route_id
         *     !== null` for any row without one (e.g. a theoretical pre-Increment-9
         *     row). The local row is hard-deleted UNCONDITIONALLY, whether or not
         *     either Cloudflare call succeeded — orphaned Cloudflare resource ids are
         *     logged for later manual cleanup.
         */
        delete: operations["customDomain.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar números
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         */
        get: operations["device.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el perfil de WhatsApp de un número
         * @description **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["device.me"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/check-phone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Verificar si un teléfono tiene WhatsApp
         * @description **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["device.checkPhone"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un número
         * @description **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["device.show"];
        /**
         * Actualizar un número
         * @description **Escritura** · requiere el permiso `accounts:write`.
         */
        put: operations["device.update"];
        post?: never;
        /**
         * Eliminar un número
         * @description **Escritura** · requiere el permiso `accounts:operate`.
         *
         *     > ⚠️ **Operación irreversible.** No hay papelera ni deshacer: resetear o limpiar un número mata su sesión de WhatsApp (hay que volver a escanear el código), purgar la cola descarta los mensajes encolados sin dejar registro de lo descartado, y los borrados eliminan el recurso.
         */
        delete: operations["device.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Reiniciar la sesión de un número
         * @description **Escritura** · requiere el permiso `accounts:operate`.
         *
         *     > ⚠️ **Operación irreversible.** No hay papelera ni deshacer: resetear o limpiar un número mata su sesión de WhatsApp (hay que volver a escanear el código), purgar la cola descarta los mensajes encolados sin dejar registro de lo descartado, y los borrados eliminan el recurso.
         */
        put: operations["device.reset"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/update-webhook-received": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Configurar el webhook de mensajes recibidos
         * @description **Escritura** · requiere el permiso `accounts:write`.
         */
        put: operations["device.updateWebhookReceived"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/update-webhook-received-and-delivery": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Configurar el webhook de recibidos y entregas
         * @description **Escritura** · requiere el permiso `accounts:write`.
         */
        put: operations["device.updateWebhookReceivedAndDelivery"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/clean": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Limpiar un número
         * @description **Escritura** · requiere el permiso `accounts:operate`.
         *
         *     > ⚠️ **Operación irreversible.** No hay papelera ni deshacer: resetear o limpiar un número mata su sesión de WhatsApp (hay que volver a escanear el código), purgar la cola descarta los mensajes encolados sin dejar registro de lo descartado, y los borrados eliminan el recurso.
         */
        post: operations["device.clean"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/chats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los chats de un número
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `pageSize` · orden fijo: el que devuelve el proveedor · no acepta parámetros de orden.
         */
        get: operations["device.chats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/open-conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver qué teléfonos tienen conversación abierta
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Con API key** · Con una clave de API, `phones` admite como máximo 100 teléfonos por llamada. Más responde `422`.
         */
        get: operations["device.openConversations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/message-queue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver la cola de mensajes
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `pageSize` · orden fijo: el que devuelve el proveedor · no acepta parámetros de orden.
         */
        get: operations["device.messageQueue"];
        put?: never;
        post?: never;
        /**
         * Eliminar mensajes de la cola
         * @description **Escritura** · requiere el permiso `accounts:write`.
         */
        delete: operations["device.deleteMessageQueue"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/message-queue/count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Contar los mensajes en la cola
         * @description **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["device.getQueueCount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/message-queue/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Vaciar la cola de mensajes
         * @description **Escritura** · requiere el permiso `accounts:operate`.
         *
         *     > ⚠️ **Operación irreversible.** No hay papelera ni deshacer: resetear o limpiar un número mata su sesión de WhatsApp (hay que volver a escanear el código), purgar la cola descarta los mensajes encolados sin dejar registro de lo descartado, y los borrados eliminan el recurso.
         */
        delete: operations["device.clearQueue"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el estado de conexión
         * @description **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["device.status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/extension-token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pedir un token para la extensión de WhatsApp Web
         * @description Request a short-lived extension token for transferring a WhatsApp Web session
         *     to this device instance via the Z-API Conector Chrome extension
         *
         *     **Escritura** · requiere el permiso `accounts:write`.
         *
         *     Only available for ZApi and ZApiLite providers. Returns a one-time code with
         *     an expiry timestamp. The frontend uses this code to authenticate the extension
         *     without ever receiving the raw instance credentials.
         */
        post: operations["device.extensionToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/connection-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el historial de conexión
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: created_at descendente · no acepta parámetros de orden.
         */
        get: operations["deviceConnectionEvent.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/disconnect-survey": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver la encuesta de desconexión
         * @description **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["deviceDisconnectSurvey.show"];
        put?: never;
        /**
         * Responder la encuesta de desconexión
         * @description **Escritura** · requiere el permiso `accounts:write`.
         */
        post: operations["deviceDisconnectSurvey.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los registros de todos los números
         * @description List `device_logs` rows across the account within a bounded window,
         *     newest-first, keyset-paginated. Returns a `summary` only on the first
         *     page (no `cursor`)
         *
         *     **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `limit` · orden fijo: más reciente primero · no acepta parámetros de orden.
         */
        get: operations["deviceFleetLogs.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver la salud de un número
         * @description `GET /devices/{device}/health` — serves `currentSnapshot()`
         *     normalized through `DeviceHealthDetailResource`. NEVER calls Meta
         *
         *     **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["deviceHealth.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/health/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Actualizar la salud de un número
         * @description `POST /devices/{device}/health/refresh` — triggers
         *     `MetaHealthStatusService::refreshAndPersist()` (at most ONE live Meta
         *     call, subject to D7's 60s cooldown and per-device `Cache::lock`) and
         *     returns the SAME shape as `show()`, plus `refresh_outcome`
         *
         *     **Escritura** · requiere el permiso `accounts:write`.
         *
         *     `refresh_outcome` (security-auditor finding — Increment 4 plan
         *     review, "the endpoint must tell the truth about what happened"):
         *     `refreshAndPersist()` can return the pre-existing snapshot for THREE
         *     different reasons — it genuinely refreshed, it bounced off the 60s
         *     cooldown, or it couldn't acquire the per-device lock (another refresh
         *     — the scheduled command, another tab, another agent — is already in
         *     flight for this exact device) — and from the HTTP response alone
         *     those three are indistinguishable. A 200 with stale data and no
         *     signal after the user clicks "Actualizar ahora" is a silent lie.
         *
         *     Resolution: compare `last_fetched_at` BEFORE and AFTER the call.
         *     `refreshAndPersist()` ALWAYS advances `last_fetched_at` when it
         *     genuinely attempts Meta — success or failure alike (design.md D7:
         *     it's attempt metadata, not a health field) — and NEVER advances it on
         *     either bounce. So:
         *       - unchanged (or still null) → `'not_refreshed_yet'` — covers BOTH
         *         the cooldown bounce and the lock-contention bounce; the frontend
         *         doesn't need to tell them apart to render "esperá un momento",
         *         and collapsing them avoids inventing a distinction the service's
         *         own public contract (`refreshAndPersist(): DeviceHealthStatus`,
         *         Increment 1, already covered by 40+ tests) doesn't expose without
         *         a breaking change.
         *       - advanced → `'refreshed'` — a live call was actually dispatched,
         *         regardless of whether Meta answered with success or an error
         *         (that distinction is already visible via `health.state`/`stale`).
         */
        post: operations["deviceHealth.refresh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los registros de un número
         * @description List `device_logs` rows for the device within a bounded window,
         *     newest-first, keyset-paginated. Returns a `summary` only on the first
         *     page (no `cursor`)
         *
         *     **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `limit` · orden fijo: más reciente primero · no acepta parámetros de orden.
         */
        get: operations["deviceLogs.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/logs/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver la señal de salud de los registros
         * @description Return the device's health signal: the last 5 non-send requests plus a
         *     verdict (`healthy`/`review`/`attention`)
         *
         *     **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["deviceLogs.health"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/username": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el nombre de usuario
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     Fetch the current reserved username from Meta and return it along with the locally stored value.
         */
        get: operations["deviceUsername.show"];
        put?: never;
        /**
         * Configurar el nombre de usuario
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     Reserve a username via Meta API and persist it locally.
         */
        post: operations["deviceUsername.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/devices/{device}/username/suggestions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Sugerir nombres de usuario
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     Fetch username suggestions from Meta API.
         */
        get: operations["deviceUsername.suggestions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/endpoints/{id}/deliveries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar entregas de un webhook
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `per_page` · orden fijo: attempted_at descendente, después id descendente · no acepta parámetros de orden.
         */
        get: operations["webhookDelivery.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/endpoints": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar webhooks
         * @description **Lectura** · requiere el permiso `accounts:read`.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         */
        get: operations["webhookEndpoint.index"];
        put?: never;
        /**
         * Crear un webhook
         * @description **Escritura** · requiere el permiso `accounts:write`.
         */
        post: operations["webhookEndpoint.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/endpoints/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un webhook
         * @description **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["webhookEndpoint.show"];
        put?: never;
        post?: never;
        /**
         * Eliminar un webhook
         * @description Da de baja el endpoint. Las suscripciones y el historial de entregas caen
         *     con él por `ON DELETE CASCADE`
         *
         *     **Escritura** · requiere el permiso `accounts:write`.
         */
        delete: operations["webhookEndpoint.destroy"];
        options?: never;
        head?: never;
        /**
         * Actualizar un webhook
         * @description **Escritura** · requiere el permiso `accounts:write`.
         *
         *     El `SsrfGuard` corre TAMBIÉN acá y no sólo en el alta: si corriera sólo en
         *     el alta, editar sería la puerta de atrás para dejar persistida una URL que
         *     apunta a la red interna.
         */
        patch: operations["webhookEndpoint.update"];
        trace?: never;
    };
    "/api/v1/webhooks/endpoints/{id}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Elegir los eventos de un webhook
         * @description **Escritura** · requiere el permiso `accounts:write`.
         */
        put: operations["webhookEndpointEvent.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar tipos de evento
         * @description **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["webhookEventCatalog.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/whatsapp-costs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver los costos de WhatsApp
         * @description Returns the full `WhatsappCostSummaryResource` for the requested
         *     (or current, when omitted) calendar month — `?month=YYYY-MM`
         *
         *     **Lectura** · requiere el permiso `accounts:read`.
         */
        get: operations["whatsappCost.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/messages/{message}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un mensaje por id
         * @description Un mensaje por el `id` que te dio un envío o un webhook (`message_id` de `message.status_changed`). Aceptado no es entregado: `status` pasa de `queued` a `sent`, `delivered`, `read` o `failed`.
         */
        get: operations["pendingMessage.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar las suscripciones de webhook
         * @description Todas las suscripciones de la cuenta (como máximo 50), también las que crearon otras integraciones. Solo el titular de la cuenta.
         */
        get: operations["pendingWebhookSubscription.index"];
        put?: never;
        /**
         * Crear una suscripción de webhook
         * @description Devuelve el `secret` una sola vez. Tope: 50 suscripciones por cuenta (la siguiente responde 422).
         */
        post: operations["pendingWebhookSubscription.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver una suscripción de webhook
         * @description No trae el secreto. Si lo perdiste, rotalo.
         */
        get: operations["pendingWebhookSubscription.show"];
        /**
         * Cambiar una suscripción de webhook
         * @description Reemplaza `url`, `events`, `description` y `filters`; `status` es opcional (`active` o `paused`). El secreto no cambia.
         */
        put: operations["pendingWebhookSubscription.update"];
        post?: never;
        /**
         * Eliminar una suscripción de webhook
         * @description Borra la suscripción con su historial de entregas.
         */
        delete: operations["pendingWebhookSubscription.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/{id}/rotate-secret": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generar un secreto nuevo
         * @description Un secreto nuevo, que se muestra una sola vez; el anterior deja de valer.
         *
         *     **No está abierta a claves de API:** con una clave responde `403 route_not_available`. Rotá el secreto desde el panel.
         */
        post: operations["pendingWebhookSubscription.rotateSecret"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/{id}/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enviar ahora un evento de prueba
         * @description Una entrega firmada de `webhook.test`, sin reintentos. Queda en el historial.
         */
        post: operations["pendingWebhookSubscription.test"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/{id}/deliveries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver el historial de entregas
         * @description Un registro por intento, lo más reciente primero. Pagina con `page` y `per_page` (25 por defecto, 100 como máximo).
         */
        get: operations["pendingWebhookSubscription.deliveries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Listar formularios */
        get: operations["pendingForms.list"];
        put?: never;
        /** Crear un formulario desde una plantilla */
        post: operations["pendingForms.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Plantillas para empezar un formulario */
        get: operations["pendingForms.templates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Una versión de un formulario */
        get: operations["pendingForms.retrieve"];
        /** Guardar la definición de un borrador */
        put: operations["pendingForms.update"];
        post?: never;
        /** Borrar un borrador */
        delete: operations["pendingForms.delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/{id}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Abrir una versión nueva (borrador) de un formulario publicado */
        post: operations["pendingForms.createVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/{id}/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Subir el borrador a Meta sin publicarlo */
        post: operations["pendingForms.sync"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/{id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Publicar en Meta */
        post: operations["pendingForms.publish"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/{id}/numbers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Los números del formulario */
        get: operations["pendingForms.numbers"];
        put?: never;
        /** Publicarlo también en otro número */
        post: operations["pendingForms.addNumber"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/{id}/numbers/{deviceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Sacarlo de un número */
        delete: operations["pendingForms.removeNumber"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/{id}/numbers/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reintentar los números que fallaron */
        post: operations["pendingForms.retryNumbers"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/families/{familyId}/definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** La definición vigente de un formulario */
        get: operations["pendingForms.definition"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/families/{familyId}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Las versiones de un formulario */
        get: operations["pendingForms.versions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/families/{familyId}/responses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Las respuestas de un formulario */
        get: operations["pendingForms.responses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/families/{familyId}/responses/{runId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Una respuesta */
        get: operations["pendingForms.response"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/forms/families/{familyId}/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** El embudo de un formulario: enviados, abiertos, completados */
        get: operations["pendingForms.metrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/message/form": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enviar un formulario a un contacto
         * @description Manda un formulario publicado en el número. Es un envío: sigue las reglas de WhatsApp (ventana de 24 horas, ritmo, frenos contra spam) y responde el mensaje en cola. Errores propios: `404 form_not_found`, `422 form_not_published`, `422 form_not_on_number`, `422 number_not_eligible`, `422 recipient_unreachable`.
         */
        post: operations["pendingForms.send"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/actions/{action}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Una acción de grupo */
        get: operations["pendingGroups.action"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Agregar participantes
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Con un número oficial los invita (`invited`).
         */
        post: operations["pendingGroups.addParticipants"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/participants/remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sacar participantes
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         */
        post: operations["pendingGroups.removeParticipants"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/admins": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hacer admins
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Solo números QR. Cada teléfono tiene que ser del grupo.
         */
        post: operations["pendingGroups.promoteAdmins"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/admins/remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Quitar admins
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Solo números QR.
         */
        post: operations["pendingGroups.demoteAdmins"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/name": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Cambiar el nombre
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         */
        put: operations["pendingGroups.updateName"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/description": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Cambiar la descripción
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     `null` o vacía la borra (no con un número oficial).
         */
        put: operations["pendingGroups.updateDescription"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/photo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Cambiar la foto
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Solo números QR. `photo_url`: una URL `https` pública a un JPG o PNG.
         */
        put: operations["pendingGroups.updatePhoto"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Cambiar quién puede escribir
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Solo números QR.
         */
        put: operations["pendingGroups.updateSettings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/invite-link/renew": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Renovar el enlace de invitación
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     El enlace nuevo llega en `result.invite_link`.
         */
        post: operations["pendingGroups.renewInviteLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/invite-link/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * El enlace de invitación, leído en vivo
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Se guarda 30 segundos por grupo y número. Si WhatsApp falla: `502 provider_error`.
         */
        get: operations["pendingGroups.inviteLink"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/join-requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Las solicitudes de unión
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Solo grupos de números oficiales; hasta 100, en el orden de WhatsApp.
         */
        get: operations["pendingGroups.joinRequests"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/join-requests/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Aprobar solicitudes de unión
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Solo números oficiales, y solo si `capabilities.groups.join_requests` es `list_and_decide`.
         */
        post: operations["pendingGroups.approveJoinRequests"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/{group}/join-requests/reject": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Rechazar solicitudes de unión
         * @description Las acciones de grupo están **apagadas por defecto**: mientras no estén habilitadas, la ruta responde `403 route_not_available`. Lo que permite cada número está en `capabilities.groups` de `GET /api/v1/devices/{device}`; lo que no, responde `422 provider_unsupported`.
         *
         *     Solo números oficiales, y solo si `capabilities.groups.join_requests` es `list_and_decide`.
         */
        post: operations["pendingGroups.rejectJoinRequests"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export interface webhooks {
    "message.received": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * message.received
         * @description Un contacto le escribió a un número de WhatsApp de la cuenta.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000001",
                     *       "type": "message.received",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "message": {
                     *           "id": 1001,
                     *           "type": "text",
                     *           "text": "Hola, quiero más información",
                     *           "media": null
                     *         },
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Contacto de ejemplo",
                     *           "phone": "+5491100000000"
                     *         },
                     *         "receiver": {
                     *           "phone": "+5491100000001"
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            message?: {
                                /** @enum {string} */
                                type?: "text" | "image" | "video" | "document" | "sticker" | "contact" | "audio" | "note" | "action" | "invalid" | "interactive" | "location" | "voice_call" | "video_call" | "event" | "button" | "template" | "notification" | "option_list" | "template_button_reply" | "poll" | "whatsapp_form" | "call_permission_request" | "call_permission_reply";
                            };
                        };
                    };
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "flow.completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * flow.completed
         * @description Un contacto terminó un flujo de automatización.
         *
         *     Se envía una sola vez por cada ejecución de un flujo, cuando termina con éxito. No se envía si la ejecución se cortó, se canceló, quedó bloqueada o falló. `contact` es `null` si la ejecución no tiene un contacto asociado. Un flujo muy usado puede generar muchos eventos seguidos.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000003",
                     *       "type": "flow.completed",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "flow": {
                     *           "id": 3001,
                     *           "name": "Flujo de ejemplo"
                     *         },
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Contacto de ejemplo",
                     *           "phone": "+5491100000000"
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "broadcast.finished": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * broadcast.finished
         * @description Una campaña llegó a su estado final (enviada, fallida o con fallos parciales), con sus conteos.
         *
         *     `status` es `success`, `failed` o `partially_failed`. `reason` dice por qué terminó: `completed` (se enviaron todas las páginas), `cancelled` (se cerró una campaña pausada), `template_rejected` (Meta rechazó la plantilla, o su categoría cambió, mientras la campaña esperaba), `approval_expired` (la plantilla no se aprobó a tiempo), `mac_lockout` (la cuenta alcanzó su límite de contactos activos), `no_recipients` (la audiencia quedó vacía) o `error` (el envío no pudo despacharse). `totals` son los conteos del envío: `processed` (destinatarios procesados), `failed` y `skipped_unreachable` (destinatarios que el canal no puede alcanzar); valen 0 si la campaña terminó antes de enviar. Se emite una sola vez por campaña.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000011",
                     *       "type": "broadcast.finished",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "broadcast": {
                     *           "id": 6001,
                     *           "name": "Campaña de ejemplo"
                     *         },
                     *         "status": "partially_failed",
                     *         "reason": "completed",
                     *         "totals": {
                     *           "processed": 1200,
                     *           "failed": 30,
                     *           "skipped_unreachable": 12
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "contact.stage_changed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * contact.stage_changed
         * @description Un contacto cambió de etapa en un tablero.
         *
         *     Se envía un evento por cada contacto que cambia de etapa en un tablero por etapas. `kind` es entry (entra al tablero, `from_stage` es null), move (pasa de una etapa a otra), exit (sale del tablero, `to_stage` es null) o stage_deleted (se reubica porque su etapa se borró; el nombre de la etapa borrada es null). No se envía si el contacto se coloca en la etapa en la que ya estaba.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000008",
                     *       "type": "contact.stage_changed",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Contacto de ejemplo",
                     *           "phone": "+5491100000000"
                     *         },
                     *         "board": {
                     *           "id": 5001,
                     *           "name": "Embudo de ejemplo"
                     *         },
                     *         "kind": "move",
                     *         "from_stage": {
                     *           "id": 6001,
                     *           "name": "Nuevo",
                     *           "position": 0
                     *         },
                     *         "to_stage": {
                     *           "id": 6002,
                     *           "name": "En seguimiento",
                     *           "position": 1
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "conversation.closed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * conversation.closed
         * @description Una conversación pasó a cerrada.
         *
         *     Se envía cuando una conversación pasa de abierta a cerrada. No se envía si la conversación ya estaba cerrada ni cuando se reabre.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000004",
                     *       "type": "conversation.closed",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Contacto de ejemplo",
                     *           "phone": "+5491100000000"
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "conversation.assigned": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * conversation.assigned
         * @description Una conversación quedó asignada a una persona del equipo o a un agente de IA.
         *
         *     Se envía cuando una conversación queda asignada a una persona del equipo (`assignee.type` = `human`) o a un agente de IA (`assignee.type` = `ai`), por cualquier camino. `assignee` trae el tipo y el nombre, nunca un identificador. No se envía al desasignar, ni cuando se vuelve a enviar el mismo asignado.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000005",
                     *       "type": "conversation.assigned",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Contacto de ejemplo",
                     *           "phone": "+5491100000000"
                     *         },
                     *         "assignee": {
                     *           "type": "human",
                     *           "name": "Agente de ejemplo"
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "contact.tag_added": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * contact.tag_added
         * @description Un contacto recibió una etiqueta.
         *
         *     Se envía un evento por cada contacto y etiqueta agregados, también en operaciones en bloque; no se envía si el contacto ya tenía la etiqueta. `source` indica el origen: manual, flow, bulk, import, sync, walink o ai. En operaciones en bloque grandes el límite de volumen de la cuenta puede descartar parte de los eventos.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000006",
                     *       "type": "contact.tag_added",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Contacto de ejemplo",
                     *           "phone": "+5491100000000"
                     *         },
                     *         "tag": {
                     *           "id": 4001,
                     *           "name": "Etiqueta de ejemplo"
                     *         },
                     *         "source": "manual"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "broadcast.paused": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * broadcast.paused
         * @description Una campaña se pausó sola, por ejemplo porque bajó la calidad del número.
         *
         *     `reason` es `quality_degraded` (la calidad del número bajó respecto de la del inicio, o llegó a RED) o `quality_unreadable` (no se pudo leer la calidad en tres controles seguidos). `quality` y `quality_baseline` son la calidad de Meta leída en el control y la del inicio del envío (`GREEN`, `YELLOW`, `RED`), o `null` si no se pudo leer. Sólo las campañas con envío inteligente se pausan solas. Reanudar la campaña y que se pause otra vez emite otro evento.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000007",
                     *       "type": "broadcast.paused",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "broadcast": {
                     *           "id": 6001,
                     *           "name": "Campaña de ejemplo"
                     *         },
                     *         "reason": "quality_degraded",
                     *         "quality": "YELLOW",
                     *         "quality_baseline": "GREEN"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "contact.tag_removed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * contact.tag_removed
         * @description Un contacto perdió una etiqueta.
         *
         *     Se envía un evento por cada contacto y etiqueta quitados, también en operaciones en bloque; no se envía si el contacto no tenía la etiqueta. No se envía al borrar la etiqueta, al borrar o fusionar contactos ni al desvincular etiquetas de un tablero. `source` indica el origen: manual, flow o bulk. En operaciones en bloque grandes el límite de volumen de la cuenta puede descartar parte de los eventos.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000009",
                     *       "type": "contact.tag_removed",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Contacto de ejemplo",
                     *           "phone": "+5491100000000"
                     *         },
                     *         "tag": {
                     *           "id": 4001,
                     *           "name": "Etiqueta de ejemplo"
                     *         },
                     *         "source": "manual"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "contact.created": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * contact.created
         * @description Se creó un contacto nuevo en la cuenta.
         *
         *     Se envía un evento por cada contacto nuevo, sea cual sea el canal: un mensaje entrante, la creación manual, una importación o la API. No se envía cuando el contacto ya existía y sólo se actualiza, ni para los contactos que la plataforma crea para sus propias notificaciones. En importaciones grandes el límite de volumen de la cuenta puede descartar parte de los eventos.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000010",
                     *       "type": "contact.created",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Contacto de ejemplo",
                     *           "phone": "+5491100000000",
                     *           "email": "contacto@example.com"
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "template.status_changed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * template.status_changed
         * @description Una plantilla cambió de estado de aprobación en Meta.
         *
         *     `template` identifica la plantilla igual que `GET /templates` (`id`, `uid`, `name`, `category`). `previous_status` y `status` son los estados tal como los devuelve la API (por ejemplo `PENDING`, `APPROVED`, `REJECTED`, `PAUSED`); `previous_status` es `null` si la plantilla no tenía estado. `reason` trae la observación de rechazo (traducida como en la API y limitada a 500 caracteres) cuando el cambio es un rechazo informado al crear la plantilla, y es `null` en el resto. No se emite si Meta reenvía el estado que la plantilla ya tenía. Si una misma plantilla de Meta figura en varias cuentas, cada cuenta recibe su propio evento.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000012",
                     *       "type": "template.status_changed",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "template": {
                     *           "id": 7001,
                     *           "uid": "1234567890",
                     *           "name": "plantilla_ejemplo",
                     *           "category": "MARKETING"
                     *         },
                     *         "previous_status": "PENDING",
                     *         "status": "APPROVED",
                     *         "reason": null
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "flow.failed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * flow.failed
         * @description La ejecución de un flujo para un contacto terminó por un error.
         *
         *     Se envía una sola vez por cada ejecución de un flujo que termina por un error, no porque llegó al final. `reason` indica el motivo y toma uno de estos valores: `node_missing` (el paso a ejecutar ya no existe), `unknown_node_type` (el paso es de un tipo no reconocido), `missing_subflow` (el flujo que debía ejecutarse dentro de otro ya no existe), `malformed_node` (el paso tiene una configuración dañada), `loop_detected` (la ejecución dio vueltas sin esperar nada) y `execution_error` (un error inesperado detuvo la ejecución). No se envía si la ejecución se canceló, quedó bloqueada o se cortó porque se editó el flujo o se unieron contactos. `contact` es `null` si la ejecución no tiene un contacto asociado.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000013",
                     *       "type": "flow.failed",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "flow": {
                     *           "id": 3001,
                     *           "name": "Flujo de ejemplo"
                     *         },
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Contacto de ejemplo",
                     *           "phone": "+5491100000000"
                     *         },
                     *         "reason": "execution_error"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "webhook.test (conversations)": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * webhook.test
         * @description Evento de prueba enviado desde la ruta de prueba de una suscripción.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Firma de la entrega: `t=<timestamp>,v1=<firma>`. Se calcula sobre `t + "." + cuerpo crudo`. */
                    "X-Funnelchat-Signature": string;
                    /** @description Tipo de evento (igual que `type` en el cuerpo). */
                    "X-Funnelchat-Event": string;
                    /** @description Identificador de esta entrega; cambia en cada intento. */
                    "X-Funnelchat-Delivery": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": "evt_000000000000000000000002",
                     *       "type": "webhook.test",
                     *       "version": 1,
                     *       "occurred_at": "2026-10-01T12:00:00Z",
                     *       "data": {
                     *         "subscription": "00000000-0000-4000-8000-000000000001",
                     *         "sent_at": "2026-10-01T12:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: {
                /** @description Cualquier respuesta 2xx en 10 segundos o menos confirma la entrega. */
                "2XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group.created": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group.created
         * @description Se creó o se importó un grupo dentro de una campaña de la cuenta.
         */
        post: operations["webhook.group_created"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group_participant.joined": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group_participant.joined
         * @description Una persona entró a un grupo de una campaña.
         */
        post: operations["webhook.group_participant_joined"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group_participant.left": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group_participant.left
         * @description Una persona salió de un grupo de una campaña.
         */
        post: operations["webhook.group_participant_left"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "scheduled_message.finished": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * scheduled_message.finished
         * @description Un envío programado terminó, con su resultado agregado.
         */
        post: operations["webhook.scheduled_message_finished"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group.blocked": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group.blocked
         * @description Un grupo quedó inoperable: sin administrador conectado, con el link de invitación inválido o suspendido por WhatsApp.
         */
        post: operations["webhook.group_blocked"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group.recovered": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group.recovered
         * @description Un grupo que estaba bloqueado volvió a operar.
         */
        post: operations["webhook.group_recovered"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "scheduled_message.group_delivery_failed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * scheduled_message.group_delivery_failed
         * @description Un envío programado falló en un grupo concreto, con el motivo desagregado.
         */
        post: operations["webhook.scheduled_message_group_delivery_failed"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "scheduled_message.response_received": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * scheduled_message.response_received
         * @description Alguien respondió a un envío programado votando una encuesta o respondiendo a un evento.
         */
        post: operations["webhook.scheduled_message_response_received"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "campaign.status_changed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * campaign.status_changed
         * @description Una campaña se activó o se pausó.
         */
        post: operations["webhook.campaign_status_changed"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "pipeline.finished": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * pipeline.finished
         * @description Terminó un pipeline de operaciones sobre grupos, con su resultado agregado.
         */
        post: operations["webhook.pipeline_finished"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "poll.voted": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * poll.voted
         * @description Un participante votó en una encuesta enviada a un grupo, o cambió su voto.
         */
        post: operations["webhook.poll_voted"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group.invite_link_renewed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group.invite_link_renewed
         * @description El enlace de invitación de un grupo cambió por una renovación, automática al detectarse inválido o pedida por el usuario; en v0 no se publican los cambios que detecta la sincronización ni el enlace inicial al crear el grupo.
         */
        post: operations["webhook.group_invite_link_renewed"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group.invite_link_down": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group.invite_link_down
         * @description El enlace de invitación de un grupo quedó confirmado caído (WhatsApp respondió que no existe y la renovación no consiguió otro); no se publica por errores transitorios ni por grupos prohibidos o suspendidos, y se publica una sola vez por episodio de bloqueo.
         */
        post: operations["webhook.group_invite_link_down"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "webhook.test (communities)": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * webhook.test
         * @description Evento de prueba que se envía al pedir la prueba de una suscripción; no se puede suscribir a él.
         */
        post: operations["webhook.webhook_test"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "message.status_changed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * message.status_changed
         * @description Cambió el estado de entrega de un mensaje que enviaste con la API. Un aviso por transición, nunca uno que retroceda; `queued` no se avisa. Hay que pedirlo de forma explícita en `events`.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        data?: {
                            /** @description El `id` del mensaje en el historial del contacto. */
                            message_id: number;
                            contact_id: number;
                            /** @description El número de tu cuenta que envió el mensaje. */
                            device_id: number | null;
                            /** @enum {string} */
                            status: "sent" | "delivered" | "read" | "failed";
                            /** @enum {string|null} */
                            previous_status: "sent" | "delivered" | "read" | "failed" | null;
                            /** @description Solo cuando `status` es `failed`. */
                            error?: components["schemas"]["PendingMessageError"];
                            /** Format: date-time */
                            occurred_at: string;
                            /** @description La `client_reference` que mandaste en el envío, o `null`. */
                            client_reference: string | null;
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "device.connected": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * device.connected
         * @description Uno de los números de la cuenta quedó conectado: al escanear el código QR o al terminar el alta de un número de WhatsApp Cloud.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        data?: {
                            device: {
                                id: number;
                                name: string | null;
                                /** @description Solo dígitos, sin `+`. */
                                number: string | null;
                            };
                            /** Format: date-time */
                            connected_at: string;
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "device.disconnected": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * device.disconnected
         * @description Uno de los números de la cuenta se desconectó y dejó de poder enviar o recibir.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        data?: {
                            device: {
                                id: number;
                                name: string | null;
                                /** @description Solo dígitos, sin `+`. */
                                number: string | null;
                            };
                            /** Format: date-time */
                            disconnected_at: string;
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "billing.payment_failed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * billing.payment_failed
         * @description Un cobro de la suscripción no pudo procesarse (solo suscripciones de Stripe).
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "amount_cents": 2990,
                     *         "currency": "USD"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "billing.plan_blocked": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * billing.plan_blocked
         * @description El plan quedó bloqueado por un cobro no procesado. Planificado: todavía no se emite.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "billing.upcoming_charge": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * billing.upcoming_charge
         * @description Se acerca el próximo cobro de la suscripción (solo suscripciones de Stripe).
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "charge_date": "2026-11-05T00:00:00Z",
                     *         "amount_cents": 2990,
                     *         "currency": "USD"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "subscription.expiring": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * subscription.expiring
         * @description La suscripción está próxima a vencer. Planificado: todavía no se emite.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "subscription.trial_ending": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * subscription.trial_ending
         * @description El período de prueba está por terminar.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "trial_ends_at": "2026-10-04T00:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "subscription.reactivated": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * subscription.reactivated
         * @description Se revirtió la cancelación programada de la suscripción (solo suscripciones de Stripe).
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "renews_at": "2026-11-05T00:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "subscription.cancellation_confirmed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * subscription.cancellation_confirmed
         * @description Quedó confirmada la cancelación de la suscripción (solo suscripciones de Stripe).
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "access_until": "2026-11-05T00:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "subscription.dormant_ending": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * subscription.dormant_ending
         * @description El período de cuenta en reposo está por terminar.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "charge_date": "2026-10-08T00:00:00Z",
                     *         "amount_cents": 1990,
                     *         "currency": "USD"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "ai_quota.low_balance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * ai_quota.low_balance
         * @description La cuota de mensajes de IA está por agotarse. Planificado: todavía no se emite.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "ai_quota.topup_succeeded": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * ai_quota.topup_succeeded
         * @description Una recarga de cuota de IA se acreditó. Planificado: todavía no se emite.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "ai_quota.topup_failed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * ai_quota.topup_failed
         * @description Una recarga de cuota de IA no pudo procesarse. Planificado: todavía no se emite.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "mac.usage_80": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * mac.usage_80
         * @description La cuenta alcanzó el 80 % de sus contactos activos mensuales del ciclo.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "used": 8000,
                     *         "limit": 10000,
                     *         "percentage": 80,
                     *         "cycle_started_at": "2026-10-01T00:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "mac.usage_100": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * mac.usage_100
         * @description La cuenta agotó sus contactos activos mensuales del ciclo; se abre una gracia de 24 horas.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "used": 10000,
                     *         "limit": 10000,
                     *         "percentage": 100,
                     *         "cycle_started_at": "2026-10-01T00:00:00Z",
                     *         "grace_expires_at": "2026-10-02T12:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "mac.expiring": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * mac.expiring
         * @description Hay contactos activos mensuales que vencen en los próximos 7 días.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "contacts_expiring": 1200,
                     *         "expires_at": "2026-10-08T03:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "account.blocked": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * account.blocked
         * @description La cuenta quedó bloqueada por consumo: terminó la gracia de 24 horas tras agotar los contactos activos mensuales.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "reason": "mac_grace_expired",
                     *         "grace_started_at": "2026-10-01T12:00:00Z",
                     *         "grace_expired_at": "2026-10-02T12:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group_action.failed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group_action.failed
         * @description Falló una acción sobre un grupo: una de una campaña (`action.uuid` es `null`) o una pedida por la API (`action.uuid` es el `action_id`). Las acciones con teléfonos no lo emiten: terminan con `group_action.completed` y el resultado de cada uno.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "campaign": null,
                     *         "pipeline": null,
                     *         "group": {
                     *           "uid": "120363000000000001@g.us",
                     *           "name": "Grupo de ejemplo"
                     *         },
                     *         "action": {
                     *           "uuid": "9b2f0a8e-1c3d-4e5f-8a7b-6c5d4e3f2a10",
                     *           "type": "update_name"
                     *         },
                     *         "reason": "device_not_group_admin"
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            campaign: {
                                uuid: string;
                                name: string | null;
                            } | null;
                            pipeline: {
                                uuid: string;
                                name: string | null;
                            } | null;
                            group: {
                                uid: string;
                                name: string | null;
                            } | null;
                            action: {
                                /** @description El `action_id` de una acción pedida por la API; `null` en las de una campaña. */
                                uuid: string | null;
                                type: string;
                            };
                            reason: string;
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "daily_report.generated": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * daily_report.generated
         * @description Se generó el reporte diario de la cuenta (clics, ingresos y salidas).
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "period": {
                     *           "date": "2026-10-01",
                     *           "timezone": "America/Argentina/Buenos_Aires"
                     *         },
                     *         "clicks": 120,
                     *         "joins": 80,
                     *         "leaves": 10,
                     *         "conversion_rate": 0.67
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "campaign.no_groups_available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * campaign.no_groups_available
         * @description Una campaña no tiene grupos a los que dirigir a las personas que entran por su link.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "campaign": {
                     *           "uuid": "xK9mQz",
                     *           "name": "Campaña de ejemplo"
                     *         },
                     *         "reason": "none_selectable"
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group.full": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group.full
         * @description Un grupo pasó de no estar lleno a estarlo.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "group": {
                     *           "uid": "120363000000000000@g.us",
                     *           "name": "Grupo de ejemplo",
                     *           "type": "tipo_de_ejemplo"
                     *         },
                     *         "campaign": {
                     *           "uuid": "xK9mQz",
                     *           "name": "Campaña de ejemplo"
                     *         },
                     *         "trigger": "participants_limit",
                     *         "participants": 1024
                     *       }
                     *     }
                     */
                    "application/json": Record<string, unknown>;
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "whatsapp_form.completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * whatsapp_form.completed
         * @description Un contacto completó un formulario que le enviaste.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "form": {
                     *           "id": 12,
                     *           "name": "Encuesta de ejemplo",
                     *           "version_id": 34
                     *         },
                     *         "message_id": 1002,
                     *         "contact_id": 2001,
                     *         "device_id": 3,
                     *         "answers": [
                     *           {
                     *             "key": "nombre",
                     *             "label": "Tu nombre",
                     *             "value": "Contacto de ejemplo"
                     *           }
                     *         ],
                     *         "occurred_at": "2026-10-22T12:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            form: {
                                /** @description El formulario (`family_id`). */
                                id: number;
                                name: string;
                                version_id: number;
                            };
                            message_id: number | null;
                            contact_id: number | null;
                            device_id: number | null;
                            answers: {
                                key: string;
                                label: string | null;
                                value: boolean | number | string | string[] | null;
                            }[];
                            /** Format: date-time */
                            occurred_at: string;
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group_action.completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group_action.completed
         * @description Terminó una acción de grupo pedida por la API. `action.uuid` es el `action_id` que te devolvió.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "action": {
                     *           "uuid": "9b2f0a8e-1c3d-4e5f-8a7b-6c5d4e3f2a10",
                     *           "type": "add_participants"
                     *         },
                     *         "group": {
                     *           "uid": "120363000000000001@g.us",
                     *           "name": "Grupo de ejemplo"
                     *         },
                     *         "campaign": null,
                     *         "result": {
                     *           "participants": [
                     *             {
                     *               "identity": "5491100000000",
                     *               "identity_type": "phone",
                     *               "status": "added",
                     *               "reason": null
                     *             }
                     *           ]
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            action: {
                                uuid: string;
                                type: string;
                            };
                            group: {
                                uid: string;
                                name: string | null;
                            } | null;
                            campaign: {
                                uuid?: string;
                                name?: string;
                            } | null;
                            /** @description Con teléfonos: `participants`; al crear o renovar el enlace: `invite_link`; al enviar: `message.uid`; el resto, vacío. */
                            result: {
                                participants?: components["schemas"]["PendingGroupParticipantResult"][];
                                invite_link?: string;
                                message?: {
                                    uid?: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group.message_received": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group.message_received
         * @description Alguien escribió en un grupo de uno de tus números. No se emite para los mensajes de tus propios números.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "group": {
                     *           "uid": "120363000000000001@g.us",
                     *           "name": "Grupo de ejemplo"
                     *         },
                     *         "message": {
                     *           "uid": "3EB0C0FFEE0000000001",
                     *           "type": "text",
                     *           "text": "Hola a todos",
                     *           "caption": null,
                     *           "media_url": null,
                     *           "mime_type": null,
                     *           "file_name": null,
                     *           "quoted_uid": null
                     *         },
                     *         "participant": {
                     *           "identity": "5491100000000",
                     *           "identity_type": "phone",
                     *           "name": null
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            group: {
                                uid: string;
                                name: string | null;
                            };
                            message: {
                                uid: string;
                                type: string;
                                /** @description Solo con `type: text`. */
                                text: string | null;
                                caption: string | null;
                                media_url: string | null;
                                mime_type: string | null;
                                file_name: string | null;
                                quoted_uid: string | null;
                            };
                            participant: {
                                identity: string;
                                /** @enum {string} */
                                identity_type: "phone" | "whatsapp_user";
                                name: string | null;
                            };
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group.reaction_added": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group.reaction_added
         * @description Alguien reaccionó a un mensaje de un grupo.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "group": {
                     *           "uid": "120363000000000001@g.us",
                     *           "name": "Grupo de ejemplo"
                     *         },
                     *         "message": {
                     *           "uid": "3EB0C0FFEE0000000001"
                     *         },
                     *         "participant": {
                     *           "identity": "5491100000000",
                     *           "identity_type": "phone",
                     *           "name": null
                     *         },
                     *         "reaction": "👍"
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            group: {
                                uid: string;
                                name: string | null;
                            };
                            message: {
                                uid: string;
                            };
                            participant: {
                                identity: string;
                                /** @enum {string} */
                                identity_type: "phone" | "whatsapp_user";
                                name: string | null;
                            };
                            reaction: string;
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group_join_request.created": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group_join_request.created
         * @description Alguien pidió unirse a un grupo que requiere aprobación.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "group": {
                     *           "uid": "120363000000000001@g.us",
                     *           "name": "Grupo de ejemplo"
                     *         },
                     *         "participant": {
                     *           "identity": "5491100000000",
                     *           "identity_type": "phone",
                     *           "name": null
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            group: {
                                uid: string;
                                name: string | null;
                            };
                            participant: {
                                identity: string;
                                /** @enum {string} */
                                identity_type: "phone" | "whatsapp_user";
                                name: string | null;
                            };
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "group_join_request.revoked": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * group_join_request.revoked
         * @description Alguien retiró su pedido para unirse a un grupo.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "group": {
                     *           "uid": "120363000000000001@g.us",
                     *           "name": "Grupo de ejemplo"
                     *         },
                     *         "participant": {
                     *           "identity": "5491100000000",
                     *           "identity_type": "phone",
                     *           "name": null
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            group: {
                                uid: string;
                                name: string | null;
                            };
                            participant: {
                                identity: string;
                                /** @enum {string} */
                                identity_type: "phone" | "whatsapp_user";
                                name: string | null;
                            };
                        };
                    };
                };
            };
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export interface components {
    schemas: {
        /** UserResource */
        AccountsUserResource: {
            id: string;
            name: string;
            email: string;
            admin: string | 0;
            role: string;
            token: string | "";
            first_login_at: string;
            last_login_at: string;
            first_login_form: boolean | null;
            without_business_type: boolean;
            image: string;
            phone: string;
            timezone: string;
            locale: string | "es";
            owner_id: string;
            /**
             * @description Owner (principal) account exposure — backoffice-legacy-parity Increment 4.
             *     Guard: only populated when the `owner` relation is explicitly eager-loaded
             *     (UserController::index/getUserDetails via `->with('owner:id,name,email')`).
             *     Consumers that don't eager-load it (e.g. /me, front/account) always get
             *     `null` here — the resource NEVER lazy-loads the relation itself, so no
             *     N+1 is possible regardless of caller.
             */
            owner: {
                id: string;
                name: string;
                email: string;
            } | null;
            plan: unknown[] | "";
            effective_business_numbers_limit?: number | null;
            effective_agents_limit?: number | null;
            advisor_scope: string;
            show_advisor_name: string;
            contacts: string | number;
            groups: string | number;
            devices: string;
            additional_devices: string;
            agents: string;
            payment_till: string;
            last_payment_at: string | "";
            feature_versions?: string;
            /**
             * @description Progreso de uso del panel. Va con `whenLoaded` para que la lista del
             *     backoffice no dispare una consulta por fila: sin el eager load la
             *     clave no aparece, en vez de aparecer con un cero inventado.
             */
            panel_usage?: {
                percentage: string;
                ceiling: string;
                used_count: string;
                reachable_count: string;
                total_count: string;
                tier: string;
                is_agent: string;
                blocks: string;
                computed_at: string | null;
            } | null;
            created_at: string | "";
            updated_at: string | "";
            /**
             * @description Dormant state — billing-dormant-account.
             *     Resolution order:
             *     1. subscriptions relation is loaded (AuthController, /me route) → filter in PHP.
             *     2. dormant_row side-channel set by UserController::getUserDetails() → back-compat.
             *     3. Neither loaded → defaults to false / null.
             */
            is_dormant: boolean;
            dormant_expires_at: string | null;
            /**
             * @description Dormant provider + eligibility — dormant-hotmart-support D6.
             *     dormant_provider is always resolvable (plain column read); it mirrors
             *     the same binary criterion BillingDormantService uses to branch dormant.
             * @enum {string}
             */
            dormant_provider: "hotmart" | "stripe";
            can_enter_dormant?: boolean | null;
            /**
             * @description MAC enforcement fields — mac-rollover-and-admin Inc 5.
             *     mac_enforcement_enabled: cast to bool so null (pre-migration) renders as false.
             *     available_mac_buckets_sum: single extra query; acceptable on /me (single user).
             */
            mac_enforcement_enabled: boolean;
            available_mac_buckets_sum: number;
            password_set?: boolean;
            password_set_at?: string | null;
        };
        /** ActionGroupResource */
        ActionGroupResource: {
            id: string;
            name: string;
            status: string;
            info: unknown;
            action_name: string;
            action_label: string | null;
            executed_at: string | null;
            executed_by: string | null;
            groups: string | string[];
        } | {
            id: string;
            name: string | null;
            status: string;
            info: unknown;
            action_name: string | null;
            action_label: string | null;
            executed_at: string | null;
            executed_by: string | null;
            groups: [
                {
                    id: string;
                    name: string;
                }
            ] | [
                {
                    id: null;
                    name: string | null;
                }
            ] | string[];
        };
        /** ActionResource */
        ActionResource: {
            id: string;
            action: string;
            old_value: string;
            new_value: string;
            field: string;
            status: components["schemas"]["ActionStatusEnum"];
            tries: string;
            process_at: string | "";
            created_at: string | "";
            completed_at: string | null;
            stats: {
                total_groups: string;
                pending: string;
                running: string;
                completed: string;
                failed: string;
                skipped: string;
            };
            groups: string;
            subActions: components["schemas"]["ActionResource"][];
        };
        /**
         * ActionStatusEnum
         * @description | |
         *     |---|
         *     | `0` <br/>  |
         *     | `1` <br/>  |
         *     | `2` <br/>  |
         *     | `3` <br/>  |
         *     | `4` <br/>  |
         *     | `5` <br/>  |
         *     | `6` <br/>  |
         *     | `7` <br/>  |
         *     | `8` <br/>  |
         *     | `9` <br/>  |
         *     | `10` <br/>  |
         *     | `11` <br/> Intermediate state for new-flow add-admin actions: the provider ACKed the promotion request but real confirmation (promote webhook or group sync) has not yet arrived. Intentionally excluded from failedStatuses() so the pipeline retry endpoint does NOT reset it to PENDING. This state is set explicitly in ActionGroupProcessor — never derived from a provider string via fromString(). |
         *     | `12` <br/> Terminal state for an operation-plan action that is deliberately not executed: creator protection, would-leave-group-without-admin guard, confirmation timeout, or cascade from an upstream skipped/failed prerequisite in the same group's chain. Reason lives in action_group.info['skip_reason']. Deliberately excluded from failedStatuses() (a retry must NOT reset a SKIPPED row back to PENDING — the skip is definitive) and from isSuccessful() (a SKIPPED row does not represent a completed operation, so it must not be treated as "the chain advanced" for purposes that rely on isSuccessful()). Whether SKIPPED counts as "chain can continue" is a cascade decision made explicitly by PlanChainCascadeService, not by this enum. |
         * @enum {integer}
         */
        ActionStatusEnum: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
        /**
         * AlertAction
         * @enum {string}
         */
        AlertAction: "disconnected" | "usage_80" | "expiring" | "usage_100" | "upcoming_charge" | "payment_failed" | "plan_blocked" | "reactivated" | "trial_ending" | "cancellation_confirmed" | "dormant_ending" | "blocked" | "no_groups_available" | "daily_report" | "action_failed" | "message_failed" | "full" | "invalid_link" | "low_balance" | "topup_succeeded" | "topup_failed";
        /** AlertCampaignResource */
        AlertCampaignResource: {
            id: string;
            name: string;
            is_active: boolean;
            groups_count: number;
            type: number | null;
        };
        /** AlertCatalogResource */
        AlertCatalogResource: {
            module: string;
            action: string;
            category: string;
            is_critical: string;
            label: string;
            tooltip: string;
        };
        /** AlertDailyReportResource */
        AlertDailyReportResource: {
            enabled: boolean;
            send_time: string | null;
            all_campaigns: boolean;
            campaign_ids: string | string[];
        };
        /** AlertDestinationResource */
        AlertDestinationResource: {
            id: number;
            type: string;
            destination: string;
            name: string | null;
            verified: boolean;
            has_secret: string;
            created_at: string | null;
            settings?: components["schemas"]["AlertSettingResource"][];
        };
        /**
         * AlertDestinationType
         * @enum {string}
         */
        AlertDestinationType: "phone" | "webhook";
        /**
         * AlertModule
         * @enum {string}
         */
        AlertModule: "device" | "mac" | "billing" | "subscription" | "account" | "campaign" | "group" | "ai_quota";
        /** AlertQuietHourResource */
        AlertQuietHourResource: {
            enabled: boolean;
            start_time: string | null;
            end_time: string | null;
        };
        /** AlertSettingResource */
        AlertSettingResource: {
            module: string;
            action: string;
            enabled: boolean;
        };
        /** App.Modules.ScheduledMessages.Resources.MessageTemplateResource */
        "App.Modules.ScheduledMessages.Resources.MessageTemplateResource": {
            id: string;
            type: string;
            value: string;
            mentioned: boolean;
            metrics: string;
            reactions: string;
            votes: string;
            /**
             * @description openspec/changes/surface-event-rsvps-in-campaign-metrics, design D2:
             *     event RSVP counts grouped by response value, deduped by the
             *     responder's coalesced identity (phone, falling back to lid).
             *     Values with zero responders never appear (no group produced).
             *     NOTE: this class is a separate JsonResource from
             *     App\Modules\GroupManagement\Resources\MessageTemplateResource
             *     (same shape, different namespace) — this is the one actually
             *     composed by ScheduledMessageController::show via
             *     ScheduledMessages\Resources\ScheduledMessageResource, so the
             *     field is added here too to reach the campaign detail read path.
             */
            event_responses: string;
            shipping_order: string;
            variations: components["schemas"]["MessageTemplateVariationResource"][];
        };
        /** App.Modules.ScheduledMessages.Resources.ScheduledMessageResource */
        "App.Modules.ScheduledMessages.Resources.ScheduledMessageResource": {
            id: string;
            name: string | "";
            send_at: string | null;
            status: string;
            is_draft: string | boolean;
            type: string;
            folder: {
                id: string;
                name: string;
            } | null;
            audience: string | 0;
            total_readed: unknown;
            total_played: unknown;
            link_clicks: number;
            /**
             * @description track-scheduled-message-link-clicks D4/D7: read back by the
             *     frontend's edit/clone hydration (`useEditGroupMessageForm`).
             */
            whalink_custom_domain: string;
            shipping_speed: string;
            campaign_ids: string;
            group_ids: string | null;
            excluded_group_ids: string | string[];
            static_audience: string;
            campaigns: string;
            groups: string;
            total_groups: string;
            messages: components["schemas"]["App.Modules.ScheduledMessages.Resources.MessageTemplateResource"][];
            total_left_after_send: string;
            can_be_edited: string;
            recurrence: {
                enabled: boolean;
                frequency: string;
                interval: string;
                week_days: string;
                end_type: string;
                end_date: string;
                occurrences: string;
                current_occurrence: string;
                only_new_groups: string;
                only_full_groups: string;
            } | {
                enabled: boolean;
            };
        };
        /** AvailableGroupResource */
        AvailableGroupResource: {
            uid: string | "";
            name: string | "";
            description: string | "";
            status: string | "available";
            campaign_id: string | null;
        };
        /** BroadcastContactResource */
        BroadcastContactResource: {
            id: string;
            name: string;
            phone: string;
            whatsapp_id: string;
            email: string;
            image: string;
        };
        /** BroadcastCostResource */
        BroadcastCostResource: {
            broadcast_id: string;
            /** @constant */
            currency: "USD";
            is_partial: boolean;
            estimate: {
                category: string | null;
                currency: string;
                contacts: number;
                unpriced_contacts: number;
                total: number;
                per_market: {
                    market: string;
                    contacts: number;
                    rate: number | null;
                    cost: number;
                }[];
                rates_updated_at: string | null;
                computed_at: string | null;
            } | null;
            computed: {
                total: number;
                sent: number;
                billed: number;
                free: number;
                pending_price: number;
                no_data: number;
                category: null | string | number | Record<string, unknown>;
                per_market: {
                    market: string;
                    contacts: number;
                    rate: number | null;
                    cost: number;
                }[];
            };
            rates_updated_at: string | null;
        };
        /** BroadcastCostTiersResource */
        BroadcastCostTiersResource: {
            tiers: string | string[];
            rates_updated_at: string | null;
        };
        /** BroadcastFolderResource */
        BroadcastFolderResource: {
            id: number;
            name: string;
            broadcasts_count: string | 0;
        };
        /** BroadcastMessageResource */
        BroadcastMessageResource: {
            contact_id: string;
            contact_name: string | "";
            contact_phone: string | "";
            contact_image: string | "";
            message_status: string | null;
            message_info: {
                message: string | unknown;
                error_code: string | unknown;
                error: string | unknown;
                error_category: (string | null) | unknown;
            } & {
                [key: string]: unknown;
            };
            skip_reason: string | null;
            skipped_at: string | null;
            recipient_state: string;
            sent_at: string | null;
        };
        /** BroadcastResource */
        BroadcastResource: {
            id: number;
            name: string;
            device_id: number | null;
            template_id: number | "";
            template: string | null;
            folder: {
                id: number;
                name: string;
            } | null;
            value: unknown[] | null;
            template_button_flows: unknown[] | null;
            included_tags: components["schemas"]["TagResource"][];
            excluded_tags: components["schemas"]["TagResource"][];
            some_tags: components["schemas"]["TagResource"][];
            countries: unknown[] | null;
            kanban_setting_id: number | null;
            kanban_stage_ids: unknown[] | null;
            only_stagnant: boolean;
            lead_score_categories: unknown[] | null;
            lead_score_min: number | null;
            lead_score_max: number | null;
            date_from: string;
            date_to: string;
            send_at: string;
            contacts_count: string | number | null;
            delivered_messages_count: null;
            readed_messages_count: null;
            created_at: string;
            updated_at: string;
            status: components["schemas"]["BroadcastStatusEnum"];
            shipping_speed: components["schemas"]["BroadcastShippingSpeedEnum"];
            risk_acceptance: {
                accepted_by_name: string | null;
                accepted_at: string;
                audience_count: number | null;
                provider: string | null;
                risk_codes: string | string[];
            } | null;
            missing_data_audit: {
                audience_count: number;
                affected_count: number;
                items: string | string[];
                unknown_custom_fields: string | string[];
            } | null;
            smart_send: boolean;
            smart_send_state: {
                batch_size: string;
                pages_per_batch: string;
                current_batch: string;
                total_batches: string;
                quality: string;
                quality_baseline: string;
                checked_at: string;
                resume_page: string;
                page_size: string;
                total_pages: string;
                paused_at: string;
                pause_reason: string;
                quality_read_failures: string;
                cancelled_at: string;
            } | null;
            failure_reason: {
                reason: string | null;
            } | null;
            send_mode: components["schemas"]["BroadcastSendModeEnum"];
            protect_template_category: boolean;
        };
        /**
         * BroadcastSendModeEnum
         * @enum {string}
         */
        BroadcastSendModeEnum: "now" | "schedule" | "after_approval";
        /**
         * BroadcastShippingSpeedEnum
         * @enum {integer}
         */
        BroadcastShippingSpeedEnum: 0 | 1 | 2;
        /**
         * BroadcastStatusEnum
         * @enum {integer}
         */
        BroadcastStatusEnum: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        /** BroadcastsResource */
        BroadcastsResource: {
            id: string;
            name: string;
            device_id: string;
            template_id: string | "";
            folder_id: string;
            value: string;
            date_from: string | "";
            date_to: string | "";
            send_at: string | "";
            contacts_count: string;
            created_at: string;
            updated_at: string | "";
            status: string;
            shipping_speed: string;
            delivered_messages_count: string | null;
            readed_messages_count: string | null;
            replied_messages_count: string | null;
            failure_reason: {
                reason: string | null;
            } | null;
            send_mode: string;
            protect_template_category: boolean;
        };
        /** BulkMoveStageRequest */
        BulkMoveStageRequest: {
            contact_ids: number[];
            stage_id: number;
        };
        /** BulkRemoveStageRequest */
        BulkRemoveStageRequest: {
            contact_ids: number[];
        };
        /** CampaignConditionalResource */
        CampaignConditionalResource: {
            id: string;
            type: string;
            conditions: string;
            action_type: string;
            redirect_url: string;
            redirect_group_id: string;
            redirect_group_name?: string | null;
            is_group_exclusive: string;
            is_active: string;
            order: string;
            created_at: string;
            updated_at: string;
        };
        /** CampaignParticipantResource */
        CampaignParticipantResource: {
            id: string;
            phone: string;
            name: string;
            lid: string;
            group_id: string;
            group_name?: string | null;
            joined_at: string | null;
            left_at: string | null;
            status: string;
            source: string;
        };
        /** CampaignResource */
        CampaignResource: {
            id: string;
            uuid: string;
            name: string;
            slug: string;
            photo: string | "";
            description: string | "";
            pixel: string;
            admins: string;
            group_admins: string;
            disconnected_groups: string;
            connection_error_groups: string;
            deviceId: string;
            userId: string;
            type: string;
            groups: string;
            is_active: string;
            redirect_url: string;
            traffic_distribution_type: string | null;
            fill_groups_enabled: string;
            group_numbering_position: string | null;
            anti_bot_verification_enabled: string;
            custom_domain: string;
            captcha_enabled: string;
            virtual_queue_enabled: boolean;
            virtual_queue_rate_per_minute: number;
            group_name_variations: string;
            moderation?: {
                type: string;
                insults_and_profanity: string;
                negative_comments: string;
                repetitive_spam: string;
                external_links: string;
                promotions_and_sales: string;
                off_topic: string;
            };
            members_can_send_messages: string;
            clicks_limit: string;
            participants_limit: string;
            backup_groups_count: string | 0;
            admins_per_group: string;
            input_tag: string;
            output_tag: string;
            send_always_same_group: string;
            total_participants: string;
            total_clicks: string;
            total_in: string;
            total_out: string;
            /**
             * @description Additive fields backed by the maintained conversion counters (SUM over
             *     groups.total_joins/total_leaves), populated by the group sync (Inc.1) and
             *     the amortized `groups:backfill-conversion-counters` command (Inc.2) — no
             *     longer backfilled on read. These coexist with the calculated `total_in`/
             *     `total_out` above during the rollout; a later, separate change will drop
             *     the calculated fields once the counters are fully populated. `(int)` casts
             *     the SUM's possible NULL (all-NULL groups) to 0 for a consistent `number` type.
             *     Scoped by groups.user_id = campaign.user_id — same defensive scoping already
             *     applied to `groups`/`total_clicks` in CampaignsResource (listing).
             */
            total_in_counter: number;
            total_out_counter: number;
            auto_create_groups: boolean;
            group_creation_suspended: string | boolean;
            suspended_creator_phones: string | string[];
            group_creation_has_available_creator: string | boolean;
            /**
             * @description `api-group-campaigns` change, design D8: ONLY for the Grupo API
             *     type — spec `api-group-campaign-policy` § "Campaña de otro tipo
             *      no tiene política API" ("la respuesta no incluye política de
             *      grupos API, y el consumidor tolera su ausencia"). `$this->when()`
             *     omits the key entirely for the other three types, rather than
             *     emitting it as `null`.
             */
            api_policy?: {
                [key: string]: unknown;
            };
        };
        /** CampaignWebhookLogResource */
        CampaignWebhookLogResource: {
            id: string;
            campaign_id: string;
            webhook_id: string;
            webhook_type: string;
            url: string;
            payload: string;
            response_status: string;
            response_body: string;
            execution_time_ms: string;
            success: string;
            error_message: string;
            created_at: string;
        };
        /** CampaignWebhookResource */
        CampaignWebhookResource: {
            id: string;
            type: string;
            url: string;
            is_active: string;
            created_at: string;
            updated_at: string;
        };
        /** CampaignsResource */
        CampaignsResource: {
            id: string;
            uuid: string;
            name: string;
            /**
             * @description Needed so the list can render the branded link (custom domain → /c)
             *     consistently with the detail view.
             */
            custom_domain: string;
            photo: string | "";
            deviceId: string;
            userId: string;
            type: string;
            groups: string;
            total_clicks: string;
            total_in: string;
            /**
             * @description Additive field backed by the maintained conversion counter (SUM over
             *     groups.total_joins), populated by the group sync (Inc.1) and the amortized
             *     `groups:backfill-conversion-counters` command (Inc.2) — no longer backfilled
             *     on read. Coexists with the calculated `total_in` above during the rollout; a
             *     later, separate change will drop the calculated field once the counter is
             *     fully populated. `(int)` casts the SUM's possible NULL to 0. Note: this
             *     Resource's shape has no `total_out` field — only `total_in_counter` is added
             *     here, paralleling the calculated side.
             */
            total_in_counter: number;
            admins: string;
            group_admins: string;
            disconnected_groups: string;
            connection_error_groups: string;
            running_actions_count: string;
            pending_actions_count: string;
            pending_sync_groups: string;
            /**
             * @description Suspension state fields — always serialized; the list endpoint does NOT
             *     eager-load administrators, so these are always their default (false / []).
             *     Full values are only populated in the show/detail endpoint (CampaignResource).
             */
            group_creation_suspended: boolean;
            suspended_creator_phones: string[];
            group_creation_has_available_creator: boolean;
            /**
             * @description `api-group-campaigns`. Sólo para el cuarto tipo; para los otros
             *     tres las claves no viajan y el consumidor tolera su ausencia
             *     (`$this->when()` omite la clave entera, no la emite en null). El listado las pedía desde el primer día y nadie las emitía: la
             *     columna de administradores quedaba vacía para las campañas API.
             *     Un gate por incremento no lo atrapa porque cada mitad, por
             *     separado, está bien.
             *
             *     Hubo además `api_seats_used`/`api_seats_total` para una columna
             *     "Ocupación" que se quitó: medía cuán llenos están los grupos,
             *     que es una métrica del modelo de LLENAR grupos. En atención
             *     dedicada un grupo en 8/8 no es un éxito, es uno sin lugar.
             */
            api_open_groups?: number;
            api_policy?: {
                officialNumber: string | null;
                officialLid: string | null;
                companionNumbers: string;
            };
        };
        /** ChannelMetadataResource */
        ChannelMetadataResource: {
            name: string | null;
            description: string | null;
            image: string | null;
            link: string | null;
            admins_numbers: string[];
            participants_numbers: string[];
            verified_admin: boolean;
            subscribers_count: string | 0;
            participants: string[];
        };
        /** ChannelMinResource */
        ChannelMinResource: {
            id: string | null;
            uid: string | null;
            name: string | "";
            description: string | "";
            state: string | null;
            subscribers_count: number;
            invite_link: string | null;
            verification: string | null;
            picture: string | null;
            preview: string | null;
            creation_time: number | null;
            mute: string | null;
            role: string | null;
            group_id: string | null;
        };
        /** MessageResource */
        CommunitiesMessageResource: {
            id: string;
            uid: string;
            type: string;
            value: unknown;
            scheduledMessage: components["schemas"]["ScheduledMessageResource"];
        };
        /** ContactCustomFieldResource */
        ContactCustomFieldResource: {
            id: number;
            name: string;
            description: string;
            type: string;
            value: string;
            created_at: string;
            updated_at: string;
            contact_count: string;
        };
        /** ContactFlowListResource */
        ContactFlowListResource: {
            id: string;
            name: string;
            running: boolean;
            created_at: string | null;
            last_run_at: string | null;
        };
        /** ContactKanbanStageBoardResource */
        ContactKanbanStageBoardResource: {
            kanban_setting_id: string;
            kanban_name: string;
            current_stage_id: string;
            value_custom_field_id: string;
            profit_custom_field_id: string;
            stages: string;
        };
        /** ContactLeadScoreResource */
        ContactLeadScoreResource: {
            score: string;
            signals_count: string;
            category: string;
            confidence: string;
            disqualified: string;
            disqualified_at: string;
            disqualification_reasons: string;
            updated_at: string | null;
            events: components["schemas"]["LeadScoreEventResource"][];
            next_cursor: string;
            has_more: boolean;
        };
        /** ContactNoteResource */
        ContactNoteResource: {
            id: number;
            contact_id: number;
            author_id: number | null;
            author_name: unknown;
            body: string;
            created_at: string | null;
            updated_at: string | null;
        };
        /** ContactResource */
        ContactResource: {
            id: number;
            name: string;
            email: string;
            phone: string;
            whatsapp_id: string;
            whatsapp_username?: string | null;
            has_phone: boolean;
            country_code: string;
            status: number;
            image: string;
            /** @deprecated */
            notes: string | null;
            custom_fields?: components["schemas"]["ContactCustomFieldResource"][];
            /** Format: date-time */
            created_at: string | null;
            active_conversation: number;
            favorite: number;
            unread_messages: number;
            manually_unread?: boolean;
            last_message?: {
                text: string;
                file: string;
                date: string;
                type: string;
                own: string;
                deleted_at: string;
                deleted_scope: string;
            };
            device_id: number | null;
            adviser_id: number | null;
            paused_at: string | null;
            mac_date: string | null;
            ai_assistant_name: string | null;
            stage_since?: string;
            is_stagnant?: boolean;
            lead_score?: {
                score: number;
                signals_count: number;
                category: string;
                confidence: string;
                disqualified: boolean;
                disqualified_at: string | null;
                updated_at: string | null;
            };
        };
        /** ContactTagResource */
        ContactTagResource: {
            id: number;
            name: string;
            description: string | "";
            color: string;
            created_at: string | null;
            updated_at: string | null;
            contact_count: string;
            assigned_at: string | null;
            last_updated: string | null;
        };
        /** MessageResource */
        ConversationsMessageResource: {
            chat_id: string;
            contact_id: number | "";
            content: unknown[] | "";
            device_id: number | "";
            error_code: string;
            file: string;
            forwarded: number;
            group_id: number | "";
            id: number;
            origin: components["schemas"]["MessageOriginEnum"] | "";
            origin_id: number | "";
            own: number;
            reference_message: string | null;
            reference_message_uid: string | null;
            is_quotable: boolean;
            status: components["schemas"]["MessageStatusEnum"] | null;
            temporal_uuid: string | "";
            text: string;
            time: string | null;
            type: components["schemas"]["MessageTypeEnum"] | null;
            uid: string;
            info: unknown[] | "";
            user_id: number;
            deleted_at: string | null;
            deleted_scope: string | null;
            poll_results?: string;
            event_rsvps?: string;
            form_answers?: string;
            reactions: unknown[];
            file_original_name: string | null;
        };
        /** UserResource */
        ConversationsUserResource: {
            id: string;
            name: string;
            email: string;
            owner_id: string;
            advisor_scope: string;
            created_at: string;
            updated_at: string | "";
        };
        /** CustomDomainResource */
        CustomDomainResource: {
            id: number;
            hostname: string;
            status: string;
            ssl: {
                validation_method: string;
                validation_string: string | null;
            };
            dns_records: ({
                /** @constant */
                type: "ALIAS";
                /** @constant */
                host: "@";
                value: string;
                purpose: string;
            } | {
                /** @constant */
                type: "CNAME";
                host: string;
                value: string;
                /** @constant */
                purpose: "Apunta el subdominio al servicio de redirección de Funnelchat.";
            } | {
                /** @constant */
                type: "TXT";
                host: string;
                value: string | null;
                /** @constant */
                purpose: "Validación de control de dominio (DCV) requerida por Cloudflare para emitir el certificado SSL.";
            })[];
            /**
             * @description Best-effort DNS provider hint (change `custom-domains`,
             *     Increment 6 — design.md D15/D17): pre-selects the frontend's
             *     provider dropdown. `null` when detection failed/found no known
             *     match — the frontend falls back to the generic provider. NOT
             *     part of the cross-domain read contract (`communities` never
             *     reads it).
             */
            detected_provider: string | null;
            created_at: string | null;
            updated_at: string | null;
        };
        /** CustomFieldResource */
        CustomFieldResource: {
            id: number;
            name: string;
            type: components["schemas"]["CustomFieldTypeEnum"];
            description: string | null;
            contact_count?: number;
            /** Format: date-time */
            created_at: string | null;
        };
        /**
         * CustomFieldTypeEnum
         * @enum {integer}
         */
        CustomFieldTypeEnum: 0 | 1 | 2 | 3 | 4;
        /**
         * DeviceConnectionEventEnum
         * @enum {integer}
         */
        DeviceConnectionEventEnum: 0 | 1;
        /** DeviceConnectionEventResource */
        DeviceConnectionEventResource: {
            id: number;
            phone: string | null;
            event: components["schemas"]["DeviceConnectionEventEnum"];
            created_at: string;
        };
        /** DeviceFleetLogResource */
        DeviceFleetLogResource: {
            id: number;
            method: string;
            url: string | null;
            status_code: number | null;
            is_error: boolean;
            duration_ms: number | null;
            created_at: string | null;
            request_payload: unknown[] | null;
            response_body: unknown[] | null;
            device_id: string | null;
            device_label: string | null;
        };
        /** DeviceHealthDetailResource */
        DeviceHealthDetailResource: {
            health: string;
            identity: string;
            entities: string;
            /**
             * @description Detail-only (meta-number-health-status, Increment 6 gap-closing
             *     follow-up) — deliberately NOT part of `health`, which the
             *     listing shares verbatim; see
             *     DeviceHealthSummaryBuilder::buildThroughputLevel().
             */
            throughput_level: string;
            history: {
                field: string;
                previous_value: string;
                new_value: string;
                detail: string | null;
                source: string;
                occurred_at: string;
            }[];
        };
        /** DeviceLogResource */
        DeviceLogResource: {
            id: number;
            method: string;
            url: string | null;
            status_code: number | null;
            is_error: boolean;
            duration_ms: number | null;
            created_at: string | null;
            request_payload: unknown[] | null;
            response_body: unknown[] | null;
        };
        /** DeviceResource */
        DeviceResource: {
            id: number;
            alias: string;
            image: string;
            color: string;
            number: string;
            /**
             * @description coexistence-connection-and-devices-ux, Increment 1 (design.md D1,
             *     tasks.md 1.1): purely additive, read-time-computed field used by
             *     `front/dashboard` to group Meta + QR devices sharing the same
             *     number into one card (`groupDevicesByNumber`). Reuses the SAME
             *     `PhoneNumberNormalizer` the backend already uses at write time
             *     (DeviceController) — never a second, drifting implementation.
             *     `null` when `number` is empty/null (device not yet connected).
             */
            normalized_number: string;
            first_conecction_at: string;
            user_id: number;
            provider: components["schemas"]["WhatsAppProviderEnum"];
            waba_id: string;
            whatsapp_username: string | null;
            is_business: number;
            connected: number;
            active: number | null;
            /**
             * @description meta-number-health-status, Increment 2 (design.md D4/D5/D6):
             *     `null` for any non-Meta device, WITHOUT exception. NEVER
             *     triggers a Meta call — reads only the eager-loaded
             *     `healthStatus` relation (see DeviceController::index()) via
             *     DeviceHealthSummaryBuilder, the single source of truth for
             *     this shape (also reused by the Increment 4 detail endpoint).
             */
            health: string;
            number_key?: string | null;
            number_key_confirmed?: boolean;
            /** @description El número usa la app de WhatsApp Business y la Cloud API a la vez. */
            is_coexistence?: boolean;
            /** @enum {string} */
            slot_state?: "free" | "reserved" | "pending" | "held";
            pool_suspended?: boolean;
            /** @enum {string|null} */
            pool_suspension_reason?: "over_pool" | "payment_lapse" | null;
            pool_keep?: boolean;
            qr_allowed?: boolean;
            can_change_to_meta?: boolean;
            /** @description Lo que el número puede hacer por la API, según su proveedor (QR o WhatsApp Cloud) y lo que tu cuenta tiene habilitado. Consultalo antes de ofrecer una función: un envío que el número no soporta responde `422 provider_unsupported`. */
            capabilities: {
                /** @description Tipos de mensaje que acepta el número. */
                messages: {
                    text: boolean;
                    media: boolean;
                    buttons: boolean;
                    lists: boolean;
                    templates: boolean;
                    location: boolean;
                    voice_note: boolean;
                    polls: boolean;
                    events: boolean;
                    contact_card: boolean;
                    reactions: boolean;
                };
                /** @description Acciones de grupo disponibles por este número. Todo `false` cuando el número no tiene grupos. */
                groups: {
                    create: boolean;
                    /** @description `direct`: los agrega; `invite`: les manda el enlace de invitación; `false`: no se puede. */
                    add_participants: ("direct" | "invite") | false;
                    remove_participants: boolean;
                    admins: boolean;
                    photo: boolean;
                    settings: boolean;
                    invite_link: boolean;
                    send: boolean;
                    /** @description `list`: solo listar las solicitudes de unión; `list_and_decide`: también aprobarlas o rechazarlas; `false`: no se puede. */
                    join_requests: ("list" | "list_and_decide") | false;
                };
                /** @description Los estados que llegan por `message.status_changed` para los mensajes de este número. */
                statuses: ("sent" | "delivered" | "read" | "failed")[];
            };
        };
        /** DisconnectSurveyResource */
        DisconnectSurveyResource: {
            pending: boolean;
            phone: string | null;
        };
        /** ExtensionTokenResource */
        ExtensionTokenResource: {
            token: string;
            expiresAt: number;
            expiresInSeconds: number;
        };
        /** FlowResource */
        FlowResource: {
            id: string;
            name: string | "";
            uuid: string;
            first_node_uuid: string;
            enable: string;
            valid: string;
            executions: string | 0;
            created_at: string;
            updated_at: string | "";
            nodes_count: string | 0;
            trigger_uuid?: string | "";
            trigger_device_ids: string | string[];
            trigger_type: string | "";
            trigger_values?: string | string[];
            trigger_is_global: boolean;
            trigger_save_activation_phrase: boolean;
            trigger_activation_phrase_field_id: string | null;
            payment_platform: string | null;
            payment_external_product_id: string | null;
            payment_event_types: string | null;
            payment_event_entry_nodes: string | null;
            default: string;
            once_per_contact: string;
            frequency_limit_value: string;
            frequency_limit_unit: string | null;
            frequency_limit_minutes: string;
            folder?: components["schemas"]["FolderResource"];
            nodes?: components["schemas"]["NodeResource"][];
            intention_prompt: string | "";
            match_location: string | null;
            match_details: string | null;
            risk_acceptance: {
                accepted_by_name: string | null;
                accepted_at: string;
                codes: string | string[];
            } | null;
        };
        /** FolderResource */
        FolderResource: {
            id: string;
            name: string | "";
            parent_id: string;
            children?: components["schemas"]["FolderResource"][];
            flows_count?: number;
        };
        /** ForwardMessageRequest */
        ForwardMessageRequest: {
            targets: {
                contact_id: number;
                device_id: number;
            }[];
            client_reference?: components["schemas"]["PendingClientReference"];
        };
        /** ForwardResultResource */
        ForwardResultResource: {
            contact_id: string;
            mode: string;
            status: string;
            reason: string;
        };
        /** GroupMetadataResource */
        GroupMetadataResource: {
            name: string | "";
            description: string | null;
            image: string | null;
            link: string | null;
            admins_numbers: (string | null)[];
            participants_numbers: (string | null)[];
            verified_admin: boolean;
            subscribers_count: number;
            participants: unknown[];
            owner: string | null;
        };
        /** GroupMinResource */
        GroupMinResource: {
            uid: string | "";
            name: string | "";
            description: string | "";
            device_id: string | "";
            alias: string | "";
            number: string | "";
            communityUid: string | "";
        };
        /** GroupResource */
        GroupResource: {
            id: string | unknown;
            admins_numbers: string | unknown;
            admins: {
                phone: string | null;
                lid: string | null;
                isConnected: boolean;
                displayPhone: string | null;
                accessDenied: boolean;
            }[] | unknown;
            admins_count: string | unknown;
            owner: string | unknown;
            owner_connected: boolean | unknown;
            clicks: string | unknown;
            communityUid: string | unknown;
            newsletterUid: string | unknown;
            description: (string | "") | unknown;
            deviceId: string | unknown;
            image: string | unknown;
            isFull: (string | boolean) | unknown;
            isApi: boolean | unknown;
            link: string | "";
            campaign_link: string | "";
            /**
             * @description Custom domain of the owning campaign (if any) so the list can render
             *     the branded link (custom domain → /c) instead of the default one.
             */
            campaign_custom_domain: string | null;
            name: string;
            order: string;
            participants_numbers: string;
            participants_count: string;
            status: string;
            uid: string;
            updatedAt: string;
            createdAt: string;
            scheduled_message_count: string | 0;
            type: string;
            manual_import: boolean;
            /** @enum {integer} */
            origin: 1 | 0;
            lastSyncAt: string | null;
        } & {
            [key: string]: unknown;
        };
        /** IngestLeadScoreEventsRequest */
        IngestLeadScoreEventsRequest: {
            events: {
                /** @enum {string} */
                signal: "group_join" | "group_leave" | "group_reaction" | "group_poll_vote" | "link_click";
                owner_user_id: number;
                contact_id?: number | null;
                phone?: string | null;
                /** Format: date-time */
                occurred_at: string;
                external_id: string;
                scope_key?: string | null;
                meta?: {
                    campaign_message_uid?: string | null;
                } | null;
            }[];
        };
        /** KanbanSettingResource */
        KanbanSettingResource: {
            id: number;
            user_id: number;
            name: string;
            mode: string;
            stagnant_days: number | null;
            value_custom_field_id: number | null;
            profit_custom_field_id: number | null;
            view_mode: string;
            icon: string | null;
            description: string | null;
            is_primary: boolean;
            color_by_lead_score: boolean;
            structure: unknown[];
            stages?: components["schemas"]["KanbanStageResource"][];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** KanbanStageResource */
        KanbanStageResource: {
            id: number;
            kanban_setting_id: number;
            name: string;
            position: number;
            contacts_count?: number;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** LeadScoreDistributionResource */
        LeadScoreDistributionResource: {
            total: string;
            counts: {
                hot: string;
                warm: string;
                cold: string;
                insufficient_data: string;
            };
            thresholds: {
                hot_threshold: string;
                warm_threshold: string;
                min_signals: string;
            };
        };
        /** LeadScoreEventResource */
        LeadScoreEventResource: {
            id: string;
            signal: string;
            source: string;
            raw_points: string;
            applied_points: string;
            cap_reason: string | null;
            occurred_at: string | null;
            actor_user_id?: string;
            reason?: string;
        };
        /** LeadScoreSettingsResource */
        LeadScoreSettingsResource: {
            hot_threshold: number;
            warm_threshold: number;
            min_signals: number;
            hysteresis: number;
            decay_steps: {
                days: number;
                points: number;
            }[];
            decay_enabled: boolean;
            rules: unknown[];
        };
        /** LengthAwarePaginator */
        LengthAwarePaginator: {
            current_page: number;
            data: string;
            first_page_url: string;
            from: number | null;
            last_page: number;
            last_page_url: string;
            links: {
                [key: string]: unknown;
            };
            next_page_url: string;
            path: string | null;
            per_page: number;
            prev_page_url: string | null;
            to: number | null;
            total: number;
        };
        /**
         * MessageOriginEnum
         * @enum {integer}
         */
        MessageOriginEnum: 0 | 1 | 2 | 3;
        /** MessageResponseResource */
        MessageResponseResource: {
            message_template_id: string;
            block_type: string;
            group_name: string;
            responder_name: string;
            identity: string;
            identity_type: string;
            response: string;
            response_label: string;
            responded_at: string | null;
        };
        /**
         * MessageStatusEnum
         * @enum {integer}
         */
        MessageStatusEnum: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
        /** MessageTemplateResource */
        MessageTemplateResource: {
            id: string;
            type: string;
            value: string;
            metrics: string;
            reactions: string;
            votes: string;
            /**
             * @description openspec/changes/surface-event-rsvps-in-campaign-metrics, design D2:
             *     event RSVP counts grouped by response value, deduped by the
             *     responder's coalesced identity (phone, falling back to lid).
             *     Values with zero responders never appear (no group produced).
             */
            event_responses: string;
            shipping_order: string;
        };
        /**
         * MessageTemplateStatusEnum
         * @enum {string}
         */
        MessageTemplateStatusEnum: "PENDING" | "APPROVED" | "REJECTED" | "PENDING_DELETION" | "PAUSED" | "DISABLED" | "ARCHIVED";
        /**
         * MessageTemplateTypeEnum
         * @enum {string}
         */
        MessageTemplateTypeEnum: "text" | "image" | "document" | "video" | "location" | "default";
        /** MessageTemplateVariationResource */
        MessageTemplateVariationResource: {
            id: string;
            value: string;
            position: string;
        };
        /**
         * MessageTypeEnum
         * @enum {integer}
         */
        MessageTypeEnum: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
        /** MoveBroadcastsToFolderRequest */
        MoveBroadcastsToFolderRequest: {
            broadcast_ids: number[];
            folder_id?: number | null;
        };
        /** MoveContactStageRequest */
        MoveContactStageRequest: {
            contact_id: number;
            stage_id: number;
        };
        /** NodeResource */
        NodeResource: {
            uuid: string;
            flow_id: string;
            type: number;
            action: string;
            value: string;
            next_uuid: string;
        };
        /** OperationPlanResource */
        OperationPlanResource: {
            id: number;
            uuid: string;
            campaign_id: number;
            pipeline_uuid: string | null;
            /**
             * @description Live on-read aggregate (increment 6 — PlanStatusResolver), NOT the
             *     raw persisted column. Right after confirm this still resolves to
             *     "scheduled" (nothing has run yet), so existing confirm-response
             *     assertions are unaffected — see OperationPlanConfirmTest.
             */
            status: string;
            name: string;
            timezone: string;
            window_start: string;
            window_end: string;
            range_start_date: string;
            range_end_date: string;
            daily_cap: number;
            min_spacing_minutes: number;
            confirmation_spacing_minutes: number;
            entry_point: string;
            seed: number | null;
            idempotency_key: string | null;
            confirmed_at: string | null;
            operations: string[];
        };
        /** OperationPlanSummaryResource */
        OperationPlanSummaryResource: {
            id: string;
            uuid: string;
            campaign_id: string;
            pipeline_uuid: string;
            status: string;
            name: string;
            entry_point: string;
            timezone: string;
            range_start_date: string | null;
            range_end_date: string | null;
            daily_cap: string;
            confirmed_at: string | null;
            operation_counts: {
                total: number;
                pending: number | unknown[];
                running: string | 0;
                done: string | 0;
                failed: number;
                skipped: string | 0;
                cancelled: string | 0;
            };
        };
        /** ParticipantEventResource */
        ParticipantEventResource: {
            phone: string;
            whatsapp_id: string;
            /** @enum {string} */
            event_type: "join" | "leave";
            event_at: string | null;
            group_id: number;
            group_name: string;
            country_code: string;
            country_name: string;
        };
        /** ParticipantResource */
        ParticipantResource: {
            id: string;
            phone: string;
            action: string;
            isAdmin: string;
            created_at: string | "";
        };
        /**
         * PaymentEventTypeEnum
         * @enum {string}
         */
        PaymentEventTypeEnum: "approved" | "pending" | "rejected" | "cancelled" | "refunded" | "chargeback";
        /** PaymentProductResource */
        PaymentProductResource: {
            external_product_id: string;
            name: string | null;
        };
        /** QuickReplyResource */
        QuickReplyResource: {
            id: number;
            name: string;
            message: string;
            file: string;
            type: components["schemas"]["MessageTypeEnum"];
            visibility: components["schemas"]["QuickReplyVisibilityEnum"];
            agents: {
                [key: string]: unknown;
            };
            user_id: number;
            created_at: string;
            updated_at: string;
        };
        /**
         * QuickReplyVisibilityEnum
         * @enum {integer}
         */
        QuickReplyVisibilityEnum: 1 | 2 | 3;
        /** RemoveContactStageRequest */
        RemoveContactStageRequest: {
            contact_id: number;
        };
        /** ReorderKanbanStagesRequest */
        ReorderKanbanStagesRequest: {
            stage_ids: number[];
        };
        /** SaleResource */
        SaleResource: {
            id: number;
            occurred_at: string;
            platform: string;
            product_name: string | null;
            kind: string;
            event_type: string | null;
            amount_minor: number;
            currency: string;
            attribution: string;
            buyer: {
                contact_id: number | null;
                name: string | null;
                phone: string | null;
            } | null;
        };
        /** SalesMetricsResource */
        SalesMetricsResource: {
            window: string;
            currencies: string;
            distinct_buyers: string;
            repeat_purchase_rate: string;
        };
        /** ScheduledMessageFolderResource */
        ScheduledMessageFolderResource: {
            id: string;
            name: string;
            scheduled_messages_count: number;
        };
        /** ScheduledMessageIndexResource */
        ScheduledMessageIndexResource: {
            id: string;
            name: string | "";
            send_at: string | null;
            status: string;
            is_draft: string | boolean;
            type: string;
            folder_id: string;
            campaign_ids: string;
            excluded_group_ids: string | string[];
            can_be_edited: string;
            recurrence: {
                enabled: boolean;
                frequency: string;
                interval: string;
                week_days: string;
                end_type: string;
                end_date: string;
                occurrences: string;
                current_occurrence: string;
                only_new_groups: string;
                only_full_groups: string;
            } | {
                enabled: boolean;
            };
        };
        /** ScheduledMessageResource */
        ScheduledMessageResource: {
            id: string;
            name: string;
            send_at: string;
            status: string;
            type: string;
            audience: string;
            total_readed: string;
            total_played: string;
            campaigns: string;
            groups: string;
            total_groups: string;
            messages: components["schemas"]["MessageTemplateResource"][];
        };
        /** ScheduledMessageRunsResource */
        ScheduledMessageRunsResource: {
            run: string;
            total_groups: number;
            count_ok: number;
            count_error: number;
        };
        /** SendMessageRequest */
        SendMessageRequest: {
            phone?: string;
            whatsapp_id?: string;
            device_id: number;
            text?: string;
            contact_id: number;
            file?: string;
            temporal_uuid?: string;
            note?: boolean;
            options?: {
                id?: string;
                label?: string;
            }[];
            reference_message_uid?: string | null;
            link_preview?: boolean;
            link_preview_meta?: {
                /** Format: uri */
                url?: string;
                title?: string | null;
                description?: string | null;
                /** Format: uri */
                image_url?: string | null;
                domain?: string;
            };
            client_reference?: components["schemas"]["PendingClientReference"];
            file_type?: components["schemas"]["PendingFileType"];
            file_name?: components["schemas"]["PendingFileName"];
        };
        /**
         * SslValidationMethod
         * @description SSL Domain Control Validation (DCV) method requested from Cloudflare for SaaS when creating or re-validating a Custom Hostname. `HTTP` is the default requested by `CloudflareCustomHostnameClient::create()` (design.md D9 — supersedes the original TXT-only MVP default): the certificate is issued once the CNAME resolves and traffic reaches Cloudflare, with no DNS TXT record required for the common case. `TXT` remains available as an explicit fallback via the `switch-validation` endpoint (design.md D11) for domains whose CNAME does not yet route to Cloudflare.
         * @enum {string}
         */
        SslValidationMethod: "TXT" | "HTTP";
        /** StoreAlertDestinationRequest */
        StoreAlertDestinationRequest: {
            type: components["schemas"]["AlertDestinationType"];
            destination: string;
            name?: string | null;
        };
        /** StoreBroadcastFolderRequest */
        StoreBroadcastFolderRequest: {
            name: string;
        };
        /** StoreContactCardRequest */
        StoreContactCardRequest: {
            device_id: number;
            contact_card_ids: number[];
            client_reference?: components["schemas"]["PendingClientReference"];
        };
        /** StoreContactNoteRequest */
        StoreContactNoteRequest: {
            body: string;
        };
        /** StoreContactRequest */
        StoreContactRequest: {
            phone?: string;
            whatsapp_id?: string;
            name?: string | null;
            /** Format: email */
            email?: string | null;
            image?: string | null;
            deviceId?: number | null;
        };
        /**
         * StoreCustomDomainRequest
         * @description Validates the payload for `POST /custom-domains`.
         *
         *     Sanitizes `hostname` in `prepareForValidation()` BEFORE the `unique`/`regex`
         *     rules run, so:
         *       - the uniqueness check compares against the canonical (sanitized) form —
         *         `https://Go.MiMarca.com/landing` and `go.mimarca.com` are the same
         *         hostname for this check.
         *       - a duplicate or malformed hostname fails validation (422) BEFORE the
         *         controller method ever runs, guaranteeing Cloudflare is never called
         *         for those cases (spec scenarios "Duplicate hostname rejected" /
         *         "Invalid hostname rejected").
         *
         *     Authorization (admin-only, payment-valid) is enforced at the route-group
         *     level (`can:user-admin` + `can:payment-valid`), not here — same pattern as
         *     `StorePlanRequest`/`UpdatePlanRequest`.
         */
        StoreCustomDomainRequest: {
            hostname: string;
        };
        /**
         * StoreDisconnectReasonRequest
         * @description Validates the payload for `POST /devices/{device}/disconnect-survey`.
         *
         *     Authorization is delegated to the controller (`authorize('update', $device)`),
         *     matching the pattern used across the Device module's other write endpoints.
         *
         *     `reason` accepts only `DeviceDisconnectReasonEnum::writableValues()`
         *     (`{1, 2, 4, 5}`) — change `disconnect-survey-block-type`: the legacy `3`
         *     (`whatsapp_blocked`, ambiguous permanent/temporary) is rejected with 422
         *     on write, even though it remains a valid value for reads/metrics.
         */
        StoreDisconnectReasonRequest: {
            /** @enum {integer} */
            reason: "1" | "2" | "4" | "5";
        };
        /** StoreEventRequest */
        StoreEventRequest: {
            device_id: number;
            name: string;
            date_time: string;
            description?: string | null;
            location?: string | null;
        };
        /** StoreFolderRequest */
        StoreFolderRequest: {
            name: string;
            parent_id?: number | null;
        };
        /** StoreKanbanSettingRequest */
        StoreKanbanSettingRequest: {
            name: string;
            /** @enum {string} */
            mode?: "tags" | "stages";
            structure?: {
                tag_id: number;
                position: number;
            }[] | null;
            stages?: {
                name?: string;
            }[] | null;
            stagnant_days?: number | null;
            /** @enum {string|null} */
            view_mode?: "compact" | "extended" | null;
            /** @enum {string|null} */
            icon?: "target" | "filter" | "trending-up" | "users" | "briefcase" | "shopping-cart" | "heart" | "star" | "flag" | "rocket" | "layers" | "zap" | null;
            description?: string | null;
            is_primary?: boolean;
            color_by_lead_score?: boolean;
        };
        /** StoreKanbanStageRequest */
        StoreKanbanStageRequest: {
            name: string;
            after_stage_id?: number | null;
        };
        /** StoreLeadScoreAdjustmentRequest */
        StoreLeadScoreAdjustmentRequest: {
            delta: number;
            reason: string;
        };
        /** StoreMessageReactionRequest */
        StoreMessageReactionRequest: {
            emoji: string;
        };
        /** StoreMessageTemplateRequest */
        StoreMessageTemplateRequest: {
            name: string;
            /** @enum {string} */
            language_code: "af" | "sq" | "ar" | "ar_EG" | "ar_AE" | "ar_LB" | "ar_MA" | "ar_QA" | "az" | "be_BY" | "bn" | "bn_IN" | "bg" | "ca" | "zh_CN" | "zh_HK" | "zh_TW" | "hr" | "cs" | "da" | "prs_AF" | "nl" | "nl_BE" | "en" | "en_GB" | "en_US" | "en_AE" | "en_AU" | "en_CA" | "en_GH" | "en_IE" | "en_IN" | "en_JM" | "en_MY" | "en_NZ" | "en_QA" | "en_SG" | "en_UG" | "en_ZA" | "et" | "fil" | "fi" | "fr" | "fr_BE" | "fr_CA" | "fr_CH" | "fr_CI" | "fr_MA" | "ka" | "de" | "de_AT" | "de_CH" | "el" | "gu" | "ha" | "he" | "hi" | "hu" | "id" | "ga" | "it" | "ja" | "kn" | "kk" | "rw_RW" | "ko" | "ky_KG" | "lo" | "lv" | "lt" | "mk" | "ms" | "ml" | "mr" | "nb" | "ps_AF" | "fa" | "pl" | "pt_BR" | "pt_PT" | "pa" | "ro" | "ru" | "sr" | "si_LK" | "sk" | "sl" | "es" | "es_AR" | "es_CL" | "es_CO" | "es_CR" | "es_DO" | "es_EC" | "es_HN" | "es_MX" | "es_PA" | "es_PE" | "es_ES" | "es_UY" | "sw" | "sv" | "ta" | "te" | "th" | "tr" | "uk" | "ur" | "uz" | "vi" | "zu";
            /** @enum {string} */
            category: "UTILITY" | "MARKETING" | "AUTHENTICATION";
            /** @enum {string} */
            type: "text" | "image" | "document" | "video" | "location" | "default";
            header?: string | null;
            file?: string;
            body: string;
            params?: string[] | null;
            footer?: string | null;
            buttons?: {
                text?: string;
                /** @enum {string} */
                type?: "QUICK_REPLY" | "URL" | "PHONE_NUMBER";
                /** Format: uri */
                url?: string;
                phone_number?: string;
            }[] | null;
        };
        /** StorePollRequest */
        StorePollRequest: {
            device_id: number;
            question: string;
            options: string[];
            multiple?: boolean;
        };
        /** StoreWebhookEndpointRequest */
        StoreWebhookEndpointRequest: {
            /**
             * Format: uri
             * @description `https` obligatorio. La comprobación de a DÓNDE resuelve la hace
             *     `SsrfGuard` en el controlador: acá sólo se valida la forma.
             */
            url: string;
            description?: string | null;
            /**
             * @description Suscripciones iniciales, opcionales: un endpoint puede nacer sin
             *     ninguna y suscribirse después. Lo que NO puede es nacer suscripto a
             *     todo por omisión — eso sería lo contrario de "por demanda".
             */
            events?: ("device.disconnected" | "device.connected" | "billing.payment_failed" | "billing.plan_blocked" | "billing.upcoming_charge" | "subscription.expiring" | "subscription.trial_ending" | "subscription.reactivated" | "subscription.cancellation_confirmed" | "subscription.dormant_ending" | "ai_quota.low_balance" | "ai_quota.topup_succeeded" | "ai_quota.topup_failed" | "mac.usage_80" | "mac.usage_100" | "mac.expiring" | "account.blocked")[];
        };
        /**
         * SwitchValidationMethodRequest
         * @description Validates the payload for `POST /custom-domains/{customDomain}/switch-validation`
         *     (design.md D11): switches a domain's SSL Domain Control Validation (DCV)
         *     method between `HTTP` (default) and `TXT` (fallback for domains whose CNAME
         *     does not yet route to Cloudflare).
         *
         *     Authorization (admin-only, payment-valid) is enforced at the route-group
         *     level (`can:user-admin` + `can:payment-valid`); ownership of the target
         *     domain is enforced by the controller's `findOwned()` (404 if not the
         *     authenticated admin's own domain) — same pattern as `verify`/`destroy`.
         */
        SwitchValidationMethodRequest: {
            method: components["schemas"]["SslValidationMethod"];
        };
        /** TagResource */
        TagResource: {
            id: number;
            name: string;
            description: string;
            color: string | null;
            created_at: string | null;
            updated_at: string | null;
            contact_count: string | number;
        };
        /** TemplateResource */
        TemplateResource: {
            id: number;
            name: string;
            text: string;
            header: string;
            footer: string;
            observation: string;
            uid: string;
            category: string;
            type: components["schemas"]["MessageTemplateTypeEnum"] | "";
            status: components["schemas"]["MessageTemplateStatusEnum"] | "";
            language_code: string;
            upload_session_id: string;
            header_handle: string;
            file: string;
            params: unknown[] | "";
            buttons: unknown[] | "";
            user_id: number;
            device_id: number;
            /** Format: date-time */
            created_at: string | null;
            quick_reply_buttons: unknown[];
            waba_id: string | null;
            belongs_to_current_device: boolean;
        };
        /** Ticket */
        Ticket: {
            id: number;
            user_id: number;
            contact_id: number | null;
            title: string;
            description: string | null;
            deadline: number | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** UpdateAlertDailyReportRequest */
        UpdateAlertDailyReportRequest: {
            enabled: boolean;
            send_time?: string | null;
            all_campaigns: boolean;
            campaign_ids?: number[] | null;
        };
        /** UpdateAlertDestinationRequest */
        UpdateAlertDestinationRequest: {
            /** @description name is nullable per schema — allow sending null to clear the field. */
            name?: string | null;
            /**
             * @description `destination` solo se acepta para destinos `webhook` (el controller
             *     rechaza el resto con 422). La forma real —https y que resuelva a
             *     una IP publica— la decide `SsrfGuard` en el controller, no una
             *     regla de validacion: el guard resuelve DNS, y eso no se expresa
             *     con `url`/`starts_with`.
             */
            destination?: string;
        };
        /** UpdateAlertQuietHourRequest */
        UpdateAlertQuietHourRequest: {
            enabled: boolean;
            start_time?: string | null;
            end_time?: string | null;
        };
        /** UpdateBroadcastFolderRequest */
        UpdateBroadcastFolderRequest: {
            name: string;
        };
        /** UpdateContactRequest */
        UpdateContactRequest: {
            name?: string | null;
            /** Format: email */
            email?: string | null;
            phone?: string | null;
            notes?: string | null;
            status?: number;
            adviser_id?: number | null;
            active_conversation?: boolean;
            favorite?: boolean;
            fixed?: boolean;
            image?: string | null;
            can_execute_flows?: boolean;
            manually_unread?: boolean;
        };
        /** UpdateFolderRequest */
        UpdateFolderRequest: {
            name?: string;
            parent_id?: number | null;
        };
        /** UpdateKanbanSettingRequest */
        UpdateKanbanSettingRequest: {
            name?: string | null;
            mode?: string;
            structure?: {
                tag_id: number;
                position: number;
            }[] | null;
            stagnant_days?: number | null;
            /** @enum {string|null} */
            view_mode?: "compact" | "extended" | null;
            /** @enum {string|null} */
            icon?: "target" | "filter" | "trending-up" | "users" | "briefcase" | "shopping-cart" | "heart" | "star" | "flag" | "rocket" | "layers" | "zap" | null;
            description?: string | null;
            is_primary?: boolean;
            color_by_lead_score?: boolean;
        };
        /** UpdateKanbanStageRequest */
        UpdateKanbanStageRequest: {
            name: string;
        };
        /** UpdateMessageTemplateRequest */
        UpdateMessageTemplateRequest: {
            device_id: number;
            /** @enum {string} */
            category: "UTILITY" | "MARKETING" | "AUTHENTICATION";
            /** @enum {string} */
            type: "text" | "image" | "document" | "video" | "location" | "default";
            header?: string | null;
            file?: string;
            body: string;
            params?: string[] | null;
            footer?: string | null;
            buttons?: {
                text?: string;
                /** @enum {string} */
                type?: "QUICK_REPLY" | "URL" | "PHONE_NUMBER";
                /** Format: uri */
                url?: string;
                phone_number?: string;
            }[] | null;
        };
        /**
         * UpdateWebhookEndpointEventsRequest
         * @description El cuerpo de `PUT api/v1/webhooks/endpoints/{id}/events`.
         *
         *     Acepta las dos formas, porque las dos son legítimas y pedirle al cliente que
         *     elija una sería gratuito:
         *
         *       `{"events": ["device.disconnected"]}`
         *           → suscribe a esos tipos, activados, y da de baja los que no estén.
         *
         *       `{"events": [{"event_type": "device.disconnected", "enabled": false}]}`
         *           → lo mismo, pero eligiendo el interruptor de cada uno. Un tipo con
         *             `enabled: false` queda suscripto y apagado: no se entrega, pero la
         *             configuración sobrevive a volver a prenderlo.
         */
        UpdateWebhookEndpointEventsRequest: {
            events: {
                /** @enum {string} */
                event_type: "device.disconnected" | "device.connected" | "billing.payment_failed" | "billing.plan_blocked" | "billing.upcoming_charge" | "subscription.expiring" | "subscription.trial_ending" | "subscription.reactivated" | "subscription.cancellation_confirmed" | "subscription.dormant_ending" | "ai_quota.low_balance" | "ai_quota.topup_succeeded" | "ai_quota.topup_failed" | "mac.usage_80" | "mac.usage_100" | "mac.expiring" | "account.blocked";
                enabled?: boolean;
            }[];
        };
        /** UpdateWebhookEndpointRequest */
        UpdateWebhookEndpointRequest: {
            /** Format: uri */
            url?: string;
            description?: string | null;
            /**
             * @description Prender y apagar el endpoint entero, sin perder sus suscripciones
             *     ni su secreto.
             * @enum {string}
             */
            status?: "enabled" | "disabled";
        };
        /** UpsertAlertSettingRequest */
        UpsertAlertSettingRequest: {
            module: components["schemas"]["AlertModule"];
            action: components["schemas"]["AlertAction"];
            enabled: boolean;
        };
        /** VerifyAlertOtpRequest */
        VerifyAlertOtpRequest: {
            code: string;
        };
        /** WabaCapiDatasetResource */
        WabaCapiDatasetResource: {
            waba_id: string;
            dataset_id: string | null;
            scope_ok: boolean;
            consented_at: string | null;
            last_verified_at: string | null;
        };
        /** WebhookDeliveryResource */
        WebhookDeliveryResource: {
            id: number;
            /**
             * @description El id del sobre: agrupa los intentos de un mismo evento y es el
             *     mismo valor que el receptor vio en el cuerpo.
             */
            event_id: string;
            event_type: string;
            attempt: number;
            url: string;
            response_status: number | null;
            succeeded: boolean;
            error: string | null;
            duration_ms: number | null;
            attempted_at: string;
        };
        /** WebhookEndpointResource */
        WebhookEndpointResource: {
            id: number;
            url: string;
            description: string | null;
            status: string;
            disabled_reason: string | null;
            events?: {
                event_type: string;
                enabled: boolean;
            }[];
            health: {
                consecutive_failures: number;
                last_delivery_at: string | null;
                last_success_at: string | null;
            };
            secret_rotated_at: string | null;
            created_at: string | null;
            updated_at: string | null;
        };
        /**
         * WhatsAppProviderEnum
         * @enum {integer}
         */
        WhatsAppProviderEnum: 1 | 2 | 3 | 4;
        /** WhatsappCostSummaryResource */
        WhatsappCostSummaryResource: {
            [key: string]: unknown;
        };
        /** @description Tu referencia para correlacionar el envío con el historial y con `message.status_changed`: de 1 a 64 caracteres ASCII visibles, sin espacios. No es única ni está autenticada; no pongas datos personales. */
        PendingClientReference: string;
        PendingWebhookSubscriptionFilters: {
            /** @description Solo entrega los eventos de estas campañas. Un evento sin campaña no pasa el filtro. */
            campaign_ids?: string[];
        };
        /** @description Una suscripción de webhook unificada. Nunca trae el secreto. */
        PendingWebhookSubscription: {
            /**
             * Format: uuid
             * @description Identificador de la suscripción. Guardalo al crearla: es lo que identifica la tuya.
             */
            id: string;
            url: string;
            description: string | null;
            events: string[];
            filters: components["schemas"]["PendingWebhookSubscriptionFilters"];
            /** @enum {string} */
            status: "active" | "paused" | "disabled";
            /** @enum {string|null} */
            disabled_reason: "too_many_failures" | "key_revoked" | null;
            /** Format: date-time */
            last_delivery_at: string | null;
            /** Format: date-time */
            last_success_at: string | null;
            /** Format: date-time */
            secret_rotated_at: string | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
            migration: {
                origin: string;
                status: string;
                activated_via: string | null;
                /** Format: date-time */
                activated_at: string | null;
                last_result: unknown;
            } | null;
        };
        PendingWebhookSubscriptionWithSecret: components["schemas"]["PendingWebhookSubscription"] & {
            /** @description El secreto completo para verificar la firma. Se muestra una sola vez: guardalo. */
            secret: string;
            secret_notice: string;
        };
        PendingWebhookSubscriptionCreate: {
            /** @description `https`, pública y sin usuario ni contraseña. */
            url: string;
            description?: string | null;
            /** @description Tipos del catálogo (`GET /api/v1/webhooks/events`). La clave necesita el permiso `{área}:read` del área de cada tipo. */
            events: string[];
            filters?: components["schemas"]["PendingWebhookSubscriptionFilters"] | null;
        };
        PendingWebhookSubscriptionUpdate: components["schemas"]["PendingWebhookSubscriptionCreate"] & {
            /**
             * @description Opcional. `disabled` no se puede pedir.
             * @enum {string}
             */
            status?: "active" | "paused";
        };
        /** @description Un intento de entrega. Los intentos de un mismo evento comparten `event_id`. */
        PendingWebhookSubscriptionDelivery: {
            id: number;
            event_id: string;
            event_type: string;
            attempt: number;
            url: string;
            response_status: number | null;
            succeeded: boolean;
            error: string | null;
            duration_ms: number | null;
            /** Format: date-time */
            attempted_at: string | null;
        };
        /** @description Resultado de la entrega de prueba (`webhook.test`). Responde 200 aunque tu servidor falle: mirá `succeeded`. */
        PendingWebhookSubscriptionTestResult: {
            succeeded: boolean;
            response_status: number | null;
            error: string | null;
            duration_ms: number | null;
            delivery_id: number;
        };
        /** @description Un mensaje como lo ve una clave: siempre estas diez claves. Es lo que responde un envío y `GET /api/v1/contacts/{contact}/messages/{message}`. */
        PendingPublicMessage: {
            /** @description El id del mensaje en el historial del contacto: el mismo `message_id` de `message.status_changed`. */
            id: number;
            contact_id: number | null;
            device_id: number | null;
            /** @enum {string} */
            direction: "outbound" | "inbound";
            /** @description El tipo público del mensaje (`text`, `image`, `contact`…), el mismo de `message.received`. */
            type: string;
            /**
             * @description Un envío recién aceptado está `queued` (aceptado no es enviado); después pasa a `sent`, `delivered`, `read` o `failed`. `null` cuando el mensaje no tiene estado de entrega (recibido, nota) o no se sabe.
             * @enum {string|null}
             */
            status: "queued" | "sent" | "delivered" | "read" | "failed" | null;
            /** @description Solo cuando `status` es `failed`. */
            error: components["schemas"]["PendingMessageError"] | null;
            client_reference: string | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** @description El resultado de un reenvío para un destino, con su mensaje (`null` si no se registró nada para ese destino). */
        PendingForwardResult: {
            contact_id: number;
            /** @enum {string} */
            mode: "internal" | "native";
            /** @enum {string} */
            status: "queued" | "blocked";
            /** @description Por qué se bloqueó: `device_unavailable`, `not_sent`, `target_not_found`, `mac_lockout_24h` o `mac_limit_reached`. */
            reason: string | null;
            message: components["schemas"]["PendingPublicMessage"] | null;
        };
        PendingMessage: {
            message: string;
        };
        /** @description Por qué falló. Cuando lo frenó Funnelchat, `code` es `null` y `reason` dice el motivo; cuando falló en WhatsApp, `code` y `title` son los del proveedor y `reason` es `null`. */
        PendingMessageError: {
            code: number | null;
            title: string | null;
            /** @enum {string|null} */
            reason: "device_unavailable" | "insufficient_balance" | "window_closed" | "recipient_unreachable" | "template_not_found" | "template_unresolved_placeholder" | "not_queued" | "not_sent" | null;
        };
        /** @description El mensaje que quedó registrado: `status: queued` y su `id`, el mismo `message_id` de `message.status_changed`. */
        PendingSendResult: {
            message: components["schemas"]["PendingPublicMessage"];
        };
        /**
         * @description El tipo del archivo de `file`. Hace falta cuando la URL no termina en una extensión conocida (una URL firmada o sin extensión); si viene, gana sobre la extensión. Sin él, una URL sin extensión conocida responde `422 errors.file_type` y una extensión no soportada `415`.
         * @enum {string|null}
         */
        PendingFileType: "image" | "video" | "audio" | "document" | "sticker" | null;
        /** @description El nombre con que llega el documento. Con `file_type: document` y una URL sin extensión conocida es obligatorio y tiene que tener extensión (`422 errors.file_name`). */
        PendingFileName: string | null;
        PendingFormLintIssue: {
            code: string;
            severity: string;
            screenId?: string | null;
            itemId?: string | null;
            message: string;
        };
        /** @description Un número en el que el formulario está (o se está) publicando. */
        PendingFormNumber: {
            device_id: number | null;
            primary: boolean;
            /** @enum {string} */
            status: "draft" | "publishing" | "published" | "failed";
            error: string | null;
        };
        /** @description Una versión de un formulario. `id` es la versión; `family_id` es el formulario, el `form_id` que usás para enviarlo y el `form.id` de `whatsapp_form.completed`. */
        PendingForm: {
            /** @description La versión. */
            id: number;
            /** @description El formulario (todas sus versiones). */
            family_id: number;
            /** @description El nombre en Meta (con el sufijo `__vN`). */
            name: string;
            /** @description El nombre para mostrar. */
            label: string;
            category?: string | null;
            /** @enum {string} */
            status: "draft" | "published" | "deprecated";
            version: number;
            /** @description La definición del formulario (pantallas y campos). Solo en el detalle. */
            definition?: unknown;
            /** @description Solo en el detalle. */
            fields?: unknown;
            /** @description Solo en el detalle. */
            mapping?: unknown;
            /** @description Solo en el detalle. */
            tag_rules?: unknown;
            has_endpoint?: boolean;
            first_screen?: string | null;
            first_screen_dynamic?: boolean | null;
            lint_errors_count?: number | null;
            /** @description Solo en el listado: el borrador de la familia, si no es esta fila. */
            draft_id?: number;
            draft_version?: number;
            /** @description Solo en el listado. */
            sends?: number;
            /** @description Solo en el listado. */
            responses?: number;
            meta_flow_id?: string | null;
            /** @description Solo en el detalle. */
            flow_json?: unknown;
            /** @description Solo en el detalle. */
            validation_errors?: unknown;
            /** Format: date-time */
            published_at?: string | null;
            /** Format: date-time */
            updated_at?: string | null;
        };
        /** @description La acción quedó en cola. Seguila con `GET /api/v1/groups/actions/{action}` o con los eventos `group_action.completed` y `group_action.failed`. */
        PendingGroupActionAccepted: {
            /** Format: uuid */
            action_id: string;
            /** @enum {string} */
            status: "queued";
        };
        PendingGroupParticipantResult: {
            /** @description El teléfono en dígitos, sin `+`, o un `…@lid`. */
            identity: string;
            /** @enum {string} */
            identity_type: "phone" | "whatsapp_user";
            /** @enum {string} */
            status: "added" | "invited" | "removed" | "promoted" | "demoted" | "approved" | "rejected" | "failed";
            reason: string | null;
        };
        PendingGroupAction: {
            /** Format: uuid */
            action_id: string;
            type: string;
            /** @enum {string} */
            status: "queued" | "running" | "completed" | "failed";
            device_id: number | null;
            group: {
                uid: string;
                name: string | null;
            } | null;
            /** @description `null` mientras está abierta. Con teléfonos: `{participants: [...]}`; al crear: `{group, invite_link}`; al renovar el enlace: `{invite_link}`; al enviar: `{message: {uid}}`; el resto `{}`. */
            result: {
                participants?: components["schemas"]["PendingGroupParticipantResult"][];
                invite_link?: string;
                group?: {
                    uid?: string;
                    name?: string | null;
                };
                message?: {
                    uid?: string;
                };
            } | null;
            reason: string | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            started_at: string | null;
            /** Format: date-time */
            completed_at: string | null;
            /** Format: date-time */
            failed_at: string | null;
        };
    };
    responses: {
        /** @description Unauthenticated */
        AccountsAuthenticationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
        /** @description Authorization error */
        AccountsAuthorizationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
        /** @description Not found */
        AccountsModelNotFoundException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
        /** @description Validation error */
        AccountsValidationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Errors overview. */
                    message: string;
                    /** @description A detailed description of each field that failed validation. */
                    errors: {
                        [key: string]: string[];
                    };
                };
            };
        };
        /** @description Unauthenticated */
        CommunitiesAuthenticationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
        /** @description Authorization error */
        CommunitiesAuthorizationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
        /** @description Not found */
        CommunitiesModelNotFoundException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
        /** @description Validation error */
        CommunitiesValidationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Errors overview. */
                    message: string;
                    /** @description A detailed description of each field that failed validation. */
                    errors: {
                        [key: string]: string[];
                    };
                };
            };
        };
        /** @description Unauthorized */
        ConversationsAuthenticationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    message: string;
                };
            };
        };
        /** @description Forbidden */
        ConversationsAuthorizationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    message: string;
                };
            };
        };
        /** @description Not Found */
        ConversationsModelNotFoundException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    message: string;
                };
            };
        };
        /** @description Unprocessable Content */
        ConversationsValidationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    message: string;
                    errors: {
                        [key: string]: string[];
                    };
                };
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "broadcast.index": {
        parameters: {
            query?: {
                name?: string | null;
                device_id?: number | null;
                "status[]"?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
                folder_id?: number | null;
                unclassified?: string | null;
                send_type?: "immediate" | "scheduled" | null;
                device_type?: "business" | "api" | null;
                send_at_from?: string | null;
                send_at_to?: string | null;
                perPage?: number;
                orderBy?: "name" | "created_at" | "updated_at";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BroadcastsResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "broadcast.contacts": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    tags?: string[];
                    some_tags?: string[];
                    exclude_tags?: string[];
                    countries?: string[];
                    /** Format: date-time */
                    date_from?: string | null;
                    /** Format: date-time */
                    date_to?: string | null;
                    only_with_phone?: boolean;
                    only_paused?: boolean;
                    kanban_setting_id?: number | null;
                    kanban_stage_ids?: number[] | null;
                    only_stagnant?: boolean | null;
                    lead_score_categories?: ("insufficient_data" | "hot" | "warm" | "cold")[] | null;
                    lead_score_min?: number | null;
                    lead_score_max?: number | null;
                    per_page?: number | null;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BroadcastContactResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "broadcast.contactsCount": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    tags?: string[];
                    some_tags?: string[];
                    exclude_tags?: string[];
                    countries?: string[];
                    /** Format: date-time */
                    date_from?: string | null;
                    /** Format: date-time */
                    date_to?: string | null;
                    only_with_phone?: boolean;
                    only_paused?: boolean;
                    kanban_setting_id?: number | null;
                    kanban_stage_ids?: number[] | null;
                    only_stagnant?: boolean | null;
                    lead_score_categories?: ("insufficient_data" | "hot" | "warm" | "cold")[] | null;
                    lead_score_min?: number | null;
                    lead_score_max?: number | null;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        contactsCount: number;
                        unreachableCount: number;
                        pausedCount: number;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "broadcast.costTiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BroadcastCostTiersResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
        };
    };
    "broadcast.moveToFolder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MoveBroadcastsToFolderRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        moved: number;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "broadcast.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                broadcast: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BroadcastResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "No tienes permiso para ver este broadcast.";
                    };
                };
            };
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "broadcast.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                broadcast: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "No tienes permiso para eliminar este broadcast.";
                    };
                };
            };
            404: components["responses"]["ConversationsModelNotFoundException"];
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Las campañas que ya fueron enviadas o están saliendo no pueden eliminarse.";
                        /** @constant */
                        error_code: "broadcast_delete_not_allowed";
                    };
                };
            };
        };
    };
    "broadcast.statistics": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                broadcast: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        broadcast_id: number;
                        statistics: {
                            delivered_messages_count: number;
                            readed_messages_count: number;
                            failed_messages_count: number;
                            pending_messages_count: unknown;
                            replied_messages_count: number;
                            skipped_messages_count: number;
                            skipped_by_reason: {
                                [key: string]: string;
                            };
                        };
                        button_interactions: {
                            button_index: number;
                            clicks_count: number;
                        }[];
                    } | {
                        broadcast_id: number;
                        statistics: {
                            delivered_messages_count: string | 0;
                            readed_messages_count: string | 0;
                            failed_messages_count: string | 0;
                            pending_messages_count: unknown;
                            replied_messages_count: number;
                            skipped_messages_count: number;
                            skipped_by_reason: {
                                [key: string]: string;
                            };
                        };
                        button_interactions: {
                            button_index: number;
                            clicks_count: number;
                        }[];
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "broadcast.cost": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                broadcast: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BroadcastCostResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "broadcast.broadcastContacts": {
        parameters: {
            query?: {
                perPage?: number;
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path: {
                broadcast: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "broadcast.cancel": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                broadcast: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Broadcast cancelled.";
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Ese envío ya fue reanudado o cancelado.";
                        /** @constant */
                        error_code: "smart_send_already_transitioned";
                    };
                };
            };
        };
    };
    "broadcast.broadcastMessages": {
        parameters: {
            query: {
                "status[]": "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
                tab?: "all" | "delivered" | "read" | "replied" | "failed" | "skipped" | null;
                perPage?: number;
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path: {
                broadcast: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BroadcastMessageResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "broadcastFolder.index": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BroadcastFolderResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
        };
    };
    "broadcastFolder.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreBroadcastFolderRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BroadcastFolderResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "broadcastFolder.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                broadcastFolder: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateBroadcastFolderRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BroadcastFolderResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "You do not have permission to edit this folder.";
                    };
                };
            };
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "broadcastFolder.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                broadcastFolder: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "You do not have permission to delete this folder.";
                    };
                };
            };
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "contact.index": {
        parameters: {
            query?: {
                name?: string;
                email?: string;
                phone?: string;
                whatsapp_id?: string;
                "country_codes[]"?: string[];
                status?: string;
                image?: string;
                created_at?: string;
                created_from?: string;
                created_to?: string;
                "tag_ids[]"?: number[];
                tag_mode?: "all" | "any" | "exclude";
                "custom_field_ids[]"?: number[];
                custom_field_mode?: "all" | "any" | "exclude";
                custom_field_value?: string;
                custom_field_date_from?: string;
                custom_field_date_to?: string;
                custom_field_numeric_operator?: "lt" | "eq" | "gt";
                custom_field_numeric_value?: number;
                only_with_phone?: string;
                only_with_mac?: string;
                scopeToAdvisor?: string;
                "lead_score_categories[]"?: "insufficient_data" | "hot" | "warm" | "cold";
                lead_score_min?: number;
                lead_score_max?: number;
                lead_score_disqualified?: "include" | "exclude" | "only" | null;
                tag_filters?: {
                    /** @enum {string} */
                    mode: "all" | "any" | "exclude";
                    tag_ids?: number[];
                }[];
                custom_field_filters?: {
                    /** @enum {integer} */
                    type: "0" | "1" | "2" | "3" | "4";
                    /** @enum {string|null} */
                    mode?: "all" | "any" | "exclude" | null;
                    value?: string | null;
                    /** Format: date */
                    date_from?: string | null;
                    /** Format: date */
                    date_to?: string | null;
                    /** @enum {string|null} */
                    numeric_operator?: "lt" | "eq" | "gt" | null;
                    numeric_value?: number | null;
                    /** @enum {string|null} */
                    date_operator?: "lt" | "gt" | "eq" | "period" | null;
                    custom_field_ids?: number[];
                }[];
                perPage?: number;
                orderBy?: "id" | "name" | "email" | "phone" | "status" | "favorite" | "unread_messages" | "created_at" | "updated_at";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContactResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contact.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["StoreContactRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contact.updateOrCreate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    phone: string;
                    name?: string | null;
                    /** Format: email */
                    email?: string | null;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Contacto no encontrado.";
                    };
                };
            };
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contact.attachCustomField": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    customFieldId: number;
                    contactId: number;
                    value: string;
                }[];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": ({
                        /** @constant */
                        message: "No autorizado: el campo personalizado no pertenece al usuario autenticado.";
                        /** @constant */
                        status: 403;
                    } | {
                        /** @constant */
                        message: "No autorizado: el contacto no pertenece al usuario autenticado.";
                        /** @constant */
                        status: 403;
                    } | {
                        /** @constant */
                        message: "Custom field value attached successfully.";
                        /** @constant */
                        status: 201;
                    })[];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contact.detachCustomField": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    customFieldId: number;
                    contactId: number;
                }[];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        messages: string[];
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contact.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactResource"] & Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "contact.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContactRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contact.tags": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContactTagResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "contact.customFields": {
        parameters: {
            query?: {
                name?: string;
                perPage?: number;
            };
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContactCustomFieldResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contact.metaWindow": {
        parameters: {
            query: {
                device_id: number;
            };
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        is_open: boolean;
                        meta_device_id: null;
                    } | {
                        is_open: boolean;
                        meta_device_id: unknown;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contact.contactsByDevice": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path: {
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: (components["schemas"]["ContactResource"] & Record<string, unknown>)[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
        };
    };
    "contact.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    all?: boolean;
                    contactIds?: number[];
                    /** Format: date-time */
                    created_from?: string | null;
                    /** Format: date-time */
                    created_to?: string | null;
                    /** @enum {string|null} */
                    tag_mode?: "all" | "any" | "exclude" | null;
                    tag_ids?: number[] | null;
                    tag_filters?: {
                        tag_ids: number[];
                        /** @enum {string} */
                        mode: "all" | "any" | "exclude";
                    }[] | null;
                    /** @enum {string|null} */
                    custom_field_mode?: "all" | "any" | "exclude" | null;
                    custom_field_ids?: number[] | null;
                    custom_field_value?: string | null;
                    /** Format: date */
                    custom_field_date_from?: string | null;
                    /** Format: date */
                    custom_field_date_to?: string | null;
                    /** @enum {string|null} */
                    custom_field_numeric_operator?: "lt" | "eq" | "gt" | null;
                    custom_field_numeric_value?: number | null;
                    custom_field_filters?: {
                        custom_field_ids: number[];
                        /** @enum {integer} */
                        type: "0" | "1" | "2" | "3" | "4";
                        /** @enum {string|null} */
                        mode?: "all" | "any" | "exclude" | null;
                        value?: string | null;
                        /** Format: date */
                        date_from?: string | null;
                        /** Format: date */
                        date_to?: string | null;
                        /** @enum {string|null} */
                        numeric_operator?: "lt" | "eq" | "gt" | null;
                        numeric_value?: number | null;
                        /** @enum {string|null} */
                        date_operator?: "lt" | "gt" | "eq" | "period" | null;
                    }[] | null;
                    country_codes?: string[];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contactAutomation.pause": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contactAutomation.flows": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContactFlowListResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "contactCard.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreContactCardRequest"];
            };
        };
        responses: {
            /** @description Un mensaje por tarjeta, en el orden de `contact_card_ids`: `queued`, o `failed` (`not_queued`) si no se pudo encolar. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        messages: components["schemas"]["PendingPublicMessage"][];
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "mac_limit_reached";
                        /** @constant */
                        message: "Agotaste tus MACs disponibles. El mensaje fue guardado pero no se pudo enviar.";
                    } | {
                        /** @constant */
                        error: "mac_lockout_24h";
                        /** @constant */
                        message: "Tu cuenta está en bloqueo de 24h por agotamiento de MACs.";
                    };
                };
            };
        };
    };
    "contactLeadScore.show": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactLeadScoreResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contactNote.index": {
        parameters: {
            query?: {
                search?: string | null;
                perPage?: number;
            };
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContactNoteResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contactNote.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreContactNoteRequest"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactNoteResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "contactNote.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
                note: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "conversation.index": {
        parameters: {
            query?: {
                favorites?: boolean;
                ownContacts?: boolean;
                ownAndUnassigned?: boolean;
                perName?: string;
                deviceId?: number;
                contactId?: number;
                advisorId?: number;
                advisorIds?: string;
                activeConversation?: boolean;
                tags?: string;
                kanbanSettingId?: number;
                kanbanStageIds?: string;
                unreadMessages?: boolean;
                onlyWithMac?: boolean;
                cursor?: string;
                updated_since?: string;
                paused?: "true" | "false" | "1" | "0";
                leadScoreCategories?: string | null;
                leadScoreMin?: number;
                leadScoreMax?: number;
                leadScoreDisqualified?: "include" | "exclude" | "only" | null;
                metaWindowOpen?: boolean;
                metaWindowDeviceIds?: string | null;
                perPage?: number;
                orderBy?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            path: string;
                            per_page: number;
                            next_cursor: string | null;
                            prev_cursor: string | null;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "No se pudieron cargar las conversaciones";
                    };
                };
            };
        };
    };
    "conversation.countUnread": {
        parameters: {
            query?: {
                advisorIds?: string;
                favorites?: boolean;
                ownAndUnassigned?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        count: number;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "conversation.countOpen": {
        parameters: {
            query?: {
                advisorIds?: string;
                favorites?: boolean;
                ownAndUnassigned?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        count: number;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "conversation.countClosed": {
        parameters: {
            query?: {
                advisorIds?: string;
                favorites?: boolean;
                ownAndUnassigned?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        count: number;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "conversation.countAll": {
        parameters: {
            query?: {
                advisorIds?: string;
                favorites?: boolean;
                ownAndUnassigned?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        count: number;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "conversation.markAllAsRead": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    advisorIds?: string;
                    favorites?: boolean;
                    ownAndUnassigned?: boolean;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Todas las conversaciones han sido marcadas como leídas";
                        updated_count: number;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "conversation.markAllAsUnread": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    advisorIds?: string;
                    favorites?: boolean;
                    ownAndUnassigned?: boolean;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Todas las conversaciones elegibles fueron marcadas como no leídas";
                        marked_count: number;
                        limit_reached: boolean;
                        contact_ids: {
                            [key: string]: unknown;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "conversation.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    favorite?: boolean;
                    active_conversation?: boolean;
                    unread_messages?: number;
                    adviser_id?: number | null;
                    device_id?: number;
                    text?: string;
                    notes?: string | null;
                    custom_fields?: string[];
                    manually_unread?: boolean;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "conversation.sendMessage": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SendMessageRequest"];
            };
        };
        responses: {
            /** @description El mensaje quedó registrado (`status: queued`) y sale desde la cola. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingSendResult"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            /** @description La extensión del archivo no está soportada y no mandaste `file_type`. */
            415: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error?: string;
                        supported_file_types?: string[];
                    };
                };
            };
            422: components["responses"]["ConversationsValidationException"];
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "mac_limit_reached";
                        /** @constant */
                        message: "Agotaste tus MACs disponibles. El mensaje fue guardado pero no se pudo enviar.";
                    } | {
                        /** @constant */
                        error: "mac_lockout_24h";
                        /** @constant */
                        message: "Tu cuenta está en bloqueo de 24h por agotamiento de MACs.";
                    };
                };
            };
        };
    };
    "conversation.getLatestMessages": {
        parameters: {
            query?: {
                cursor?: string;
                updated_since?: string;
                perPage?: number;
            };
            header?: never;
            path: {
                contactId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ConversationsMessageResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            path: string;
                            per_page: number;
                            next_cursor: string | null;
                            prev_cursor: string | null;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "customField.index": {
        parameters: {
            query?: {
                name?: string;
                description?: string;
                type?: number;
                withContactCount?: boolean;
                perPage?: number;
                orderBy?: "name" | "created_at" | "updated_at";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomFieldResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "customField.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    description?: string | null;
                    type: number;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomFieldResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "customField.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    customFieldIds: string[];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "customField.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customField: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomFieldResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "customField.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customField: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    name?: string;
                    description?: string | null;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomFieldResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "flow.contactFlowHistory": {
        parameters: {
            query?: {
                search?: string;
                status_group?: "en_curso" | "completado" | "invalidado" | "cancelado";
                date_from?: string;
                date_to?: string;
                perPage?: number;
            };
            header?: never;
            path: {
                contactId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "flow.cancelContactFlow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactFlowId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        contact_flow: {
                            id: number;
                            status: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "No se puede cancelar esta automatización. Puede que ya haya finalizado o no exista.";
                    };
                };
            };
        };
    };
    "flow.index": {
        parameters: {
            query?: {
                name?: string;
                folder_id?: number;
                unclassified?: string;
                trigger_type?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
                status?: "active" | "inactive";
                date_from?: string;
                date_to?: string;
                date_field?: "created_at" | "updated_at";
                device_id?: string;
                "device_ids[]"?: number[];
                perPage?: number;
                orderBy?: "name" | "created_at" | "updated_at";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: (components["schemas"]["FlowResource"] & Record<string, unknown>)[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "flow.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                flow: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FlowResource"] & Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "flow.nodes": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path: {
                flow: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NodeResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "flow.activeContacts": {
        parameters: {
            query?: {
                payment_event_type?: "approved" | "pending" | "rejected" | "cancelled" | "refunded" | "chargeback";
            };
            header?: never;
            path: {
                flow: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        active_contacts_count: number;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "flow.activeContactsList": {
        parameters: {
            query?: {
                search?: string;
                perPage?: number;
            };
            header?: never;
            path: {
                flow: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "flow.flowContactsList": {
        parameters: {
            query?: {
                search?: string;
                status_group?: "en_curso" | "completado" | "invalidado" | "cancelado";
                date_from?: string;
                date_to?: string;
                perPage?: number;
            };
            header?: never;
            path: {
                flow: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "folder.index": {
        parameters: {
            query?: {
                name?: string | null;
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: (components["schemas"]["FolderResource"] & Record<string, unknown>)[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "folder.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreFolderRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FolderResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "folder.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                folder: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FolderResource"] & Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "folder.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                folder: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateFolderRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "folder.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                folder: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "forwardMessage.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
                message: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ForwardMessageRequest"];
            };
        };
        responses: {
            /** @description Un ítem por destino, en el orden pedido, cada uno con su `message` (o `null`: en cola sin registrar todavía, bloqueado, o no se pudo leer). */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingForwardResult"][];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "interactiveMessage.storePoll": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StorePollRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "interactiveMessage.storeEvent": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreEventRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanSetting.index": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: (components["schemas"]["KanbanSettingResource"] & Record<string, unknown>)[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
        };
    };
    "kanbanSetting.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreKanbanSettingRequest"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KanbanSettingResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanSetting.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KanbanSettingResource"] & Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "kanbanSetting.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateKanbanSettingRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KanbanSettingResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanSetting.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "kanbanSetting.members": {
        parameters: {
            query?: {
                "contact_ids[]"?: number[];
            };
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        member_contact_ids: number[];
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanStage.contactStages": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContactKanbanStageBoardResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "kanbanStage.moveContact": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MoveContactStageRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanStage.bulkMove": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkMoveStageRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanStage.removeContact": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RemoveContactStageRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanStage.bulkRemove": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkRemoveStageRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanStage.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreKanbanStageRequest"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KanbanStageResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanStage.reorder": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderKanbanStagesRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KanbanStageResource"][];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanStage.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kanbanSetting: number;
                stage: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateKanbanStageRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KanbanStageResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanStage.destroy": {
        parameters: {
            query?: {
                reassign_to_stage_id?: number | null;
            };
            header?: never;
            path: {
                kanbanSetting: number;
                stage: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "kanbanStage.contacts": {
        parameters: {
            query?: {
                name?: string;
                search?: string;
                messages?: "all" | "read" | "unread";
                dateFrom?: string;
                dateTo?: string;
                dateBasis?: "board_entry" | "created" | "last_activity";
                adviserId?: string;
                valueMin?: number;
                valueMax?: number;
                stagnant?: boolean;
                "tagIds[]"?: number[];
                "leadScoreCategories[]"?: "insufficient_data" | "hot" | "warm" | "cold";
                leadScoreMin?: number;
                leadScoreMax?: number;
                leadScoreDisqualified?: "include" | "exclude" | "only" | null;
                page?: number;
                perPage?: number;
                orderBy?: "name" | "last_message_time" | "stage_since";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path: {
                kanbanSetting: number;
                stage: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContactResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "leadScoreDistribution.show": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeadScoreDistributionResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "leadScoreEventIngest.ingest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IngestLeadScoreEventsRequest"];
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        success: boolean;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "leadScoreSettings.show": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeadScoreSettingsResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "leadScoreSettings.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeadScoreSettingsResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "leadScoreSettings.adjust": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreLeadScoreAdjustmentRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        score: number;
                        signals_count: number;
                        category: string;
                        confidence: string;
                        disqualified: boolean;
                        disqualified_at: string | null;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "mac.status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string | {
                        enforcement_enabled: boolean;
                        current_count: number;
                        limit: number;
                        remaining: number;
                        usage_percentage: number;
                        /** @constant */
                        state: "normal";
                        grace: null;
                        period_start: null;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
        };
    };
    "mac.contacts": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
        };
    };
    "mac.contactsHistory": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
        };
    };
    "message.sendMessage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    device_id: number;
                    text?: string;
                    contact_id: number;
                    file?: string;
                    temporal_uuid?: string;
                    local_id?: string | null;
                    note?: boolean;
                    client_reference?: components["schemas"]["PendingClientReference"];
                    file_type?: components["schemas"]["PendingFileType"];
                    file_name?: components["schemas"]["PendingFileName"];
                };
            };
        };
        responses: {
            /** @description El mensaje quedó registrado (`status: queued`) y sale desde la cola. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingSendResult"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            /** @description La extensión del archivo no está soportada y no mandaste `file_type`. */
            415: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error?: string;
                        supported_file_types?: string[];
                    };
                };
            };
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "messageReaction.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
                message: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreMessageReactionRequest"];
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "messageReaction.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
                message: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: string;
                    };
                };
            };
        };
    };
    "messageTemplate.templates": {
        parameters: {
            query?: {
                name?: string | null;
                uid?: string | null;
                language_code?: string | null;
                status?: "PENDING" | "APPROVED" | "REJECTED" | "PENDING_DELETION" | "PAUSED" | "DISABLED" | "ARCHIVED" | null;
                category?: string | null;
                deviceId?: number | null;
                type?: "text" | "image" | "document" | "video" | "location" | "default" | null;
                created_by_webhook?: boolean;
                perPage?: number;
                orderBy?: "name" | "created_at" | "updated_at";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TemplateResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "messageTemplate.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreMessageTemplateRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TemplateResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "messageTemplate.template": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TemplateResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "messageTemplate.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateMessageTemplateRequest"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Approved templates can be edited up to 10 times in a 30-day period or once in a 24-hour period.";
                    } | {
                        /** @constant */
                        error: "Templates with pending status cannot be updated.";
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "messageTemplate.quickReplyButtons": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown[];
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "messageTemplate.send": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                device: number;
                template: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    phone: string;
                    contact_id: number;
                    template_variables?: {
                        body?: (string | null)[];
                    };
                    client_reference?: components["schemas"]["PendingClientReference"];
                };
            };
        };
        responses: {
            /** @description La plantilla quedó registrada como mensaje (`status: queued`). */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingSendResult"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Invalid params format";
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            /** @description `template_unresolved_placeholder`: una variable apunta a un campo que no existe (`placeholders`, hasta 20, y `count`); `recipient_mismatch`; o una regla de envío. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                        placeholders?: string[];
                        count?: number;
                    };
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "An error occurred, please try again later";
                    };
                };
            };
            /** @description Bad Gateway */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Failed to send template";
                        error_code: string | null;
                        placeholders: string | string[];
                        details: string;
                    };
                };
            };
        };
    };
    "messageTemplate.delete": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                device: number;
                template: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "paymentProduct.index": {
        parameters: {
            query?: {
                perPage?: number;
            };
            header?: never;
            path: {
                platform: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PaymentProductResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "quickReply.index": {
        parameters: {
            query?: {
                search?: string;
                perPage?: number;
                orderBy?: "created_at" | "updated_at";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["QuickReplyResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "quickReply.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    message?: string | null;
                    file?: string | null;
                    type: components["schemas"]["MessageTypeEnum"];
                    visibility: components["schemas"]["QuickReplyVisibilityEnum"];
                    agent_ids?: number[] | null;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QuickReplyResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "quickReply.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                quickReply: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QuickReplyResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "quickReply.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                quickReply: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    message?: string | null;
                    file?: string | null;
                    type: components["schemas"]["MessageTypeEnum"];
                    visibility: components["schemas"]["QuickReplyVisibilityEnum"];
                    agent_ids?: number[] | null;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QuickReplyResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "quickReply.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                quickReply: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "salesDashboard.metrics": {
        parameters: {
            query?: {
                window?: "7" | "30" | "90";
                page?: number;
                per_page?: number;
                "event_type[]"?: components["schemas"]["PaymentEventTypeEnum"][];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SalesMetricsResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "salesDashboard.funnel": {
        parameters: {
            query?: {
                window?: "7" | "30" | "90";
                page?: number;
                per_page?: number;
                "event_type[]"?: components["schemas"]["PaymentEventTypeEnum"][];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        conversations: number;
                        qualified: number | null;
                        purchases: {
                            buyers: number;
                            amounts: unknown[];
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "salesDashboard.byPlatform": {
        parameters: {
            query?: {
                window?: "7" | "30" | "90";
                page?: number;
                per_page?: number;
                "event_type[]"?: components["schemas"]["PaymentEventTypeEnum"][];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        platforms: {
                            platform: string;
                            connected: boolean;
                            totals: {
                                currency: string;
                                total_minor: number;
                            }[];
                        }[];
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "salesDashboard.index": {
        parameters: {
            query?: {
                window?: "7" | "30" | "90";
                page?: number;
                "event_type[]"?: components["schemas"]["PaymentEventTypeEnum"][];
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SaleResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "tag.index": {
        parameters: {
            query?: {
                name?: string;
                withContactCount?: boolean;
                perPage?: number;
                orderBy?: "name" | "created_at" | "updated_at";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TagResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "tag.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    description?: string | null;
                    color?: string | null;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "tag.show": {
        parameters: {
            query?: {
                withContactCount?: boolean;
            };
            header?: never;
            path: {
                tag: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "tag.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tag: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    description?: string | null;
                    color?: string | null;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Ya existe un tag con este nombre. */
                        message: string;
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "tag.contacts": {
        parameters: {
            query?: {
                perPage?: number;
                orderBy?: "name" | "last_message_time";
                orderByMethod?: "asc" | "desc";
                sortBy?: "asc" | "desc";
            };
            header?: never;
            path: {
                tag: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContactResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "tag.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    tagIds: string[];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "ticket.index": {
        parameters: {
            query?: {
                status?: "0" | "1" | "2";
                userId?: number;
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "ticket.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    userId: number;
                    contactId: number;
                    title: string;
                    description: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ticket"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Contacto no encontrado.";
                    };
                };
            };
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "ticket.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ticket"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
        };
    };
    "ticket.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    title: string;
                    description: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ticket"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "ticket.assignTicketToUser": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    ticketId: number;
                    userId: number;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": "Ticket successfully assigned";
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "ticket.closeTicket": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
        };
    };
    "ticket.reOpenTicket": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": "Ticket re-opened";
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
        };
    };
    "user.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConversationsUserResource"] | Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
        };
    };
    "user.index": {
        parameters: {
            query?: {
                name?: string;
                email?: string;
                perPage?: number;
                orderBy?: "name" | "email" | "created_at";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            path: string;
                            per_page: number;
                            to: number | null;
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            422: components["responses"]["ConversationsValidationException"];
        };
    };
    "campaign.index": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: string;
                orderByMethod?: string;
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `CampaignsResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CampaignsResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "campaign.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CampaignResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CampaignResource"] & Record<string, unknown>;
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "campaignConditional.index": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `CampaignConditionalResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["CampaignConditionalResource"] & Record<string, unknown>)[];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "campaign.availableGroups": {
        parameters: {
            query: {
                device_id: number;
                type: "groups" | "ad-groups" | "channels";
                page?: number;
                pageSize?: number;
                name?: string | null;
            };
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `AvailableGroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AvailableGroupResource"][];
                        meta: string;
                    } | string;
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "campaign.groups": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: string;
                orderByMethod?: string;
                perPage?: number;
                deviceId?: number;
                status?: number;
                origin?: "0" | "1";
                adminConnection?: "1" | "2" | "3";
                adminPhone?: string;
            };
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `GroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["GroupResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "campaign.indexPipelines": {
        parameters: {
            query?: {
                page?: number;
                per_page?: number;
                status?: "scheduled" | "running" | "completed" | "failed" | "cancelled";
                action_type?: "add" | "new" | "name" | "description" | "photo" | "participants" | "remove-participants" | "administrators" | "remove-administrators" | "join_group" | "members_can_send_messages" | "remove_group";
                orderBy?: "id" | "name" | "group_index" | "created_at" | "updated_at";
                orderByMethod?: "asc" | "desc";
            };
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        campaign: {
                            id: number;
                            name: string;
                        };
                        data: {
                            id: number;
                            pipeline_id: string;
                            name: string | null;
                            group_index: number | null;
                            created_at: string | null;
                            summary: {
                                total_actions: number;
                                total_action_groups: string;
                                status_counts: {
                                    scheduled: string;
                                    running: string;
                                    completed: string;
                                    failed: string;
                                    cancelled: string;
                                    pending_confirmation: string;
                                    skipped: string;
                                };
                                progress_percentage: number;
                            };
                        }[];
                        meta: {
                            current_page: number;
                            last_page: number;
                            per_page: number;
                            total: number;
                            from: number | null;
                            to: number | null;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "campaign.showPipeline": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
                /** @description The pipeline ID */
                pipeline: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        pipeline_id: string;
                        id: number;
                        campaign: {
                            id: number;
                            name: string;
                        };
                        summary: {
                            name: string | null;
                            total_actions: number;
                            total_action_groups: string;
                            status_counts: {
                                scheduled: string;
                                running: string;
                                completed: string;
                                failed: string;
                                cancelled: string;
                                pending_confirmation: string;
                                skipped: string;
                            };
                            progress_percentage: number;
                            created_at: string | null;
                            scheduled_at: string | null;
                            completed_at: string | null;
                        };
                        actions: string[];
                    } | null;
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "operationPlan.config": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        nudge_group_threshold: number;
                        default_daily_cap: number;
                        min_spacing_minutes: number;
                        confirmation_spacing_minutes: number;
                        default_window_start: string;
                        default_window_end: string;
                        daily_cap_max: number;
                        /**
                         * @description Change `scheduled-bulk-admin-operations`, increment 8 (design.md
                         *     §D10.2): lets the client show/hide the "include weekends" toggle.
                         */
                        weekends_enabled: boolean;
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "operationPlan.index": {
        parameters: {
            query?: {
                page?: number;
                per_page?: number;
            };
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        campaign: {
                            id: number;
                            name: string;
                        };
                        data: components["schemas"]["OperationPlanSummaryResource"][];
                        meta: {
                            current_page: number;
                            last_page: number;
                            per_page: number;
                            total: number;
                            from: number | null;
                            to: number | null;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "operationPlan.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
                /** @description The plan ID */
                plan: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `OperationPlanResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OperationPlanResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "campaign.actions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ActionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ActionResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "groupManagement.actionGroup": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: "name" | "status" | "created_at" | "updated_at";
                orderByMethod?: "asc" | "desc";
                page?: number;
                perPage?: number;
            };
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
                /** @description The action ID */
                action: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ActionGroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ActionGroupResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "group.index": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: string;
                orderByMethod?: string;
                type?: "1" | "2" | "3" | "4";
                perPage?: number;
                status?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
                deviceId?: number;
                noCampaign?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `GroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["GroupResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                            cloud_api_groups_enabled: string | boolean;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "pendingGroups.create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    name: string;
                    description?: string | null;
                    /** @description Solo con un número QR. Sin el número que ejecuta. */
                    participants?: string[];
                    /** @description Solo con un número oficial. */
                    join_approval_required?: boolean;
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "group.groups": {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                name?: string | null;
            };
            header?: never;
            path: {
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `GroupMinResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["GroupMinResource"][];
                        meta: {
                            current_page: unknown;
                            last_page: unknown;
                            per_page: unknown;
                            total: number;
                        };
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string | "An error has occurred";
                    } | {
                        /** @constant */
                        error: "An error has occurred";
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Device not found";
                    };
                };
            };
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "group.adGroups": {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                name?: string | null;
            };
            header?: never;
            path: {
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `GroupMinResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["GroupMinResource"][];
                        meta: {
                            current_page: unknown;
                            last_page: unknown;
                            per_page: unknown;
                            total: number;
                        };
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string | "An error has occurred";
                    } | {
                        /** @constant */
                        error: "An error has occurred";
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Device not found";
                    };
                };
            };
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "group.channels": {
        parameters: {
            query?: {
                name?: string | null;
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `ChannelMinResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ChannelMinResource"][];
                        meta: {
                            current_page: unknown;
                            last_page: unknown;
                            per_page: unknown;
                            total: number;
                        };
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Invalid response format from WAPI";
                    } | {
                        error: string | "An error has occurred";
                    } | {
                        /** @constant */
                        error: "An error has occurred";
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Device not found";
                    };
                };
            };
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "groupMetadata.show": {
        parameters: {
            query: {
                device_id: number;
                group_uid: string;
                type?: "groups" | "ad-groups" | "channels";
            };
            header?: never;
            path: {
                /** @description Plain string segment — not a model binding. */
                groupUid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description `GroupMetadataResource`
             *
             *     `ChannelMetadataResource`
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupMetadataResource"] | components["schemas"]["ChannelMetadataResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Group not found or not accessible.";
                    } | {
                        /** @constant */
                        message: "Device not found or access denied.";
                    };
                };
            };
            422: components["responses"]["CommunitiesValidationException"];
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Gateway error. Please try again later.";
                    };
                };
            };
        };
    };
    "group.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group uid */
                group: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `GroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "group.actions": {
        parameters: {
            query?: {
                orderBy?: "status" | "created_at" | "updated_at" | "completed_at";
                orderByMethod?: "asc" | "desc";
                page?: number;
                perPage?: number;
            };
            header?: never;
            path: {
                /** @description The group uid */
                group: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ActionGroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ActionGroupResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "group.messages": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group uid */
                group: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `MessageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CommunitiesMessageResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "pendingGroups.sendMessage": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    /** @enum {string} */
                    type: "text" | "image" | "video" | "audio" | "document";
                    /** @description Solo con `type: text`. */
                    text?: string;
                    /** @description Una URL `https` con la extensión del tipo. Solo con archivos. */
                    media_url?: string;
                    /** @description Solo imagen o video. */
                    caption?: string | null;
                    /** @description Solo documento. */
                    file_name?: string | null;
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "group.scheduledMessages": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: string;
                orderByMethod?: string;
                perPage?: number;
            };
            header?: never;
            path: {
                /** @description The group uid */
                group: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ScheduledMessageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ScheduledMessageResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "campaign.participants": {
        parameters: {
            query?: {
                phone?: string | null;
                orderBy?: string | null;
                orderByMethod?: "asc" | "desc" | null;
                perPage?: number | null;
            };
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ParticipantResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ParticipantResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "campaign.campaignParticipants": {
        parameters: {
            query?: {
                search?: string | null;
                status?: "active" | "exited" | null;
                orderBy?: "joined_at" | "left_at" | null;
                orderByMethod?: "asc" | "desc" | "ASC" | "DESC" | null;
                perPage?: number | null;
                start_date?: string | null;
                end_date?: string | null;
                timezone?: string | null;
                date_rule?: "1" | "2" | "3" | null;
                selection_type?: "all" | "none" | null;
                "groups_uids[]"?: string[];
            };
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `CampaignParticipantResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CampaignParticipantResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "campaign.participantEvents": {
        parameters: {
            query?: {
                search?: string | null;
                event_type?: "all" | "join" | "leave" | null;
                page?: number | null;
                perPage?: number | null;
                start_date?: string | null;
                end_date?: string | null;
                timezone?: string | null;
                date_mode?: "both" | "joins_only" | "leaves_only" | null;
                selection_type?: "all" | "none" | null;
                "groups_uids[]"?: string[];
                participant_filter?: "all" | "active" | null;
            };
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ParticipantEventResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ParticipantEventResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "group.participants": {
        parameters: {
            query: {
                groupUid: string;
                phone?: string;
                isAdmin?: "true" | "false" | "1" | "0";
                eligibleForAdmin?: "true" | "false" | "1" | "0";
                orderBy?: string;
                orderDirection?: "asc" | "desc";
                perPage?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ParticipantResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ParticipantResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "group.participantEvents": {
        parameters: {
            query?: {
                search?: string | null;
                event_type?: "all" | "join" | "leave" | null;
                page?: number | null;
                perPage?: number | null;
                start_date?: string | null;
                end_date?: string | null;
                timezone?: string | null;
                date_mode?: "both" | "joins_only" | "leaves_only" | null;
                selection_type?: "all" | "none" | null;
                "groups_uids[]"?: string[];
                participant_filter?: "all" | "active" | null;
            };
            header?: never;
            path: {
                /** @description The group uid */
                group: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ParticipantEventResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ParticipantEventResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "scheduledMessage.index": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: string;
                orderByMethod?: string;
                perPage?: number;
                status?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
                /**
                 * @description The `boolean` rule only accepts PHP-native booleans/0/1/"0"/"1" — a
                 *     query-string boolean travels as the literal string "true"/"false" and
                 *     was rejected with a 422 before ever reaching the filter_var() coercion
                 *     below. Whitelist the common wire forms explicitly instead.
                 */
                only_needs_connection?: "true" | "false" | "1" | "0";
                folder_id?: number | null;
                unclassified?: "true" | "false" | "1" | "0";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ScheduledMessageIndexResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ScheduledMessageIndexResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "scheduledMessage.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The scheduled message ID */
                scheduledMessage: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `App.Modules.ScheduledMessages.Resources.ScheduledMessageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["App.Modules.ScheduledMessages.Resources.ScheduledMessageResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "scheduledMessage.groups": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: string;
                orderByMethod?: string;
                perPage?: number;
                status?: number;
            };
            header?: never;
            path: {
                /** @description The scheduled message ID */
                scheduledMessage: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LengthAwarePaginator"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "scheduledMessage.groupMessages": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: "group_message_template.id" | "group_message_template.status" | "groups.name" | "group_message_template.created_at";
                orderByMethod?: "asc" | "desc";
                perPage?: number;
                status?: number;
                /**
                 * @description Optional occurrence filter (D3): local calendar date (Y-m-d) of a run,
                 *     resolved into a UTC window by ScheduledMessageRunService. Additive —
                 *     omitting it preserves the exact previous behaviour (MAX(id) globally).
                 */
                run?: string;
            };
            header?: never;
            path: {
                /** @description The scheduled message ID */
                scheduledMessage: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            template_id: string;
                            group_id: string;
                            group_name: string;
                            campaign_name: string;
                            audience: string | 0;
                            schedule_message_status: string;
                            error_info: unknown;
                            totaL_readed: unknown;
                            total_played: unknown;
                            reactions_count: unknown;
                            clicks: string | 0;
                            sent_by: string[];
                            attempts: number;
                            last_attempt_at: string;
                        }[];
                        links: {
                            first: string;
                            last: string;
                            prev: string | null;
                            next: string;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: string;
                            per_page: number;
                            to: number | null;
                            total: string;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "scheduledMessage.readedAndPlayedRates": {
        parameters: {
            query?: {
                run?: string;
            };
            header?: never;
            path: {
                /** @description The scheduled message ID */
                scheduledMessage: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        audience: number | null;
                        total_readed: number | null;
                        total_played: number | null;
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "scheduledMessage.runs": {
        parameters: {
            query?: {
                perPage?: number;
                page?: number;
            };
            header?: never;
            path: {
                /** @description The scheduled message ID */
                scheduledMessage: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `ScheduledMessageRunsResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScheduledMessageRunsResource"][];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "scheduledMessageFolder.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `ScheduledMessageFolderResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ScheduledMessageFolderResource"][];
                        meta: {
                            all_count: number;
                            unclassified_count: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
        };
    };
    "scheduledMessage.responses": {
        parameters: {
            query?: {
                /**
                 * @description Coordinator finding (LOW): an unbounded `page` combined with
                 *     `perPage` lets `($page-1)*$perPage` grow arbitrarily, which
                 *     `MessageResponseReader::paginate()`'s out-of-range
                 *     short-circuit already makes cheap (no SELECT runs), but the
                 *     cap here still guards against a pathological/overflowing
                 *     offset value reaching that arithmetic at all. 100,000 is
                 *     generous headroom above the measured production worst case
                 *     (39,002 rows for a single poll/event, i.e. ≤39,002 pages even
                 *     at perPage=1).
                 */
                page?: number;
                perPage?: number;
                type?: "poll" | "event";
            };
            header?: never;
            path: {
                /** @description The scheduled message ID */
                scheduledMessage: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `MessageResponseResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MessageResponseResource"][];
                        meta: {
                            total: string;
                            per_page: number;
                            current_page: number;
                            last_page: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "scheduledMessage.responseTags": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The scheduled message ID */
                scheduledMessage: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            message_template_id: string;
                            block_type: string;
                            options: string;
                            responses_total: string;
                            untagged_total: string;
                        }[];
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "stats.participantStats": {
        parameters: {
            query?: {
                start_date?: string;
                end_date?: string;
                unit?: "day" | "month" | "hour";
                type?: "in" | "out";
                target?: "groups" | "campaigns";
                "ids[]"?: number[];
                fill_missing?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        in: {
                            data: string[];
                            total_participants: string;
                        };
                        out: {
                            data: string[];
                            total_participants: string;
                        };
                    } | {
                        data: string[];
                        total_participants: string;
                    } | {
                        in: {
                            data: string[];
                            total_participants: number;
                        };
                        out: {
                            data: string[];
                            total_participants: number;
                        };
                    } | {
                        data: string[];
                        total_participants: number;
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "stats.activeParticipants": {
        parameters: {
            query?: {
                start_date?: string;
                end_date?: string;
                unit?: "day" | "month" | "hour";
                target?: "groups" | "campaigns";
                "ids[]"?: number[];
                status?: "active" | "inactive";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        active: {
                            data: {
                                date: string;
                                count: number;
                            }[];
                            total_participants: string;
                        };
                        inactive: {
                            data: {
                                date: string;
                                count: number;
                            }[];
                            total_participants: string;
                        };
                    } | {
                        data: {
                            date: string;
                            count: number;
                        }[];
                        total_participants: string;
                    } | {
                        active: {
                            data: string[];
                            total_participants: number;
                        };
                        inactive: {
                            data: string[];
                            total_participants: number;
                        };
                    } | {
                        data: string[];
                        total_participants: number;
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "stats.groupStats": {
        parameters: {
            query: {
                start_date?: string;
                end_date?: string;
                unit: "day" | "month" | "hour";
                fill_missing?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: string[];
                        total_groups: string;
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "stats.clickStats": {
        parameters: {
            query?: {
                start_date?: string;
                end_date?: string;
                unit?: "day" | "month" | "hour";
                target?: "groups" | "campaigns";
                "ids[]"?: number[];
                fill_missing?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: string[];
                        total_clicks: string;
                    } | {
                        data: string[];
                        total_clicks: number;
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "stats.statsRecords": {
        parameters: {
            query?: {
                start_date?: string;
                end_date?: string;
                target?: "groups" | "campaigns";
                "ids[]"?: number[];
                page?: number;
                per_page?: number;
                "devices[]"?: string[];
                "countries[]"?: string[];
                search?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            address: string;
                            browser: string;
                            country: string;
                            device: string;
                            language: string;
                            platform: string;
                            referrer: string;
                            group: {
                                id: string;
                                name: string;
                            };
                            phone: string;
                            email: string;
                            name: string;
                            metadata: unknown;
                            created_at: string;
                            updated_at: string;
                        }[];
                        total: number;
                        per_page: string | 50;
                        current_page: string | 1;
                        last_page: number;
                    } | {
                        data: string[];
                        total: number;
                        per_page: string | 50;
                        current_page: string | 1;
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "stats.countryMetrics": {
        parameters: {
            query?: {
                start_date?: string;
                end_date?: string;
                target?: "groups" | "campaigns";
                "ids[]"?: number[];
                "countries[]"?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            summary: {
                                total_contacts: string;
                                total_countries: number;
                                total_clicks: string;
                                total_entries: string;
                                total_exits: string;
                            };
                            countries: {
                                country_code: string;
                                country_name: string;
                                contacts: number;
                                percentage: number;
                                clicks: number;
                                entries: number;
                                entry_rate: number;
                                exits: number;
                            }[];
                        } | {
                            summary: {
                                total_contacts: number;
                                total_countries: number;
                                total_clicks: number;
                                total_entries: number;
                                total_exits: number;
                            };
                            countries: string[];
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "stats.countryList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            country_code: string | null;
                            country_name: string | null;
                        }[];
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
        };
    };
    "campaignWebhook.index": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `CampaignWebhookResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CampaignWebhookResource"][];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
        };
    };
    "campaignWebhook.logs": {
        parameters: {
            query?: {
                start_date?: string;
                end_date?: string;
                status?: "0" | "1" | "2";
                type?: "0" | "1" | "2";
                per_page?: number;
            };
            header?: never;
            path: {
                /** @description The campaign ID */
                campaign: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `CampaignWebhookLogResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CampaignWebhookLogResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            404: components["responses"]["CommunitiesModelNotFoundException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "alertCampaign.index": {
        parameters: {
            query?: {
                page?: number | null;
                per_page?: number | null;
                search?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `AlertCampaignResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AlertCampaignResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "No se pudieron cargar las campañas en este momento.";
                        /** @constant */
                        error: "groups_unavailable";
                    };
                };
            };
        };
    };
    "alertCatalog.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `AlertCatalogResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertCatalogResource"][];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "alertDailyReport.show": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `AlertDailyReportResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertDailyReportResource"] | {
                        enabled: boolean;
                        /** @constant */
                        send_time: "08:00";
                        all_campaigns: boolean;
                        campaign_ids: string[];
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "alertDailyReport.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateAlertDailyReportRequest"];
            };
        };
        responses: {
            /** @description `AlertDailyReportResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertDailyReportResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "alertDestination.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Array of `AlertDestinationResource`
             *
             *     Paginated set of `AlertDestinationResource`
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertDestinationResource"][] | {
                        data: components["schemas"]["AlertDestinationResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "alertDestination.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreAlertDestinationRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "alertDestination.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Destino no encontrado.";
                    };
                };
            };
        };
    };
    "alertDestination.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateAlertDestinationRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "alertOtp.send": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Código enviado.";
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Destino no encontrado.";
                    };
                };
            };
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Alcanzaste el límite de reenvíos por hora. Intenta más tarde.";
                    } | {
                        /** @constant */
                        message: "Debes esperar antes de solicitar un nuevo código.";
                        retry_after_seconds: number;
                    };
                };
            };
        };
    };
    "alertOtp.verify": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["VerifyAlertOtpRequest"];
            };
        };
        responses: {
            /** @description `AlertDestinationResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertDestinationResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Destino no encontrado.";
                    };
                };
            };
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "alertQuietHour.show": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `AlertQuietHourResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertQuietHourResource"] | {
                        enabled: boolean;
                        start_time: null;
                        end_time: null;
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "alertQuietHour.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateAlertQuietHourRequest"];
            };
        };
        responses: {
            /** @description `AlertQuietHourResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertQuietHourResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "alertSetting.upsert": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertAlertSettingRequest"];
            };
        };
        responses: {
            /** @description `AlertSettingResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertSettingResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Destino no encontrado.";
                    };
                };
            };
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "alertWebhookTest.test": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status: number | null;
                        ok: boolean;
                        latency: number;
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Destino no encontrado.";
                    };
                };
            };
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        status: null;
                        ok: boolean;
                        latency: number;
                    } | {
                        /** @constant */
                        message: "Solo los destinos webhook pueden ser probados.";
                    };
                };
            };
        };
    };
    "capiConnection.dataset": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `WabaCapiDatasetResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown> | components["schemas"]["WabaCapiDatasetResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "capiConnection.test": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "capiConnection.datasets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of items */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown> | string[];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "customDomain.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Array of `CustomDomainResource`
             *
             *     Paginated set of `CustomDomainResource`
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomDomainResource"][] | {
                        data: components["schemas"]["CustomDomainResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "customDomain.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreCustomDomainRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "customDomain.verify": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customDomain: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CustomDomainResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown> | components["schemas"]["CustomDomainResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "customDomain.switchValidationMethod": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customDomain: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SwitchValidationMethodRequest"];
            };
        };
        responses: {
            /** @description `CustomDomainResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown> | components["schemas"]["CustomDomainResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "customDomain.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customDomain: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "device.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Array of `DeviceResource`
             *
             *     Paginated set of `DeviceResource`
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceResource"][] | {
                        data: components["schemas"]["DeviceResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "device.me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": null;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "El número no está conectado a WhatsApp. Conectalo desde el panel de Funnelchat y volvé a intentar.";
                        /** @constant */
                        error: "device_not_connected";
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string | "An error has occurred";
                    };
                };
            };
        };
    };
    "device.checkPhone": {
        parameters: {
            query: {
                phone: string;
            };
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": null;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "El número no está conectado a WhatsApp. Conectalo desde el panel de Funnelchat y volvé a intentar.";
                        /** @constant */
                        error: "device_not_connected";
                    };
                };
            };
            422: components["responses"]["AccountsValidationException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string | "An error has occurred";
                    };
                };
            };
        };
    };
    "device.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `DeviceResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "device.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    alias?: string | null;
                    color?: string | null;
                    /** Format: uri */
                    image?: string | null;
                    number?: string | null;
                    /** Format: date-time */
                    first_conecction_at?: string | null;
                    is_business?: boolean;
                    phone_number_id?: string;
                    waba_id?: string;
                    code?: string;
                    whatsApp_business_app?: boolean;
                    /**
                     * @description Meta Conversions API (CAPI) opt-in consent — capi-meta-connection Inc 3
                     *     (design.md D3). Optional: only meaningful on the Meta branch, and even
                     *     there it is a no-op unless the `capi` feature flag is enabled for the
                     *     account (defense in depth, see updateMetaDevice below).
                     */
                    capi_consent?: boolean;
                };
            };
        };
        responses: {
            /** @description `DeviceResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceResource"];
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Unsupported provider";
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: components["responses"]["AccountsValidationException"];
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "META_RATE_LIMIT";
                        meta_error_code: number | null;
                        /** @constant */
                        message: "Demasiados intentos para este número en poco tiempo. Espera unos minutos y vuelve a intentar.";
                        meta_response: unknown;
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "No phone number found for this WABA";
                        message: unknown;
                    };
                };
            };
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "META_ERROR";
                        meta_error_code: number | null;
                        /** @constant */
                        message: "Tu número tiene la verificación en dos pasos activada en WhatsApp, y por eso no podemos conectarlo. Desactívala desde la app de WhatsApp (Ajustes → Cuenta → Verificación en dos pasos → Desactivar) y vuelve a intentar la conexión.";
                        meta_response: unknown;
                        meta_error_subcode: number | null;
                        meta_user_title: unknown;
                        meta_user_message: unknown;
                    } | {
                        /** @constant */
                        error: "META_ERROR";
                        meta_error_code: null;
                        /** @constant */
                        message: "No pudimos completar la conexión con Meta. Intenta nuevamente en unos minutos. Si el problema persiste, contacta a soporte.";
                    };
                };
            };
        };
    };
    "device.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "device.reset": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Device reset processed successfully";
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "An error occurred while resetting the device";
                    };
                };
            };
        };
    };
    "device.updateWebhookReceived": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "device.updateWebhookReceivedAndDelivery": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "device.clean": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "device.chats": {
        parameters: {
            query?: {
                phone?: string;
                page?: number;
                pageSize?: number;
                type?: "1" | "2";
            };
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        phones: unknown[];
                        total: number;
                        page: string | 1;
                        per_page: string | 25;
                        last_page: number;
                    } | null;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "El número no está conectado a WhatsApp. Conectalo desde el panel de Funnelchat y volvé a intentar.";
                        /** @constant */
                        error: "device_not_connected";
                    };
                };
            };
            422: components["responses"]["AccountsValidationException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string | "An error has occurred";
                    };
                };
            };
        };
    };
    "device.openConversations": {
        parameters: {
            query: {
                "phones[]": string[];
            };
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown> | unknown[];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "device.messageQueue": {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[] | Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "device.deleteMessageQueue": {
        parameters: {
            query: {
                "messageUids[]": string[];
            };
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown> | unknown[];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "device.getQueueCount": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[] | Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Upstream gateway error";
                    };
                };
            };
        };
    };
    "device.clearQueue": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[] | Record<string, unknown>;
                };
            };
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "device.status": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "device.extensionToken": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `ExtensionTokenResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExtensionTokenResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "deviceConnectionEvent.index": {
        parameters: {
            query?: {
                orderBy?: string;
                orderByMethod?: string;
                perPage?: number;
            };
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `DeviceConnectionEventResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DeviceConnectionEventResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "deviceDisconnectSurvey.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `DisconnectSurveyResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DisconnectSurveyResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "deviceDisconnectSurvey.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreDisconnectReasonRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "deviceFleetLogs.index": {
        parameters: {
            query?: {
                range?: "1h" | "6h" | "24h" | "7d" | "30d" | null;
                from?: string | null;
                to?: string | null;
                only_errors?: boolean | null;
                exclude_sends?: boolean | null;
                "methods[]"?: string[];
                cursor?: string | null;
                limit?: number | null;
                per_device_cap?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DeviceFleetLogResource"][];
                        devices: {
                            device_id: number;
                            label: string;
                            connected: boolean;
                            activity_count: number;
                            truncated: string | boolean;
                        }[];
                        next_cursor: string;
                        has_more: string;
                        window: {
                            from: string;
                            to: string;
                        };
                        summary: string;
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "deviceHealth.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `DeviceHealthDetailResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceHealthDetailResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "device_not_meta";
                        /** @constant */
                        message: "Este dispositivo no usa la API de WhatsApp Cloud de Meta.";
                    };
                };
            };
        };
    };
    "deviceHealth.refresh": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        health: string;
                        identity: string;
                        entities: string;
                        /**
                         * @description Detail-only (meta-number-health-status, Increment 6 gap-closing
                         *     follow-up) — deliberately NOT part of `health`, which the
                         *     listing shares verbatim; see
                         *     DeviceHealthSummaryBuilder::buildThroughputLevel().
                         */
                        throughput_level: string;
                        history: {
                            field: string;
                            previous_value: string;
                            new_value: string;
                            detail: string | null;
                            source: string;
                            occurred_at: string;
                        }[];
                        /** @enum {string} */
                        refresh_outcome: "refreshed" | "not_refreshed_yet";
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "device_not_meta";
                        /** @constant */
                        message: "Este dispositivo no usa la API de WhatsApp Cloud de Meta.";
                    };
                };
            };
        };
    };
    "deviceLogs.index": {
        parameters: {
            query?: {
                range?: "1h" | "6h" | "24h" | "7d" | "30d" | null;
                from?: string | null;
                to?: string | null;
                only_errors?: boolean | null;
                exclude_sends?: boolean | null;
                "methods[]"?: string[];
                cursor?: string | null;
                limit?: number | null;
            };
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DeviceLogResource"][];
                        next_cursor: string;
                        has_more: string;
                        window: {
                            from: string;
                            to: string;
                        };
                        summary: {
                            total: number;
                            errors: number;
                        };
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "deviceLogs.health": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        verdict: string;
                        fail_count: string;
                        sample_size: string;
                        requests: components["schemas"]["DeviceLogResource"][];
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
        };
    };
    "deviceUsername.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        username: unknown;
                    } | string;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "El dispositivo no tiene credenciales Meta configuradas.";
                    } | {
                        /** @constant */
                        error: "Solo disponible para dispositivos WhatsApp Cloud API.";
                    };
                };
            };
        };
    };
    "deviceUsername.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    username: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        username: string;
                        /** @constant */
                        message: "Nombre de usuario reservado exitosamente.";
                    } | string;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "deviceUsername.suggestions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                device: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        suggestions: unknown;
                    } | string;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "El dispositivo no tiene credenciales Meta configuradas.";
                    } | {
                        /** @constant */
                        error: "Solo disponible para dispositivos WhatsApp Cloud API.";
                    };
                };
            };
        };
    };
    "webhookDelivery.index": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `WebhookDeliveryResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["WebhookDeliveryResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Endpoint de webhook no encontrado.";
                    };
                };
            };
        };
    };
    "webhookEndpoint.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Array of `WebhookEndpointResource`
             *
             *     Paginated set of `WebhookEndpointResource`
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookEndpointResource"][] | {
                        data: components["schemas"]["WebhookEndpointResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "webhookEndpoint.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreWebhookEndpointRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "webhookEndpoint.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `WebhookEndpointResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookEndpointResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Endpoint de webhook no encontrado.";
                    };
                };
            };
        };
    };
    "webhookEndpoint.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Endpoint de webhook no encontrado.";
                    };
                };
            };
        };
    };
    "webhookEndpoint.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateWebhookEndpointRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "webhookEndpointEvent.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateWebhookEndpointEventsRequest"];
            };
        };
        responses: {
            /** @description `WebhookEndpointResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookEndpointResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Endpoint de webhook no encontrado.";
                    };
                };
            };
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "webhookEventCatalog.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown[];
                        meta: {
                            total: number;
                            active: number;
                            /**
                             * @description La versión del formato estándar, no la de la API HTTP.
                             * @constant
                             */
                            envelope_version: "v1";
                            /** @constant */
                            signature_header: "X-Funnelchat-Signature";
                            /** @constant */
                            signature_format: "t=<unix>,v1=<hex hmac-sha256 de \"<t>.<cuerpo crudo>\" con el secreto del endpoint>";
                        };
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "whatsappCost.index": {
        parameters: {
            query?: {
                month?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `WhatsappCostSummaryResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WhatsappCostSummaryResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
        };
    };
    "pendingMessage.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
                message: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingPublicMessage"];
                };
            };
            /** @description El mensaje no existe o no es de ese contacto. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingMessage"];
                };
            };
        };
    };
    "pendingWebhookSubscription.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingWebhookSubscription"][];
                };
            };
        };
    };
    "pendingWebhookSubscription.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PendingWebhookSubscriptionCreate"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingWebhookSubscriptionWithSecret"];
                };
            };
            /** @description URL rechazada, tipos de evento inválidos o tope alcanzado */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingMessage"];
                };
            };
        };
    };
    "pendingWebhookSubscription.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingWebhookSubscription"];
                };
            };
        };
    };
    "pendingWebhookSubscription.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PendingWebhookSubscriptionUpdate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingWebhookSubscription"];
                };
            };
        };
    };
    "pendingWebhookSubscription.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "pendingWebhookSubscription.rotateSecret": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingWebhookSubscriptionWithSecret"];
                };
            };
        };
    };
    "pendingWebhookSubscription.test": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingWebhookSubscriptionTestResult"];
                };
            };
        };
    };
    "pendingWebhookSubscription.deliveries": {
        parameters: {
            query?: {
                page?: number;
                per_page?: number;
                event_type?: string;
                event_id?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingWebhookSubscriptionDelivery"][];
                        links: {
                            first?: string | null;
                            last?: string | null;
                            prev?: string | null;
                            next?: string | null;
                        };
                        meta: {
                            current_page: number;
                            last_page: number;
                            per_page: number;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    "pendingForms.list": {
        parameters: {
            query?: {
                q?: string;
                status?: "draft" | "published" | "deprecated";
                device_id?: number;
                /** @description Por defecto 25. */
                perPage?: number;
                page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingForm"][];
                        links?: Record<string, unknown>;
                        meta?: Record<string, unknown>;
                    };
                };
            };
        };
    };
    "pendingForms.create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número principal. */
                    device_id: number;
                    /** @description Otros números donde publicarlo. */
                    device_ids?: number[];
                    /** @description Una `key` de `GET /api/v1/forms/templates`. */
                    template_key?: string;
                };
            };
        };
        responses: {
            /** @description Creado como borrador. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingForm"];
                        lint?: components["schemas"]["PendingFormLintIssue"][];
                        numbers?: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
        };
    };
    "pendingForms.templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            key: string;
                            title: string;
                            description?: string | null;
                            category?: string | null;
                        }[];
                    };
                };
            };
        };
    };
    "pendingForms.retrieve": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingForm"];
                        lint?: components["schemas"]["PendingFormLintIssue"][];
                        versions?: {
                            id?: number;
                            version?: number;
                            status?: string;
                            published_at?: string | null;
                        }[];
                        numbers?: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
        };
    };
    "pendingForms.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    /** @description Pantallas y campos del formulario. */
                    definition: Record<string, unknown>;
                    /** @description El `updated_at` que leíste: si cambió desde entonces responde `409 STALE`. */
                    expected_updated_at?: string | null;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingForm"];
                        lint?: components["schemas"]["PendingFormLintIssue"][];
                    };
                };
            };
        };
    };
    "pendingForms.delete": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Borrado. Una versión publicada responde `409 PUBLISHED`. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "pendingForms.createVersion": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ya había un borrador: es ese (`created: false`). */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingForm"];
                        lint?: components["schemas"]["PendingFormLintIssue"][];
                        created?: boolean;
                        numbers?: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
            /** @description Borrador nuevo (`created: true`). */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingForm"];
                        lint?: components["schemas"]["PendingFormLintIssue"][];
                        created?: boolean;
                        numbers?: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
        };
    };
    "pendingForms.sync": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingForm"];
                        lint?: components["schemas"]["PendingFormLintIssue"][];
                        numbers?: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
        };
    };
    "pendingForms.publish": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Publicado. Si Meta lo rechaza: `502 META` con `meta_code` y `lint`; si no pasa la validación: `422 LINT`. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingForm"];
                        lint?: components["schemas"]["PendingFormLintIssue"][];
                        numbers?: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
        };
    };
    "pendingForms.numbers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        numbers: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
        };
    };
    "pendingForms.addNumber": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    device_id: number;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        numbers: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
        };
    };
    "pendingForms.removeNumber": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
                deviceId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description El número principal no se puede sacar: `422 PRIMARY_NUMBER`. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        numbers: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
        };
    };
    "pendingForms.retryNumbers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description La versión del formulario. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        numbers: components["schemas"]["PendingFormNumber"][];
                    };
                };
            };
        };
    };
    "pendingForms.definition": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El formulario (`family_id`). */
                familyId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            family_id?: number;
                            form_id?: number;
                            name?: string;
                            status?: string;
                            version?: number;
                            definition?: unknown;
                        } | null;
                    };
                };
            };
        };
    };
    "pendingForms.versions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El formulario (`family_id`). */
                familyId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id?: number;
                            version?: number;
                            name?: string;
                            status?: string;
                            is_current?: boolean;
                            published_at?: string | null;
                            deprecated_at?: string | null;
                            meta_flow_id?: string | null;
                            retained_reason?: string | null;
                            responses?: number;
                            templates?: unknown;
                        }[];
                    };
                };
            };
        };
    };
    "pendingForms.responses": {
        parameters: {
            query?: {
                from?: string;
                to?: string;
                version_id?: number;
                origin?: string;
                status?: string;
                search?: string;
                page?: number;
            };
            header?: never;
            path: {
                /** @description El formulario (`family_id`). */
                familyId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: Record<string, unknown>[];
                        columns?: unknown[];
                    };
                };
            };
        };
    };
    "pendingForms.response": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El formulario (`family_id`). */
                familyId: number;
                runId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown;
                    };
                };
            };
        };
    };
    "pendingForms.metrics": {
        parameters: {
            query?: {
                from?: string;
                to?: string;
                version_id?: number;
            };
            header?: never;
            path: {
                /** @description El formulario (`family_id`). */
                familyId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown;
                    };
                };
            };
        };
    };
    "pendingForms.send": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El formulario (`family_id`). */
                    form_id: number;
                    device_id: number;
                    /** @description El texto del mensaje. Por defecto, el nombre del formulario. */
                    text?: string;
                    /** @description El texto del botón, sin emojis. Por defecto «Abrir». */
                    button_text?: string;
                    client_reference?: components["schemas"]["PendingClientReference"];
                };
            };
        };
        responses: {
            /** @description El formulario quedó registrado como mensaje (`type: whatsapp_form`, `status: queued`). */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingSendResult"];
                };
            };
        };
    };
    "pendingGroups.action": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El `action_id` que devolvió la acción. */
                action: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingGroupAction"];
                    };
                };
            };
        };
    };
    "pendingGroups.addParticipants": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    /** @description Teléfonos con código de país. Se normalizan y se quitan los repetidos; después no pueden ser más de 20 (`422 max_phones`). */
                    phones: string[];
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.removeParticipants": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    /** @description Teléfonos con código de país. Se normalizan y se quitan los repetidos; después no pueden ser más de 20 (`422 max_phones`). */
                    phones: string[];
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.promoteAdmins": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    /** @description Teléfonos con código de país. Se normalizan y se quitan los repetidos; después no pueden ser más de 20 (`422 max_phones`). */
                    phones: string[];
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.demoteAdmins": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    /** @description Teléfonos con código de país. Se normalizan y se quitan los repetidos; después no pueden ser más de 20 (`422 max_phones`). */
                    phones: string[];
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.updateName": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    name: string;
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.updateDescription": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    description: string | null;
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.updatePhoto": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    photo_url: string;
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.updateSettings": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    members_can_send_messages: boolean;
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.renewInviteLink": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.inviteLink": {
        parameters: {
            query: {
                device_id: number;
            };
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            invite_link: string;
                        };
                    };
                };
            };
        };
    };
    "pendingGroups.joinRequests": {
        parameters: {
            query: {
                device_id: number;
            };
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            participant: {
                                identity: string;
                                /** @enum {string} */
                                identity_type: "phone" | "whatsapp_user";
                                name: string | null;
                            };
                            /** Format: date-time */
                            requested_at: string | null;
                        }[];
                    };
                };
            };
        };
    };
    "pendingGroups.approveJoinRequests": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    /** @description Teléfonos con código de país. Se normalizan y se quitan los repetidos; después no pueden ser más de 20 (`422 max_phones`). */
                    phones: string[];
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "pendingGroups.rejectJoinRequests": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El uid de WhatsApp del grupo (`…@g.us`). */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description El número de tu cuenta que ejecuta la acción: tiene que ser admin del grupo. */
                    device_id: number;
                    /** @description Teléfonos con código de país. Se normalizan y se quitan los repetidos; después no pueden ser más de 20 (`422 max_phones`). */
                    phones: string[];
                };
            };
        };
        responses: {
            /** @description En cola. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PendingGroupActionAccepted"];
                };
            };
        };
    };
    "webhook.group_created": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example group.created
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_00000000000000000000000000000001",
                 *       "type": "group.created",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "group": {
                 *           "uid": "120363000000000001@g.us",
                 *           "name": "Grupo de ejemplo",
                 *           "type": "group"
                 *         },
                 *         "campaign": {
                 *           "uuid": "00000000-0000-4000-8000-000000000001",
                 *           "name": "Campaña de ejemplo"
                 *         },
                 *         "source": "created"
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.group_participant_joined": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example group_participant.joined
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_00000000000000000000000000000002",
                 *       "type": "group_participant.joined",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "group": {
                 *           "uid": "120363000000000001@g.us",
                 *           "name": "Grupo de ejemplo"
                 *         },
                 *         "campaign": {
                 *           "uuid": "00000000-0000-4000-8000-000000000001"
                 *         },
                 *         "participant": {
                 *           "identity": "+5491100000000",
                 *           "identity_type": "phone",
                 *           "name": "Ana Pérez"
                 *         }
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.group_participant_left": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example group_participant.left
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_00000000000000000000000000000003",
                 *       "type": "group_participant.left",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "group": {
                 *           "uid": "120363000000000001@g.us",
                 *           "name": "Grupo de ejemplo"
                 *         },
                 *         "campaign": {
                 *           "uuid": "00000000-0000-4000-8000-000000000001"
                 *         },
                 *         "participant": {
                 *           "identity": "+5491100000000",
                 *           "identity_type": "phone",
                 *           "name": "Ana Pérez"
                 *         }
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.scheduled_message_finished": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example scheduled_message.finished
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_00000000000000000000000000000004",
                 *       "type": "scheduled_message.finished",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "scheduled_message": {
                 *           "uuid": "00000000-0000-4000-8000-000000000004",
                 *           "name": "Envío de ejemplo"
                 *         },
                 *         "outcome": "partially_failed",
                 *         "groups": {
                 *           "total": 10,
                 *           "failed": 1,
                 *           "partially_failed": 2
                 *         },
                 *         "occurrence": 1
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.group_blocked": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example group.blocked
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_00000000000000000000000000000005",
                 *       "type": "group.blocked",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "group": {
                 *           "uid": "120363000000000001@g.us",
                 *           "name": "Grupo de ejemplo"
                 *         },
                 *         "campaign": {
                 *           "uuid": "00000000-0000-4000-8000-000000000001"
                 *         },
                 *         "reason": "admin_access_lost"
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.group_recovered": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example group.recovered
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_00000000000000000000000000000006",
                 *       "type": "group.recovered",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "group": {
                 *           "uid": "120363000000000001@g.us",
                 *           "name": "Grupo de ejemplo"
                 *         },
                 *         "campaign": {
                 *           "uuid": "00000000-0000-4000-8000-000000000001"
                 *         },
                 *         "reason": "access_restored"
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.scheduled_message_group_delivery_failed": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example scheduled_message.group_delivery_failed
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_00000000000000000000000000000007",
                 *       "type": "scheduled_message.group_delivery_failed",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "scheduled_message": {
                 *           "uuid": "00000000-0000-4000-8000-000000000007"
                 *         },
                 *         "group": {
                 *           "uid": "120363000000000001@g.us",
                 *           "name": "Grupo de ejemplo"
                 *         },
                 *         "reason": "device_disconnected",
                 *         "partial": false,
                 *         "occurrence": 1
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.scheduled_message_response_received": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example scheduled_message.response_received
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_00000000000000000000000000000008",
                 *       "type": "scheduled_message.response_received",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "scheduled_message": {
                 *           "uuid": "00000000-0000-4000-8000-000000000008"
                 *         },
                 *         "group": {
                 *           "uid": "120363000000000001@g.us"
                 *         },
                 *         "participant": {
                 *           "identity": "+5491100000000",
                 *           "identity_type": "phone",
                 *           "name": "Ana Pérez"
                 *         },
                 *         "response": {
                 *           "type": "poll",
                 *           "options": [
                 *             "Opción A"
                 *           ],
                 *           "rsvp": null
                 *         }
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.campaign_status_changed": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example campaign.status_changed
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_00000000000000000000000000000009",
                 *       "type": "campaign.status_changed",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "campaign": {
                 *           "uuid": "00000000-0000-4000-8000-000000000009",
                 *           "name": "Campaña de ejemplo"
                 *         },
                 *         "from": "active",
                 *         "to": "paused"
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.pipeline_finished": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example pipeline.finished
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_0000000000000000000000000000000a",
                 *       "type": "pipeline.finished",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "campaign": {
                 *           "uuid": "00000000-0000-4000-8000-00000000000a"
                 *         },
                 *         "pipeline": {
                 *           "uuid": "00000000-0000-4000-8000-00000000000b",
                 *           "name": "Pipeline de ejemplo"
                 *         },
                 *         "outcome": "completed",
                 *         "actions": {
                 *           "total": 5,
                 *           "succeeded": 4,
                 *           "failed": 0,
                 *           "skipped": 1,
                 *           "cancelled": 0
                 *         }
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.poll_voted": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example poll.voted
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_0000000000000000000000000000000b",
                 *       "type": "poll.voted",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "poll": {
                 *           "uid": "3EB0000000000000000001"
                 *         },
                 *         "group": {
                 *           "uid": "120363000000000001@g.us"
                 *         },
                 *         "scheduled_message": {
                 *           "uuid": "00000000-0000-4000-8000-000000000004"
                 *         },
                 *         "participant": {
                 *           "identity": "+5491100000000",
                 *           "identity_type": "phone",
                 *           "name": null
                 *         },
                 *         "options": [
                 *           "Opción A"
                 *         ]
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.group_invite_link_renewed": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example group.invite_link_renewed
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_0000000000000000000000000000000c",
                 *       "type": "group.invite_link_renewed",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "group": {
                 *           "uid": "120363000000000001@g.us",
                 *           "name": "Grupo de ejemplo",
                 *           "type": "group"
                 *         },
                 *         "campaign": {
                 *           "uuid": "00000000-0000-4000-8000-000000000001",
                 *           "name": "Campaña de ejemplo"
                 *         },
                 *         "invite_link": "https://chat.whatsapp.com/EjemploNuevo0000000000001",
                 *         "previous_invite_link": "https://chat.whatsapp.com/EjemploAnterior000000000001",
                 *         "trigger": "automatic",
                 *         "recovered": false
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.group_invite_link_down": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example group.invite_link_down
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_0000000000000000000000000000000d",
                 *       "type": "group.invite_link_down",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "group": {
                 *           "uid": "120363000000000001@g.us",
                 *           "name": "Grupo de ejemplo",
                 *           "type": "group"
                 *         },
                 *         "campaign": {
                 *           "uuid": "00000000-0000-4000-8000-000000000001",
                 *           "name": "Campaña de ejemplo"
                 *         },
                 *         "reason": "http_404",
                 *         "renewal_attempted": true
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "webhook.webhook_test": {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description Tipo del evento; igual al `type` del cuerpo.
                 * @example webhook.test
                 */
                "X-Funnelchat-Event": string;
                /**
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usá el `id` del cuerpo.
                 * @example 00000000-0000-4000-8000-000000000001
                 */
                "X-Funnelchat-Delivery": string;
                /**
                 * @description Firma `t=<unix>,v1=<hex>`: HMAC-SHA256 de `t + "." + cuerpo` con el secreto completo `whsec_…`.
                 * @example t=1790856000,v1=0000000000000000000000000000000000000000000000000000000000000000
                 */
                "X-Funnelchat-Signature": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "id": "evt_0000000000000000000000000000000e",
                 *       "type": "webhook.test",
                 *       "version": 1,
                 *       "occurred_at": "2026-10-01T12:00:00Z",
                 *       "data": {
                 *         "subscription": "00000000-0000-4000-8000-00000000000c",
                 *         "sent_at": "2026-10-01T12:00:00Z"
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Respondé con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
