import type { Funnelchat } from '../client.js';
import type { IdempotentRequestOptions, RequestOptions } from '../core/types.js';

/** Base of every resource: a group of operations of one piece of the API. */
export abstract class Resource {
  // A private field behind a getter: the client is not an own enumerable property, so logging or
  // serializing a resource neither recurses into the client nor fails on a circular structure.
  readonly #client: Funnelchat;

  constructor(client: Funnelchat) {
    this.#client = client;
  }

  protected get client(): Funnelchat {
    return this.#client;
  }

  /** The options of a request with `idempotencyKey` turned into the `Idempotency-Key` header. */
  protected idempotent({ idempotencyKey, ...options }: IdempotentRequestOptions = {}): RequestOptions {
    if (idempotencyKey === undefined) return options;
    return { ...options, headers: { ...options.headers, 'Idempotency-Key': idempotencyKey } };
  }
}
