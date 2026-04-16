import { Locator, Page } from "@playwright/test";
import { PAGE_URLS, PageUrl } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class ApiDocsPage extends BasePage {
  readonly url: PageUrl = PAGE_URLS.API_DOCS;
  readonly documentationHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.documentationHeading = page.frameLocator("iframe").getByText(
      "API documentation for the Rolnopol service with versioning support"
    );
  }
}
