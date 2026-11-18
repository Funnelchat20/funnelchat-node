import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'node',
    restoreMocks: true,
    unstubEnvs: true,
    // The tests expect the URL of each environment: a FUNNELCHAT_BASE_URL of the shell would change it.
    env: { FUNNELCHAT_BASE_URL: '' },
  },
});
