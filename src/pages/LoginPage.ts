import { Locator, Page } from "@playwright/test";
import { PAGE_URLS, PageUrl } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly url: PageUrl = PAGE_URLS.LOGIN;
  readonly loginSubtitle: Locator;

  constructor(page: Page) {
    super(page);
    this.loginSubtitle = page.getByTestId("login-subtitle");
  }
}
