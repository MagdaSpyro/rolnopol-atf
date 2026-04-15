import { Locator, Page } from "@playwright/test";
import { PAGE_URLS, PageUrl } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class DocsPage extends BasePage {
  readonly url: PageUrl = PAGE_URLS.DOCS;
  readonly headerSubtitle: Locator;

  constructor(page: Page) {
    super(page);
    this.headerSubtitle = page.locator(".docs-header-subtitle");
  }
}
