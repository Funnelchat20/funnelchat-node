import { defineConfig } from 'vitest/config';

/**
 * End-to-end tests against a running funnelchat-sandbox (`npm run test:e2e`). They need
 * FUNNELCHAT_SANDBOX_URL, for example http://127.0.0.1:4010; without it they are skipped.
 */
export default defineConfig({
  test: {
    include: ['test/e2e/**/*.e2e.ts'],
    environment: 'node',
    fileParallelism: false,
    testTimeout: 30_000,
    hookTimeout: 30_000,
  },
});
