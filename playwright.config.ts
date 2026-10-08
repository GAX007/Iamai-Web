import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 2,
  use: { baseURL: 'http://127.0.0.1:4278' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], channel: 'msedge' } },
    { name: 'mobile', use: { ...devices['Pixel 7'], defaultBrowserType: 'chromium', channel: 'msedge' } },
  ],
  webServer: {
    command: 'npm run preview -- --port 4278 --strictPort',
    url: 'http://127.0.0.1:4278',
    reuseExistingServer: false,
  },
});
