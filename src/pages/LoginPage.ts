import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginSubtitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginSubtitle = page.getByTestId("login-subtitle");
  }

  async goto() {
    await this.page.goto("/login.html");
  }
}
