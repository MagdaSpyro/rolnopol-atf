import { Page } from "@playwright/test";
import { PageUrl } from "../constants/pageUrls";

export abstract class BasePage {
  protected abstract readonly url: PageUrl;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }
}
