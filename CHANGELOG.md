# Changelog

## 0.8.0 (2026-11-18)

Types from the portal spec of 18-11-2026 (portal `fe4df8d`, sha256 `4a8fbaee…`), which matches what production takes. See [Upgrading from 0.7](README.md#upgrading-from-07).

### Breaking

- `messages.sendForm`: `form_id` is the form's `family_id` (`frm_…`), not a version (`frv_…`).
- `templates.send`: `template_variables.body` is an object by variable number (`{ '1': 'Lucía' }`), not a list; `phone` or `whatsapp_id` is required.
- `templates.create`: `device_id` is required and `params` is `{ body, samples }`.
- Bodies that need one of several fields say so: `messages.send`, `messages.sendDirect`, `contacts.create` and `contacts.delete`. `connectLinks.create`, `groups.sendMessage` and `POST /api/v1/groups` (by `request`) take one of their variants.
- A connect link's `url` is `string | null`, and its `status` one of `pending`, `completed`, `failed`, `expired` and `revoked`.
- The `data` of `account.blocked` and `mac.*` has no numeric `workspace_id`.

### Added

- The client reads the base URL from `FUNNELCHAT_BASE_URL` when `baseUrl` is not passed, before the URL of `environment`.
- 23 operations that cannot be undone are marked `destructive` in `routes` (5 before), and each group has the category of the portal.

### Fixed

- A field with a default the API fills in (`definition.endpoint` of a form, `join_approval_required` of a group) is optional.
- The e2e tests use the records the sandbox seeds, and CI runs them against `@funnelchat-hq/sandbox` 0.7.0.

## 0.7.0 (2026-11-16)

Types from portal v0.7.0: opaque ids (`ctc_…`, `dev_…`) instead of numbers. See [Upgrading from 0.6](README.md#upgrading-from-06).
