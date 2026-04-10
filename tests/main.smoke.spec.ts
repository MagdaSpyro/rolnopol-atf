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
  "should load and display the login page",
  { tag: ["@smoke", "@navigation"] },
  async ({ page }) => {
    await page.goto("/login.html");
    await expect(page).toHaveURL(/\/login\.html$/);
    await expect(page).toHaveTitle(/login/i);
    await expect(
      page.getByRole("heading", { name: /login to your user account/i }),
    ).toBeVisible();
    await expect(page.getByRole("textbox", { name: /email/i })).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: /password/i }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: /login/i })).toBeVisible();
  },
);

test(
  "should load and display the register page",
  { tag: ["@smoke", "@navigation"] },
  async ({ page }) => {
    await page.goto("/register.html");
    await expect(page).toHaveURL(/\/register\.html$/);
    await expect(page).toHaveTitle(/register|create/i);
    await expect(
      page.getByRole("heading", { name: /create your user account/i }),
    ).toBeVisible();
    await expect(page.getByRole("textbox", { name: /email/i })).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: /password/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /create account/i }),
    ).toBeVisible();
  },
);
