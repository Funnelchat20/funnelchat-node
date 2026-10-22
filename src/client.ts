import {
  APIConnectionError,
  APIConnectionTimeoutError,
  APIError,
  APIUserAbortError,
  FunnelchatError,
} from './core/errors.js';
import { PagePromise } from './core/pagination.js';
import { APIPromise, type APIResponse, requestIdOf } from './core/api-promise.js';
import { isRetryable, isSendRequest, retryDelayMs } from './core/retry.js';
import type {
  ApiPath,
  HttpMethod,
  ListItem,
  MethodsOf,
  OptionsArg,
  PathsWithMethod,
  ResponseBody,
  TypedRequestOptions,
  UntypedRequestOptions,
} from './core/types.js';
import { interpolatePath, joinUrl, serializeQuery } from './core/url.js';
import { Contacts } from './resources/contacts.js';
import { Conversations } from './resources/conversations.js';
import { CustomFields } from './resources/custom-fields.js';
import { Devices } from './resources/devices.js';
import { Groups } from './resources/groups.js';
import { Messages } from './resources/messages.js';
import { Tags } from './resources/tags.js';
import { Templates } from './resources/templates.js';
import { Webhooks } from './resources/webhooks.js';
import { VERSION } from './version.js';
import { constructEvent } from './webhooks/events.js';
import { verify } from './webhooks/signature.js';

export type Environment = 'production' | 'staging';

/** Base URL of each environment: one URL for the whole public API. */
export const BASE_URLS: Readonly<Record<Environment, string>> = {
  production: 'https://api.funnelchat.com',
  staging: 'https://api-staging.funnelchat.com',
};

export const DEFAULT_TIMEOUT_MS = 30_000;
export const DEFAULT_MAX_RETRIES = 2;

export interface ClientOptions {
  /** `<id>|fc_live_...`. Default: the `FUNNELCHAT_API_KEY` environment variable. */
  apiKey?: string;
  /** Overrides the URL of `environment` (for example a local edge). */
  baseUrl?: string;
  /** Default: `production`. */
  environment?: Environment;
  /** Timeout of each attempt, in milliseconds. Default: 30 000. */
  timeoutMs?: number;
  /** Automatic retries on `429`, `5xx` and network errors. Default: 2. `0` turns them off. */
  maxRetries?: number;
  /** Headers added to every request. */
  defaultHeaders?: Record<string, string>;
  /** A `fetch` implementation. Default: the global one (Node 18+). */
  fetch?: typeof fetch;
}

/** Signature-verification helpers that need no client (no API key). */
const webhookHelpers = { verify, constructEvent } as const;

/**
 * Client of the Funnelchat public API.
 *
 * ```ts
 * const funnelchat = new Funnelchat({ apiKey: process.env.FUNNELCHAT_API_KEY });
 * const devices = await funnelchat.devices.list();
 * ```
 */
export class Funnelchat {
  /** `Funnelchat.webhooks.verify(...)` and `Funnelchat.webhooks.constructEvent(...)`, without a client. */
  static readonly webhooks = webhookHelpers;
  static readonly VERSION = VERSION;

  readonly baseUrl: string;
  readonly timeoutMs: number;
  readonly maxRetries: number;

  readonly contacts: Contacts;
  readonly conversations: Conversations;
  readonly messages: Messages;
  readonly templates: Templates;
  readonly tags: Tags;
  readonly customFields: CustomFields;
  readonly groups: Groups;
  readonly devices: Devices;
  /** Webhook subscriptions, plus `verify` and `constructEvent`. */
  readonly webhooks: Webhooks;

  // Private fields: the key never shows up in `console.log(client)` or in JSON.
  readonly #apiKey: string;
  readonly #fetch: typeof fetch;
  readonly #defaultHeaders: Record<string, string>;

