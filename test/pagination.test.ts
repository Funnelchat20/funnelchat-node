import { describe, expect, it } from 'vitest';
import { Funnelchat, Page } from '../src/index.js';
import { nextPageQuery } from '../src/core/pagination.js';
import { TEST_API_KEY, mockFetch } from './helpers.js';

const client = (fetchImpl: typeof fetch) => new Funnelchat({ apiKey: TEST_API_KEY, fetch: fetchImpl, maxRetries: 0 });

/** A Laravel length-aware page, as the list routes of conversations answer. */
function laravelPage(items: unknown[], current: number, last: number) {
  return {
    status: 200,
    body: {
      data: items,
      links: { first: '…?page=1', last: `…?page=${last}`, prev: null, next: current < last ? `…?page=${current + 1}` : null },
      meta: { current_page: current, from: 1, last_page: last, links: [], path: 'https://api.funnelchat.com/api/v1/tags', per_page: 2, to: 2, total: 5 },
    },
  };
}

function cursorPage(items: unknown[], nextCursor: string | null) {
  return {
    status: 200,
    body: { data: items, links: { first: null, last: null, prev: null, next: null }, meta: { path: '…', per_page: 2, next_cursor: nextCursor, prev_cursor: null } },
  };
}

describe('pagination', () => {
  it('walks every item of every page with for await (page numbers)', async () => {
    const { fetch, calls } = mockFetch(
      laravelPage([{ id: 1 }, { id: 2 }], 1, 3),
      laravelPage([{ id: 3 }, { id: 4 }], 2, 3),
      laravelPage([{ id: 5 }], 3, 3),
    );
    const ids: number[] = [];
    for await (const tag of client(fetch).tags.list({ perPage: 2, name: 'vip' })) ids.push((tag as { id: number }).id);

    expect(ids).toEqual([1, 2, 3, 4, 5]);
    expect(calls.map((c) => new URL(c.url).search)).toEqual(['?perPage=2&name=vip', '?perPage=2&name=vip&page=2', '?perPage=2&name=vip&page=3']);
  });

  it('follows next_cursor and drops page for cursor routes', async () => {
    const { fetch, calls } = mockFetch(cursorPage([{ id: 'a' }, { id: 'b' }], 'CUR2'), cursorPage([{ id: 'c' }], null));
    const items: unknown[] = [];
    for await (const message of client(fetch).messages.list(2001, { perPage: 2 })) items.push(message);

    expect(items).toEqual([{ id: 'a' }, { id: 'b' }, { id: 'c' }]);
    expect(calls[0]?.url).toBe('https://api.funnelchat.com/api/v1/contacts/2001/messages?perPage=2');
    expect(calls[1]?.url).toBe('https://api.funnelchat.com/api/v1/contacts/2001/messages?perPage=2&cursor=CUR2');
  });

  it('await gives the first page, with hasNextPage and getNextPage', async () => {
    const { fetch, calls } = mockFetch(laravelPage([{ id: 1 }], 1, 2), laravelPage([{ id: 2 }], 2, 2));
    const first = await client(fetch).contacts.list();
    expect(first).toBeInstanceOf(Page);
    expect(first.data).toEqual([{ id: 1 }]);
    expect(first.hasNextPage()).toBe(true);
    expect(first.nextPageQuery()).toEqual({ page: 2 });

    const second = await first.getNextPage();
    expect(second.data).toEqual([{ id: 2 }]);
    expect(second.hasNextPage()).toBe(false);
    await expect(second.getNextPage()).rejects.toThrow('No hay más páginas.');
    expect(calls).toHaveLength(2);
  });

  it('is lazy: nothing is requested until awaited or iterated', async () => {
    const { fetch, calls } = mockFetch(laravelPage([], 1, 1));
    const pending = client(fetch).tags.list();
    expect(calls).toHaveLength(0);
    await pending;
    await pending; // awaiting twice reuses the same request
    expect(calls).toHaveLength(1);
  });

  it('treats a plain array as a single page', async () => {
    const { fetch, calls } = mockFetch({ status: 200, body: [{ id: 3 }, { id: 4 }] });
    const items: unknown[] = [];
    for await (const device of client(fetch).devices.list()) items.push(device);
    expect(items).toEqual([{ id: 3 }, { id: 4 }]);
    expect(calls).toHaveLength(1);
  });

  it('iterates pages with iterPages', async () => {
    const { fetch } = mockFetch(laravelPage([{ id: 1 }], 1, 2), laravelPage([{ id: 2 }], 2, 2));
    const sizes: number[] = [];
    for await (const page of (await client(fetch).tags.list()).iterPages()) sizes.push(page.data.length);
    expect(sizes).toEqual([1, 1]);
  });

  it('stops on an empty page even if meta says there are more', async () => {
    const { fetch, calls } = mockFetch(laravelPage([], 1, 9));
    const items: unknown[] = [];
    for await (const item of client(fetch).tags.list()) items.push(item);
    expect(items).toEqual([]);
    expect(calls).toHaveLength(1);
  });

  it('paginates any route with paginate(), typed or not', async () => {
    const { fetch, calls } = mockFetch(laravelPage([{ id: 1 }], 1, 1), { status: 200, body: { data: [{ x: 1 }], meta: { current_page: '1', last_page: '1' } } });
    const c = client(fetch);
    const typed = await c.paginate('/api/v1/custom-fields', { query: { perPage: 50 } });
    expect(typed.data).toEqual([{ id: 1 }]);
    const untyped = await c.paginate<{ x: number }>('/api/v1/something-new', { query: { page: 1 } });
    expect(untyped.data[0]?.x).toBe(1);
    expect(untyped.hasNextPage()).toBe(false);
    expect(calls[1]?.url).toBe('https://api.funnelchat.com/api/v1/something-new?page=1');
  });
});

describe('nextPageQuery', () => {
  it.each([
    ['meta page numbers', { data: [1], meta: { current_page: 2, last_page: 3 } }, { page: 3 }],
    ['last page', { data: [1], meta: { current_page: 3, last_page: 3 } }, null],
    ['numeric strings (communities)', { data: [1], meta: { current_page: '1', last_page: '2' } }, { page: 2 }],
    ['meta cursor', { data: [1], meta: { next_cursor: 'abc' } }, { cursor: 'abc' }],
    ['meta cursor at the end', { data: [1], meta: { next_cursor: null } }, null],
    ['plain Laravel paginator', { data: [1], current_page: 1, last_page: 2 }, { page: 2 }],
    ['only links.next with a page', { data: [1], links: { next: 'https://api.funnelchat.com/api/v1/x?page=4' } }, { page: 4 }],
    ['only links.next with a cursor', { data: [1], links: { next: '/api/v1/x?cursor=zz' } }, { cursor: 'zz' }],
    ['next_page_url', { data: [1], next_page_url: 'https://h/x?page=2' }, { page: 2 }],
    ['nothing', { data: [1] }, null],
    ['an array', [1, 2], null],
  ])('%s', (_label, body, expected) => {
    expect(nextPageQuery(body)).toEqual(expected);
  });
});
