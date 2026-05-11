import { Locator, Page } from "@playwright/test";
import { PAGE_URLS } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class StaffFieldsPage extends BasePage {
  readonly PAGE_URL = PAGE_URLS.STAFF_FIELDS_MAIN;

  readonly openAddFieldModalBtn: Locator;
  readonly addFieldForm: Locator;
  readonly fieldNameInput: Locator;
  readonly fieldDistrictSelect: Locator;
  readonly fieldAreaInput: Locator;
  readonly addFieldSubmitBtn: Locator;
  readonly totalFieldsValue: Locator;

  constructor(page: Page) {
    super(page);

    this.openAddFieldModalBtn = page.locator("#openAddFieldModal");
    this.addFieldForm = page.locator("#addFieldForm");
    this.fieldNameInput = page.locator("#fieldName");
    this.fieldDistrictSelect = page.locator("#fieldDistrict");
    this.fieldAreaInput = page.locator("#fieldArea");
    this.addFieldSubmitBtn = this.addFieldForm.getByRole("button", {
      name: "Add Field",
    });
    this.totalFieldsValue = page.locator("#totalFields");
  }

  async openAddFieldModal() {
    await this.openAddFieldModalBtn.click();
  }

  async addField(name: string, district: string, area: string) {
    await this.fieldNameInput.fill(name);
    await this.fieldDistrictSelect.selectOption({ label: district });
    await this.fieldAreaInput.fill(area);
    await this.addFieldSubmitBtn.click();
  }

  async getTotalFieldsCount(): Promise<number> {
    const value = await this.totalFieldsValue.textContent();
    return Number.parseInt(value ?? "0", 10);
  }
}
