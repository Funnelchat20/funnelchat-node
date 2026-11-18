/**
 * Before each e2e file: the sandbox seeds the ids the tests use (`SEED` in sandbox.ts).
 */
import { beforeAll } from 'vitest';
import { SANDBOX_URL, checkSeed } from './sandbox.js';

beforeAll(async () => {
  if (SANDBOX_URL) await checkSeed();
});
