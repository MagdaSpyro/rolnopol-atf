import { expect, test } from "@playwright/test";
import { StaffFieldsMainPage } from "../../src/pages/StaffFieldsMainPage";

test.describe("DEMO_USER Staff & Fields E2E", () => {
  test(
    "should create a new animal herd in Staff & Fields view",
    { tag: ["@auth", "@crud", "@farm", "@resources", "@happy-path"] },
    async ({ page }) => {
      // Arrange
      const staffFieldsMainPage = new StaffFieldsMainPage(page);
      const uniqueHerdName = `Auto Herd ${Date.now()}`;
      const herdSize = 12;
      const openAddHerdBtn = page
        .getByRole("button", { name: "+ Add Animal Group" })
        .or(page.getByRole("button", { name: "+ Add Herd" }))
        .or(page.getByRole("button", { name: "+ Dodaj stado" }))
        .first();
      const herdNameInput = page
        .getByRole("textbox", { name: /Animal Group Name/i })
        .or(page.getByRole("textbox", { name: /Herd Name/i }))
        .or(page.getByRole("textbox", { name: /Nazwa stada/i }))
        .first();
      const herdSizeInput = page
        .getByRole("spinbutton", { name: /Animals Count/i })
        .or(page.getByRole("spinbutton", { name: /Herd Size/i }))
        .or(page.getByRole("spinbutton", { name: /Liczba zwierząt/i }))
        .first();
      const submitAddHerdBtn = page
        .locator("#addAnimalForm")
        .getByRole("button", { name: "+ Add Animal Group" })
        .or(
          page
            .locator("#addHerdForm")
            .getByRole("button", { name: "+ Add Herd" }),
        )
        .or(
          page
            .locator("#addAnimalForm")
            .getByRole("button", { name: "+ Dodaj stado" }),
        )
        .first();
      const herdAddedAlert = page
        .getByText("Animal group added!")
        .or(page.getByText("Herd added!"))
        .or(page.getByText("Stado zostało dodane!"))
        .first();

      // Act
      await staffFieldsMainPage.goto();
      await openAddHerdBtn.click();
      await herdNameInput.fill(uniqueHerdName);
      await herdSizeInput.fill(String(herdSize));
      await submitAddHerdBtn.click();

      // Assert
      await expect.soft(page).toHaveURL(staffFieldsMainPage.PAGE_URL);
      await expect.soft(staffFieldsMainPage.pageHeading).toBeVisible();
      await expect.soft(herdAddedAlert).toBeVisible();
      await expect.soft(page.getByText(uniqueHerdName)).toBeVisible();
    },
  );
});
