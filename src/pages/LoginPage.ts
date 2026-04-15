import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly url = "/login.html";
  readonly loginSubtitle: Locator;

  constructor(page: Page) {
    super(page);
    this.loginSubtitle = page.getByTestId("login-subtitle");
  }
}
