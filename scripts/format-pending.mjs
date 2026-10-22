#!/usr/bin/env node
/**
 * Formats spec/pending.json the way it is written by hand: an object or array with no object
 * inside goes on one line (`{ "type": "string" }`) when the line fits in MAX_LINE characters;
 * everything else is expanded with two spaces.
 *
 *   node scripts/format-pending.mjs           rewrite spec/pending.json
 *   node scripts/format-pending.mjs --check   fail if it is not formatted
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const FILE = resolve(dirname(fileURLToPath(import.meta.url)), '../spec/pending.json');

const MAX_LINE = Number(process.env.MAX_LINE ?? 200);
const isObject = (value) => typeof value === 'object' && value !== null;
const flat = (value) => (Array.isArray(value) ? value : Object.values(value)).every((item) => !isObject(item) || (Array.isArray(item) && item.every((x) => !isObject(x))));

function inline(value) {
  if (!isObject(value)) return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(inline).join(', ')}]`;
  const entries = Object.entries(value);
  return entries.length === 0 ? '{}' : `{ ${entries.map(([k, v]) => `${JSON.stringify(k)}: ${inline(v)}`).join(', ')} }`;
}

function format(value, depth = 0, prefix = 0) {
  if (!isObject(value)) return inline(value);
  if (flat(value)) {
    const line = inline(value);
    if (prefix + line.length <= MAX_LINE || Object.keys(value).length <= 1) return line;
  }
  const pad = '  '.repeat(depth + 1);
  const end = '  '.repeat(depth);
  if (Array.isArray(value)) return `[\n${value.map((item) => pad + format(item, depth + 1, pad.length)).join(',\n')}\n${end}]`;
  return `{\n${Object.entries(value).map(([k, v]) => `${pad}${JSON.stringify(k)}: ${format(v, depth + 1, pad.length + JSON.stringify(k).length + 2)}`).join(',\n')}\n${end}}`;
}

const current = readFileSync(FILE, 'utf8');
const formatted = `${format(JSON.parse(current))}\n`;
if (process.argv.includes('--check')) {
  if (current !== formatted) {
    console.error('spec/pending.json is not formatted: run `node scripts/format-pending.mjs`.');
    process.exit(1);
  }
} else {
  writeFileSync(FILE, formatted);
}
