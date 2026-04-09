import { expect, test } from "@playwright/test";

test("should displayed the correct page title", async ({ page }) => {
  await page.goto("");
  await expect(page).toHaveTitle(/Rolnopol/);
});

