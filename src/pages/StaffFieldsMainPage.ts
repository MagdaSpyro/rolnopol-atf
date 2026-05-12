import { Locator, Page } from "@playwright/test";
import { PAGE_URLS } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class StaffFieldsMainPage extends BasePage {
  readonly PAGE_URL = PAGE_URLS.STAFF_FIELDS_MAIN;

  readonly pageHeading: Locator;
  readonly openAddFieldBtn: Locator;
  readonly fieldNameInput: Locator;
  readonly fieldAreaInput: Locator;
  readonly submitAddFieldBtn: Locator;
  readonly searchFieldsInput: Locator;
  readonly fieldAddedAlert: Locator;
  readonly totalFieldsCounter: Locator;

  readonly openAddAnimalBtn: Locator;
  readonly addAnimalModal: Locator;
  readonly animalTypeSelect: Locator;
  readonly animalAmountInput: Locator;
  readonly submitAddAnimalBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole("heading", {
      name: "Staff & Fields Management",
    });
    this.openAddFieldBtn = page
      .locator("main")
      .getByRole("button", { name: "+ Add Field" })
      .first();
    this.fieldNameInput = page.getByRole("textbox", { name: /Field Name/ });
    this.fieldAreaInput = page.getByRole("spinbutton", {
      name: /Area \(ha\)/,
    });
    this.submitAddFieldBtn = page
      .locator("#addFieldForm")
      .getByRole("button", { name: "+ Add Field" });
    this.searchFieldsInput = page.getByRole("textbox", {
      name: "Search fields...",
    });
    this.fieldAddedAlert = page.getByText("Field added!");
    this.totalFieldsCounter = page.locator("#totalFields");

    this.openAddAnimalBtn = page.locator("#openAddAnimalModal");
    this.addAnimalModal = page.locator("#addAnimalModal");
    this.animalTypeSelect = page.locator("#animalType");
    this.animalAmountInput = page.locator("#animalAmount");
    this.submitAddAnimalBtn = page
      .locator("#addAnimalForm")
      .getByRole("button", { name: /Add Animal/ });
  }

  async addField(name: string, areaInHa: number) {
    await this.openAddFieldBtn.click();
    await this.fieldNameInput.fill(name);
    await this.fieldAreaInput.fill(String(areaInHa));
    await this.submitAddFieldBtn.click();
  }

  async searchFieldByName(name: string) {
    await this.searchFieldsInput.fill(name);
  }

  async getTotalFieldsCount(): Promise<number> {
    const rawValue = await this.totalFieldsCounter.textContent();
    return Number.parseInt(rawValue ?? "0", 10);
  }

  fieldListItemByName(name: string): Locator {
    return this.page.locator("li").filter({ hasText: name }).first();
  }

  async addAnimal(type: string, amount: number) {
    await this.openAddAnimalBtn.click();
    await this.animalTypeSelect
      .locator(`option[value="${type}"]`)
      .waitFor({ state: "attached" });
    await this.animalTypeSelect.selectOption(type);
    await this.animalAmountInput.fill(String(amount));
    await this.submitAddAnimalBtn.click();
    await this.addAnimalModal.waitFor({ state: "hidden" });
  }

  animalListItemByType(type: string): Locator {
    return this.page
      .locator("#animalsList")
      .locator("li")
      .filter({ hasText: type })
      .first();
  }
}
