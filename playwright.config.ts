import { defineConfig, devices } from "@playwright/test";

import { ENV } from "./src/config/env";

export const AUTH_STORAGE_STATE = "playwright/.auth/user.json";

export default defineConfig({
  testDir: "./tests",
  timeout: 10 * 1000,
  fullyParallel: true,
  reporter: process.env.CI
    ? [["github"], ["html"]]
    : [["html", { open: "never" }]],
  use: {
    baseURL: ENV.BASE_URL,
    trace: "on",
  },

  projects: [
    {
      name: "setup",
      testMatch: /auth\/.*\.setup\.ts/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "smoke-tests",
      grep: /@smoke/,
      testIgnore: /auth\/.*\.setup\.ts/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "demo-user",
      dependencies: ["setup"],
      testMatch: /auth\/(?!.*\.setup\.ts).*\.spec\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        storageState: AUTH_STORAGE_STATE,
      },
    },
  ],
});
