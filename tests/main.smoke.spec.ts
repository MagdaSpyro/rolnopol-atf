import { expect, test } from "@playwright/test";

test(
  "should display the correct page title 'Rolnopol' on homepage",
  { tag: ["@smoke", "@critical"] },
  async ({ page }) => {
    await page.goto("");
    await expect(page).toHaveTitle("Rolnopol");
  },
);

test(
  "should load login page successfully",
  { tag: ["@smoke", "@navigation", "@auth"] },
  async ({ page }) => {
    const expectedSubtitle = "User Login & Account Access";

    await page.goto("/login.html");
    await expect(page.getByTestId("login-subtitle")).toHaveText(
      expectedSubtitle,
    );
  },
);

test(
  "should load register page successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    const expectedSubtitle = "Create Your User Account";

    await page.goto("/register.html");
    await expect(page.getByTestId("register-subtitle")).toHaveText(
      expectedSubtitle,
    );
  },
);

test(
  "should load swagger page successfully",
  { tag: ["@smoke", "@api"] },
  async ({ page }) => {
    await page.goto("/swagger.html");
    await expect(page).toHaveTitle("Rolnopol - Swagger");
  },
);

test(
  "should load docs page successfully",
  { tag: ["@smoke", "@docs"] },
  async ({ page }) => {
    const expectedSubtitle = "Rolnopol System Guide & API Reference";

    await page.goto("/docs.html");
    await expect(page.getByTestId("docs-header-title-col")).toContainText(
      expectedSubtitle,
    );
  },
);
