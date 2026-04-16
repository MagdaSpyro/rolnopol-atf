import { Page } from "@playwright/test";
import { PageUrl } from "../constants/pageUrls";
//BasePage to klasa abstrakcyjna, która definiuje wspólne właściwości i metody dla wszystkich stron w aplikacji. Każda konkretna strona (np. HomePage, LoginPage) będzie dziedziczyć po BasePage i implementować swoją własną wartość url oraz ewentualnie dodatkowe metody specyficzne dla danej strony. Metoda goto() umożliwia nawigację do określonej strony, korzystając z jej url.
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
