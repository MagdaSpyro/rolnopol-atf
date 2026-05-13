import { expect, test } from "@playwright/test";

import { getDemoEnvUser } from "../../src/models/User";
import { ProfilePage } from "../../src/pages/ProfilePage";

test(
  "should display correct user information on the profile page",
  { tag: ["@auth", "@profile"] },
  async ({ page }) => {
    // Arrange
    const profilePage = new ProfilePage(page);
    const user = getDemoEnvUser();

    // Act
    await page.goto(profilePage.PAGE_URL);

    // Assert
    await expect.soft(profilePage.profileHeader).toBeVisible();
    await expect.soft(profilePage.displayedNameValue).toBeVisible();
    await expect.soft(profilePage.emailValue).toHaveText(user.email);
    await expect.soft(profilePage.lastLoginValue).toBeVisible();

    // Assert
    await expect.soft(profilePage.navHome).toBeVisible();
    await expect.soft(profilePage.navProfile).toBeVisible();
    await expect.soft(profilePage.navStaffFields).toBeVisible();
    await expect.soft(profilePage.navFinancial).toBeVisible();
    await expect.soft(profilePage.navMarketplace).toBeVisible();

    // Assert
    await expect.soft(profilePage.newDisplayedNameInput).toBeVisible();
    await expect.soft(profilePage.newPasswordInput).toBeVisible();
    await expect.soft(profilePage.confirmPasswordInput).toBeVisible();
    await expect.soft(profilePage.updateProfileSubmitBtn).toBeVisible();
    await expect.soft(profilePage.deleteAccountBtn).toBeVisible();
  },
);