  constructor(options: ClientOptions = {}) {
    const apiKey = options.apiKey ?? readEnv('FUNNELCHAT_API_KEY');
    if (!apiKey) {
      throw new FunnelchatError('Falta la clave de API: pasala en `apiKey` o en la variable FUNNELCHAT_API_KEY.');
    }
    const environment = options.environment ?? 'production';
    if (!(environment in BASE_URLS)) {
      throw new FunnelchatError(`Entorno desconocido: ${String(environment)}. Usá "production" o "staging".`);
    }
    const fetchImpl = options.fetch ?? globalThis.fetch;
    if (typeof fetchImpl !== 'function') {
      throw new FunnelchatError('No hay fetch disponible: usá Node 18 o posterior, o pasá `fetch` en las opciones.');
    }

    this.#apiKey = apiKey;
    this.#fetch = fetchImpl;
    this.#defaultHeaders = { ...options.defaultHeaders };
    this.baseUrl = (options.baseUrl ?? BASE_URLS[environment]).replace(/\/+$/, '');
    this.timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES;

    this.contacts = new Contacts(this);
    this.conversations = new Conversations(this);
    this.messages = new Messages(this);
    this.templates = new Templates(this);
    this.tags = new Tags(this);
    this.customFields = new CustomFields(this);
    this.groups = new Groups(this);
    this.devices = new Devices(this);
    this.webhooks = new Webhooks(this);
  }

  /** What `JSON.stringify(client)` shows: the configuration, never the key. */
  toJSON(): { baseUrl: string; timeoutMs: number; maxRetries: number } {
    return { baseUrl: this.baseUrl, timeoutMs: this.timeoutMs, maxRetries: this.maxRetries };
  }

  /**
   * Calls any route. With a path of the spec (`'/api/v1/contacts/{contact}'`) the path parameters,
   * query, body and response are typed; any other path works untyped.
   *
   * ```ts
   * const contact = await funnelchat.request('GET', '/api/v1/contacts/{contact}', { path: { contact: 2001 } });
   * ```
   */
  request<P extends ApiPath, M extends MethodsOf<P>>(method: M, path: P, ...options: OptionsArg<TypedRequestOptions<P, M>>): APIPromise<ResponseBody<P, M>>;
  request<T = unknown, P extends string = string>(method: HttpMethod, path: P extends ApiPath ? never : P, options?: UntypedRequestOptions): APIPromise<T>;
  request(method: HttpMethod, path: string, options?: object): APIPromise<unknown> {
    return new APIPromise(this.#send(method, path, (options ?? {}) as UntypedRequestOptions));
  }

  /**
   * Walks any list route. `await` it for the first page or `for await` it for every item.
   *
   * ```ts
   * for await (const tag of funnelchat.paginate('/api/v1/tags', { query: { perPage: 100 } })) { … }
   * ```
   */
  paginate<P extends PathsWithMethod<'GET'>>(path: P, ...options: OptionsArg<TypedRequestOptions<P, 'GET'>>): PagePromise<ListItem<P>>;
  paginate<T = unknown, P extends string = string>(path: P extends ApiPath ? never : P, options?: UntypedRequestOptions): PagePromise<T>;
  paginate(path: string, options?: object): PagePromise<unknown> {
    const { query, ...rest } = (options ?? {}) as UntypedRequestOptions;
    return new PagePromise<unknown>((pageQuery) => this.#send('GET', path, { ...rest, query: pageQuery }), { ...query });
  }

  async #send(method: HttpMethod, template: string, options: UntypedRequestOptions): Promise<APIResponse<unknown>> {
    const verb = method.toUpperCase() as HttpMethod;
    const pathname = interpolatePath(template, options.path);
    const url = joinUrl(this.baseUrl, pathname, serializeQuery(options.query));
    const errorUrl = joinUrl(this.baseUrl, pathname.split('?')[0] ?? pathname, '');
    const maxRetries = Math.max(0, options.maxRetries ?? this.maxRetries);
    // A send is never repeated unless the caller asks; then it follows the rule of every write.
    const retriesAllowed = options.retrySend === true || !isSendRequest(verb, pathname.split('?')[0] ?? pathname);
    const timeoutMs = options.timeoutMs ?? this.timeoutMs;
    const { body, contentType } = encodeBody(options.body);
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'User-Agent': `funnelchat-node/${VERSION} node/${typeof process !== 'undefined' ? process.version : 'unknown'}`,
      ...(contentType ? { 'Content-Type': contentType } : {}),
      ...this.#defaultHeaders,
      ...options.headers,
      Authorization: `Bearer ${this.#apiKey}`,
    };

    for (let attempt = 0; ; attempt++) {
      const canRetry = retriesAllowed && attempt < maxRetries;
      let result: { response: Response; text: string };
      try {
        result = await this.#attempt(verb, url, headers, body, timeoutMs, options.signal);
      } catch (error) {
        if (error instanceof APIConnectionError && canRetry && isRetryable(verb, 'network')) {
          await sleep(retryDelayMs(attempt, undefined) ?? 0, options.signal);
          continue;
        }
        throw error;
      }

      const { response, text } = result;
      const parsed = parseBody(response, text);
      if (response.ok) return { data: parsed, response, requestId: requestIdOf(response.headers) };

      const error = APIError.from({ status: response.status, body: parsed, headers: response.headers, method: verb, url: errorUrl });
      if (canRetry && isRetryable(verb, response.status)) {
        const delay = retryDelayMs(attempt, error.retryAfter);
        if (delay !== null) {
          await sleep(delay, options.signal);
          continue;
        }
      }
      throw error;
    }
  }

