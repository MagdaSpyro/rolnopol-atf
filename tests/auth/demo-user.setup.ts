import { expect, test } from "@playwright/test";

import { AUTH_STORAGE_STATE } from "../../playwright.config";
import { getDemoEnvUser } from "../../src/models/User";
import { LoginPage } from "../../src/pages/LoginPage";
import { ProfilePage } from "../../src/pages/ProfilePage";

test("authenticate DEMO_USER and persist storage state", async ({ page }) => {
  const demoUser = getDemoEnvUser();
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.goto();
  await loginPage.login(demoUser.email, demoUser.password);

  await expect(page).toHaveURL(profilePage.PAGE_URL);

  // Persist authenticated context for dependent projects.
  await page.context().storageState({ path: AUTH_STORAGE_STATE });
});
