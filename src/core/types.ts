/**
 * Type helpers over the generated `paths` (src/generated/openapi.ts). They turn a path of the
 * spec and an HTTP method into the types of its path parameters, query, body and response.
 */
import type { paths } from '../generated/openapi.js';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/** Every path of the spec (`/api/v1/...`). */
export type ApiPath = keyof paths;

type Operation<P extends ApiPath, M extends HttpMethod> = NonNullable<paths[P][Lowercase<M>]>;

/** The HTTP methods the spec defines for a path. */
export type MethodsOf<P extends ApiPath> = {
  [M in HttpMethod]: [NonNullable<paths[P][Lowercase<M>]>] extends [never] ? never : M;
}[HttpMethod];

/** The paths that accept a given method. */
export type PathsWithMethod<M extends HttpMethod> = {
  [P in ApiPath]: M extends MethodsOf<P> ? P : never;
}[ApiPath];

type JsonContent<C> = C extends { 'application/json': infer B } ? B : C[keyof C];

/** Path parameters of an operation (`{ contact: number }`), or `undefined` when it has none. */
export type PathParams<P extends ApiPath, M extends HttpMethod> =
  Operation<P, M> extends { parameters: { path: infer X } } ? ([X] extends [never] ? undefined : X) : undefined;

/** Query parameters of an operation, or `undefined` when the spec declares none. */
export type QueryParams<P extends ApiPath, M extends HttpMethod> =
  Operation<P, M> extends { parameters: { query?: infer Q } } ? ([Exclude<Q, undefined>] extends [never] ? undefined : Exclude<Q, undefined>) : undefined;

/** JSON body of an operation, or `undefined` when it takes none. */
export type RequestBody<P extends ApiPath, M extends HttpMethod> =
  Operation<P, M> extends { requestBody?: never }
    ? undefined
    : Operation<P, M> extends { requestBody?: { content: infer C } }
      ? JsonContent<C>
      : undefined;

type SuccessStatus = 200 | 201 | 202 | 203 | 204 | 206;
type ResponseContent<R> = R extends { content: infer C } ? ([C] extends [never] ? null : JsonContent<C>) : null;
type SuccessBodies<R> = ResponseContent<R[Extract<keyof R, SuccessStatus>]>;

/**
 * The parsed body of a 2xx response. A success response without a body (`204`) adds `null`. When
 * the spec documents no body at all, it is `unknown`: whatever the API answers is returned, so a
 * body the spec does not describe yet is never dropped.
 */
export type ResponseBody<P extends ApiPath, M extends HttpMethod> =
  Operation<P, M> extends { responses: infer R }
    ? [Extract<keyof R, SuccessStatus>] extends [never]
      ? unknown
      : [SuccessBodies<R>] extends [null]
        ? unknown
        : SuccessBodies<R>
    : unknown;

type ItemOf<R> = R extends { data: readonly (infer I)[] } ? I : R extends readonly (infer I)[] ? I : never;

/** The item type of a list response: `data[]`, or the array itself (also when the spec allows both). */
export type ListItem<P extends ApiPath, M extends HttpMethod = 'GET'> =
  [ItemOf<ResponseBody<P, M>>] extends [never] ? unknown : ItemOf<ResponseBody<P, M>>;

/** Query keys every list understands besides the ones the spec declares. */
export interface PaginationQuery {
  page?: number;
  cursor?: string;
}

/** Options every request takes. */
export interface RequestOptions {
  /** Extra headers for this request. */
  headers?: Record<string, string>;
  /** Overrides the client's `timeoutMs` for this request. */
  timeoutMs?: number;
  /** Overrides the client's `maxRetries` for this request. */
  maxRetries?: number;
  /**
   * Allows automatic retries of a non-idempotent send for this request: a `POST` that needs
   * **Contacts and conversations → Send**. Off by default: a retried send
   * can deliver the same message twice.
   */
  retrySend?: boolean;
  /** Cancels the request. */
  signal?: AbortSignal;
}

/** Options of the creates that take an `Idempotency-Key` (`devices.create`, `connectLinks.create`). */
export interface IdempotentRequestOptions extends RequestOptions {
  /**
   * Sent as the `Idempotency-Key` header (up to 255 characters, kept 24 hours per account). The same
   * key with the same body answers the same response without creating another resource, so after a
   * timeout or a `5xx` you can repeat the call with it safely. With another body: `422
   * idempotency_key_mismatch`; while the first call runs: `409 operation_in_progress`.
   */
  idempotencyKey?: string;
}

type PathPart<P extends ApiPath, M extends HttpMethod> =
  PathParams<P, M> extends undefined ? { path?: undefined } : { path: PathParams<P, M> };

type QueryPart<P extends ApiPath, M extends HttpMethod> =
  QueryParams<P, M> extends undefined
    ? { query?: Record<string, unknown> }
    : Operation<P, M> extends { parameters: { query: unknown } }
      ? { query: QueryParams<P, M> & PaginationQuery & Record<string, unknown> }
      : { query?: QueryParams<P, M> & PaginationQuery & Record<string, unknown> };

type BodyPart<P extends ApiPath, M extends HttpMethod> =
  RequestBody<P, M> extends undefined
    ? { body?: undefined }
    : Operation<P, M> extends { requestBody: unknown }
      ? { body: RequestBody<P, M> }
      : { body?: RequestBody<P, M> };

/** Options of a typed request: path parameters, query and body as the spec declares them. */
export type TypedRequestOptions<P extends ApiPath, M extends HttpMethod> = RequestOptions &
  PathPart<P, M> &
  QueryPart<P, M> &
  BodyPart<P, M>;

/** Options of a request to a path outside the spec. */
export interface UntypedRequestOptions extends RequestOptions {
  path?: Record<string, string | number>;
  query?: Record<string, unknown>;
  body?: unknown;
}

/** Shorthands for resource signatures. */
export type Query<P extends ApiPath, M extends HttpMethod = 'GET'> = NonNullable<TypedRequestOptions<P, M>['query']>;
export type Body<P extends ApiPath, M extends HttpMethod> = RequestBody<P, M>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T];

/** The options argument: optional when nothing in it is required. */
export type OptionsArg<O> = [RequiredKeys<O>] extends [never] ? [options?: O] : [options: O];
