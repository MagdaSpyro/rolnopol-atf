import { Locator, Page } from "@playwright/test";

export class ApiDocsPage {
  readonly page: Page;
  readonly documentationHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.documentationHeading = page.frameLocator("iframe").getByText(
      "API documentation for the Rolnopol service with versioning support"
    );
  }

  async goto() {
    await this.page.goto("/swagger.html");
  }
}
