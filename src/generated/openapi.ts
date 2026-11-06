/**
 * GENERATED FILE — do not edit. Run `npm run generate`.
 * Source: spec/funnelchat.json (sha256 38ae497ab7e6089b…) + spec/pending.json.
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["broadcast.show"];
        put?: never;
        post?: never;
        /**
         * Eliminar una difusión
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["broadcastFolder.index"];
        put?: never;
        /**
         * Crear una carpeta de difusiones
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
         */
        put: operations["broadcastFolder.update"];
        post?: never;
        /**
         * Eliminar una carpeta de difusiones
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["contact.index"];
        put?: never;
        /**
         * Crear un contacto
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["contact.show"];
        /**
         * Actualizar un contacto
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["contactNote.index"];
        put?: never;
        /**
         * Agregar una nota a un contacto
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["customField.index"];
        put?: never;
        /**
         * Crear un campo personalizado
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["customField.show"];
        /**
         * Actualizar un campo personalizado
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["folder.index"];
        put?: never;
        /**
         * Crear una carpeta
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["folder.show"];
        /**
         * Actualizar una carpeta
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
         */
        put: operations["folder.update"];
        post?: never;
        /**
         * Eliminar una carpeta
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
         */
        post: operations["forwardMessage.store"];
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["kanbanSetting.index"];
        put?: never;
        /**
         * Crear un tablero
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["kanbanSetting.show"];
        /**
         * Actualizar un tablero
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
         */
        put: operations["kanbanSetting.update"];
        post?: never;
        /**
         * Eliminar un tablero
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
         */
        put: operations["kanbanStage.update"];
        post?: never;
        /**
         * Eliminar una etapa
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["leadScoreSettings.show"];
        /**
         * Actualizar la configuración del lead score
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
    "/api/v1/contacts/{contact}/messages/{message}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /contacts/{contact}/messages/{message}/read
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
         */
        post: operations["message.markMessageRead"];
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
         *
         *     Indica a quién envías con `phone`: el teléfono con código de país, por ejemplo `5491122334455`. No hace falta crear el contacto antes: si ese teléfono todavía no es un contacto de tu cuenta, se crea en el workspace de tu clave, igual que con `POST /contacts/update-or-create` y con el mismo permiso, que **Enviar** ya incluye. La respuesta trae su id en `message.contact_id`, el mismo que llevan los avisos `message.status_changed`. Si el teléfono no es válido, o ya es un contacto de otro workspace de tu cuenta, la respuesta es la misma que daría `POST /contacts/update-or-create`: 422, o 404 sin datos de ese contacto. Con un número oficial de WhatsApp (API Cloud) también puedes indicar `whatsapp_id`, el BSUID que envía Meta (por ejemplo `US.13491208655302741918`), en lugar de `phone`; usado así con un número conectado por QR, responde 422. En un número oficial, el primer mensaje a un contacto nuevo tiene que ser una plantilla: un mensaje libre solo sale dentro de las 24 horas desde que el contacto te escribió. Si ya tienes el `contact_id`, puedes seguir enviándolo: si junto con él mandas `phone` o `whatsapp_id`, tienen que ser de ese mismo contacto (si no, 422 `recipient_mismatch`). En `send-template`, `phone` o `whatsapp_id` va siempre, con o sin `contact_id`.
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
         */
        put: operations["messageReaction.update"];
        post?: never;
        /**
         * Quitar una reacción
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["messageTemplate.templates"];
        put?: never;
        /**
         * Crear una plantilla
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["messageTemplate.template"];
        /**
         * Actualizar una plantilla
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
    "/api/v1/devices/{device}/templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sincronizar las plantillas de un número con Meta
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
         *
         *     Sincroniza con Meta las plantillas de un número de la API oficial de WhatsApp: trae las que se crearon o cambiaron directamente en Meta y quita las de una cuenta de WhatsApp Business que el número ya no usa. `{device}` es el `id` del número.
         *
         *     - **Asíncrona:** la primera página (hasta 100 plantillas) se lee en el momento y las siguientes en segundo plano. Responde 202 con `status`: `completed` si ya terminó, `in_progress` si sigue. Las plantillas sincronizadas se listan con `GET /templates`.
         *     - **Una a la vez:** mientras hay una sincronización de ese número en curso, otra llamada responde 409 y no lanza una nueva.
         *     - **Errores de Meta:** si Meta rechaza la lectura (por ejemplo, porque el token del número venció o la cuenta de WhatsApp Business no existe), responde 422 `meta_rejected` con el código de error de Meta en `meta_code` y no sincroniza nada.
         *
         *     | HTTP | `error` | Cuándo |
         *     |---|---|---|
         *     | 404 | — | El número no existe en tu cuenta o está fuera del workspace de tu clave. |
         *     | 409 | `template_sync_in_progress` | Ya hay una sincronización de ese número en curso. |
         *     | 422 | `number_not_connected_to_meta` | El número está conectado por QR o no tiene una cuenta de WhatsApp Business o credenciales en Meta. |
         *     | 422 | `meta_rejected` | Meta rechazó la lectura de las plantillas (`meta_code` trae su código de error). |
         *     | 429 | — | Demasiadas solicitudes por minuto (ver `Retry-After`). |
         *     | 502 | `meta_unavailable` | Meta no respondió. |
         */
        post: operations["messageTemplate.sync"];
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
         *
         *     Indica a quién envías con `phone`: el teléfono con código de país, por ejemplo `5491122334455`. No hace falta crear el contacto antes: si ese teléfono todavía no es un contacto de tu cuenta, se crea en el workspace de tu clave, igual que con `POST /contacts/update-or-create` y con el mismo permiso, que **Enviar** ya incluye. La respuesta trae su id en `message.contact_id`, el mismo que llevan los avisos `message.status_changed`. Si el teléfono no es válido, o ya es un contacto de otro workspace de tu cuenta, la respuesta es la misma que daría `POST /contacts/update-or-create`: 422, o 404 sin datos de ese contacto. Con un número oficial de WhatsApp (API Cloud) también puedes indicar `whatsapp_id`, el BSUID que envía Meta (por ejemplo `US.13491208655302741918`), en lugar de `phone`; usado así con un número conectado por QR, responde 422. En un número oficial, el primer mensaje a un contacto nuevo tiene que ser una plantilla: un mensaje libre solo sale dentro de las 24 horas desde que el contacto te escribió. Si ya tienes el `contact_id`, puedes seguir enviándolo: si junto con él mandas `phone` o `whatsapp_id`, tienen que ser de ese mismo contacto (si no, 422 `recipient_mismatch`). En `send-template`, `phone` o `whatsapp_id` va siempre, con o sin `contact_id`.
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["quickReply.index"];
        put?: never;
        /**
         * Crear una respuesta rápida
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["quickReply.show"];
        /**
         * Actualizar una respuesta rápida
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
         */
        put: operations["quickReply.update"];
        post?: never;
        /**
         * Eliminar una respuesta rápida
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
    "/api/v1/contacts/{contact}/messages/{message}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un mensaje
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         *
         *     Devuelve un mensaje de tu cuenta por el id que te dio el envío o un webhook. Aceptado no es entregado: el estado final llega por `message.status_changed` o por este GET. `status` es `queued`, `sent`, `delivered`, `read` o `failed` en los mensajes que enviaste. `sent`, `delivered`, `read` y `failed` tienen el mismo significado que en `message.status_changed`; `queued` es un mensaje en cola que todavía no se envió (en cola no es enviado) y no se reintenta. `status` es `null` en los mensajes recibidos, las notas y las acciones. `status` también es `null` en un mensaje enviado cuyo resultado no se conoce (el proveedor no confirmó ni rechazó el envío o el envío se interrumpió): puede haber llegado y no cambia de estado; también cuando lleva más de una hora en cola sin resultado: un mensaje cuyo envío no empezó dentro de la hora ya no sale; pasada la hora sin resultado, `status` es `null`, o `failed` con `error.reason` `not_sent` y su aviso si su envío llega tarde. Reintentar es un envío nuevo, que sólo puede duplicar si el envío había empezado y se cortó. `error` trae `code`, `title` y `reason` solo cuando `status` es `failed`. `error.reason` es `null` cuando el rechazo lo informó el proveedor; si Funnelchat decidió que un mensaje enviado con clave no salía, trae `device_unavailable`, `insufficient_balance`, `window_closed`, `recipient_unreachable`, `template_not_found`, `template_unresolved_placeholder`, `not_queued` o `not_sent`, `code` es `null` y `title` es un texto llano en el idioma de la cuenta. `client_reference` es la referencia que mandaste al enviar, o `null`. Responde 404 si el mensaje no existe o no es de ese contacto.
         */
        get: operations["message.showMessage"];
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["tag.index"];
        put?: never;
        /**
         * Crear una etiqueta
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["tag.show"];
        /**
         * Actualizar una etiqueta
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
         */
        post: operations["tag.destroy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/templates/{template}/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /templates/{template}/metrics
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         *
         *     Devuelve lo que Meta informa de una plantilla de un número de la API oficial de WhatsApp, día por día (UTC) y en total: mensajes enviados, entregados y leídos, clics por botón y, cuando Meta lo informa, el costo.
         *
         *     - **Rango:** `from` y `to` (AAAA-MM-DD, UTC, ambos inclusive), los dos o ninguno. Sin ellos: los últimos 7 días, hoy incluido. El rango llega hasta 90 días contando hoy; `to` no puede ser una fecha futura. Un rango inválido responde 422 con el detalle por campo.
         *     - **Días sin datos:** aparecen con los conteos en cero y `cost` en `null`.
         *     - **Lecturas y clics:** Meta los registra sólo durante los 7 días posteriores al envío; después puede informarlos en cero.
         *     - **Clics:** sólo en plantillas de categoría MARKETING o UTILITY.
         *     - **Costo:** `null` cuando Meta no lo informa (por ejemplo, si la cuenta de WhatsApp Business usa la línea de crédito de un socio).
         *     - **Activación:** las métricas de plantillas tienen que estar activadas en el Administrador de WhatsApp de la cuenta. Funnelchat no las activa por ti: Meta no permite desactivarlas después.
         *     - **Frescura:** las respuestas exitosas de Meta se guardan 15 minutos; los errores no se guardan, así que reintentar después de un error vuelve a consultar a Meta (y cuenta en el límite). `fetched_at` dice cuándo se leyó.
         *     - **Límite:** hasta 60 consultas a Meta por hora por cuenta, en una ventana de una hora que arranca con la primera consulta y se reinicia al cumplirse (`Retry-After` indica cuántos segundos faltan); las respuestas guardadas no cuentan y una lectura puede usar hasta 3 consultas si Meta la entrega en varias páginas.
         *
         *     | HTTP | `error` | Cuándo |
         *     |---|---|---|
         *     | 404 | — | La plantilla no existe en tu cuenta. |
         *     | 422 | `template_metrics_not_available_for_qr` | El número de la plantilla está conectado por QR. |
         *     | 422 | `template_not_in_meta` | La plantilla todavía no tiene identificador en Meta. |
         *     | 422 | `number_not_connected_to_meta` | El número no tiene cuenta de WhatsApp Business o credenciales válidas. |
         *     | 422 | `template_waba_mismatch` | La plantilla es de otra cuenta de WhatsApp Business que la actual del número. |
         *     | 422 | `template_analytics_not_enabled` | Las métricas de plantillas no están activadas en la cuenta. |
         *     | 422 | `template_analytics_not_available_yet` | Meta todavía no tiene métricas para la cuenta. |
         *     | 429 | `template_metrics_rate_limited` | Se agotaron las consultas a Meta de la hora (ver `Retry-After`). |
         *     | 429 | — | Demasiadas solicitudes por minuto (ver `Retry-After`). |
         *     | 503 | `meta_rate_limited` | Meta está limitando las consultas (ver `Retry-After`). |
         *     | 502 | `meta_unavailable` | Meta no respondió correctamente. |
         */
        get: operations["message.templateMetrics"];
        put?: never;
        post?: never;
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["ticket.index"];
        put?: never;
        /**
         * Crear un ticket
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
         */
        get: operations["ticket.show"];
        /**
         * Actualizar un ticket
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Editar**
         */
        post: operations["ticket.reOpenTicket"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contacts/{contact}/typing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /contacts/{contact}/typing
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
         */
        post: operations["message.typingIndicator"];
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * @description **Permiso requerido:** **Contactos y conversaciones → Ver**
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
         * Enviar un formulario
         * @description **Permiso requerido:** **Contactos y conversaciones → Enviar**
         *
         *     Envía a un contacto un formulario de WhatsApp publicado. `form_id` es el identificador estable del formulario (el mismo en todas sus versiones) y `device_id` el número de WhatsApp Cloud de tu cuenta por el que sale. `text` (hasta 1024 caracteres) acompaña al formulario y por defecto es su nombre; `button_text` (hasta 30 caracteres, sin emojis) es el botón y por defecto es «Abrir» u «Open» según el idioma del usuario de la clave (en inglés «Open»; en español y portugués «Abrir»). Sólo funciona dentro de las 24 horas siguientes al último mensaje del contacto a ese número. Responde `200` con el mensaje en cola (`status` `queued`, `type` `whatsapp_form`); aceptado no es entregado: el estado final llega por `message.status_changed` o por `GET /contacts/{contact}/messages/{message}`, y la respuesta del contacto por `whatsapp_form.completed`. Responde `404` si el contacto no existe o no es de tu cuenta, o `404` con `form_not_found` si el formulario no existe en tu cuenta. Responde `422` con `device_unavailable` si el número no es de tu cuenta o no está conectado, `number_not_eligible` si no es un número de WhatsApp Cloud que pueda enviar formularios, `form_not_published` si el formulario no tiene versión publicada, `form_not_on_number` si no está publicado en ese número, `recipient_unreachable` si el contacto no tiene teléfono ni identificador de WhatsApp, `contact_blocked` si bloqueaste al contacto en ese número y `window_closed` si pasaron más de 24 horas. También responde `422` por las guardas de envío y `429` con `rate_limited` si superas el ritmo del número o del contacto.
         *
         *     Si tu cuenta está bloqueada por el límite de contactos activos, responde `429` con `mac_lockout_24h` (además del `429` `rate_limited` del ritmo) y no guarda ningún mensaje ni `client_reference`. Si Funnelchat no pudo poner el mensaje en cola, la respuesta no es un error: es `200` con el mensaje en estado `failed` y `error.reason` `not_queued`; no salió, así que reintentar no lo duplica.
         */
        post: operations["whatsappFormSend.store"];
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `created_at`, `id`, `name`, `updated_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
         */
        get: operations["group.index"];
        put?: never;
        /**
         * Crea un grupo
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. Hasta 20 participantes iniciales, sin contar al propio número. Con un número QR la descripción se pone justo después de crear el grupo, y las creaciones respetan la espera entre creaciones del número. El resultado trae el grupo y su link de invitación. Con un número oficial, `join_approval_required: true` crea el grupo pidiendo aprobación para entrar (no se puede cambiar después); con un número QR responde `422 provider_unsupported`.
         */
        post: operations["apiGroupAction.create"];
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
         *
         *     **Nota:** La lista se lee de WhatsApp y, para una API key, se reutiliza durante un minuto por número: un grupo recién creado en WhatsApp puede tardar hasta un minuto en aparecer. Si un grupo ya está en la cuenta, trae `device_id`. Para importar uno: `POST /groups/{group}/import`.
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
    "/api/v1/groups/{group}/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Importar un grupo de un número
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Importa a la cuenta un grupo del número indicado en `device_id`, igual que importarlo desde el panel: queda visible en el panel, se sincronizan sus participantes y desde entonces genera los avisos `group_participant.joined` y `group_participant.left`. Los datos del grupo y si el número es administrador se leen de WhatsApp en la misma llamada. Responde `201` si lo importó y `200` si ya estaba en la cuenta, con `is_admin`. Solo números QR: con un número oficial responde `422 provider_unsupported`. Si el grupo no es del número responde `404 group_not_found`. Cada número importa hasta 5 grupos por minuto (`429 import_rate_limited`, con `retry_after` en segundos). Dos pedidos a la vez por el mismo grupo lo importan una sola vez. Un grupo que ya está en otro workspace de la cuenta no se puede importar en este.
         */
        post: operations["v2.apiGroupImport"];
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
         *
         *     **Con API key:** página fija de 3 elementos; se recorre con `page`.
         */
        get: operations["group.messages"];
        put?: never;
        /**
         * Mandar un mensaje a un grupo
         * @description **Permiso requerido:** **Grupos y campañas → Enviar**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}` (`result.message.uid` es el id del mensaje en WhatsApp). `type`: `text`, `image`, `video`, `audio` o `document`. Con un número QR sale al ritmo de los mensajes programados de velocidad Low, que el integrador no puede cambiar. Con un número oficial se verifican, antes de aceptar, la ventana de servicio de 24 horas y la calidad del número. No tiene tope de volumen del plan. Si el grupo todavía no está en la cuenta y el número es QR, primero se importa como en `POST /groups/{group}/import` (pide además **Grupos y campañas → Administrar grupos**, `403 import_permission_required` sin él) y el envío sigue con las mismas reglas: si el número no es administrador del grupo no se importa nada y responde `422 device_not_group_admin`. Esa importación cuenta en el tope de 5 por minuto del número.
         */
        post: operations["apiGroupAction.sendMessage"];
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
         *
         *     **Con API key:** la respuesta siempre viene paginada. Tamaño de página: `perPage` (por defecto 25, máximo 100; un valor mayor, menor que 1 o no entero responde `422`). Orden: `orderBy` acepta `send_at`, `name`, `status`, `id`, `created_at`, `updated_at`; dirección `orderByMethod`: `asc` o `desc`. Otro valor responde `422`.
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
    "/api/v1/groups/actions/{action}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver cómo salió una acción de grupo
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
         */
        get: operations["apiGroupAction.show"];
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
         * Suma participantes al grupo
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. Hasta 20 teléfonos por pedido. Con un número QR cada teléfono se agrega por separado, uno tras otro, al ritmo de las campañas. El resultado informa cada persona como `added` o `failed`.
         */
        post: operations["apiGroupAction.addParticipants"];
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
         * Saca participantes del grupo
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. Hasta 20 teléfonos por pedido, sacados en una sola operación de WhatsApp. No admite el teléfono del propio número que ejecuta.
         */
        post: operations["apiGroupAction.removeParticipants"];
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
         * Promueve teléfonos a administrador
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. Hasta 20 teléfonos por pedido, en una sola operación de WhatsApp. Un teléfono que no está en el grupo se agrega primero. Solo con números QR. Se ejecuta al ritmo de las campañas del número.
         */
        post: operations["apiGroupAction.promoteAdmins"];
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
         * Quita el rol de administrador a teléfonos
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. Hasta 20 teléfonos por pedido, en una sola operación de WhatsApp. No admite el teléfono del propio número que ejecuta. Solo con números QR. Se ejecuta al ritmo de las campañas del número.
         */
        post: operations["apiGroupAction.demoteAdmins"];
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
         * Cambia el nombre del grupo
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. El nombre se envía tal cual, sin numeración de campaña. Hasta 100 caracteres. Se ejecuta al ritmo de las campañas del número.
         */
        put: operations["apiGroupAction.updateName"];
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
         * Cambia la descripción del grupo
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. Hasta 2048 caracteres; una descripción vacía la borra. Se ejecuta al ritmo de las campañas del número.
         */
        put: operations["apiGroupAction.updateDescription"];
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
         * Cambia la foto del grupo
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. `photo_url` debe ser una URL `https` de una imagen jpg, jpeg o png. Solo con números QR. Se ejecuta al ritmo de las campañas del número.
         */
        put: operations["apiGroupAction.updatePhoto"];
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
         * Cambia si los miembros pueden escribir
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. `members_can_send_messages`; bloquear la escritura también deja a solo los administradores editando la información del grupo. Solo con números QR. Se ejecuta al ritmo de las campañas del número.
         */
        put: operations["apiGroupAction.updateSettings"];
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
         * Renueva el link de invitación del grupo
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. Con un número QR relee el link vigente y NO lo revoca (los proveedores QR de WhatsApp no exponen revocación acá); con un número oficial revoca el link y WhatsApp genera uno nuevo. El resultado trae `invite_link`.
         */
        post: operations["apiGroupAction.renewInviteLink"];
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
         * Link de invitación vigente del grupo
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
         *
         *     **Nota:** Se lee en vivo del proveedor con el número indicado en `device_id`. Límite: 30 pedidos por minuto.
         */
        get: operations["apiGroupAction.inviteLink"];
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
         * Solicitudes pendientes para unirse al grupo
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
         *
         *     **Nota:** Solo números oficiales con la beta de grupos de la API oficial; un número QR recibe `422 provider_unsupported`. Se lee en vivo del proveedor con el número indicado en `device_id`; devuelve hasta 100 solicitudes, en el orden del proveedor, y omite las que no traen teléfono (no hay BSUID). Límite: 30 pedidos por minuto.
         */
        get: operations["apiGroupAction.joinRequests"];
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
         * Aprueba solicitudes para unirse al grupo
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. Solo números oficiales con la beta de grupos de la API oficial y con la habilitación de decisiones; si no, `422 provider_unsupported`. Verifica que los teléfonos entren en los lugares libres del grupo (`capacity_full`). El resultado es por persona.
         */
        post: operations["apiGroupAction.approveJoinRequests"];
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
         * Rechaza solicitudes para unirse al grupo
         * @description **Permiso requerido:** **Grupos y campañas → Administrar grupos**
         *
         *     **Nota:** Asíncrona: responde 202 con `action_id`; consulta el resultado en `GET /groups/actions/{action}`. Solo números oficiales con la beta de grupos de la API oficial y con la habilitación de decisiones; si no, `422 provider_unsupported`. El resultado es por persona.
         */
        post: operations["apiGroupAction.rejectJoinRequests"];
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Permiso requerido:** **Grupos y campañas → Ver**
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     La cuenta dueña de la clave: sus datos, su plan y sus límites.
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
                /** @description Los datos de la cuenta. */
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `per_page` · orden fijo: id ascendente · no acepta parámetros de orden.
         *
         *     Las campañas de la cuenta y de sus agentes, para elegir cuáles entran en el reporte
         *     diario. `search` filtra por nombre.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     Las alertas que la cuenta puede activar en un destino, con su `module` y su `action`. Las
         *     que dependen de cómo paga la cuenta (por ejemplo, la reactivación de la suscripción) solo
         *     aparecen si aplican a la cuenta.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     Si la cuenta todavía no lo configuró, devuelve los valores por defecto: apagado, a las
         *     `08:00` y con todas las campañas.
         */
        get: operations["alertDailyReport.show"];
        /**
         * Configurar el reporte diario
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Reemplaza la configuración de la cuenta (hay una sola). Con `all_campaigns: false`, de
         *     `campaign_ids` se guardan solo las campañas que existen y son de la cuenta: los ids que
         *     no lo son se descartan sin error.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         *
         *     Los teléfonos y webhooks que reciben las alertas de la cuenta. Si la cuenta no tiene
         *     ninguno y tiene un teléfono cargado, crea con él un destino `phone` sin verificar.
         */
        get: operations["alertDestination.index"];
        put?: never;
        /**
         * Crear un destino de alertas
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     `type` es `phone` (un número de teléfono) o `webhook` (una URL `https` que resuelva a una
         *     dirección pública de internet). La cuenta puede tener hasta 10 destinos de cada tipo. El
         *     destino nace sin verificar: un teléfono se verifica con el código que envía
         *     `POST alerts/destinations/{id}/otp`.
         *
         *     Para un `webhook`, la respuesta trae `secret`, el secreto con el que se firman sus
         *     entregas: es la única vez que aparece.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Borra también las alertas que tenía activadas.
         */
        delete: operations["alertDestination.destroy"];
        options?: never;
        head?: never;
        /**
         * Actualizar un destino de alertas
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Cambia `name` (con `null` se borra) y, solo en un `webhook`, la URL (`destination`), con
         *     las mismas reglas que al crearlo. El teléfono de un destino `phone` no se puede cambiar:
         *     para otro teléfono, crea otro destino. Cambiar la URL de un webhook lo deja sin verificar.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Envía (o reenvía) un código de 6 dígitos al teléfono del destino. Se confirma
         *     con `POST alerts/destinations/{id}/otp/verify`.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     `code` es el código de 6 dígitos que llegó al teléfono. Con el destino verificado ya se
         *     pueden activar alertas en él.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     Si la cuenta todavía no lo configuró, devuelve `enabled: false` sin horario.
         */
        get: operations["alertQuietHour.show"];
        /**
         * Configurar el horario de silencio
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Reemplaza el horario de la cuenta (hay uno solo). `start_time` y `end_time` van en
         *     `HH:MM`; `end_time` puede ser anterior a `start_time` para un horario que cruza la
         *     medianoche.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     `module` y `action` son los de una alerta del catálogo (`GET alerts/catalog`); `enabled`
         *     la activa o la apaga. Un destino `phone` tiene que estar verificado.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Envía una entrega de prueba a la URL del destino y devuelve el resultado: `status` (el
         *     código HTTP que respondió, o `null` si no respondió), `ok` y `latency` (en
         *     milisegundos).
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Crea en Meta el dataset de la Conversions API (CAPI) de la cuenta de WhatsApp Business
         *     (WABA) del número, o recupera el que ya tiene: llamarlo otra vez no crea otro. Solo para
         *     números oficiales, y solo el titular de la cuenta.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     Comprueba que el número tenga el permiso de Meta para enviar eventos
         *     (`whatsapp_business_manage_events`) y que su WABA tenga un dataset, guarda el resultado y
         *     devuelve el estado con un enlace al Administrador de eventos de Meta. No envía ningún
         *     evento: una compra de prueba quedaría registrada como una venta real. Solo el titular de
         *     la cuenta.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         *
         *     Uno por cada WABA de la cuenta que ya tiene dataset, con el último estado guardado. No
         *     consulta a Meta: para actualizar el estado de un número, usa
         *     `GET devices/{device}/capi/test`.
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
    "/api/v1/connect-links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar los links de alta
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id descendente · no acepta parámetros de orden.
         *
         *     Los links de la cuenta, del más nuevo al más viejo, sin la URL (el token no se guarda).
         *     Filtra por `status` (`pending`, `completed`, `failed`, `expired`, `revoked`) y por
         *     `external_reference` (igualdad exacta).
         */
        get: operations["connectLink.index"];
        put?: never;
        /**
         * Crear un link de alta
         * @description **Escritura** · requiere **Números de WhatsApp → Crear, conectar y borrar**.
         *
         *     > 🔑 **Da el control de un WhatsApp.** Por eso pide **Números de WhatsApp → Crear, conectar y borrar**: crear un número ocupa un lugar del plan, y quien escanee su QR o use un link de alta conecta un teléfono a esta cuenta. Trata el QR y la URL del link como un secreto.
         *
         *     Un link de un solo uso para que tu cliente conecte un número de WhatsApp a tu cuenta, desde
         *     una página de Funnelchat y sin entrar al panel. Envíale la `url` de la respuesta: es la
         *     **única vez** que aparece (Funnelchat guarda solo un hash) y quien la tenga puede conectar
         *     un número a tu cuenta mientras el link esté pendiente. Trátala como un secreto.
         *
         *     Abrir la página no usa el link (la vista previa de un mensajero no lo gasta): el link se
         *     usa cuando tu cliente toca el botón para conectar.
         *
         *     - `type: "qr"`: al tocar el botón se crea el número (si no es una reconexión) y la página
         *       muestra el QR, que renueva sola cada 5 segundos. Tu cliente tiene **10 minutos** desde
         *       que toca el botón para escanearlo; si no lo escanea a tiempo, el link queda `failed` con
         *       `qr_timeout` y el número que creó el link se borra (libera el lugar). Si el alta tomó un
         *       lugar libre que tu cuenta ya tenía, ese lugar no se borra: queda como estaba. `country`
         *       (opcional, ISO 3166-1 alfa-2, por ejemplo `"mx"`) es el país desde donde se abre la
         *       sesión de WhatsApp del número: conviene que sea el del teléfono de tu cliente, porque
         *       WhatsApp puede rechazar la vinculación («no se puede vincular ahora») si la sesión se abre
         *       desde otro país. Sin `country` se usa el país que detecta el navegador de tu cliente en
         *       la página y, si no detecta ninguno, Colombia (`co`). No vale con `device_id` (una
         *       reconexión no crea el número) ni con `type: "meta"`.
         *     - `type: "meta"`: número oficial con el Embedded Signup de Meta, el mismo del panel. El
         *       número se crea **al terminar** el Embedded Signup. `allowed_connection_types` es
         *       obligatorio: `coexistence` (el número sigue en la app WhatsApp Business), `dedicated` (un
         *       número solo para la API) o los dos, y entonces elige tu cliente. `provision_us_number:
         *       true` ofrece además un número de EE. UU. del pool de Funnelchat: es siempre un número
         *       dedicado, así que exige `dedicated` en `allowed_connection_types` y no vale con
         *       `device_id`; si no, responde `422 invalid_request`. Si falla el inicio de sesión de
         *       Facebook (`facebook_auth_failed`) o Meta da un error (`meta_error`), el link **sigue
         *       `pending`** y tu cliente puede intentarlo de nuevo con el mismo link; al quinto intento
         *       fallido el link pasa a `failed` con ese código. Mientras el alta oficial por link no esté
         *       habilitada responde `503 meta_connect_disabled`. El cliente le paga a Meta los mensajes
         *       con el medio de pago de su cuenta de WhatsApp Business: tiene que cargarlo en Meta.
         *
         *     El cupo del plan y el pago de la cuenta se controlan al crear el link y otra vez al usarlo:
         *     el link no reserva lugar. Con el pago vencido, crear el link responde `403`, y usarlo deja
         *     el link `failed` con `quota_exceeded`. Con `device_id` el link **reconecta** ese número (no ocupa un lugar nuevo;
         *     el `type` tiene que coincidir con el del número) y revoca los links de reconexión anteriores
         *     de ese número. Cada cuenta puede tener como máximo 20 links pendientes.
         *
         *     Para enterarte del resultado: el webhook `device.connected` (trae `connect_link_id` y
         *     `external_reference`), la `return_url` o `GET connect-links/{link}`. Al terminar, la página
         *     lleva a tu cliente a la `return_url` con el resultado **en la query string**, nada más:
         *     `connect_link_id`, `status` (`completed` o `failed`), `device_id` (solo si completó) y
         *     `error_code` (solo si falló); por ejemplo
         *     `https://tu-sistema.com/vuelta?connect_link_id=12&status=completed&device_id=345`. Si tu
         *     `return_url` ya trae parámetros, se suman a los tuyos. El link muere si revocas la clave de
         *     API que lo creó.
         *
         *     Acepta el header `Idempotency-Key` (de 1 a 255 caracteres) para reintentar sin crear otro
         *     link: la misma clave con el mismo cuerpo, dentro de las 24 horas, devuelve el mismo link.
         */
        post: operations["connectLink.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/connect-links/{link}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ver un link de alta
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     El estado actual del link, sin la URL. `error_code` explica por qué no se completó:
         *     `link_expired`, `already_used`, `revoked`, `quota_exceeded`, `trial_number_blocked`,
         *     `facebook_auth_failed`, `meta_error`, `number_not_owned`, `qr_timeout` o `provider_error`.
         *     Un link `meta` sigue `pending` (sin `error_code`) después de un intento fallido de Facebook
         *     o de Meta, y pasa a `failed` al quinto.
         */
        get: operations["connectLink.show"];
        put?: never;
        post?: never;
        /**
         * Revocar un link de alta
         * @description **Escritura** · requiere **Números de WhatsApp → Crear, conectar y borrar**.
         *
         *     > 🔑 **Da el control de un WhatsApp.** Por eso pide **Números de WhatsApp → Crear, conectar y borrar**: crear un número ocupa un lugar del plan, y quien escanee su QR o use un link de alta conecta un teléfono a esta cuenta. Trata el QR y la URL del link como un secreto.
         *
         *     Solo un link `pending`: después de revocarlo, la página responde que el link ya no sirve.
         *     Si la página ya había creado un número que todavía no se conectó, ese número se borra.
         */
        delete: operations["connectLink.destroy"];
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         */
        get: operations["customDomain.index"];
        put?: never;
        /**
         * Registrar un dominio propio
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     `hostname` es el dominio, por ejemplo `go.mimarca.com` (si llega con `https://` o con una
         *     ruta, se toma solo el dominio). El dominio nace `PENDING_DNS`: `dns_records` trae el
         *     registro que hay que crear en el DNS del dominio. Después, `POST
         *     custom-domains/{customDomain}/verify` comprueba si ya está y actualiza `status`.
         *
         *     La validación del certificado es `HTTP` por defecto. Si el registro no puede apuntar
         *     todavía, `POST custom-domains/{customDomain}/switch-validation` la cambia a `TXT`.
         *     `detected_provider` es el proveedor de DNS que se detectó para el dominio, o `null`.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Vuelve a comprobar los registros DNS y el certificado del dominio, sin esperar a la
         *     próxima comprobación automática, y devuelve el dominio con su `status`: `PENDING_DNS`,
         *     `PENDING_SSL`, `ACTIVE` o `FAILED`. El resultado puede tardar unos minutos: si todavía no
         *     es `ACTIVE`, vuelve a verificarlo más tarde.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     `method` es `HTTP` (por defecto: el certificado se emite cuando el registro DNS del
         *     dominio ya apunta) o `TXT` (se valida con un registro TXT, para un dominio que todavía no
         *     puede apuntar). Con `TXT`, `dns_records` trae también el registro TXT; si todavía no
         *     aparece, lo trae la próxima verificación (`POST custom-domains/{customDomain}/verify`).
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
         * @description > ⚠️ **No se puede deshacer:** el dominio propio se borra y deja de usarse de inmediato.
         *
         *     **Escritura** · requiere **Números de WhatsApp → Crear, conectar y borrar**.
         *
         *     El dominio deja de funcionar en el momento. No se puede deshacer: para volver a usarlo hay
         *     que registrarlo otra vez.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         *
         *     `external_reference` filtra por tu propia referencia (igualdad exacta).
         */
        get: operations["device.index"];
        put?: never;
        /**
         * Crear un número por QR
         * @description **Escritura** · requiere **Números de WhatsApp → Crear, conectar y borrar**.
         *
         *     > 🔑 **Da el control de un WhatsApp.** Por eso pide **Números de WhatsApp → Crear, conectar y borrar**: crear un número ocupa un lugar del plan, y quien escanee su QR o use un link de alta conecta un teléfono a esta cuenta. Trata el QR y la URL del link como un secreto.
         *
         *     Crea un número de la cuenta que se conecta escaneando un código QR con la app de WhatsApp
         *     (`connection: "qr"`). Después pide su QR con `GET devices/{device}/qr`, o envíale a tu
         *     cliente un link de alta (`POST connect-links` con `type: "qr"`). El proveedor lo elige
         *     Funnelchat, igual que en el panel.
         *
         *     Ocupa un lugar del plan, como «Agregar número» en el panel. Con `same_number_as` (un número
         *     de la cuenta conectado a la API oficial en coexistencia) suma QR a ese mismo número y no
         *     ocupa un lugar nuevo.
         *
         *     Un número conectado por QR **no es oficial**: WhatsApp puede restringirlo o bloquearlo si
         *     envía mensajes que la gente no espera. Para volumen, usa un número oficial (un link de alta
         *     con `type: "meta"`).
         *
         *     `country` es el país desde donde se abre la sesión de WhatsApp del número (ISO 3166-1
         *     alfa-2, por ejemplo `"mx"`). Conviene que sea el del teléfono que va a escanear el QR:
         *     WhatsApp puede rechazar la vinculación («no se puede vincular ahora») si la sesión se abre
         *     desde otro país. Sin `country` se usa Colombia (`co`): la llamada llega por el borde de la
         *     API y su ubicación no es la de tu cliente, así que no sirve para elegirlo. Si Funnelchat no
         *     tiene salida en ese país, usa la más cercana.
         *
         *     La cuenta tiene como máximo un número por QR que nunca se conectó: mientras exista, responde
         *     `409 pending_number_exists` con su `device_id` (conéctalo o bórralo).
         *
         *     Con el header `Idempotency-Key` puedes reintentar sin duplicar: la misma clave con el mismo
         *     cuerpo, dentro de las 24 horas, devuelve el mismo número (`Idempotent-Replayed: true`). La
         *     misma clave con otro cuerpo responde `422 idempotency_key_mismatch`; mientras la primera
         *     sigue en curso, `409 operation_in_progress`. Una clave vacía o de más de 255 caracteres
         *     responde `422 invalid_idempotency_key` y no crea nada.
         */
        post: operations["deviceProvisioning.store"];
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         */
        get: operations["device.show"];
        /**
         * Actualizar un número
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Cambia los datos del número, por ejemplo `alias`, `color`, `image`, tu
         *     `external_reference`. Los campos que no envíes no cambian.
         */
        put: operations["device.update"];
        post?: never;
        /**
         * Eliminar un número
         * @description > ⚠️ **No se puede deshacer:** el número se borra de la cuenta y libera su lugar en el plan. Para volver a usar ese teléfono hay que crear un número nuevo y conectarlo otra vez.
         *
         *     **Escritura** · requiere **Números de WhatsApp → Crear, conectar y borrar**.
         *
         *     Borra el número de la cuenta y deja libre su lugar en el plan. No se puede deshacer: para
         *     volver a usar ese teléfono hay que crear un número nuevo y conectarlo otra vez. Si la cuenta
         *     tenía números suspendidos por el plan, el lugar libre puede reactivar uno.
         *
         *     También borra un número conectado. Si es por QR, se cierra su sesión de WhatsApp. Si es
         *     oficial, el número sigue registrado en Meta y Funnelchat deja de recibir sus mensajes. Borra
         *     solo ese número: si borras el oficial y el mismo teléfono también está en la cuenta por QR
         *     (`same_number_as`), el número por QR sigue y vuelve a recibir los chats uno a uno.
         *
         *     Si el proveedor de WhatsApp no responde al cerrar la sesión, el número se borra igual y
         *     Funnelchat reintenta el cierre.
         *
         *     Al borrarlo llega el webhook `device.deleted`.
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
         * @description > ⚠️ **No se puede deshacer:** reinicia desde cero la sesión de WhatsApp del número: después hay que volver a escanear el código QR.
         *
         *     **Escritura** · requiere **Números de WhatsApp → Crear, conectar y borrar**.
         *
         *     Lo mismo que «Borrar datos» en el panel: borra la información del número conectado en
         *     este lugar, por QR u oficial, para conectar ahí un número **distinto**. El lugar en el plan
         *     sigue ocupado y se conserva el alias (y el color; en un número oficial, también la imagen).
         *     Para conectar el número nuevo, pide un QR (`GET devices/{device}/qr`) o usa el alta
         *     oficial.
         *
         *     Si era un número oficial conectado, llega el webhook `device.disconnected` con
         *     `reason: disconnected_by_user`, y si el mismo teléfono también está en la cuenta por QR, ese
         *     número vuelve a recibir los chats uno a uno.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
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
         * @description > ⚠️ **No se puede deshacer:** limpia la sesión de WhatsApp del número: después hay que volver a escanear el código QR.
         *
         *     **Escritura** · requiere **Números de WhatsApp → Crear, conectar y borrar**.
         *
         *     Lo mismo que «Desconectar» en el panel: cierra la conexión del número sin borrar su
         *     información ni liberar su lugar en el plan. Se conservan el alias, el color, la imagen,
         *     el historial y la identidad del número; `number` queda en `null` hasta que se vuelva a
         *     conectar.
         *
         *     - Por QR: se cierra la sesión de WhatsApp. Para volver a conectarlo hay que escanear un
         *       QR nuevo (`GET devices/{device}/qr`).
         *     - Oficial: deja de enviar y recibir hasta que se conecte otra vez con el alta oficial;
         *       vuelve el mismo número, en el mismo lugar. Si estaba conectado llega el webhook
         *       `device.disconnected` con `reason: disconnected_by_user`. Si el mismo teléfono también
         *       está en la cuenta por QR, ese número vuelve a recibir los chats uno a uno.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `pageSize` · orden fijo: el que devuelve el proveedor · no acepta parámetros de orden.
         */
        get: operations["device.messageQueue"];
        put?: never;
        post?: never;
        /**
         * Eliminar mensajes de la cola
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
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
         * @description > ⚠️ **No se puede deshacer:** descarta todos los mensajes en la cola del número, sin dejar registro de lo descartado.
         *
         *     **Escritura** · requiere **Números de WhatsApp → Crear, conectar y borrar**.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Un código de un solo uso, que vence pronto (`expiresAt`, `expiresInSeconds`), para que la
         *     extensión de Chrome pase a este número una sesión abierta de WhatsApp Web sin recibir las
         *     credenciales del número. Solo algunos números por QR lo admiten: los demás
         *     responden `422`.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     `pending` es `true` cuando el número se desconectó y todavía no se contó por qué
         *     (`POST devices/{device}/disconnect-survey`); `phone` es el número que se desconectó.
         */
        get: operations["deviceDisconnectSurvey.show"];
        put?: never;
        /**
         * Responder la encuesta de desconexión
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Guarda el motivo (`reason`) de la última desconexión del número.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `limit` · orden fijo: más reciente primero · no acepta parámetros de orden.
         *
         *     Las llamadas al proveedor de WhatsApp hechas para los números de la cuenta dentro de una
         *     ventana de tiempo, de la más reciente a la más vieja, con el número de cada una y la lista
         *     de números en `devices`. Para la página siguiente, envía el `next_cursor` de la respuesta
         *     como `cursor` (`has_more` dice si hay más). La primera página (sin `cursor`) trae además un
         *     resumen de la ventana en `summary`.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     El último estado guardado que informó Meta: si el número puede enviar (`health`), su
         *     identidad, el nivel de rendimiento y el historial. No consulta a Meta en el momento: para
         *     eso, `POST devices/{device}/health/refresh`. Solo para números oficiales.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Le pide a Meta el estado actual del número y devuelve lo mismo que
         *     `GET devices/{device}/health`, más `refresh_outcome`:
         *
         *     - `refreshed`: se consultó a Meta. Si Meta respondió con un error, se ve en `health.state`
         *       y `stale`.
         *     - `not_refreshed_yet`: no se consultó, porque el número se actualizó hace menos de 60
         *       segundos o ya hay otra actualización en curso. Los datos son los últimos guardados:
         *       vuelve a intentarlo en un momento.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `limit` · orden fijo: más reciente primero · no acepta parámetros de orden.
         *
         *     Las llamadas al proveedor de WhatsApp hechas para este número dentro de una ventana de
         *     tiempo (`range`, o `from` y `to`), de la más reciente a la más vieja. Para la página
         *     siguiente, envía el `next_cursor` de la respuesta como `cursor` (`has_more` dice si hay
         *     más). La primera página (sin `cursor`) trae además un resumen de la ventana en `summary`.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     Las últimas 5 llamadas al proveedor de WhatsApp de este número que no son envíos, con un
         *     veredicto (`verdict`): `healthy`, `review` o `attention`, y cuántas fallaron
         *     (`fail_count` de `sample_size`).
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
    "/api/v1/devices/{device}/qr": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pedir el QR de un número
         * @description **Escritura** · requiere **Números de WhatsApp → Crear, conectar y borrar**.
         *
         *     > 🔑 **Da el control de un WhatsApp.** Por eso pide **Números de WhatsApp → Crear, conectar y borrar**: crear un número ocupa un lugar del plan, y quien escanee su QR o use un link de alta conecta un teléfono a esta cuenta. Trata el QR y la URL del link como un secreto.
         *
         *     El código QR para conectar un número por QR: se escanea con la app de WhatsApp
         *     (Dispositivos vinculados). Si el número todavía no tiene sesión con el proveedor, la crea.
         *     Cada llamada trae el código de ese momento: WhatsApp lo cambia cada pocos segundos hasta
         *     que se escanea, y uno viejo no vincula («no se puede vincular el dispositivo ahora»).
         *     Pídelo de nuevo cada `expires_in` segundos (hoy **5**, la misma cadencia del panel) y
         *     reemplaza la imagen con la última; no guardes ni reenvíes un QR. Con el número conectado,
         *     `connected` es `true` y `qr_code` es `null`; también llega el webhook `device.connected`.
         *
         *     `qr_code` es una imagen PNG en data URI (`data:image/png;base64,...`), o `null` mientras la
         *     sesión arranca: en ese caso deja de mostrar el QR anterior y vuelve a pedirlo después de
         *     `expires_in` segundos.
         *
         *     Solo para números por QR: un número oficial responde `422 provider_unsupported`.
         */
        get: operations["deviceProvisioning.qr"];
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     Lo consulta en Meta; si Meta no devuelve ninguno, responde el último que se reservó. Solo
         *     para números oficiales.
         */
        get: operations["deviceUsername.show"];
        put?: never;
        /**
         * Configurar el nombre de usuario
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     `username` va de 3 a 35 caracteres: letras minúsculas, números, puntos y guiones bajos. Se
         *     reserva en Meta; si Meta lo rechaza (por ejemplo, porque ya está tomado), la respuesta
         *     trae su motivo en `message`. Solo para números oficiales.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     Las sugerencias que da Meta para ese número. Solo para números oficiales.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `per_page` · orden fijo: attempted_at descendente, después id descendente · no acepta parámetros de orden.
         *
         *     Una fila por intento: los reintentos de un mismo evento comparten `event_id`.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         */
        get: operations["webhookEndpoint.index"];
        put?: never;
        /**
         * Crear un webhook
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         */
        get: operations["webhookEndpoint.show"];
        put?: never;
        post?: never;
        /**
         * Eliminar un webhook
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     Se borran con él sus suscripciones y su historial de entregas.
         */
        delete: operations["webhookEndpoint.destroy"];
        options?: never;
        head?: never;
        /**
         * Actualizar un webhook
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     La URL nueva sigue las mismas reglas que al registrar el endpoint: `https` y que resuelva
         *     a una dirección pública de internet. Volver a habilitar un endpoint (`status: enabled`)
         *     reinicia su cuenta de entregas fallidas.
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
         * @description **Escritura** · requiere **Números de WhatsApp → Editar**.
         *
         *     `events` es la lista completa: un tipo que no viene en la lista queda desuscripto, y
         *     `{"events": []}` deja el endpoint registrado sin recibir nada.
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
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
    "/api/v1/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Listar webhooks
         * @description **Lectura** · requiere **Avisos (webhooks) → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente · no acepta parámetros de orden.
         *
         *     Con una clave de API, solo las que la clave puede leer: se omiten las que
         *     tienen eventos de un área cuyo permiso le falta: **Números de WhatsApp → Ver**,
         *     **Contactos y conversaciones → Ver** o **Grupos y campañas → Ver**.
         */
        get: operations["webhookSubscription.index"];
        put?: never;
        /**
         * Crear un webhook
         * @description **Escritura** · requiere **Avisos (webhooks) → Administrar**.
         *
         *     Con una clave de API, cada tipo de `events` exige además el permiso
         *     **Números de WhatsApp → Ver**, **Contactos y conversaciones → Ver** o
         *     **Grupos y campañas → Ver**, según su área; si falta, 422.
         */
        post: operations["webhookSubscription.store"];
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
         * Ver un webhook
         * @description **Lectura** · requiere **Avisos (webhooks) → Ver**.
         *
         *     Con una clave de API, la clave necesita además el permiso de lectura del
         *     área de cada tipo de evento de la suscripción; si falta alguno, 403
         *     `permission_denied`.
         */
        get: operations["webhookSubscription.show"];
        /**
         * Actualizar un webhook
         * @description Reemplaza `url`, `events`, `description` y `filters`; `status` opcional
         *
         *     **Escritura** · requiere **Avisos (webhooks) → Administrar**.
         *
         *     Con una clave de API, cada tipo de `events` exige además el permiso
         *     **Números de WhatsApp → Ver**, **Contactos y conversaciones → Ver** o
         *     **Grupos y campañas → Ver**, según su área; si falta, 422.
         *
         *     Con una clave de API, la clave necesita además el permiso de lectura del
         *     área de cada tipo de evento que la suscripción tiene ahora; si falta alguno,
         *     403 `permission_denied` y no se cambia nada. Un cuerpo inválido responde 422
         *     antes de mirar la suscripción.
         *
         *     Si una clave de API cambia `url`, la suscripción queda atada a esa clave:
         *     cuando se revoque, pasa a `disabled` / `key_revoked`.
         */
        put: operations["webhookSubscription.update"];
        post?: never;
        /**
         * Eliminar un webhook
         * @description **Escritura** · requiere **Avisos (webhooks) → Administrar**.
         *
         *     Con una clave de API, la clave necesita además el permiso de lectura del
         *     área de cada tipo de evento de la suscripción; si falta alguno, 403
         *     `permission_denied` y no se borra.
         */
        delete: operations["webhookSubscription.destroy"];
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
         * Listar entregas de un webhook
         * @description **Lectura** · requiere **Avisos (webhooks) → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25); también `per_page` · orden fijo: attempted_at descendente, después id descendente · no acepta parámetros de orden.
         *
         *     Con una clave de API, la clave necesita además el permiso de lectura del
         *     área de cada tipo de evento de la suscripción; si falta alguno, 403
         *     `permission_denied`.
         *
         *     Con una clave de API, solo las entregas de tipos cuya área la clave puede
         *     leer; las de prueba, `webhook.test`, se muestran siempre.
         */
        get: operations["webhookSubscriptionDelivery.index"];
        put?: never;
        post?: never;
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
         * Enviar un evento de prueba
         * @description Envía una entrega de prueba firmada a la URL de la suscripción y devuelve el resultado
         *
         *     **Escritura** · requiere **Avisos (webhooks) → Administrar**.
         *
         *     Solo a suscripciones `active` o `paused`; una `disabled` responde 422 sin enviar nada.
         *
         *     Con una clave de API, la clave necesita además el permiso de lectura del área
         *     de cada tipo de evento de la suscripción; si falta alguno, 403
         *     `permission_denied`, antes que el 422 de una `disabled`.
         */
        post: operations["webhookSubscriptionTest.test"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/whatsapp-business-accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Cuentas de WhatsApp Business (WABA) de la cuenta
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     **Listado** · `perPage` de 1 a 100 (por defecto 25) · orden fijo: id ascendente, como número · no acepta parámetros de orden.
         *
         *     Las WABA a las que pertenecen los números de WhatsApp Cloud (la API oficial de Meta) de la cuenta, cada una
         *     con sus números (`devices`, ordenados por `device_id`).
         *
         *     Los números conectados por código QR no tienen WABA y **no aparecen**: una cuenta que sólo tiene números QR
         *     recibe una lista vacía.
         *
         *     `messaging_limit` es el límite de mensajes que Meta le asigna a la **cartera comercial** (business portfolio)
         *     dueña de la WABA, no a cada número: lo comparten todos los números de la cartera, y dos WABA de la misma
         *     cartera tienen el mismo límite. Es el último valor que Funnelchat leyó de Meta: `checked_at` dice cuándo Meta lo
         *     confirmó y es `null` si la última consulta no pudo reconfirmarlo. `per_day` es `null` para `TIER_UNLIMITED`.
         *     `messaging_limit` es `null` si todavía no hay ninguna lectura para los números de la WABA.
         *
         *     Todavía no incluye el nombre de la WABA, su estado de revisión en Meta, la moneda ni la zona horaria: se van a
         *     sumar como campos nuevos, sin cambiar los actuales.
         */
        get: operations["whatsAppBusinessAccount.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/whatsapp-business-accounts/{wabaId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Una cuenta de WhatsApp Business (WABA) de la cuenta
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     Lo mismo que el listado, para una sola WABA. Responde `404` si la cuenta no tiene números de WhatsApp Cloud en
         *     esa WABA: el mismo `404` para una WABA que no existe, que es de otra cuenta o cuyo id no es numérico.
         *
         *     Los números conectados por código QR no tienen WABA y **no aparecen**.
         *
         *     `messaging_limit` es el límite de mensajes que Meta le asigna a la **cartera comercial** (business portfolio)
         *     dueña de la WABA, no a cada número: lo comparten todos los números de la cartera, y dos WABA de la misma
         *     cartera tienen el mismo límite. Es el último valor que Funnelchat leyó de Meta: `checked_at` dice cuándo Meta lo
         *     confirmó y es `null` si la última consulta no pudo reconfirmarlo. `per_day` es `null` para `TIER_UNLIMITED`.
         *     `messaging_limit` es `null` si todavía no hay ninguna lectura para los números de la WABA.
         *
         *     Todavía no incluye el nombre de la WABA, su estado de revisión en Meta, la moneda ni la zona horaria: se van a
         *     sumar como campos nuevos, sin cambiar los actuales.
         */
        get: operations["whatsAppBusinessAccount.show"];
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
         * @description **Lectura** · requiere **Números de WhatsApp → Ver**.
         *
         *     `month` es el mes en `YYYY-MM`; sin `month`, o con un valor que no es un mes válido,
         *     devuelve el mes en curso.
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
         * Generate a new secret
         * @description A new secret, shown only once; the previous one stops working.
         *
         *     **Not open to API keys:** with a key it answers `403 route_not_available`. Rotate the secret from the panel.
         */
        post: operations["pendingWebhookSubscription.rotateSecret"];
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
        /** List forms */
        get: operations["pendingForms.list"];
        put?: never;
        /** Create a form from a template */
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
        /** Templates to start a form */
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
        /** One version of a form */
        get: operations["pendingForms.retrieve"];
        /** Save the definition of a draft */
        put: operations["pendingForms.update"];
        post?: never;
        /** Delete a draft */
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
        /** Open a new version (draft) of a published form */
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
        /** Upload the draft to Meta without publishing it */
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
        /** Publish on Meta */
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
        /** The numbers of the form */
        get: operations["pendingForms.numbers"];
        put?: never;
        /** Publish it on another number too */
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
        /** Take it off a number */
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
        /** Retry the numbers that failed */
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
        /** The current definition of a form */
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
        /** The versions of a form */
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
        /** The answers of a form */
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
        /** One answer */
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
        /** The funnel of a form: sent, opened, completed */
        get: operations["pendingForms.metrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export interface webhooks {
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
         *     `status` es `success`, `failed` o `partially_failed`. `reason` dice por qué terminó: `completed` (se enviaron todas las páginas), `cancelled` (se cerró una campaña pausada), `template_rejected` (Meta rechazó la plantilla, o su categoría cambió, mientras la campaña esperaba; también cuando Meta la pausó durante el envío y se detuvo la campaña), `approval_expired` (la plantilla no se aprobó a tiempo), `mac_lockout` (la cuenta alcanzó su límite de contactos activos), `mac_check_unavailable` (la campaña la inició una API key y el límite de contactos activos no se pudo verificar, así que no se envió nada), `no_recipients` (la audiencia quedó vacía) o `error` (el envío no pudo despacharse). `totals` son los conteos del envío: `processed` (destinatarios procesados), `failed` y `skipped_unreachable` (destinatarios que el canal no puede alcanzar); valen 0 si la campaña terminó antes de enviar. Se emite una sola vez por campaña.
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
         *     `reason` es `quality_degraded` (la calidad del número bajó respecto de la del inicio, o llegó a RED), `quality_unreadable` (no se pudo leer la calidad en tres controles seguidos), `template_unavailable` (Meta dejó la plantilla en `PAUSED`, `DISABLED` o `REJECTED` antes de una tanda), `payment_issue` (el 2 % o más de los envíos de la misma campaña, con un mínimo de 20 envíos, fueron rechazados por Meta con el código 131042, un problema de pago o de facturación de la cuenta de WhatsApp Business; el 2 % y el mínimo de 20 envíos son los valores por defecto y se pueden configurar; aplica a cualquier campaña, tenga o no envío inteligente; no frena el número; al reanudar la campaña el conteo, incluidos los envíos que cuentan, vuelve a empezar de cero) o `rejection_rate` (entre los envíos recientes de la propia campaña, por defecto las últimas 24 horas, Meta rechazó una proporción igual o mayor al umbral configurable, por defecto 15 %, con los códigos que indican una restricción de la cuenta o del número; la lista es configurable y por defecto es 131048, 131031 y 368; los códigos 131049 y 131026 no pausan la campaña). Con `rejection_rate` llega además `rejection`: `codes` (los que llegaron a su umbral: hoy `failed`), `rates` (el porcentaje de cada uno; las tasas de `131049` y `131026` se informan como dato aunque no pausen), `attempts` (los envíos medidos) y `window_hours`. `quality` y `quality_baseline` son la calidad de Meta leída en el control y la del inicio del envío (`GREEN`, `YELLOW`, `RED`), o `null` si no se pudo leer, y siempre `null` en una difusión sin envío inteligente. `template` es `{name, status}` con el nombre de la plantilla y su estado en Meta cuando `reason` es `template_unavailable`, y `null` en las demás pausas (por calidad, pago o rechazos). Con `rejection_rate` el número además queda frenado 7 días (configurable): mientras dure no se pueden crear, ejecutar ni reanudar campañas desde ese número, ni mandar plantillas a contactos que no le escribieron en las últimas 24 horas, y solo soporte lo levanta antes. Las pausas por calidad, por plantilla y por rechazos son solo de las campañas con envío inteligente; la pausa por `payment_issue` puede ocurrir en cualquier campaña. Reanudar la campaña y que se pause otra vez emite otro evento.
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
                     *         "quality_baseline": "GREEN",
                     *         "template": null
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
         *     Se envía un evento por cada contacto y etiqueta quitados, también en operaciones en bloque; no se envía si el contacto no tenía la etiqueta. No se envía al borrar la etiqueta, al borrar o fusionar contactos ni al desvincular etiquetas de un tablero. `source` indica el origen: manual, flow, bulk o ai. En operaciones en bloque grandes el límite de volumen de la cuenta puede descartar parte de los eventos.
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
         * @description Terminó un pipeline de operaciones sobre grupos, con su resultado agregado y la clave de idempotencia del pedido que lo originó, cuando la hay.
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
         * @description One of the numbers of the account got connected: by scanning the QR code, by finishing the sign-up of a WhatsApp Cloud number, or through a connect link.
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
                            device: components["schemas"]["PendingWebhookDevice"];
                            /** Format: date-time */
                            connected_at: string;
                            /** @description The connect link of this connection, or `null` when it did not come from a link. */
                            connect_link_id: number | null;
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
         * @description One of the numbers of the account disconnected and can no longer send or receive: a QR session that closed or was protected from a shadow ban, an official number that failed its re-registration, or one disconnected from the panel.
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
                            device: components["schemas"]["PendingWebhookDevice"];
                            /** Format: date-time */
                            disconnected_at: string;
                            /** @enum {string} */
                            reason: "qr_logged_out" | "meta_account_not_registered" | "shadow_ban_protection" | "provider_error" | "unknown" | "disconnected_by_user";
                            /** @description The connect link that last connected the number, or `null`. */
                            connect_link_id: number | null;
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
         * @description A charge of the subscription could not be processed (Stripe subscriptions only).
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
         * @description The plan was blocked by an unprocessed charge. Planned: not emitted yet.
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
         * @description The next charge of the subscription is coming up (Stripe subscriptions only).
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
         * @description The subscription is about to expire. Planned: not emitted yet.
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
         * @description The trial period is about to end.
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
         * @description The scheduled cancellation of the subscription was reverted (Stripe subscriptions only).
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
         * @description The cancellation of the subscription was confirmed (Stripe subscriptions only).
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
         * @description The dormant-account period is about to end.
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
         * @description The AI message quota is about to run out. Planned: not emitted yet.
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
         * @description An AI quota top-up was credited. Planned: not emitted yet.
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
         * @description An AI quota top-up could not be processed. Planned: not emitted yet.
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
         * @description The account reached 80% of its monthly active contacts of the cycle.
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
         * @description The account used up its monthly active contacts of the cycle; a 24-hour grace period starts.
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
         * @description Some monthly active contacts expire in the next 7 days.
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
         * @description The account was blocked by usage: the 24-hour grace period after using up the monthly active contacts ended.
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
         * @description An action on a group of a campaign failed.
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
                     *           "name": "Example group"
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
                                /** @description `null` for the actions of a campaign. */
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
         * @description The daily report of the account was generated (clicks, joins and leaves).
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
         * @description A campaign has no groups to send the people who come through its link to.
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
                     *           "name": "Example campaign"
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
         * @description A group went from not full to full.
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
                     *           "name": "Example group",
                     *           "type": "example_type"
                     *         },
                     *         "campaign": {
                     *           "uuid": "xK9mQz",
                     *           "name": "Example campaign"
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
         * @description Someone wrote in a group of one of your numbers. Not emitted for the messages of your own numbers.
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
                     *           "name": "Example group"
                     *         },
                     *         "message": {
                     *           "uid": "3EB0C0FFEE0000000001",
                     *           "type": "text",
                     *           "text": "Hello everyone",
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
                                /** @description Only with `type: text`. */
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
         * @description Someone reacted to a message of a group.
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
                     *           "name": "Example group"
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
         * @description Someone asked to join a group that requires approval.
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
                     *           "name": "Example group"
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
         * @description Someone withdrew their request to join a group.
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
                     *           "name": "Example group"
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
    "device.deleted": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * device.deleted
         * @description A number of the account was deleted (from the panel, the API, or because a connect link expired without connecting it): its slot of the plan is free again.
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
                            device: components["schemas"]["PendingWebhookDevice"];
                            /** Format: date-time */
                            deleted_at: string;
                            /** @description The connect link that last connected the number, or `null`. */
                            connect_link_id: number | null;
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
    "device.health_changed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * device.health_changed
         * @description The health of an official number changed (what Meta lets it do). Emitted only when the overall state changes.
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
                            device: components["schemas"]["PendingWebhookDevice"];
                            /** @enum {string} */
                            previous_state: "available" | "limited" | "blocked" | "unknown";
                            /** @enum {string} */
                            state: "available" | "limited" | "blocked" | "unknown";
                            /** Format: date-time */
                            changed_at: string;
                            /** @description The connect link that last connected the number, or `null`. */
                            connect_link_id: number | null;
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
    "device.quality_changed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * device.quality_changed
         * @description The quality Meta gives an official number changed (`GREEN`, `YELLOW` or `RED`, as Meta sends them). If it drops, slow down the sends of that number before Meta limits it. Once per change; not when Meta has no quality data.
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
                            device: components["schemas"]["PendingWebhookDevice"];
                            previous: string;
                            current: string;
                            /** Format: date-time */
                            changed_at: string;
                            /** @description The connect link that last connected the number, or `null`. */
                            connect_link_id: number | null;
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
    "device.messaging_limit_changed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * device.messaging_limit_changed
         * @description The messaging limit Meta gives an official number changed: how many different people it can start a conversation with per day (`TIER_250`, `TIER_1K`, `TIER_2K`, `TIER_10K`, `TIER_100K` or `TIER_UNLIMITED`). Meta sets it per business: one notice per number of the account that changed.
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
                            device: components["schemas"]["PendingWebhookDevice"];
                            previous: string;
                            current: string;
                            /** Format: date-time */
                            changed_at: string;
                            /** @description The connect link that last connected the number, or `null`. */
                            connect_link_id: number | null;
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
    "device.display_name_reviewed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * device.display_name_reviewed
         * @description Meta approved or rejected the display name of an official number.
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
                            device: components["schemas"]["PendingWebhookDevice"];
                            /** @enum {string} */
                            decision: "approved" | "rejected";
                            /** @description As Meta sends it. */
                            previous_status: string;
                            /** @description `APPROVED` or `DECLINED`, as Meta sends it. */
                            status: string;
                            verified_name: string | null;
                            /** @description Meta's reason in a rejection, or `null`. */
                            rejection_reason: string | null;
                            /** Format: date-time */
                            reviewed_at: string;
                            /** @description The connect link that last connected the number, or `null`. */
                            connect_link_id: number | null;
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
         * @description A group action asked through the API finished, such as a message to a group. `action.uuid` is the `action_id` it returned; sending, `result.message.uid` is the id of the message in WhatsApp.
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
                     *           "type": "send_message"
                     *         },
                     *         "group": {
                     *           "uid": "120363000000000001@g.us",
                     *           "name": "Example group"
                     *         },
                     *         "campaign": null,
                     *         "result": {
                     *           "message": {
                     *             "uid": "3EB0C767D26A1D4E5F6A"
                     *           }
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
                                uuid: string;
                                name: string | null;
                            } | null;
                            /** @description Sending: `message.uid`; with phones: `participants`; creating or renewing the link: `invite_link`; the rest, empty. */
                            result: {
                                message?: {
                                    uid?: string;
                                };
                                participants?: components["schemas"]["PendingGroupParticipantResult"][];
                                invite_link?: string;
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
         * @description A person joined one of the account's groups.
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
                     *           "name": "Example group"
                     *         },
                     *         "campaign": null,
                     *         "participant": {
                     *           "identity": "5491100000000",
                     *           "identity_type": "phone",
                     *           "name": "Ana"
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
                            /** @description `null` when the group is not of a campaign. */
                            campaign: {
                                uuid: string;
                            } | null;
                            participant: {
                                /** @description The phone, or a `…@lid` when WhatsApp does not show it. */
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
         * @description A person left one of the account's groups.
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
                     *           "name": "Example group"
                     *         },
                     *         "campaign": null,
                     *         "participant": {
                     *           "identity": "5491100000000",
                     *           "identity_type": "phone",
                     *           "name": "Ana"
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
                            /** @description `null` when the group is not of a campaign. */
                            campaign: {
                                uuid: string;
                            } | null;
                            participant: {
                                /** @description The phone, or a `…@lid` when WhatsApp does not show it. */
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
         * @description A contact wrote to one of the WhatsApp numbers of the account.
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
                     *         "message": {
                     *           "id": 1001,
                     *           "type": "text",
                     *           "text": "Hi, I want more information",
                     *           "media": null
                     *         },
                     *         "contact": {
                     *           "id": 2001,
                     *           "name": "Example contact",
                     *           "phone": "+5491100000000"
                     *         },
                     *         "receiver": {
                     *           "phone": "+5491100000001"
                     *         },
                     *         "device_id": 3
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            message: {
                                /** @description The id of the message in the history of the contact. */
                                id: number;
                                /** @enum {string} */
                                type: "text" | "image" | "video" | "document" | "sticker" | "contact" | "audio" | "note" | "action" | "invalid" | "interactive" | "location" | "voice_call" | "video_call" | "event" | "button" | "template" | "notification" | "option_list" | "template_button_reply" | "poll" | "whatsapp_form" | "call_permission_request" | "call_permission_reply" | "request_contact_info";
                                /** @description `null` when the message has no text (a file without caption, say). */
                                text: string | null;
                                media: {
                                    /** @description The URL of the file. */
                                    file: string;
                                } | null;
                            };
                            contact: {
                                id: number | null;
                                name: string | null;
                                /** @description `+` and digits, or `null` when the contact has no phone (a `@lid`, say). */
                                phone: string | null;
                            };
                            receiver: {
                                /** @description The phone of your number that received it, `+` and digits. */
                                phone: string | null;
                            };
                            /** @description The number of your account that received the message: the same `device_id` you send to reply through it. `null` when the message has no number. */
                            device_id: number | null;
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
         * @description The delivery status of a message you sent with the API changed. One notice per transition, never one that goes back; `queued` is not reported. It must be asked for explicitly in `events`.
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
                            /** @description The `id` of the message in the history of the contact. */
                            message_id: number;
                            contact_id: number;
                            /** @description The number of your account that sent the message. */
                            device_id: number | null;
                            /** @enum {string} */
                            status: "sent" | "delivered" | "read" | "failed";
                            /** @enum {string|null} */
                            previous_status: "sent" | "delivered" | "read" | "failed" | null;
                            /** @description Only when `status` is `failed`. Why it failed. When Funnelchat stopped it, `code` is `null` and `reason` says why; when it failed in WhatsApp, `code` and `title` are the provider's and `reason` is `null`. */
                            error?: {
                                code: number | null;
                                title: string | null;
                                /** @enum {string|null} */
                                reason: "device_unavailable" | "insufficient_balance" | "window_closed" | "recipient_unreachable" | "template_not_found" | "template_unresolved_placeholder" | "not_queued" | "not_sent" | null;
                            };
                            /** Format: date-time */
                            occurred_at: string;
                            /** @description The `client_reference` you sent with the message, or `null`. */
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
         * @description A contact completed a form you sent them.
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
                     *           "name": "Example survey",
                     *           "version_id": 34
                     *         },
                     *         "message_id": 1002,
                     *         "contact_id": 2001,
                     *         "device_id": 3,
                     *         "answers": [
                     *           {
                     *             "key": "nombre",
                     *             "label": "Your name",
                     *             "value": "Example contact"
                     *           }
                     *         ],
                     *         "occurred_at": "2026-10-22T12:00:00Z"
                     *       }
                     *     }
                     */
                    "application/json": {
                        data?: {
                            form: {
                                /** @description The form (`family_id`). */
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
            theme: string | "light";
            owner_id: string;
            /**
             * @description La cuenta principal (`id`, `name`, `email`) cuando la cuenta es un agente. En
             *     `GET me` es siempre `null`.
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
            next_billing_at?: string;
            workspaces_billing?: string;
            last_payment_at: string | "";
            feature_versions?: string;
            /**
             * @description Por cada función en prueba, `true` si la cuenta usa la versión beta y `false` si
             *     usa la estable; un agente ve la de su cuenta principal.
             */
            effective_feature_versions?: unknown[];
            /** @description Si la cuenta tiene habilitados los espacios de trabajo. */
            workspaces_enabled?: string;
            /**
             * @description Si la beta `device_auto_sync` está activa para el dueño efectivo del espacio activo.
             *     Mismo gating por ruta que `workspaces_enabled`.
             */
            device_auto_sync_enabled?: boolean;
            /**
             * @description Cuánto usa la cuenta las funciones del panel. Solo aparece cuando ya está
             *     calculado.
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
            /** @description Si la cuenta está en pausa; `dormant_expires_at` dice hasta cuándo. */
            is_dormant: boolean;
            dormant_expires_at: string | null;
            /**
             * @description Solo cuando se trabaja en el espacio de trabajo de otra cuenta: de qué cuenta son
             *     los datos, y en `overridden_fields` qué campos de esta respuesta vienen de ella.
             */
            workspace_context?: string;
            /**
             * @description Con qué plataforma de cobro se gestiona la pausa de la cuenta: `hotmart`,
             *     `stripe` o `manual`.
             * @enum {string}
             */
            dormant_provider: "hotmart" | "manual" | "stripe";
            can_enter_dormant?: boolean | null;
            /** @description `true` si el paso del cobro de Hotmart a Stripe quedó sin una suscripción asociada. */
            stripe_migration_incomplete: boolean;
            stripe_migration_incomplete_reason?: string;
            /**
             * @description MAC enforcement fields.
             *     mac_enforcement_enabled: cast to bool so null (pre-migration) renders as false.
             *     available_mac_buckets_sum: single extra query; acceptable on /me (single user).
             *     per-workspace-billing: the account /me shows the ACCOUNT pool (own-billing
             *     workspaces are excluded via the accountPool scope), never forUser's union.
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
         *     | `11` <br/> El pedido de hacer administrador a la persona se aceptó, pero todavía no llegó la confirmación de WhatsApp. |
         *     | `12` <br/> Una acción de un plan de operación que no se ejecutó a propósito: para proteger al creador del grupo, para no dejarlo sin administrador, porque venció la espera de confirmación o porque un paso anterior del mismo grupo no se completó. Es definitivo: reintentar no la vuelve a ejecutar. |
         * @enum {integer}
         */
        ActionStatusEnum: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
        /**
         * AlertAction
         * @enum {string}
         */
        AlertAction: "disconnected" | "usage_80" | "expiring" | "usage_100" | "upcoming_charge" | "payment_failed" | "plan_blocked" | "reactivated" | "trial_ending" | "cancellation_confirmed" | "dormant_ending" | "blocked" | "no_groups_available" | "daily_report" | "action_failed" | "message_failed" | "full" | "invalid_link" | "started" | "paused" | "resumed" | "cancelled" | "low_balance" | "topup_succeeded" | "topup_failed";
        /** AlertCampaignResource */
        AlertCampaignResource: {
            id: string;
            uuid: string;
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
        /** AlertDestinationCreatedResource */
        AlertDestinationCreatedResource: unknown[];
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
        AlertModule: "device" | "mac" | "billing" | "subscription" | "account" | "campaign" | "group" | "broadcast" | "ai_quota";
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
        /** ApiGroupActionAcceptedResource */
        ApiGroupActionAcceptedResource: {
            action_id: string;
            /** @constant */
            status: "queued";
        };
        /**
         * ApiGroupDescriptionRequest
         * @description Cuerpo de `PUT /groups/{group}/description`: una descripción vacía la borra, salvo con un número oficial,
         *     en el que WhatsApp no permite borrarla. Los campos que no figuran se ignoran.
         */
        ApiGroupDescriptionRequest: {
            device_id: number;
            description: string | null;
        };
        /**
         * ApiGroupDeviceRequest
         * @description `device_id` of the number that acts (query string of the live invite-link read, body of the renew
         *     action).
         */
        ApiGroupDeviceRequest: {
            device_id: number;
        };
        /** ApiGroupImportResource */
        ApiGroupImportResource: {
            /** @description Identificador del grupo en WhatsApp. */
            uid: string;
            /** @description Nombre del grupo. */
            name: string | null;
            /** @description `true` si esta llamada lo importó; `false` si ya estaba en la cuenta. */
            imported: boolean;
            /** @description Si el número indicado es administrador del grupo, según WhatsApp. Sin serlo no puede enviarle mensajes ni hacer acciones de grupo. */
            is_admin: boolean;
        };
        /**
         * ApiGroupNameRequest
         * @description Cuerpo de `PUT /groups/{group}/name`: el nombre se envía a WhatsApp tal cual, sin numeración de campaña.
         *     Los campos que no figuran se ignoran.
         */
        ApiGroupNameRequest: {
            device_id: number;
            name: string;
        };
        /**
         * ApiGroupPhonesRequest
         * @description Cuerpo de las acciones de grupo que reciben una lista de teléfonos (`device_id` y `phones`).
         *     Los teléfonos se normalizan y se quitan los repetidos antes de contarlos contra el máximo por pedido.
         *     Los campos que no figuran se ignoran.
         */
        ApiGroupPhonesRequest: {
            device_id: number;
            phones: string[];
        };
        /**
         * ApiGroupPhotoRequest
         * @description Cuerpo de `PUT /groups/{group}/photo`: una URL `https` de una imagen jpg, jpeg o png.
         *     Los campos que no figuran se ignoran.
         */
        ApiGroupPhotoRequest: {
            device_id: number;
            photo_url: string;
        };
        /**
         * ApiGroupRenewLinkRequest
         * @description Cuerpo de la renovación del link de invitación (`device_id`).
         */
        ApiGroupRenewLinkRequest: {
            device_id: number;
        };
        /**
         * ApiGroupSettingsRequest
         * @description Cuerpo de `PUT /groups/{group}/settings`: el único ajuste es si los miembros pueden enviar mensajes.
         *     Los campos que no figuran se ignoran.
         */
        ApiGroupSettingsRequest: {
            device_id: number;
            members_can_send_messages: boolean;
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
             * @description Respuestas a la invitación de un evento, por respuesta, contando una sola vez a cada persona. Las
             *     respuestas que nadie eligió no aparecen.
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
            /**
             * @description `true` si la última ocurrencia del envío no salió porque se alcanzó el límite de envíos del plan. Solo
             *     se calcula en el detalle del envío; en las demás respuestas es siempre `false`.
             */
            blocked_by_plan_limit: boolean;
            type: string;
            folder: {
                id: string;
                name: string;
            } | null;
            audience: string;
            total_readed: unknown;
            total_played: unknown;
            link_clicks: number;
            /** @description Dominio propio con el que se acortan los links del mensaje para contar sus clics, o `null` si no tiene. */
            whalink_custom_domain: string;
            shipping_speed: string;
            campaign_ids: string;
            group_ids: string | null;
            excluded_group_ids: string;
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
                /** @constant */
                sent: 0;
                /** @constant */
                billed: 0;
                /** @constant */
                free: 0;
                /** @constant */
                pending_price: 0;
                /** @constant */
                no_data: 0;
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
                error_source: ("meta" | "internal" | null) | unknown;
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
            exclude_never_replied: boolean;
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
            smart_send_state: null | {
                batch_size: string;
                pages_per_batch: string;
                current_batch: string;
                total_batches: string;
                risk_signals: string;
                risk_pause: string;
                rejection_codes: string;
                risk_pause_count: string;
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
                stop_reason: string;
                number_brake_until: string;
                number_brake_lifted_at: string;
                template_name: string;
                template_status: string;
                quality_risk_accepted: {
                    at: string | null;
                    quality: string | null;
                };
            } | string;
            number_brake_until: string | null;
            failure_reason: {
                reason: string | null;
            } | null;
            send_mode: components["schemas"]["BroadcastSendModeEnum"];
            protect_template_category: boolean;
            adviser_id: number | null;
            adviser_name: string | null;
            publish_as_status: boolean;
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
            progress: {
                processed: unknown;
                total: number;
            } | null;
            paused_at: string | null;
            pause_reason: string | null;
            resume_from_contact: number | null;
            stop_reason: string | null;
            publish_as_status: string;
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
            redirect_group_id: string | null;
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
            /** @description Id del número de la campaña, o `null` si no tiene o si el número no es del workspace de la clave. */
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
            /** @description Participantes de los grupos de la campaña. Con una clave, solo los de los grupos del workspace de la clave. */
            total_participants: string;
            total_clicks: string;
            total_in: string;
            total_out: string;
            /** @description Entradas a los grupos de la campaña, según el contador de entradas de cada grupo. */
            total_in_counter: number;
            /** @description Salidas de los grupos de la campaña, según el contador de salidas de cada grupo. */
            total_out_counter: number;
            /**
             * @description Average read rate (0..100) of this campaign's groups over the last
             *     30 days, counting only groups that have recent sends. NULL when no
             *     group has data or the read rate is not available for the account.
             *     For an API key, only the campaign's groups of its workspace.
             */
            average_read_rate: number | null;
            auto_create_groups: boolean;
            group_creation_suspended: string | boolean;
            suspended_creator_phones: string | string[];
            group_creation_has_available_creator: string | boolean;
            /**
             * @description Qué es la campaña de grupos API: quién crea los grupos, quiénes se suman y con qué plantilla de
             *     invitación. Solo viene en las campañas de tipo Grupo API; en los demás tipos la clave no aparece.
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
            /** @description Dominio propio de la campaña para su link público, o `null` si usa el dominio por defecto. */
            custom_domain: string;
            photo: string | "";
            /** @description Id del número de la campaña, o `null` si no tiene o si el número no es del workspace de la clave. */
            deviceId: string;
            userId: string;
            type: string;
            /** @description Si la campaña está activa. */
            is_active: string;
            /** @description Cantidad de grupos de la campaña. Con una clave, solo los del workspace de la clave. */
            groups: string;
            total_clicks: string;
            total_in: string;
            /** @description Entradas a los grupos de la campaña, según el contador de entradas de cada grupo. */
            total_in_counter: number;
            admins: string;
            group_admins: string;
            disconnected_groups: string;
            connection_error_groups: string;
            running_actions_count: string;
            pending_actions_count: string;
            pending_sync_groups: string;
            /** @description En el listado es siempre `false`: el estado de la creación de grupos viene en el detalle de la campaña. */
            group_creation_suspended: boolean;
            suspended_creator_phones: string[];
            group_creation_has_available_creator: boolean;
            /**
             * @description Cantidad de grupos de la campaña. Solo viene en las campañas de tipo Grupo API, igual que `api_policy`;
             *     en los demás tipos las dos claves no aparecen.
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
        /** ConnectLinkResource */
        ConnectLinkResource: {
            id: number;
            type: string;
            status: string;
            url: string;
            expires_at: string;
            allowed_connection_types: string[] | null;
            provision_us_number: boolean;
            country: string | null;
            device_id: number | null;
            external_reference: string | null;
            return_url: string | null;
            error_code: string | null;
            created_at: string | null;
            completed_at: string | null;
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
            is_mac_inactive?: boolean;
            ai_assistant_name: string | null;
            ai_assistant_email?: string;
            account_main_email?: string;
            stage_since?: string;
            is_stagnant?: boolean;
            follow_up_date?: string | null;
            lead_score?: {
                score: number;
                signals_count: number;
                category: string;
                confidence: string;
                disqualified: boolean;
                disqualified_at: string | null;
                updated_at: string | null;
            };
            name_mismatch?: unknown[] | null;
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
            content: unknown[] | {
                [key: string]: unknown;
            } | string;
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
            deleted_by: number | null;
            edited_at: string | null;
            poll_results?: string;
            event_rsvps?: string;
            form_answers?: string;
            reactions: unknown[];
            file_original_name: string | null;
            client_reference: string | null;
            scheduled?: boolean;
            ai_assistant?: {
                name: string;
                email: string;
                account_main_email: string;
            };
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
        /**
         * CreateApiGroupRequest
         * @description Cuerpo de `POST /groups`: `device_id`, `name`, `description` opcional y `participants` (con un número QR,
         *     de 1 al máximo permitido, teléfonos distintos y nunca el del propio número que crea el grupo).
         *     Los teléfonos se normalizan y se quitan los repetidos antes de contarlos. Los campos que no figuran se ignoran.
         */
        CreateApiGroupRequest: {
            device_id: number;
            name: string;
            description?: string | null;
            join_approval_required?: boolean;
            participants: string[];
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
             * @description El proveedor de DNS que se detectó para el dominio, como pista para saber dónde
             *     crear los registros. `null` si no se pudo detectar.
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
             * @description El nivel de rendimiento de envío que Meta le asigna al número: `standard`, `high`
             *     o `unknown`; `null` si todavía no hay datos.
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
            meta_billing: {
                waba_id: string | null;
                business_id: string | null;
            } | null;
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
             * @description `number` en formato internacional normalizado, para reconocer el mismo teléfono
             *     conectado por QR y como oficial. `null` mientras el número no está conectado.
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
             * @description El resumen del estado de salud de un número oficial, el mismo `health` de
             *     `GET devices/{device}/health`. `null` si el número no es oficial.
             */
            health: string;
            /**
             * @description La identidad del teléfono de este número: se mantiene aunque se desconecte, y es el
             *     último teléfono para mostrar cuando `number` está vacío.
             */
            number_key: string | null;
            /**
             * @description `true` cuando ese teléfono ya se conectó en este número; `false` si `number_key` es
             *     solo el teléfono que se espera conectar.
             */
            number_key_confirmed: string;
            is_coexistence: boolean;
            /**
             * @description El estado del lugar del plan que ocupa: `held` (tiene o tuvo un teléfono),
             *     `pending` (todavía sin teléfono, pero ya ocupa un lugar), `reserved` (vacío y
             *     reservado por un alta en curso) o `free` (vacío, no ocupa lugar).
             */
            slot_state: string;
            /**
             * @description Si el número está suspendido por el plan (por ejemplo, porque el plan tiene menos
             *     lugares que números); `pool_suspension_reason` dice por qué, `pool_keep` si la
             *     cuenta eligió conservarlo y `qr_allowed` si se puede conectar por QR.
             */
            pool_suspended: boolean;
            pool_suspension_reason: string | null;
            pool_keep: boolean;
            qr_allowed: boolean;
            /**
             * @description `true` si este número por QR puede pasar a ser oficial en el mismo lugar, con el
             *     alta oficial del mismo teléfono.
             */
            can_change_to_meta: boolean;
            /**
             * @description Quién de la cuenta hizo la conexión actual (`connected_by_name` es su nombre), o
             *     `null` si no se sabe; `abilities` dice qué puede hacer con este número quien llama.
             */
            connected_by_user_id: number | null;
            connected_by_name: string | null;
            abilities: {
                connect: boolean;
                disconnect: boolean;
                delete: boolean;
                update: boolean;
            };
            /** @description Qué se puede hacer con este número por la API, según cómo está conectado. */
            capabilities: {
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
                groups: {
                    create: boolean;
                    add_participants: boolean | ("direct" | "invite");
                    remove_participants: boolean;
                    admins: boolean;
                    photo: boolean;
                    settings: boolean;
                    invite_link: boolean;
                    send: boolean;
                    join_requests: boolean | ("list" | "list_and_decide");
                };
                statuses: string[];
            };
            /**
             * @description Cómo está conectado el número: `qr`, `coexistence`, `dedicated`, o `null` si todavía
             *     no se sabe. `external_reference` es tu propia referencia.
             * @enum {string|null}
             */
            connection: "qr" | "coexistence" | "dedicated" | null;
            external_reference: string | null;
            /** @description El número está sobrecargado (muchos grupos / conversaciones); `false` si nunca se evaluó. */
            overloaded: boolean;
            /** Format: date-time */
            overloaded_computed_at: string | null;
            /**
             * @description additive last-computed snapshot, always present
             *     (not nulled when overloaded=false). No state row => counts null, flags false.
             */
            overloaded_groups_count: number | null;
            overloaded_one_to_one_count: number | null;
            overloaded_has_pending_broadcast: boolean;
            overloaded_has_active_flow: boolean;
            overloaded_has_active_ai_agent: boolean;
            /** @description additive, always present. No row => none / null. */
            overloaded_alert_level: string;
            /** Format: date-time */
            overloaded_dismissed_at: string | null;
            /** @description `true` si el dueño activó "Sincronizar todos mis grupos y mensajes" para este número. */
            sync_all_groups: boolean;
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
            inbound_origins?: string;
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
            client_reference?: string | null;
        };
        /** GroupMetadataResource */
        GroupMetadataResource: {
            name: string | "";
            description: string | null;
            image: string | null;
            link: string | null;
            admins_numbers: string[];
            participants_numbers: string[];
            verified_admin: boolean;
            membership: string;
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
            admins: unknown[] | unknown;
            admins_count: string | unknown;
            owner: string | unknown;
            owner_display_phone: string | unknown;
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
            /** @description Dominio propio de la campaña del grupo para su link público, o `null` si no tiene. */
            campaign_custom_domain: string | null;
            name: string;
            order: string;
            participants_numbers: string;
            participants_count: string;
            /**
             * @description Read rate of the group over the last 30 days, an integer 0..100.
             *     NULL when the group has no recent sends or the read rate is not
             *     available for the account.
             */
            read_rate: number | null;
            read_rate_messages_count: number;
            status: string;
            uid: string;
            updatedAt: string;
            createdAt: string;
            scheduled_message_count: string | 0;
            type: string;
            manual_import: boolean;
            /**
             * @description Participant mode (additive): true iff the group is marked. False when the column is
             *     absent from the row (e.g. an explicit `select`).
             */
            participantMode: boolean;
            /**
             * @description The user's own connected numbers in the group (additive). `null` means "not computed
             *      on this path / not applicable" (show, broadcast events, channels, groups without a resolved connection).
             */
            ownNumbers: string | null;
            /**
             * @description Stored write permission (additive): true = only admins can send, false = anyone can,
             *     null = never observed (or the column is absent from the row). Informational: sending
             *     decisions also need the cached confirmation.
             */
            adminOnlyMessage: boolean | null;
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
             * @description Respuestas a la invitación de un evento, por respuesta, contando una sola vez a cada persona. Las
             *     respuestas que nadie eligió no aparecen.
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
        MessageTypeEnum: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
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
             * @description Estado del plan según sus acciones en este momento: `scheduled`, `in_progress`, `completed`,
             *     `partially_failed` o `cancelled`. Recién confirmado es `scheduled`.
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
                /** @constant */
                failed: 0;
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
        PaymentEventTypeEnum: "approved" | "pending" | "rejected" | "cancelled" | "refunded" | "chargeback" | "abandoned_cart";
        /** PaymentProductResource */
        PaymentProductResource: {
            external_product_id: string;
            name: string | null;
        };
        /** PublicMessageResource */
        PublicMessageResource: {
            id: number;
            contact_id: number | null;
            device_id: number | null;
            /** @enum {string} */
            direction: "outbound" | "inbound";
            /** @enum {string} */
            type: "text" | "image" | "video" | "document" | "sticker" | "contact" | "audio" | "note" | "action" | "invalid" | "interactive" | "location" | "voice_call" | "video_call" | "event" | "button" | "template" | "notification" | "option_list" | "template_button_reply" | "poll" | "whatsapp_form" | "call_permission_request" | "call_permission_reply" | "request_contact_info";
            /** @enum {string|null} */
            status: "sent" | "delivered" | "read" | "failed" | "queued" | null;
            error: {
                code: number | null;
                title: string | null;
                reason: string | null;
            } | null;
            client_reference: string | null;
            created_at: string | null;
            updated_at: string | null;
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
        /**
         * ScheduledMessageEditStatusEnum
         * @description Resultado de editar el texto de un envío programado que ya salió, por grupo. Cada grupo del último envío termina en exactamente uno de estos valores.
         *     | |
         *     |---|
         *     | `1` <br/> El mensaje se había entregado y la edición se aplicó dentro del plazo. |
         *     | `2` <br/> El mensaje se había entregado, pero ya habían pasado 15 minutos desde el envío a ese grupo. |
         *     | `3` <br/> El mensaje salió con un número oficial, a un canal o con un número que no permite editar. |
         *     | `4` <br/> WhatsApp devolvió un error, o el mensaje nunca llegó al grupo. |
         * @enum {integer}
         */
        ScheduledMessageEditStatusEnum: 1 | 2 | 3 | 4;
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
            /** @description `true` si la última ocurrencia del envío no salió porque se alcanzó el límite de envíos del plan. */
            blocked_by_plan_limit: boolean;
            type: string;
            folder_id: string;
            campaign_ids: string;
            excluded_group_ids: string;
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
        /** SendDirectMessageRequest */
        SendDirectMessageRequest: {
            device_id: number;
            text?: string;
            contact_id?: number | null;
            phone?: string | null;
            whatsapp_id?: string | null;
            /** @description Archivo del mensaje: el nombre de un archivo ya subido a tu cuenta o la URL pública de un archivo (te recomendamos `https://`), que WhatsApp o el proveedor descarga; admite hasta 4096 caracteres. Si empieza con `http`, en mayúsculas o minúsculas, tiene que ser una URL `http://` o `https://`; si no, la respuesta es 422. Consulta la sección «Enviar un archivo por URL». */
            file?: string;
            /**
             * @description Tipo del archivo. Es obligatorio cuando `file` es una URL que no termina en una extensión reconocida; si lo envías, manda sobre la extensión. Valores: `image`, `video`, `audio`, `document`, `sticker`. Consulta la sección «Enviar un archivo por URL».
             * @enum {string|null}
             */
            file_type?: "image" | "video" | "audio" | "document" | "sticker" | null;
            /** @description Nombre con el que el contacto ve un documento, con su extensión (por ejemplo `factura.pdf`), de hasta 255 caracteres. Es obligatorio al enviar un documento por URL que no termina en una extensión de la lista. Consulta la sección «Enviar un archivo por URL». */
            file_name?: string | null;
            temporal_uuid?: string;
            local_id?: string | null;
            note?: boolean;
            mentions?: number[] | null;
            client_reference?: string | null;
        };
        /**
         * SendGroupMessageRequest
         * @description Cuerpo de `POST /groups/{group}/messages`: un texto o un solo archivo multimedia, que se envía en el momento.
         *     No admite encuestas, eventos, stickers, contactos ni ubicaciones. Los campos que no figuran (por ejemplo,
         *     `shipping_speed`) se ignoran.
         */
        SendGroupMessageRequest: {
            device_id: number;
            /** @enum {string} */
            type: "text" | "image" | "video" | "audio" | "document";
            text?: string;
            media_url?: string;
            caption?: string;
            file_name?: string;
        };
        /** SendMessageRequest */
        SendMessageRequest: {
            phone?: string;
            whatsapp_id?: string;
            device_id: number;
            text?: string;
            contact_id: number;
            /** @description Archivo del mensaje: el nombre de un archivo ya subido a tu cuenta o la URL pública de un archivo (te recomendamos `https://`), que WhatsApp o el proveedor descarga; admite hasta 4096 caracteres. Si empieza con `http`, en mayúsculas o minúsculas, tiene que ser una URL `http://` o `https://`; si no, la respuesta es 422. Consulta la sección «Enviar un archivo por URL». */
            file?: string;
            /**
             * @description Tipo del archivo. Es obligatorio cuando `file` es una URL que no termina en una extensión reconocida; si lo envías, manda sobre la extensión. Valores: `image`, `video`, `audio`, `document`, `sticker`. Consulta la sección «Enviar un archivo por URL».
             * @enum {string|null}
             */
            file_type?: "image" | "video" | "audio" | "document" | "sticker" | null;
            /** @description Nombre con el que el contacto ve un documento, con su extensión (por ejemplo `factura.pdf`), de hasta 255 caracteres. Es obligatorio al enviar un documento por URL que no termina en una extensión de la lista. Consulta la sección «Enviar un archivo por URL». */
            file_name?: string | null;
            temporal_uuid?: string;
            note?: boolean;
            mentions?: number[] | null;
            options?: {
                id?: string;
                label?: string;
            }[];
            reference_message_uid?: string | null;
            client_reference?: string | null;
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
        };
        /** SendWhatsappFormRequest */
        SendWhatsappFormRequest: {
            form_id: number;
            device_id: number;
            text?: string;
            button_text?: string;
            client_reference?: string | null;
        };
        /** ShowTypingIndicatorRequest */
        ShowTypingIndicatorRequest: {
            device_id?: number;
        };
        /**
         * SslValidationMethod
         * @description Cómo se valida el certificado de un dominio propio. `HTTP` (por defecto): el certificado se emite cuando el registro DNS del dominio ya apunta, sin registro TXT. `TXT`: se valida con un registro TXT, para un dominio que todavía no puede apuntar; se elige con `POST custom-domains/{customDomain}/switch-validation`.
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
        /**
         * StoreConnectLinkRequest
         * @description Body of `POST connect-links`. A validation failure answers 422 `invalid_request`
         *     (`{error, message, errors}`).
         */
        StoreConnectLinkRequest: {
            /**
             * @description `meta`: official number (Embedded Signup of Meta). `qr`: number by QR code.
             * @enum {string}
             */
            type: "meta" | "qr";
            /**
             * @description `type: meta` only, and required there: which official connections the customer may
             *     choose (`coexistence` keeps the WhatsApp Business app; `dedicated` does not).
             */
            allowed_connection_types?: ("coexistence" | "dedicated")[];
            /** @description `type: meta` only: offer a US number of the Funnelchat pool. */
            provision_us_number?: boolean;
            /** @description Reconnect THIS number of the account instead of adding one (uses no new place). */
            device_id?: number | null;
            /** @description `type: qr` only: add QR to this coexistence number of the account. */
            same_number_as?: number | null;
            /**
             * @description `type: qr` only, and not with `device_id` (a reconnection creates nothing): country
             *     the WhatsApp session is opened from (ISO 3166-1 alpha-2, two letters, any case).
             */
            country?: string | null;
            /** @description Your own reference; it is copied to the number the link creates. */
            external_reference?: string | null;
            /**
             * Format: uri
             * @description Where to send the customer at the end (https only). It receives only the result.
             */
            return_url?: string | null;
            /** @description How long the link lives, in minutes. */
            expires_in_minutes?: number | null;
        };
        /** StoreContactCardRequest */
        StoreContactCardRequest: {
            device_id: number;
            contact_card_ids: number[];
            client_reference?: string | null;
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
         * @description El cuerpo de `POST custom-domains`: el dominio que se registra. Se guarda en minúsculas y sin
         *     esquema ni ruta, así que `https://Go.MiMarca.com/landing` y `go.mimarca.com` son el mismo
         *     dominio. Un dominio que ya está registrado responde `422`.
         */
        StoreCustomDomainRequest: {
            hostname: string;
        };
        /**
         * StoreDeviceRequest
         * @description Body of `POST devices`. A validation failure answers 422 `invalid_request`
         *     (`{error, message, errors}`).
         */
        StoreDeviceRequest: {
            /**
             * @description How the number connects. Only `qr` today: an official (Meta) number is created by
             *     a connect link (`POST connect-links` with `type: meta`).
             * @enum {string}
             */
            connection: "qr";
            /** @description Name shown in the panel. */
            alias?: string | null;
            /** @description Your own reference for this number (for example, your customer's id). Not unique. */
            external_reference?: string | null;
            /**
             * @description Id of a number of the account that is connected to the official API in
             *     coexistence: the new QR connection is the SAME number (it does not use a new place
             *     of the plan).
             */
            same_number_as?: number | null;
            /**
             * @description Country the WhatsApp session is opened from (ISO 3166-1 alpha-2, two letters, any
             *     case): send the country of the phone that will scan the QR. Without it, the default.
             */
            country?: string | null;
        };
        /**
         * StoreDisconnectReasonRequest
         * @description El cuerpo de `POST devices/{device}/disconnect-survey`: por qué se desconectó el número.
         *     `reason` es `1` (lo desconecté a propósito), `2` (WhatsApp lo desconectó sin dar motivo), `4`
         *     (WhatsApp lo bloqueó de forma permanente) o `5` (WhatsApp lo bloqueó de forma temporal).
         */
        StoreDisconnectReasonRequest: {
            /** @enum {integer} */
            reason: "1" | "2" | "4" | "5";
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
        /** StoreWebhookEndpointRequest */
        StoreWebhookEndpointRequest: {
            /**
             * Format: uri
             * @description La URL de tu sistema: `https` y que resuelva a una dirección pública de internet.
             */
            url: string;
            description?: string | null;
            /**
             * @description Los tipos de evento a los que se suscribe, opcional: sin `events`, el endpoint
             *     queda registrado sin recibir nada y se suscribe después.
             */
            events?: ("device.disconnected" | "device.connected" | "device.deleted" | "device.health_changed" | "device.quality_changed" | "device.messaging_limit_changed" | "device.display_name_reviewed" | "billing.payment_failed" | "billing.plan_blocked" | "billing.upcoming_charge" | "subscription.expiring" | "subscription.trial_ending" | "subscription.reactivated" | "subscription.cancellation_confirmed" | "subscription.dormant_ending" | "ai_quota.low_balance" | "ai_quota.topup_succeeded" | "ai_quota.topup_failed" | "mac.usage_80" | "mac.usage_100" | "mac.expiring" | "account.blocked")[];
        };
        /**
         * StoreWebhookSubscriptionRequest
         * @description El cuerpo de `POST api/webhooks`: la URL, los tipos de evento y, opcionales, la descripción y
         *     los filtros de la suscripción.
         */
        StoreWebhookSubscriptionRequest: {
            /** Format: uri */
            url: string;
            description?: string | null;
            events: ("device.disconnected" | "device.connected" | "device.deleted" | "device.health_changed" | "device.quality_changed" | "device.messaging_limit_changed" | "device.display_name_reviewed" | "billing.payment_failed" | "billing.plan_blocked" | "billing.upcoming_charge" | "subscription.expiring" | "subscription.trial_ending" | "subscription.reactivated" | "subscription.cancellation_confirmed" | "subscription.dormant_ending" | "ai_quota.low_balance" | "ai_quota.topup_succeeded" | "ai_quota.topup_failed" | "mac.usage_80" | "mac.usage_100" | "mac.expiring" | "account.blocked" | "message.received" | "flow.completed" | "broadcast.finished" | "contact.stage_changed" | "message.status_changed" | "conversation.closed" | "conversation.assigned" | "contact.tag_added" | "broadcast.paused" | "contact.tag_removed" | "contact.created" | "template.status_changed" | "flow.failed" | "whatsapp_form.completed" | "group.created" | "group.invite_link_down" | "group.invite_link_renewed" | "group_participant.joined" | "group_participant.left" | "scheduled_message.group_delivery_failed" | "scheduled_message.response_received" | "poll.voted" | "pipeline.finished" | "group.blocked" | "group.recovered" | "campaign.status_changed" | "scheduled_message.finished" | "group_action.failed" | "daily_report.generated" | "campaign.no_groups_available" | "group.full" | "group_action.completed" | "group.message_received" | "group.reaction_added" | "group_join_request.created" | "group_join_request.revoked")[];
            filters?: {
                campaign_ids?: string[] | null;
            };
        };
        /**
         * SwitchValidationMethodRequest
         * @description El cuerpo de `POST custom-domains/{customDomain}/switch-validation`: el método con el que se
         *     valida el certificado del dominio, `HTTP` (por defecto) o `TXT`.
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
        /** TemplateMetricsResource */
        TemplateMetricsResource: {
            template_id: string;
            from: string;
            to: string;
            /** @constant */
            timezone: "UTC";
            /** @constant */
            granularity: "day";
            fetched_at: string;
            totals: {
                [key: string]: unknown;
            };
            days: {
                [key: string]: unknown;
            }[];
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
            /** Format: date-time */
            recategorized_at: string | null;
            quick_reply_buttons: unknown[];
            waba_id: string | null;
            belongs_to_current_device: boolean;
            quality_score: string;
            quality_updated_at: string;
            quality: string;
            available: boolean;
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
            actor_user_id: number | null;
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
            /** @description El nombre del destino. Con `null` se borra. */
            name?: string | null;
            /**
             * @description Solo para un `webhook`: la URL nueva, `https` y que resuelva a una dirección
             *     pública de internet.
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
         * @description El cuerpo de `PUT api/v1/webhooks/endpoints/{id}/events`. Acepta dos formas:
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
                event_type: "device.disconnected" | "device.connected" | "device.deleted" | "device.health_changed" | "device.quality_changed" | "device.messaging_limit_changed" | "device.display_name_reviewed" | "billing.payment_failed" | "billing.plan_blocked" | "billing.upcoming_charge" | "subscription.expiring" | "subscription.trial_ending" | "subscription.reactivated" | "subscription.cancellation_confirmed" | "subscription.dormant_ending" | "ai_quota.low_balance" | "ai_quota.topup_succeeded" | "ai_quota.topup_failed" | "mac.usage_80" | "mac.usage_100" | "mac.expiring" | "account.blocked";
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
        /**
         * UpdateWebhookSubscriptionRequest
         * @description El cuerpo de `PUT api/webhooks/{id}`: reemplaza `url`, `events`, `description`
         *     y `filters`; `status` es opcional y solo admite `active` o `paused` (el cliente
         *     no puede dejarla `disabled`).
         */
        UpdateWebhookSubscriptionRequest: {
            /** Format: uri */
            url: string;
            description?: string | null;
            events: ("device.disconnected" | "device.connected" | "device.deleted" | "device.health_changed" | "device.quality_changed" | "device.messaging_limit_changed" | "device.display_name_reviewed" | "billing.payment_failed" | "billing.plan_blocked" | "billing.upcoming_charge" | "subscription.expiring" | "subscription.trial_ending" | "subscription.reactivated" | "subscription.cancellation_confirmed" | "subscription.dormant_ending" | "ai_quota.low_balance" | "ai_quota.topup_succeeded" | "ai_quota.topup_failed" | "mac.usage_80" | "mac.usage_100" | "mac.expiring" | "account.blocked" | "message.received" | "flow.completed" | "broadcast.finished" | "contact.stage_changed" | "message.status_changed" | "conversation.closed" | "conversation.assigned" | "contact.tag_added" | "broadcast.paused" | "contact.tag_removed" | "contact.created" | "template.status_changed" | "flow.failed" | "whatsapp_form.completed" | "group.created" | "group.invite_link_down" | "group.invite_link_renewed" | "group_participant.joined" | "group_participant.left" | "scheduled_message.group_delivery_failed" | "scheduled_message.response_received" | "poll.voted" | "pipeline.finished" | "group.blocked" | "group.recovered" | "campaign.status_changed" | "scheduled_message.finished" | "group_action.failed" | "daily_report.generated" | "campaign.no_groups_available" | "group.full" | "group_action.completed" | "group.message_received" | "group.reaction_added" | "group_join_request.created" | "group_join_request.revoked")[];
            filters?: {
                campaign_ids?: string[] | null;
            };
            /** @enum {string} */
            status?: "active" | "paused";
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
        /** WebhookEndpointCreatedResource */
        WebhookEndpointCreatedResource: {
            id: number;
            url: string;
            description: string | null;
            status: string;
            disabled_reason: string | null;
            events?: string[];
            health: {
                consecutive_failures: number;
                last_delivery_at: string | null;
                last_success_at: string | null;
            };
            secret_rotated_at: string | null;
            created_at: string | null;
            updated_at: string | null;
            secret: string;
            /** @constant */
            secret_notice: "Guarda este secreto ahora: es la única vez que se muestra. Con él validas la firma del header de cada entrega.";
        };
        /** WebhookEndpointResource */
        WebhookEndpointResource: {
            id: number;
            url: string;
            description: string | null;
            status: string;
            disabled_reason: string | null;
            events?: string[];
            health: {
                consecutive_failures: number;
                last_delivery_at: string | null;
                last_success_at: string | null;
            };
            secret_rotated_at: string | null;
            created_at: string | null;
            updated_at: string | null;
        };
        /** WebhookSubscriptionCreatedResource */
        WebhookSubscriptionCreatedResource: {
            id: string;
            url: string;
            description: string | null;
            events?: string[];
            /** @description Siempre un objeto: `{}` si no hay filtro. */
            filters: {
                [key: string]: unknown;
            } | null | Record<string, unknown>;
            status: string;
            disabled_reason: string | null;
            last_delivery_at: string | null;
            last_success_at: string | null;
            secret_rotated_at: string | null;
            created_at: string | null;
            updated_at: string | null;
            migration: {
                origin: string;
                status: string;
                activated_via: string | null;
                activated_at: string | null;
                last_result: string | null;
            } | null;
            secret: string;
            /** @constant */
            secret_notice: "Guarda este secreto ahora: es la única vez que se muestra. Con él validas la firma del header de cada entrega.";
        };
        /** WebhookSubscriptionDeliveryResource */
        WebhookSubscriptionDeliveryResource: {
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
        /** WebhookSubscriptionResource */
        WebhookSubscriptionResource: {
            id: string;
            url: string;
            description: string | null;
            events?: string[];
            /** @description Siempre un objeto: `{}` si no hay filtro. */
            filters: {
                [key: string]: unknown;
            } | null | Record<string, unknown>;
            status: string;
            disabled_reason: string | null;
            last_delivery_at: string | null;
            last_success_at: string | null;
            secret_rotated_at: string | null;
            created_at: string | null;
            updated_at: string | null;
            migration: {
                origin: string;
                status: string;
                activated_via: string | null;
                activated_at: string | null;
                last_result: string | null;
            } | null;
        };
        /** WhatsAppBusinessAccountResource */
        WhatsAppBusinessAccountResource: {
            id: string;
            messaging_limit: {
                tier: string;
                /** @description Mensajes por día del tier; `null` para `TIER_UNLIMITED` o un tier que todavía no se conoce. */
                per_day: number | null;
                checked_at: string | null;
            } | null;
            devices: {
                device_id: number;
                number: string;
            }[];
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
        PendingWebhookSubscriptionFilters: {
            /** @description Only delivers the events of these campaigns. An event without a campaign does not pass the filter. */
            campaign_ids?: string[];
        };
        /** @description A unified webhook subscription. It never carries the secret. */
        PendingWebhookSubscription: {
            /**
             * Format: uuid
             * @description Identifier of the subscription. Store it when you create it: it is what tells yours apart.
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
            /** @description The full secret to verify the signature. It is shown only once: store it. */
            secret: string;
            secret_notice: string;
        };
        PendingFormLintIssue: {
            code: string;
            severity: string;
            screenId?: string | null;
            itemId?: string | null;
            message: string;
        };
        /** @description A number where the form is published (or being published). */
        PendingFormNumber: {
            device_id: number | null;
            primary: boolean;
            /** @enum {string} */
            status: "draft" | "publishing" | "published" | "failed";
            error: string | null;
        };
        /** @description One version of a form. `id` is the version; `family_id` is the form itself: the `form_id` you send it with and the `form.id` of `whatsapp_form.completed`. */
        PendingForm: {
            /** @description The version. */
            id: number;
            /** @description The form (every version). */
            family_id: number;
            /** @description The name in Meta (with the `__vN` suffix). */
            name: string;
            /** @description The display name. */
            label: string;
            category?: string | null;
            /** @enum {string} */
            status: "draft" | "published" | "deprecated";
            version: number;
            /** @description The definition of the form (screens and fields). Only in the detail. */
            definition?: unknown;
            /** @description Only in the detail. */
            fields?: unknown;
            /** @description Only in the detail. */
            mapping?: unknown;
            /** @description Only in the detail. */
            tag_rules?: unknown;
            has_endpoint?: boolean;
            first_screen?: string | null;
            first_screen_dynamic?: boolean | null;
            lint_errors_count?: number | null;
            /** @description Only in the list: the draft of the family, when it is not this row. */
            draft_id?: number;
            draft_version?: number;
            /** @description Only in the list. */
            sends?: number;
            /** @description Only in the list. */
            responses?: number;
            meta_flow_id?: string | null;
            /** @description Only in the detail. */
            flow_json?: unknown;
            /** @description Only in the detail. */
            validation_errors?: unknown;
            /** Format: date-time */
            published_at?: string | null;
            /** Format: date-time */
            updated_at?: string | null;
        };
        /**
         * @description `qr`: connected by scanning a QR code (not official). `coexistence`: WhatsApp Cloud API together with the WhatsApp Business app. `dedicated`: WhatsApp Cloud API only. `null` when it cannot be told yet.
         * @enum {string|null}
         */
        PendingDeviceConnection: "qr" | "coexistence" | "dedicated" | null;
        /** @description Your own reference for the number (for example the id of your customer). Free text, not unique. */
        PendingExternalReference: string | null;
        PendingWebhookDevice: {
            id: number;
            name: string | null;
            /** @description Digits only, without `+`. */
            number: string | null;
            connection: components["schemas"]["PendingDeviceConnection"];
            external_reference: components["schemas"]["PendingExternalReference"];
        };
        PendingGroupParticipantResult: {
            /** @description The phone in digits, without `+`, or a `…@lid`. */
            identity: string;
            /** @enum {string} */
            identity_type: "phone" | "whatsapp_user";
            /** @enum {string} */
            status: "added" | "invited" | "removed" | "promoted" | "demoted" | "approved" | "rejected" | "failed";
            reason: string | null;
        };
        PendingDeviceQr: {
            connected: boolean;
            /** @description A PNG image as a data URI, or `null` when the number is already connected. */
            qr_code: string | null;
            /** @description Seconds after which to ask for it again: 5 with a QR, 3 while the session starts, 0 once connected. WhatsApp changes the code every few seconds and an old one no longer links: show the latest one and have it scanned right away; do not store or forward a QR. */
            expires_in: number;
        };
        PendingGroupAction: {
            /** Format: uuid */
            action_id: string;
            /** @description `send_message` for a message to the group. */
            type: string;
            /** @enum {string} */
            status: "queued" | "running" | "completed" | "failed";
            device_id: number | null;
            group: {
                uid: string;
                name: string | null;
            } | null;
            /** @description `{}` while it is open. Sending: `{message: {uid}}`, the id of the message in WhatsApp. Other actions: `{participants: [...]}`, `{group, invite_link}` or `{invite_link}`. */
            result: {
                message?: {
                    uid?: string;
                };
                participants?: components["schemas"]["PendingGroupParticipantResult"][];
                invite_link?: string;
                group?: {
                    uid?: string;
                    name?: string | null;
                };
            } | null;
            /** @description Why it failed, when `status` is `failed`. */
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
                publish_as_status?: "only" | "exclude" | null;
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
                    device_id?: number | null;
                    only_hard_bounced?: boolean;
                    kanban_setting_id?: number | null;
                    kanban_stage_ids?: number[] | null;
                    only_stagnant?: boolean | null;
                    exclude_never_replied?: boolean;
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
                    device_id?: number | null;
                    only_hard_bounced?: boolean;
                    kanban_setting_id?: number | null;
                    kanban_stage_ids?: number[] | null;
                    only_stagnant?: boolean | null;
                    exclude_never_replied?: boolean;
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
                    "application/json": unknown[];
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
                            queued_messages_count: unknown;
                            cancelled_messages_count: number | null;
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
                            queued_messages_count: unknown;
                            cancelled_messages_count: number | null;
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
                        expires_at: null;
                    } | {
                        is_open: boolean;
                        meta_device_id: null;
                        expires_at: string | null;
                    } | {
                        is_open: boolean;
                        meta_device_id: unknown;
                        expires_at: string | null;
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        messages: components["schemas"]["PublicMessageResource"][];
                    };
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
                        message: string;
                    };
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        errors: {
                            [key: string]: string[];
                        };
                    } | {
                        /** @enum {string} */
                        error: "window_closed" | "antiblock_duplicate_content" | "antiblock_unanswered_limit" | "recipient_unsupported";
                        message: string;
                    } | {
                        /** @enum {string} */
                        error: "device_unavailable" | "not_sent";
                        message: string;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
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
                        /** @enum {string} */
                        message: "Server Error";
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
                awaitingReply?: boolean;
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
                lastMessageDateFrom?: string | null;
                lastMessageDateTo?: string | null;
                timezone?: string | null;
                customFieldFilters?: string | null;
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
                withMine?: boolean;
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
                    } | {
                        count: number;
                        mine: number;
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
                        count: number | null;
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
            /** @description The message was registered (`status: queued`, or `failed` with `not_queued`) and goes out from the queue. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["PublicMessageResource"];
                    };
                };
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
                        message: string;
                        errors: {
                            [key: string]: string[];
                        };
                    } | {
                        /** @enum {string} */
                        error: "window_closed" | "antiblock_duplicate_content" | "antiblock_unanswered_limit" | "recipient_mismatch" | "recipient_unsupported";
                        message: string;
                    } | {
                        /** @enum {string} */
                        error: "device_unavailable" | "not_sent";
                        message: string;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
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
                        /** @enum {string} */
                        message: "Server Error";
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
            404: components["responses"]["ConversationsModelNotFoundException"];
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
                trigger_type?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "inbound_automation";
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
                        data: components["schemas"]["FlowResource"][];
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
                payment_event_type?: "approved" | "pending" | "rejected" | "cancelled" | "refunded" | "chargeback" | "abandoned_cart";
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
                        data: components["schemas"]["FolderResource"][];
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        contact_id: number;
                        /** @enum {string} */
                        mode: "internal" | "native";
                        /** @enum {string} */
                        status: "queued" | "blocked";
                        reason: string | null;
                        message: components["schemas"]["PublicMessageResource"] | null;
                    }[];
                };
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
                        message: string;
                        errors: {
                            [key: string]: string[];
                        };
                    } | {
                        /** @enum {string} */
                        error: "window_closed" | "antiblock_duplicate_content" | "antiblock_unanswered_limit" | "recipient_unsupported";
                        message: string;
                    } | {
                        /** @enum {string} */
                        error: "device_unavailable";
                        message: string;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
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
                        /** @enum {string} */
                        message: "Server Error";
                    };
                };
            };
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
                        data: components["schemas"]["KanbanSettingResource"][];
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
                content: {
                    "application/json": {
                        excluded_inactive: number;
                    } | null;
                };
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
                followUp?: "due" | "overdue" | "upcoming" | "none";
                page?: number;
                perPage?: number;
                orderBy?: "name" | "last_message_time" | "stage_since" | "follow_up_date";
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
                        data: string[];
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
                        unlimited: string;
                        /** @constant */
                        current_count: 0;
                        /** @enum {integer|null} */
                        limit: 0 | null;
                        /** @enum {integer|null} */
                        remaining: 0 | null;
                        /** @constant */
                        usage_percentage: 0;
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
    "message.markMessageRead": {
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
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
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
                        message: string;
                    };
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "recipient_unsupported" | "message_not_inbound" | "message_not_markable" | "message_expired" | "provider_unsupported";
                        message: string;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
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
                        /** @enum {string} */
                        error: "provider_error";
                        message: string;
                    };
                };
            };
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
                "application/json": components["schemas"]["SendDirectMessageRequest"];
            };
        };
        responses: {
            /** @description The message was registered (`status: queued`, or `failed` with `not_queued`) and goes out from the queue. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["PublicMessageResource"];
                    };
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
                        /** @enum {string} */
                        status: "error";
                        error: string;
                    } | {
                        message: string;
                    };
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        errors: {
                            [key: string]: string[];
                        };
                    } | {
                        /** @enum {string} */
                        error: "window_closed" | "antiblock_duplicate_content" | "antiblock_unanswered_limit" | "recipient_mismatch" | "recipient_unsupported";
                        message: string;
                    } | {
                        /** @enum {string} */
                        error: "device_unavailable" | "not_sent";
                        message: string;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
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
                        /** @enum {string} */
                        message: "Server Error";
                    };
                };
            };
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
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        errors: {
                            [key: string]: string[];
                        };
                    } | {
                        /** @enum {string} */
                        error: "recipient_unsupported";
                        message: string;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
                    };
                };
            };
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
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        errors: Record<string, unknown>;
                    } | {
                        /** @enum {string} */
                        error: "recipient_unsupported";
                        message: string;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
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
                "quality[]"?: "GREEN" | "YELLOW" | "RED" | "UNKNOWN" | "NOT_APPLICABLE" | null;
                include?: "quality_counts" | null;
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
            /** @description A page of templates. */
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
    "messageTemplate.sync": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                device: number;
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
                content: {
                    "application/json": {
                        /** @enum {string} */
                        status: "in_progress" | "completed";
                    };
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
                        message: string;
                    };
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "template_sync_in_progress";
                        message: string;
                    };
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "number_not_connected_to_meta" | "meta_rejected";
                        message: string;
                        meta_code?: number | null;
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
                        /** @enum {string} */
                        error: "meta_unavailable";
                        message: string;
                    };
                };
            };
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
        requestBody?: {
            content: {
                "application/json": {
                    contact_id?: number | null;
                    phone?: string | null;
                    whatsapp_id?: string | null;
                    template_variables?: {
                        body?: (string | null)[];
                    };
                    client_reference?: string | null;
                };
            };
        };
        responses: {
            /** @description The message was registered (`status: queued`, or `failed` with `not_queued`) and goes out from the queue. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["PublicMessageResource"];
                    };
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
                        /** @enum {string} */
                        error: "template_not_found";
                        message: string;
                    } | {
                        /** @enum {string} */
                        error: "Contact not found";
                    } | {
                        message: string;
                    };
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        errors: {
                            [key: string]: string[];
                        };
                    } | {
                        /** @enum {string} */
                        error: "antiblock_duplicate_content" | "antiblock_unanswered_limit" | "recipient_mismatch" | "recipient_unsupported";
                        message: string;
                    } | {
                        /** @enum {string} */
                        error: "device_unavailable" | "not_sent";
                        message: string;
                    } | {
                        /** @enum {string} */
                        error: "template_unresolved_placeholder";
                        message: string;
                        placeholders: string[];
                        count: number;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
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
                        /** @enum {string} */
                        message: "Server Error";
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
    "message.showMessage": {
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
                    "application/json": components["schemas"]["PublicMessageResource"];
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
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
                orderBy?: "name" | "last_message_time" | "follow_up_date";
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
                        data: string[];
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
    "message.templateMetrics": {
        parameters: {
            query?: {
                from?: string | null;
                to?: string | null;
            };
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
                        data: components["schemas"]["TemplateMetricsResource"];
                    } | Record<string, unknown>;
                };
            };
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            404: components["responses"]["ConversationsModelNotFoundException"];
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
    "message.typingIndicator": {
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
                "application/json": components["schemas"]["ShowTypingIndicatorRequest"];
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
            401: components["responses"]["ConversationsAuthenticationException"];
            403: components["responses"]["ConversationsAuthorizationException"];
            /** @description Not Found */
            404: {
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
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        errors: {
                            [key: string]: string[];
                        };
                    } | {
                        /** @enum {string} */
                        error: "recipient_unsupported" | "provider_unsupported" | "no_recent_inbound";
                        message: string;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
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
                        /** @enum {string} */
                        error: "provider_error";
                        message: string;
                    };
                };
            };
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
    "whatsappFormSend.store": {
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
                "application/json": components["schemas"]["SendWhatsappFormRequest"];
            };
        };
        responses: {
            /** @description The message was registered (`status: queued`, or `failed` with `not_queued`) and goes out from the queue. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["PublicMessageResource"];
                    };
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
                        /** @enum {string} */
                        error: "form_not_found";
                        message: string;
                    } | {
                        message: string;
                    };
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        errors: {
                            [key: string]: string[];
                        };
                    } | {
                        /** @enum {string} */
                        error: "window_closed" | "antiblock_duplicate_content" | "antiblock_unanswered_limit" | "recipient_unsupported";
                        message: string;
                    } | {
                        /** @enum {string} */
                        error: "device_unavailable" | "not_sent" | "number_not_eligible" | "form_not_published" | "form_not_on_number" | "recipient_unreachable" | "contact_blocked" | "window_closed";
                        message: string;
                    };
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    "Retry-After": number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "rate_limited";
                        message: string;
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
                        /** @enum {string} */
                        message: "Server Error";
                    };
                };
            };
        };
    };
    "campaign.index": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: "created_at" | "id" | "name" | "type" | "updated_at";
                orderByMethod?: string;
                perPage?: number;
                sortBy?: string;
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
            /** @description `sortBy` o `sortDir` traen un valor que no se acepta. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "INVALID_SORT";
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
            /** @description Valores por defecto y límites para armar un plan de operación en la campaña. */
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
                        /** @description Si un plan puede incluir sábados y domingos. */
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
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateApiGroupRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
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
                /** @description Identificador del grupo o del canal en WhatsApp. */
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
            /** @description El grupo o el canal no existe, o el número no tiene acceso a él. */
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
            /** @description No se pudo consultar a WhatsApp. Reintenta más tarde. */
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
    "v2.apiGroupImport": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identificador del grupo en WhatsApp, como lo lista `GET /v1/devices/{device}/groups`. */
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupDeviceRequest"];
            };
        };
        responses: {
            /** @description El grupo ya estaba en la cuenta: no se importó de nuevo. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApiGroupImportResource"];
                    };
                };
            };
            /** @description El grupo se importó en esta llamada. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApiGroupImportResource"];
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
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
    "apiGroupAction.sendMessage": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SendGroupMessageRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "group.scheduledMessages": {
        parameters: {
            query?: {
                name?: string;
                orderBy?: "send_at" | "name" | "status" | "id" | "created_at" | "updated_at";
                orderByMethod?: "ASC" | "DESC";
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
    "apiGroupAction.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                action: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The action. */
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
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
        };
    };
    "apiGroupAction.addParticipants": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupPhonesRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.removeParticipants": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupPhonesRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.promoteAdmins": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupPhonesRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.demoteAdmins": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupPhonesRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.updateName": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupNameRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.updateDescription": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupDescriptionRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.updatePhoto": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupPhotoRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.updateSettings": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupSettingsRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.renewInviteLink": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupRenewLinkRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.inviteLink": {
        parameters: {
            query: {
                device_id: number;
            };
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description El link de invitación vigente del grupo. Una lectura exitosa se reutiliza durante unos segundos. */
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
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.joinRequests": {
        parameters: {
            query: {
                device_id: number;
            };
            header?: never;
            path: {
                group: string;
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
                        data: unknown[];
                    };
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.approveJoinRequests": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupPhonesRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
            422: components["responses"]["CommunitiesValidationException"];
        };
    };
    "apiGroupAction.rejectJoinRequests": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                group: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApiGroupPhonesRequest"];
            };
        };
        responses: {
            /** @description `ApiGroupActionAcceptedResource` */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiGroupActionAcceptedResource"];
                };
            };
            401: components["responses"]["CommunitiesAuthenticationException"];
            403: components["responses"]["CommunitiesAuthorizationException"];
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
                 * @description Con `true`, solo los envíos pendientes o en curso que tienen grupos sin un número conectado que pueda
                 *     enviar. Acepta `true`, `false`, `1` o `0`.
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
                 * @description Filtra por el resultado de la última edición del texto ya enviado. Es distinto de `status`, que es el
                 *     estado de la entrega.
                 *     | |
                 *     |---|
                 *     | `1` <br/> El mensaje se había entregado y la edición se aplicó dentro del plazo. |
                 *     | `2` <br/> El mensaje se había entregado, pero ya habían pasado 15 minutos desde el envío a ese grupo. |
                 *     | `3` <br/> El mensaje salió con un número oficial, a un canal o con un número que no permite editar. |
                 *     | `4` <br/> WhatsApp devolvió un error, o el mensaje nunca llegó al grupo. |
                 */
                edit_status?: components["schemas"]["ScheduledMessageEditStatusEnum"];
                /**
                 * @description Fecha (`AAAA-MM-DD`, en la zona horaria de la cuenta) de una ocurrencia del envío: devuelve el resultado
                 *     de cada grupo en esa ocurrencia. Sin este parámetro, devuelve el último resultado de cada grupo.
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
            /** @description Resultado del envío en cada grupo, paginado. */
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
                            error_info: string;
                            totaL_readed: unknown;
                            total_played: unknown;
                            reactions_count: unknown;
                            clicks: string | 0;
                            sent_by: string[];
                            attempts: number;
                            last_attempt_at: string;
                            /**
                             * @description Resultado de la última edición del texto enviado a este grupo (`1` editado, `2` fuera de plazo,
                             *     `3` no se puede editar, `4` falló), o `null` si no se editó. El motivo viene en `edit_reason`.
                             */
                            edit_status: string | null;
                            edit_reason: string | null;
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
                        audience: string | number | null;
                        total_readed: string | number | null;
                        total_played: string;
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
                /** @description Número de página, desde 1. */
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
                            /** @constant */
                            total_participants: 0;
                        };
                        out: {
                            data: string[];
                            /** @constant */
                            total_participants: 0;
                        };
                    } | {
                        data: string[];
                        /** @constant */
                        total_participants: 0;
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
                            /** @constant */
                            total_participants: 0;
                        };
                        inactive: {
                            data: string[];
                            /** @constant */
                            total_participants: 0;
                        };
                    } | {
                        data: string[];
                        /** @constant */
                        total_participants: 0;
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
                        /** @constant */
                        total_clicks: 0;
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
                        /** @constant */
                        total: 0;
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
                                /** @constant */
                                total_contacts: 0;
                                /** @constant */
                                total_countries: 0;
                                /** @constant */
                                total_clicks: 0;
                                /** @constant */
                                total_entries: 0;
                                /** @constant */
                                total_exits: 0;
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
            /** @description Las campañas, paginadas. */
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
            /** @description Las campañas no se pueden leer en este momento (`groups_unavailable`). Vuelve a intentarlo. */
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
            /** @description Las alertas del catálogo. */
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
            /** @description La configuración del reporte diario. */
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
            /** @description La configuración guardada. */
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
            /** @description Los destinos de la cuenta. */
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
            /** @description El destino creado. Para un `webhook`, con su `secret`. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertDestinationResource"] | components["schemas"]["AlertDestinationCreatedResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            /** @description Datos inválidos, se llegó al tope de 10 destinos de ese tipo o la URL del webhook no es `https` o no resuelve a una dirección pública. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string|null} */
                        message: "La URL del webhook no es un destino permitido. Debe ser https y resolver a una dirección pública de internet." | "El destino webhook debe ser una URL https." | null;
                    } | {
                        /** @constant */
                        message: "Has alcanzado el límite de 10 destinos de tipo webhook.";
                    } | {
                        /** @constant */
                        message: "Has alcanzado el límite de 10 destinos de tipo teléfono.";
                    };
                };
            };
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
            /** @description Borrado. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            /** @description El destino no existe o no es de la cuenta. */
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
            /** @description El destino editado. */
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
            /** @description El destino no existe o no es de la cuenta. */
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
            /** @description Datos inválidos, el destino no es un `webhook` o la URL no es `https` o no resuelve a una dirección pública. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string|null} */
                        message: "La URL del webhook no es un destino permitido. Debe ser https y resolver a una dirección pública de internet." | "El destino webhook debe ser una URL https." | null;
                    } | {
                        /** @constant */
                        message: "Solo se puede modificar la URL de un destino webhook.";
                    };
                };
            };
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
            /** @description Código enviado. */
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
            /** @description El destino no existe o no es de la cuenta. */
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
            /** @description El destino no es un teléfono o ya está verificado. */
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
            /** @description Hay que esperar antes de pedir otro código (`retry_after_seconds` dice cuántos segundos) o se llegó al límite de envíos por hora. */
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
            /** @description El destino, ya verificado. */
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
            /** @description El destino no existe o no es de la cuenta. */
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
            /** @description El código es incorrecto o venció, el destino no es un teléfono o ya está verificado. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Código inválido o expirado.";
                    } | {
                        message: string;
                    };
                };
            };
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
            /** @description El horario de silencio. */
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
            /** @description El horario guardado. */
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
            /** @description La alerta del destino, con su estado. */
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
            /** @description El destino no existe o no es de la cuenta. */
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
            /** @description Datos inválidos, la alerta no está en el catálogo o el destino `phone` no está verificado. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "El destino debe estar verificado para configurar alertas.";
                    };
                };
            };
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
            /** @description El resultado de la entrega de prueba. */
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
            /** @description El destino no existe o no es de la cuenta. */
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
            /** @description El destino no es un `webhook`, o su URL no es un destino permitido y no se envió nada. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        status: null;
                        ok: boolean;
                        /** @constant */
                        latency: 0;
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
            /** @description El dataset de la WABA del número. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown> | components["schemas"]["WabaCapiDatasetResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description La Conversions API no está habilitada para la cuenta (`capi_feature_disabled`), o quien llama no es el titular. */
            403: {
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
            404: components["responses"]["AccountsModelNotFoundException"];
            /** @description El número no está listo (`device_not_ready`) o la cuenta llegó al tope de conexiones del plan (`capi_connection_cap_reached`). */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Meta no respondió bien (`meta_http_error`, `unparseable_response`). Vuelve a intentarlo. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
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
            /** @description El estado de la conexión. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description La Conversions API no está habilitada para la cuenta (`capi_feature_disabled`), o quien llama no es el titular. */
            403: {
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
            404: components["responses"]["AccountsModelNotFoundException"];
            /** @description El número no está listo (`device_not_ready`) o la cuenta llegó al tope de conexiones del plan (`capi_connection_cap_reached`). */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Meta no respondió bien (`meta_http_error`, `unparseable_response`). Vuelve a intentarlo. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
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
            /** @description Los datasets de la cuenta. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown> | string[];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description La Conversions API no está habilitada para la cuenta (`capi_feature_disabled`). */
            403: {
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
        };
    };
    "connectLink.index": {
        parameters: {
            query?: {
                status?: "pending" | "completed" | "failed" | "expired" | "revoked" | null;
                external_reference?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Los links de alta, paginados. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ConnectLinkResource"][];
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
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "connectLink.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreConnectLinkRequest"];
            };
        };
        responses: {
            /** @description El link creado. `url` aparece solo en esta respuesta. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ConnectLinkResource"];
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description El plan no incluye números (`numbers_not_included`), no queda lugar (`number_limit_reached`) o quien llama no es el titular (`connect_not_allowed`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            /** @description Datos inválidos (`invalid_request`; también `provision_us_number` sin `dedicated` o con `device_id`), `device_id` no es un número de la cuenta (`invalid_reference_device`), el `type` no coincide con el del número (`connection_type_mismatch`), `same_number_as` no admite QR (`qr_requires_coexistence`, `method_already_present`), la clave de idempotencia ya se usó con otro cuerpo (`idempotency_key_mismatch`) o el header `Idempotency-Key` está vacío o tiene más de 255 caracteres (`invalid_idempotency_key`). */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            /** @description La cuenta ya tiene el máximo de links pendientes (`too_many_open_links`), o se superó el límite de creaciones por minuto. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            /** @description El alta de números oficiales por link no está habilitada en este momento (`meta_connect_disabled`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
        };
    };
    "connectLink.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                link: number;
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
                        data: components["schemas"]["ConnectLinkResource"];
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description El link no existe o no es de la cuenta. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
        };
    };
    "connectLink.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                link: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Revocado. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description El link no existe o no es de la cuenta. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
            /** @description El link ya no está pendiente (`link_not_pending`). */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
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
            /** @description Los dominios de la cuenta. */
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
            /** @description El dominio registrado, con los registros DNS que hay que crear. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomDomainResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            /** @description El dominio no es válido o ya está registrado. */
            422: {
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
            /** @description No se pudo registrar el dominio en este momento; no se guardó nada. Vuelve a intentarlo. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
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
            /** @description El dominio, con su estado actualizado. */
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
            /** @description El dominio no existe o no es de la cuenta. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description No se pudo verificar el dominio en este momento; su estado no cambió. Vuelve a intentarlo. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
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
            /** @description El dominio, con el método de validación nuevo. */
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
            /** @description El dominio no existe o no es de la cuenta. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            422: components["responses"]["AccountsValidationException"];
            /** @description No se pudo cambiar el método en este momento; no cambió nada. Vuelve a intentarlo. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
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
            /** @description Borrado. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            /** @description El dominio no existe o no es de la cuenta. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    "device.index": {
        parameters: {
            query?: {
                external_reference?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Los números de la cuenta. */
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
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "deviceProvisioning.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreDeviceRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DeviceResource"];
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description El plan no incluye números (`numbers_not_included`), no queda lugar (`number_limit_reached`, con `limit` y `used`) o quien llama no es el titular (`connect_not_allowed`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            /** @description Hay otra operación en curso (`operation_in_progress`) o la cuenta ya tiene un número por QR sin conectar (`pending_number_exists`, con `device_id`). */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                        device_id?: number;
                    };
                };
            };
            /** @description Datos inválidos (`invalid_request`), `same_number_as` no es un número de la cuenta (`invalid_reference_device`), ese número es oficial sin coexistencia (`qr_requires_coexistence`), ya tiene QR (`method_already_present`, con `device_id`), está suspendido por el plan (`number_suspended_by_plan`), la clave de idempotencia ya se usó con otro cuerpo (`idempotency_key_mismatch`) o el header `Idempotency-Key` está vacío o tiene más de 255 caracteres (`invalid_idempotency_key`). */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                        device_id?: number;
                    };
                };
            };
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
                    "application/json": {
                        phone: string;
                        /** @constant */
                        locale: "";
                        name: string;
                        avatar: string;
                        isBusiness: boolean;
                        /** @constant */
                        about: "";
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
                        message: "El número no está conectado a WhatsApp. Conéctalo desde el panel de Funnelchat y vuelve a intentar.";
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
                        message: "El número no está conectado a WhatsApp. Conéctalo desde el panel de Funnelchat y vuelve a intentar.";
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
            /** @description El número. */
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
                     * @description Solo en un número oficial, al conectarlo: el consentimiento para activar la
                     *     Conversions API de Meta. Sin efecto si la Conversions API no está habilitada para
                     *     la cuenta.
                     */
                    capi_consent?: boolean;
                    /**
                     * @description Tu propia referencia para este número (por ejemplo, el id de tu cliente). Con
                     *     `null` se borra. Se guarda solo si la edición sale bien.
                     */
                    external_reference?: string | null;
                };
            };
        };
        responses: {
            /** @description El número editado. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceResource"];
                };
            };
            /** @description El número no admite esta edición. */
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
            /** @description El número fue dado de baja (`device_retired`), está suspendido por el plan (`number_suspended_by_plan`) o hay otra operación en curso sobre los números de la cuenta (`operation_in_progress`). */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[];
                };
            };
            422: components["responses"]["AccountsValidationException"];
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
            /** @description Borrado. El cuerpo viene vacío. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description El pago de la cuenta está vencido, o quien llama no puede borrar ese número. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
            404: components["responses"]["AccountsModelNotFoundException"];
            /** @description Hay otra operación en curso sobre los números de la cuenta (`operation_in_progress`), por ejemplo el alta oficial de ese mismo número. No se borró nada: vuelve a intentarlo. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
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
            /** @description El número, ya sin sus datos, en `data`, y en `numbers_capacity` el uso de los lugares del plan (no aparece si no se pudo calcular). */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown[];
                        numbers_capacity: string | null;
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            /** @description El número fue dado de baja (`device_retired`) o hay otra operación en curso sobre los números de la cuenta (`operation_in_progress`). No se borró nada. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[];
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
            /** @description El número desconectado en `data`, y en `numbers_capacity` el uso de los lugares del plan (no aparece si no se pudo calcular). */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown[];
                        numbers_capacity: string | null;
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            /** @description El número fue dado de baja (`device_retired`) o hay otra operación en curso sobre los números de la cuenta (`operation_in_progress`). No cambió nada. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[];
                };
            };
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
                        message: "El número no está conectado a WhatsApp. Conéctalo desde el panel de Funnelchat y vuelve a intentar.";
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
            /** @description El código y cuándo vence. */
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
            /** @description El número no existe o no es de la cuenta. */
            404: {
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
            /** @description El número todavía no tiene sesión y no se pudo preparar ahora (el código de `error` dice por qué). */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Este número no admite la extensión. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
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
            /** @description Las conexiones y desconexiones del número, paginadas. */
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
            /** @description Si la encuesta está pendiente. */
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
            /** @description Motivo guardado. */
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
            /** @description El número no tiene una encuesta pendiente. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
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
            /** @description Una página del registro, con su ventana y, en la primera página, el resumen. */
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
            /** @description El estado de salud del número. */
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
            /** @description El número no es oficial (`device_not_meta`). */
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
            /** @description El estado de salud del número, con `refresh_outcome`. */
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
                         * @description El nivel de rendimiento de envío que Meta le asigna al número: `standard`, `high`
                         *     o `unknown`; `null` si todavía no hay datos.
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
                        meta_billing: {
                            waba_id: string | null;
                            business_id: string | null;
                        } | null;
                        /** @enum {string} */
                        refresh_outcome: "refreshed" | "not_refreshed_yet";
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            404: components["responses"]["AccountsModelNotFoundException"];
            /** @description El número no es oficial (`device_not_meta`). */
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
            /** @description Una página del registro, con su ventana y, en la primera página, el resumen. */
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
                        } | {
                            /** @constant */
                            total: 0;
                            /** @constant */
                            errors: 0;
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
            /** @description El veredicto y las llamadas que lo explican. */
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
    "deviceProvisioning.qr": {
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
            /** @description The QR to show, or `connected: true` once it was scanned. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingDeviceQr"];
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description No queda lugar en el plan (`number_limit_reached`), quien llama no es el titular (`connect_not_allowed`) o el pago está vencido (`payment_required`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            404: components["responses"]["AccountsModelNotFoundException"];
            /** @description El número escaneado ya tuvo una prueba gratis (`trial_number_blocked`), es oficial sin coexistencia (`qr_requires_coexistence`), está suspendido por el plan (`number_suspended_by_plan`), desactivado (`device_inactive`) o se generaron demasiados QR hoy (`provisioning_quota_exceeded`). */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            /** @description El número es oficial: no tiene QR (`provider_unsupported`). */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            /** @description El proveedor de WhatsApp no respondió (`provider_error`). Vuelve a intentarlo. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
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
            /** @description El nombre de usuario (`username`), o `null` si el número no tiene. */
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
            /** @description El número no es oficial o no está conectado. */
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
            /** @description Meta no respondió. Vuelve a intentarlo. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
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
            /** @description El nombre de usuario reservado. */
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
            /** @description El nombre no es válido, o el número no es oficial o no está conectado. */
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
            /** @description Meta no respondió. Vuelve a intentarlo. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
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
            /** @description Las sugerencias (`suggestions`). */
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
            /** @description El número no es oficial o no está conectado. */
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
            /** @description Meta no respondió. Vuelve a intentarlo. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
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
            /** @description Los intentos de entrega, paginados. */
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
            /** @description El endpoint no existe o no es de la cuenta. */
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
            /** @description Los endpoints de la cuenta. */
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
            /** @description El endpoint registrado, con su secreto de firma (`secret`). Es la única vez que aparece. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookEndpointCreatedResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            /** @description Datos inválidos, se llegó al tope de 10 endpoints o la URL no es `https` o no resuelve a una dirección pública. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string|null} */
                        message: "La URL del webhook no es un destino permitido. Debe ser https y resolver a una dirección pública de internet." | "La URL del webhook debe ser https." | null;
                    } | {
                        /** @constant */
                        message: "Alcanzaste el límite de 10 endpoints de webhook.";
                    };
                };
            };
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
            /** @description El endpoint, con sus suscripciones. */
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
            /** @description El endpoint no existe o no es de la cuenta. */
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
            /** @description Borrado. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, unknown>;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            /** @description El endpoint no existe o no es de la cuenta. */
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
            /** @description El endpoint ya se pasó a las suscripciones unificadas (`webhooks`): se administra desde ahí. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
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
            /** @description El endpoint editado. */
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
            /** @description El endpoint no existe o no es de la cuenta. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description El endpoint ya se pasó a las suscripciones unificadas (`webhooks`): se administra desde ahí. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
            /** @description Datos inválidos, la URL no es `https` o no resuelve a una dirección pública, o se quiso habilitar un endpoint cuya clave de API fue revocada. */
            422: {
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
            /** @description El endpoint, con sus suscripciones nuevas. */
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
            /** @description El endpoint no existe o no es de la cuenta. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
            /** @description El endpoint ya se pasó a las suscripciones unificadas (`webhooks`): se administra desde ahí. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
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
    "webhookSubscription.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Las suscripciones de la cuenta. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookSubscriptionResource"][] | {
                        data: components["schemas"]["WebhookSubscriptionResource"][];
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
    "webhookSubscription.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StoreWebhookSubscriptionRequest"];
            };
        };
        responses: {
            /** @description La suscripción creada, con su secreto de firma (`secret`). Es la única vez que aparece. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookSubscriptionCreatedResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            403: components["responses"]["AccountsAuthorizationException"];
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "webhookSubscription.show": {
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
            /** @description La suscripción. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookSubscriptionResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description La clave de API no tiene el permiso de lectura de un área de los eventos de la suscripción. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            /** @description La suscripción no existe o no es de la cuenta. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Suscripción de webhook no encontrada.";
                    };
                };
            };
        };
    };
    "webhookSubscription.update": {
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
                "application/json": components["schemas"]["UpdateWebhookSubscriptionRequest"];
            };
        };
        responses: {
            /** @description The subscription, without its secret. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookSubscriptionResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description La clave de API no tiene el permiso de lectura de un área de los eventos de la suscripción. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            422: components["responses"]["AccountsValidationException"];
        };
    };
    "webhookSubscription.destroy": {
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
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": null;
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description La clave de API no tiene el permiso de lectura de un área de los eventos de la suscripción. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Suscripción de webhook no encontrada.";
                    };
                };
            };
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Esta suscripción se está activando; espera a que termine.";
                    };
                };
            };
        };
    };
    "webhookSubscriptionDelivery.index": {
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
            /** @description Los intentos de entrega, paginados. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["WebhookSubscriptionDeliveryResource"][];
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
            /** @description La clave de API no tiene el permiso de lectura de un área de los eventos de la suscripción. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            /** @description La suscripción no existe o no es de la cuenta. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Suscripción de webhook no encontrada.";
                    };
                };
            };
        };
    };
    "webhookSubscriptionTest.test": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        succeeded: boolean;
                        response_status: number | null;
                        /** @enum {string|null} */
                        error: "non_2xx" | "internal_error" | "timeout" | "connection_failed" | "tls_error" | "destination_not_allowed" | "secret_unreadable" | null;
                        duration_ms: number | null;
                        delivery_id: number;
                    };
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description La clave de API no tiene el permiso de lectura de un área de los eventos de la suscripción. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        message: string;
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Suscripción de webhook no encontrada.";
                    };
                };
            };
            /** @description La suscripción está deshabilitada: no se envía nada. */
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
        };
    };
    "whatsAppBusinessAccount.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Las WABA de la cuenta, con sus números y su límite de mensajes. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WhatsAppBusinessAccountResource"][] | {
                        data: components["schemas"]["WhatsAppBusinessAccountResource"][];
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
        };
    };
    "whatsAppBusinessAccount.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description El id de la WABA, tal como lo da Meta (numérico). */
                wabaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `WhatsAppBusinessAccountResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WhatsAppBusinessAccountResource"];
                };
            };
            401: components["responses"]["AccountsAuthenticationException"];
            /** @description La cuenta no tiene números de WhatsApp Cloud en esa WABA. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
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
            /** @description El resumen de costos del mes. */
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
    "pendingForms.list": {
        parameters: {
            query?: {
                q?: string;
                status?: "draft" | "published" | "deprecated";
                device_id?: number;
                /** @description 25 by default. */
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
                    /** @description The primary number. */
                    device_id: number;
                    /** @description Other numbers to publish it on. */
                    device_ids?: number[];
                    /** @description A `key` of `GET /api/v1/forms/templates`. */
                    template_key?: string;
                };
            };
        };
        responses: {
            /** @description Created as a draft. */
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
                /** @description The version of the form. */
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
                /** @description The version of the form. */
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    /** @description Screens and fields of the form. */
                    definition: Record<string, unknown>;
                    /** @description The `updated_at` you read: if it changed since then, it answers `409 STALE`. */
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
                /** @description The version of the form. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Deleted. A published version answers `409 PUBLISHED`. */
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
                /** @description The version of the form. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description There was a draft already: this is it (`created: false`). */
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
            /** @description New draft (`created: true`). */
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
                /** @description The version of the form. */
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
                /** @description The version of the form. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Published. If Meta rejects it: `502 META` with `meta_code` and `lint`; if it does not pass validation: `422 LINT`. */
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
                /** @description The version of the form. */
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
                /** @description The version of the form. */
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
                /** @description The version of the form. */
                id: number;
                deviceId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The primary number cannot be taken off: `422 PRIMARY_NUMBER`. */
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
                /** @description The version of the form. */
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
                /** @description The form (`family_id`). */
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
                /** @description The form (`family_id`). */
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
                /** @description The form (`family_id`). */
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
                /** @description The form (`family_id`). */
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
                /** @description The form (`family_id`). */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
                 *         },
                 *         "idempotency_key": "00000000-0000-4000-8000-00000000000d"
                 *       }
                 *     }
                 */
                "application/json": Record<string, unknown>;
            };
        };
        responses: {
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
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
                 * @description UUID de este intento de entrega; cambia en cada reintento. Para deduplicar usa el `id` del cuerpo.
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
            /** @description Responde con cualquier 2xx dentro de 10 segundos para confirmar la recepción. */
            "2XX": {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
