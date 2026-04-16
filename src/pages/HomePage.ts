import { Page } from "@playwright/test";
import { PAGE_URLS, PageUrl } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly url: PageUrl = PAGE_URLS.HOME;

  constructor(page: Page) {
    super(page);
  }
}
