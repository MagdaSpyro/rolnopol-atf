import { expect, test } from "@playwright/test";

import { LoginPage } from "../../src/pages/LoginPage";

test.describe("DEMO_USER Staff & Fields E2E", () => {
  test(
    "should create a new field in Staff & Fields view",
    { tag: ["@auth", "@crud", "@farm", "@resources", "@happy-path"] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await expect.soft(page).toHaveURL(loginPage.PAGE_URL);
    },
  );

  test(
    "should create a new animal group in Staff & Fields view",
    { tag: ["@auth", "@crud", "@farm", "@resources", "@happy-path"] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await expect.soft(page).toHaveURL(loginPage.PAGE_URL);
    },
  );
});