  async #attempt(
    method: HttpMethod,
    url: string,
    headers: Record<string, string>,
    body: BodyInit | undefined,
    timeoutMs: number,
    signal: AbortSignal | undefined,
  ): Promise<{ response: Response; text: string }> {
    if (signal?.aborted) throw new APIUserAbortError({ cause: signal.reason });
    const controller = new AbortController();
    const onAbort = () => controller.abort(signal?.reason);
    signal?.addEventListener('abort', onAbort, { once: true });
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeoutMs);

    const classify = (cause: unknown): Error => {
      if (signal?.aborted) return new APIUserAbortError({ cause });
      if (timedOut) return new APIConnectionTimeoutError(timeoutMs, { cause });
      return new APIConnectionError(undefined, { cause });
    };

    try {
      let response: Response;
      try {
        response = await this.#fetch(url, { method, headers, body, signal: controller.signal });
      } catch (error) {
        throw classify(error);
      }
      try {
        return { response, text: await response.text() };
      } catch (error) {
        throw classify(error);
      }
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener('abort', onAbort);
    }
  }
}

function readEnv(name: string): string | undefined {
  if (typeof process === 'undefined' || !process.env) return undefined;
  const value = process.env[name];
  return value && value.trim() !== '' ? value.trim() : undefined;
}

function encodeBody(body: unknown): { body: BodyInit | undefined; contentType: string | undefined } {
  if (body === undefined) return { body: undefined, contentType: undefined };
  if (typeof FormData !== 'undefined' && body instanceof FormData) return { body, contentType: undefined };
  if (body instanceof URLSearchParams) return { body, contentType: undefined };
  if (typeof body === 'string') return { body, contentType: 'application/json' };
  return { body: JSON.stringify(body), contentType: 'application/json' };
}

/** The decoded body: JSON when it parses, the text otherwise, `null` when there is none (a `204`). */
function parseBody(response: Response, text: string): unknown {
  if (text === '') return null;
  const type = response.headers.get('content-type') ?? '';
  if (type.includes('json') || /^\s*[[{]/.test(text)) {
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  }
  return text;
}

function sleep(ms: number, signal: AbortSignal | undefined): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new APIUserAbortError({ cause: signal.reason }));
      return;
    }
    const onAbort = () => {
      clearTimeout(timer);
      reject(new APIUserAbortError({ cause: signal?.reason }));
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      resolve();
    }, ms);
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}
