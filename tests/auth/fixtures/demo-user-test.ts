import { expect, Page, test as base } from "@playwright/test";

import { getDemoEnvUser } from "../../../src/models/User";
import { LoginPage } from "../../../src/pages/LoginPage";
import { ProfilePage } from "../../../src/pages/ProfilePage";

async function ensureDemoUserAuthenticated(page: Page) {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);
  const user = getDemoEnvUser();

  await page.goto(profilePage.PAGE_URL);

  if (new URL(page.url()).pathname === loginPage.PAGE_URL) {
    await loginPage.login(user.email, user.password);
  }

  await expect(page).toHaveURL(profilePage.PAGE_URL);
}

export const test = base.extend({
  page: async ({ page }, use) => {
    await ensureDemoUserAuthenticated(page);
    await use(page);
  },
});

export { expect };
