import { expect, test } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { ProfilePage } from "../src/pages/ProfilePage";
import { HomePage } from "../src/pages/HomePage";
import { createUser } from "../src/factories/userFactory";

test(
  "should log in, verify profile sections, log out and return to home page",
  { tag: ["@auth", "@login", "@session", "@logout"] },
  async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);
    const homePage = new HomePage(page);
    const user = createUser();

    // Act — navigate to login and submit credentials
    await loginPage.goto();
    await loginPage.login(user.email, user.password);


    // Assert — redirected to profile page
    await expect.soft(page).toHaveURL(profilePage.PAGE_URL);

    // Assert — required sections are visible
    await expect(profilePage.profileInformationHeading).toBeVisible();
    await expect(profilePage.updateProfileHeading).toBeVisible();
    await expect(profilePage.dangerZoneHeading).toBeVisible();

    // Act — log out
    await profilePage.logout();

    // Assert — redirected to home page
    await expect(page).toHaveURL(homePage.PAGE_URL);
    await expect(page).toHaveTitle("Rolnopol");
  },
);
