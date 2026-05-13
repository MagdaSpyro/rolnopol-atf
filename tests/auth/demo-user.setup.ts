import { expect, test } from "@playwright/test";

import { AUTH_STORAGE_STATE } from "../../playwright.config";
import { getDemoEnvUser } from "../../src/models/User";
import { LoginPage } from "../../src/pages/LoginPage";
import { ProfilePage } from "../../src/pages/ProfilePage";

test(
  "authenticate DEMO_USER and persist storage state",
  { tag: ["@auth", "@session", "@setup"] },
  async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);
    const user = getDemoEnvUser();

    // Act
    await loginPage.goto();
    await loginPage.login(user.email, user.password);

    // Assert
    await expect(page).toHaveURL(profilePage.PAGE_URL);

    // Persist authenticated context for dependent projects.
    await page.context().storageState({ path: AUTH_STORAGE_STATE });
  },
);
