import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ApiDocsPage extends BasePage {
  readonly url = "/swagger.html";
  readonly documentationHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.documentationHeading = page.frameLocator("iframe").getByText(
      "API documentation for the Rolnopol service with versioning support"
    );
  }
}
