export { Funnelchat, BASE_URLS, DEFAULT_MAX_RETRIES, DEFAULT_TIMEOUT_MS } from './client.js';
export type { ClientOptions, Environment } from './client.js';
export { Funnelchat as default } from './client.js';

export {
  APIConnectionError,
  APIConnectionTimeoutError,
  APIError,
  APIUserAbortError,
  AuthenticationError,
  BadRequestError,
  ConflictError,
  FunnelchatError,
  InternalServerError,
  NotFoundError,
  PermissionDeniedError,
  RateLimitError,
  UnprocessableEntityError,
  UnsupportedMediaTypeError,
  WebhookVerificationError,
} from './core/errors.js';
export type { FieldErrors, WebhookVerificationFailure } from './core/errors.js';

export { APIPromise, REQUEST_ID_HEADER } from './core/api-promise.js';
export type { APIResponse } from './core/api-promise.js';
export { Page, PagePromise } from './core/pagination.js';
export type {
  ApiPath,
  Body,
  HttpMethod,
  ListItem,
  PathParams,
  Query,
  QueryParams,
  RequestBody,
  RequestOptions,
  ResponseBody,
  TypedRequestOptions,
  UntypedRequestOptions,
} from './core/types.js';

export { constructEvent } from './webhooks/events.js';
export type { WebhookEvent, WebhookEventData, WebhookEventEnvelope, WebhookEventOf, WebhookEventType } from './webhooks/events.js';
export { DEFAULT_TOLERANCE_SECONDS, SIGNATURE_HEADER, verify } from './webhooks/signature.js';
export type { RawBody, VerifyOptions } from './webhooks/signature.js';

export { webhookEvents } from './generated/events.js';
export type { WebhookEventInfo } from './generated/events.js';
export { routes } from './generated/routes.js';
export type { RouteInfo } from './generated/routes.js';
export type { components, operations, paths, webhooks as WebhookSchemas } from './generated/openapi.js';

export { ACCESS_ERROR_CODES, SEND_ERROR_CODES, isSendRuleError } from './core/error-codes.js';
export type { AccessErrorCode, KnownErrorCode, SendErrorCode } from './core/error-codes.js';
export type { SendMessageParams } from './resources/messages.js';

export { VERSION } from './version.js';
