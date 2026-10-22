/**
 * Pagination over the list routes of the API. Three shapes exist and all are handled:
 *
 * - page numbers (Laravel): `{ data, links, meta: { current_page, last_page, … } }`, next with `page`;
 * - cursors: `{ data, links, meta: { next_cursor, … } }`, next with `cursor`;
 * - plain arrays: one page with everything.
 *
 * `list()` methods return a {@link PagePromise}: `await` it for the first page, or iterate it with
 * `for await` to walk every item of every page.
 */

import type { APIResponse } from './api-promise.js';

/** Fetches one page given the query of that page. */
export type PageFetcher = (query: Record<string, unknown>) => Promise<APIResponse<unknown>>;

export class Page<T> implements AsyncIterable<T> {
  /** Items of this page. */
  readonly data: T[];
  /** The full response body of this page (with `meta` and `links` when the route sends them). */
  readonly body: unknown;
  /** `X-Request-Id` of the response of this page. */
  readonly requestId: string | undefined;
  /** The HTTP response of this page. Its body was already read: use `body`. */
  readonly response: Response;
  readonly #fetchPage: PageFetcher;
  readonly #query: Record<string, unknown>;

  constructor(fetchPage: PageFetcher, query: Record<string, unknown>, result: APIResponse<unknown>) {
    this.#fetchPage = fetchPage;
    this.#query = query;
    this.body = result.data;
    this.requestId = result.requestId;
    this.response = result.response;
    this.data = extractItems<T>(result.data);
  }

  /**
   * The query keys that ask for the next page (`{ page }` or `{ cursor }`), or `null` on the last
   * page. An empty page is always the last one.
   */
  nextPageQuery(): Record<string, string | number> | null {
    if (this.data.length === 0) return null;
    const next = nextPageQuery(this.body);
    if (next === null) return null;
    const unchanged = Object.entries(next).every(([key, value]) => String(this.#query[key]) === String(value));
    return unchanged ? null : next;
  }

  hasNextPage(): boolean {
    return this.nextPageQuery() !== null;
  }

  /** Fetches the next page. Throws when there is none: check {@link hasNextPage} first. */
  async getNextPage(): Promise<Page<T>> {
    const next = this.nextPageQuery();
    if (next === null) throw new Error('There are no more pages.');
    const query = { ...this.#query, ...next };
    if ('cursor' in next) delete query.page;
    return new Page<T>(this.#fetchPage, query, await this.#fetchPage(query));
  }

  /** Walks this page and the following ones, page by page. */
  async *iterPages(): AsyncGenerator<Page<T>, void, undefined> {
    yield this;
    let next = this.hasNextPage() ? await this.getNextPage() : null;
    while (next !== null) {
      yield next;
      next = next.hasNextPage() ? await next.getNextPage() : null;
    }
  }

  /** Walks every item of this page and the following ones. */
  async *[Symbol.asyncIterator](): AsyncGenerator<T, void, undefined> {
    for await (const page of this.iterPages()) yield* page.data;
  }
}

/**
 * A lazy first page: nothing is requested until it is awaited or iterated.
 * `await list()` gives the first {@link Page}; `for await (const item of list())` gives every item.
 */
export class PagePromise<T> implements PromiseLike<Page<T>>, AsyncIterable<T> {
  readonly #load: () => Promise<Page<T>>;
  #promise: Promise<Page<T>> | undefined;

  constructor(fetchPage: PageFetcher, query: Record<string, unknown>) {
    this.#load = async () => new Page<T>(fetchPage, query, await fetchPage(query));
  }

  #page(): Promise<Page<T>> {
    this.#promise ??= this.#load();
    return this.#promise;
  }

  then<R1 = Page<T>, R2 = never>(
    onfulfilled?: ((value: Page<T>) => R1 | PromiseLike<R1>) | null,
    onrejected?: ((reason: unknown) => R2 | PromiseLike<R2>) | null,
  ): Promise<R1 | R2> {
    return this.#page().then(onfulfilled, onrejected);
  }

  catch<R = never>(onrejected?: ((reason: unknown) => R | PromiseLike<R>) | null): Promise<Page<T> | R> {
    return this.#page().catch(onrejected);
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<T, void, undefined> {
    yield* await this.#page();
  }
}

function extractItems<T>(body: unknown): T[] {
  if (Array.isArray(body)) return body as T[];
  if (isRecord(body) && Array.isArray(body.data)) return body.data as T[];
  return [];
}

function toInt(value: unknown): number | null {
  if (typeof value === 'number' && Number.isInteger(value)) return value;
  if (typeof value === 'string' && /^\d+$/.test(value)) return Number(value);
  return null;
}

/** The query of the next page according to a response body, or `null`. */
export function nextPageQuery(body: unknown): Record<string, string | number> | null {
  if (!isRecord(body)) return null;
  for (const holder of [body.meta, body]) {
    if (!isRecord(holder)) continue;
    if ('next_cursor' in holder) {
      return typeof holder.next_cursor === 'string' && holder.next_cursor !== '' ? { cursor: holder.next_cursor } : null;
    }
    const current = toInt(holder.current_page);
    const last = toInt(holder.last_page);
    if (current !== null && last !== null) return current < last ? { page: current + 1 } : null;
  }
  const links = isRecord(body.links) ? body.links : undefined;
  const nextUrl = links?.next ?? body.next_page_url;
  if (typeof nextUrl === 'string' && nextUrl !== '') {
    const params = new URL(nextUrl, 'https://placeholder.invalid').searchParams;
    const cursor = params.get('cursor');
    if (cursor) return { cursor };
    const page = toInt(params.get('page'));
    if (page !== null) return { page };
  }
  return null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
