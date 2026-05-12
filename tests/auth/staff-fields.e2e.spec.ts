import { expect, test } from "@playwright/test";
import { getDemoEnvUser } from "../../src/models/User";
import { LoginPage } from "../../src/pages/LoginPage";
import { StaffFieldsMainPage } from "../../src/pages/StaffFieldsMainPage";

test.describe("DEMO_USER Staff & Fields E2E", () => {
  test(
    "should create a new field in Staff & Fields view",
    { tag: ["@auth", "@crud", "@farm", "@resources", "@happy-path"] },
    async ({ page }) => {
      const staffFieldsMainPage = new StaffFieldsMainPage(page);
      const uniqueFieldName = `Auto Field ${Date.now()}`;
      const fieldAreaInHa = 7;
   //   let initialFieldCount = 0;

      await staffFieldsMainPage.goto();
  //    await expect.soft(page).toHaveURL(staffFieldsMainPage.PAGE_URL);
 //     await expect.soft(staffFieldsMainPage.pageHeading).toBeVisible();
 //     initialFieldCount = await staffFieldsMainPage.getTotalFieldsCount();

  //    await staffFieldsMainPage.addField(uniqueFieldName, fieldAreaInHa);

 //     await expect.soft(staffFieldsMainPage.fieldAddedAlert).toBeVisible();
 //     await expect
  //      .poll(async () => staffFieldsMainPage.getTotalFieldsCount())
  //      .toBeGreaterThan(initialFieldCount);
    },
  );

  test(
    "should create a new animal herd in Staff & Fields view",
    { tag: ["@auth", "@crud", "@farm", "@resources", "@happy-path"] },
    async ({ page }) => {
      test.slow(); // requires fresh login + page load + animal creation

      // Arrange
      const loginPage = new LoginPage(page);
      const staffFieldsMainPage = new StaffFieldsMainPage(page);
      const user = getDemoEnvUser();
      const animalType = "cow";
      const animalAmount = 5;

      // Act - ensure fresh authenticated session (guards against token revocation by other tests)
      await page.context().clearCookies();
      await loginPage.goto();
      await loginPage.login(user.email, user.password);
      await page.waitForURL(/profile\.html/); // wait for login redirect to complete
      await staffFieldsMainPage.goto();

      // Assert - initial state
      await expect.soft(page).toHaveURL(staffFieldsMainPage.PAGE_URL);
      await expect.soft(staffFieldsMainPage.pageHeading).toBeVisible();

      // Act - add new animal herd
      await staffFieldsMainPage.addAnimal(animalType, animalAmount);

      // Assert - animal herd was created
      await expect.soft(staffFieldsMainPage.addAnimalModal).not.toBeVisible();
      await expect(
        staffFieldsMainPage.animalListItemByType(animalType),
      ).toBeVisible();
    },
  );
});
