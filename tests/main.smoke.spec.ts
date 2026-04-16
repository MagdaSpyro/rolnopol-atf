import { expect, test } from "@playwright/test";
import { generateUniqueEmail } from "../src/helpers/testDataHelpers";
import { ApiDocsPage } from "../src/pages/ApiDocsPage";
import { DocsPage } from "../src/pages/DocsPage";
import { HomePage } from "../src/pages/HomePage";
import { LoginPage } from "../src/pages/LoginPage";
import { RegisterPage } from "../src/pages/RegisterPage";

test(
  "should display the correct page title 'Rolnopol' on homepage",
  { tag: ["@smoke", "@critical"] },
  async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);

    // Act
    await homePage.goto();

    // Assert
    await expect(homePage.page).toHaveTitle("Rolnopol");
  }
);

test(
  "should load login page successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const expectedSubtitle = "User Login & Account Access";

    // Act
    await loginPage.goto();

    // Assert
    await expect(loginPage.loginSubtitle).toHaveText(expectedSubtitle);
  }
);

test(
  "should load API documentation page successfully",
  { tag: ["@smoke", "@documentation"] },
  async ({ page }) => {
    // Arrange
    const apiDocsPage = new ApiDocsPage(page);

    // Act
    await apiDocsPage.goto();

    // Assert
    await expect(apiDocsPage.documentationHeading).toBeVisible();
  }
);

test(
  "should load documentation page successfully",
  { tag: ["@smoke", "@documentation"] },
  async ({ page }) => {
    // Arrange
    const docsPage = new DocsPage(page);
    const expectedSubtitle = "Rolnopol System Guide & API Reference";

    // Act
    await docsPage.goto();

    // Assert
    await expect(docsPage.headerSubtitle).toHaveText(expectedSubtitle);
  }
);

test(
  "should load register page successfully",
  { tag: ["@smoke", "@auth", "@registration"] },
  async ({ page }) => {
    // Arrange
    const registerPage = new RegisterPage(page);
    const expectedSubtitle = "Create Your User Account";

    // Act
    await registerPage.goto();

    // Assert
    await expect(registerPage.registerSubtitle).toHaveText(expectedSubtitle);
  }
);

test(
  "should register new user successfully",
  { tag: ["@smoke", "@auth", "@registration"] },
  async ({ page }) => {
    // Arrange
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    const uniqueEmail = generateUniqueEmail();

    // Act
    await registerPage.register(uniqueEmail, "testpassword123", "Test User");

    // Assert
    await expect(registerPage.successMessage).toBeVisible();
    await expect(page).toHaveURL("/login.html");
  }
);
