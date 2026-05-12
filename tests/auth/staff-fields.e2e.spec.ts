import { expect, Page, test } from "@playwright/test";
import { getDemoEnvUser } from "../../src/models/User";
import { LoginPage } from "../../src/pages/LoginPage";
import { StaffFieldsMainPage } from "../../src/pages/StaffFieldsMainPage";

test.describe("DEMO_USER Staff & Fields E2E", () => {
  async function gotoStaffFieldsAsDemoUser(
    page: Page,
    staffFieldsMainPage: StaffFieldsMainPage,
  ) {
    await page.context().clearCookies();
    const loginPage = new LoginPage(page);
    const user = getDemoEnvUser();

    await loginPage.goto();
    await loginPage.login(user.email, user.password);
    await expect(page).toHaveURL(/\/profile\.html$/);
    await staffFieldsMainPage.goto();
  }

  test(
    "should create a new field in Staff & Fields view",
    { tag: ["@auth", "@crud", "@farm", "@resources", "@happy-path"] },
    async ({ page }) => {
      const staffFieldsMainPage = new StaffFieldsMainPage(page);
      const uniqueFieldName = `Auto Field ${Date.now()}`;
      const fieldAreaInHa = 7;

      await gotoStaffFieldsAsDemoUser(page, staffFieldsMainPage);
      await expect.soft(page).toHaveURL(staffFieldsMainPage.PAGE_URL);
      await expect.soft(staffFieldsMainPage.pageHeading).toBeVisible();

      await staffFieldsMainPage.addField(uniqueFieldName, fieldAreaInHa);

      await expect.soft(staffFieldsMainPage.fieldAddedAlert).toBeVisible();

    //  await staffFieldsMainPage.searchFieldByName(uniqueFieldName);

   //   await expect
   //     .soft(staffFieldsMainPage.fieldListItemByName(uniqueFieldName))
   //     .toBeVisible();
    },
  );

  test(
    "should create a new animal group in Staff & Fields view",
    { tag: ["@auth", "@crud", "@farm", "@resources", "@happy-path"] },
    async ({ page }) => {
      const staffFieldsMainPage = new StaffFieldsMainPage(page);
      const animalType = "yak";
      const animalAmount = 43;

      await gotoStaffFieldsAsDemoUser(page, staffFieldsMainPage);
      await expect.soft(page).toHaveURL(staffFieldsMainPage.PAGE_URL);
      await expect.soft(staffFieldsMainPage.pageHeading).toBeVisible();

      await staffFieldsMainPage.addAnimal(animalType, animalAmount);

      await staffFieldsMainPage.searchAnimalByType(animalType);

      await expect.soft(staffFieldsMainPage.animalListItem(animalType, animalAmount)).toBeVisible();
    },
  );
});
