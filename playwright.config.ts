import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  retries: 0,
  use: { baseURL: 'http://localhost:3000', video: 'off', trace: 'retain-on-failure' },
  webServer: {
    command: 'npm run start',          // run `npm run build` first; tests target the production build
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
