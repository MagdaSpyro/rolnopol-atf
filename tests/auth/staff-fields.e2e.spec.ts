import { expect, test } from "@playwright/test";
import { StaffFieldsPage } from "../../src/pages/StaffFieldsPage";

test(
  "should create a new field in Staff & Fields view as authenticated user",
  { tag: ["@auth", "@farm", "@crud", "@resources"] },
  async ({ page }) => {
    // Arrange
    const staffFieldsPage = new StaffFieldsPage(page);
    const uniqueFieldName = `ATF Field ${Date.now()}`;
    let initialFieldsCount = 0;

    // Act
    await page.goto(staffFieldsPage.PAGE_URL);
    initialFieldsCount = await staffFieldsPage.getTotalFieldsCount();

    // Assert
    await expect(page).toHaveURL(staffFieldsPage.PAGE_URL);

    // Act
    await staffFieldsPage.openAddFieldModal();
    await staffFieldsPage.addField(
      uniqueFieldName,
      "powiat aleksandrowski",
      "12",
    );

    // Assert
    await expect(page.getByText("Field added!")).toBeVisible();
    await expect
      .poll(async () => staffFieldsPage.getTotalFieldsCount())
      .toBeGreaterThan(initialFieldsCount);
  },
);
