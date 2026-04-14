import { expect, type Locator, type Page } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly displayNameInput: Locator;
  readonly passwordInput: Locator;
  readonly registerSubmitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId("email-input");
    this.displayNameInput = page.getByTestId("display-name-input");
    this.passwordInput = page.getByTestId("password-input");
    this.registerSubmitButton = page.getByTestId("register-submit-btn");
    this.successMessage = page.getByText("Registration successful!");
  }

  async goto() {
    await this.page.goto("/register.html");
  }

  async fillRegistrationForm(data: {
    email: string;
    displayName: string;
    password: string;
  }) {
    await this.emailInput.fill(data.email);
    await this.displayNameInput.fill(data.displayName);
    await this.passwordInput.fill(data.password);
  }

  async submit() {
    await this.registerSubmitButton.click();
  }

  async register(data: {
    email: string;
    displayName: string;
    password: string;
  }) {
    await this.fillRegistrationForm(data);
    await this.submit();
  }

  async expectSuccessfulRegistration() {
    await expect(this.successMessage).toBeVisible();
    await expect(this.page).toHaveURL(/login\.html/);
  }
}
