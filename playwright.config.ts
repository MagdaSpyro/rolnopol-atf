import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 10 * 1000,
  fullyParallel: true,
  //process.env.CI gdy jestesmy na CI to uzywamy github reporter, a gdy nie jestesmy to uzywamy html reportera
  reporter: process.env.CI
    ? [["github"], ["html"]]
    : [["html", { open: "never" }]],
  use: {
    baseURL: process.env.BASE_URL,
    trace: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
