import { expect, test } from "@playwright/test";

test(
  "should display the correct page title 'Rolnopol' on homepage",
  { tag: ["@smoke", "@critical"] },
  async ({ page }) => {
    // Arrange
    // Act
    await page.goto("");

    // Assert
    await expect(page).toHaveTitle("Rolnopol");
  },
);

test(
  "should load login page successfully",
  { tag: ["@smoke", "@navigation", "@auth"] },
  async ({ page }) => {
    // Arrange
    const expectedSubtitle = "User Login & Account Access";

    // Act
    await page.goto("/login.html");

    // Assert
    await expect(page.getByTestId("login-subtitle")).toHaveText(
      expectedSubtitle,
    );
  },
);

test(
  "should load register page successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    // Arrange
    const expectedSubtitle = "Create Your User Account";

    // Act
    await page.goto("/register.html");

    // Assert
    await expect(page.getByTestId("register-subtitle")).toHaveText(
      expectedSubtitle,
    );
  },
);

test(
  "should load swagger page successfully",
  { tag: ["@smoke", "@api"] },
  async ({ page }) => {
    // Arrange
    // Act
    await page.goto("/swagger.html");

    // Assert
    await expect(page).toHaveTitle("Rolnopol - Swagger");
  },
);

test(
  "should register a new user successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    // Arrange
    const email = `newuser_${Date.now()}@rolnopol.com`;

    // Act
    await page.goto("/register.html");
    await page.getByTestId("email-input").fill(email);
    await page.getByTestId("display-name-input").fill("New User April");
    await page.getByTestId("password-input").fill("Test123");
    await page.getByTestId("register-submit-btn").click();

    // Assert
    await expect(page.getByText("Registration successful!")).toBeVisible();
    await expect(page).toHaveURL(/login\.html/);
  },
);

test(
  "should load docs page successfully",
  { tag: ["@smoke", "@docs"] },
  async ({ page }) => {
    // Arrange
    const expectedSubtitle = "Rolnopol System Guide & API Reference";

    // Act
    await page.goto("/docs.html");

    // Assert
    await expect(page.getByTestId("docs-header-title-col")).toContainText(
      expectedSubtitle,
    );
  },
);
