import { expect, test } from "@playwright/test";

import { HomePage } from "../../src/pages/HomePage";
import { ProfilePage } from "../../src/pages/ProfilePage";

test(
  "should verify profile sections, log out and return to home page",
  { tag: ["@auth", "@session", "@logout"] },
  async ({ page }) => {
    // Arrange
    const profilePage = new ProfilePage(page);
    const homePage = new HomePage(page);

    // Act
    await page.goto(profilePage.PAGE_URL);

    // Assert
    await expect.soft(page).toHaveURL(profilePage.PAGE_URL);
    await expect(profilePage.profileInformationHeading).toBeVisible();
    await expect(profilePage.updateProfileHeading).toBeVisible();
    await expect(profilePage.dangerZoneHeading).toBeVisible();

    // Act
    await profilePage.logout();

    // Assert
    await expect(page).toHaveURL(homePage.PAGE_URL);
    await expect(page).toHaveTitle("Rolnopol");
  },
);
