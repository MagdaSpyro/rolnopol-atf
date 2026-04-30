import { Locator, Page } from "@playwright/test";
import { PAGE_URLS } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {
 PAGE_URL = PAGE_URLS.PROFILE;
  readonly profileInformationHeading: Locator;
  readonly updateProfileHeading: Locator;
  readonly dangerZoneHeading: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.profileInformationHeading = page.getByRole("heading", {
      name: "Profile Information",
    });
    this.updateProfileHeading = page.getByRole("heading", {
      name: "Update Profile",
    });
    this.dangerZoneHeading = page.getByRole("heading", {
      name: "Danger Zone",
    });
    this.logoutBtn = page.getByTestId("logout-btn").first();
  }

  async logout() {
    await this.logoutBtn.click();
  }
}
