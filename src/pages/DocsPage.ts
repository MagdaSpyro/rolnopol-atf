import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DocsPage extends BasePage {
  readonly url = "/docs.html";
  readonly headerSubtitle: Locator;

  constructor(page: Page) {
    super(page);
    this.headerSubtitle = page.locator(".docs-header-subtitle");
  }
}
