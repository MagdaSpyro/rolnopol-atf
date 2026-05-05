import { expect, test } from "@playwright/test";
import { createUser } from "../src/factories/userFactory";
import { LoginPage } from "../src/pages/LoginPage";
import { ProfilePage } from "../src/pages/ProfilePage";

test(
  "should display correct user information on the profile page after login",
  { tag: ["@auth", "@login", "@profile"] },
  async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);
    const user = createUser();

    // Act — navigate to login and submit credentials
    await loginPage.goto();
    await loginPage.login(user.email, user.password);

    // Assert — user information section
    await expect.soft(profilePage.profileHeader).toBeVisible();
    await expect.soft(profilePage.displayedNameValue).toBeVisible();
    await expect.soft(profilePage.emailValue).toHaveText(user.email);
    await expect.soft(profilePage.lastLoginValue).toBeVisible();

    // Assert — navigation links are present and visible
    await expect.soft(profilePage.navHome).toBeVisible();
    await expect.soft(profilePage.navProfile).toBeVisible();
    await expect.soft(profilePage.navStaffFields).toBeVisible();
    await expect.soft(profilePage.navFinancial).toBeVisible();
    await expect.soft(profilePage.navMarketplace).toBeVisible();

    // Assert — interactive components are visible
    await expect.soft(profilePage.newDisplayedNameInput).toBeVisible();
    await expect.soft(profilePage.newPasswordInput).toBeVisible();
    await expect.soft(profilePage.confirmPasswordInput).toBeVisible();
    await expect.soft(profilePage.updateProfileSubmitBtn).toBeVisible();
    await expect.soft(profilePage.deleteAccountBtn).toBeVisible();
  },
);
