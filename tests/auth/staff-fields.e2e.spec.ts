import { expect, test } from "@playwright/test";
import { ProfilePage } from "../../src/pages/ProfilePage";
import { StaffFieldsPage } from "../../src/pages/StaffFieldsPage";

test(
  "should create a new field in Staff & Fields view as authenticated user",
  { tag: ["@auth", "@farm", "@crud", "@resources"] },
  async ({ page }) => {
    // Arrange
    const profilePage = new ProfilePage(page);
    const staffFieldsPage = new StaffFieldsPage(page);
    const uniqueFieldName = `ATF Field ${Date.now()}`;
    let initialFieldsCount = 0;

    // Act
    await page.goto(profilePage.PAGE_URL);
    await profilePage.navStaffFields.click();
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
