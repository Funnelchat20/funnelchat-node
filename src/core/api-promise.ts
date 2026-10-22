/**
 * The promise every call returns: `await` it for the body, or call `withResponse()` to also get the
 * HTTP response and its `X-Request-Id`.
 */

/** Header the API sets on every response, success or error: a UUID per request. */
export const REQUEST_ID_HEADER = 'x-request-id';

/** The id of a request (`X-Request-Id`), or `undefined` when the response has none. */
export function requestIdOf(headers: Headers): string | undefined {
  const value = headers.get(REQUEST_ID_HEADER);
  return value !== null && value.trim() !== '' ? value.trim() : undefined;
}

/** A body together with the response it came in. */
export interface APIResponse<T> {
  data: T;
  /** The HTTP response. Its body was already read: use `data`. */
  response: Response;
  /** `X-Request-Id` of the response. Quote it when you report a problem. */
  requestId: string | undefined;
}

/**
 * A `Promise` of the response body with one extra method:
 *
 * ```ts
 * const { data, requestId } = await funnelchat.contacts.retrieve(2001).withResponse();
 * ```
 */
export class APIPromise<T> extends Promise<T> {
  readonly #response: Promise<APIResponse<T>>;
  #data: Promise<T> | undefined;

  constructor(response: Promise<APIResponse<T>>) {
    // The executor value is never observed: then/catch/finally read #response instead.
    super((resolve) => resolve(undefined as T));
    this.#response = response;
  }

  // Derived promises (`.then(...)`) are plain Promises, not APIPromises.
  static override get [Symbol.species]() {
    return Promise;
  }

  /** The body, the `Response` and the `X-Request-Id`. */
  withResponse(): Promise<APIResponse<T>> {
    return this.#response;
  }

  #body(): Promise<T> {
    this.#data ??= this.#response.then((result) => result.data);
    return this.#data;
  }

  override then<R1 = T, R2 = never>(
    onfulfilled?: ((value: T) => R1 | PromiseLike<R1>) | null,
    onrejected?: ((reason: unknown) => R2 | PromiseLike<R2>) | null,
  ): Promise<R1 | R2> {
    return this.#body().then(onfulfilled, onrejected);
  }

  override catch<R = never>(onrejected?: ((reason: unknown) => R | PromiseLike<R>) | null): Promise<T | R> {
    return this.#body().catch(onrejected);
  }

  override finally(onfinally?: (() => void) | null): Promise<T> {
    return this.#body().finally(onfinally);
  }
}
