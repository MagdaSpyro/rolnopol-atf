import { Locator, Page } from "@playwright/test";

import { PAGE_URLS } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {
  PAGE_URL = PAGE_URLS.PROFILE;

  // Section headings
  readonly profileInformationHeading: Locator;
  readonly updateProfileHeading: Locator;
  readonly dangerZoneHeading: Locator;

  // User information
  readonly profileHeader: Locator;
  readonly displayedNameValue: Locator;
  readonly emailValue: Locator;
  readonly lastLoginValue: Locator;

  // Navigation links
  readonly navHome: Locator;
  readonly navProfile: Locator;
  readonly navStaffFields: Locator;
  readonly navFinancial: Locator;
  readonly navMarketplace: Locator;

  // Update Profile form
  readonly newDisplayedNameInput: Locator;
  readonly newPasswordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly updateProfileSubmitBtn: Locator;

  // Danger Zone
  readonly deleteAccountBtn: Locator;

  // Logout
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    super(page);

    // Section headings
    this.profileInformationHeading = page.getByRole("heading", {
      name: "Profile Information",
    });
    this.updateProfileHeading = page.getByRole("heading", {
      name: "Update Profile",
    });
    this.dangerZoneHeading = page.getByRole("heading", {
      name: "Danger Zone",
    });

    // User information
    this.profileHeader = page.getByTestId("profile-header");
    this.displayedNameValue = page.getByTestId("displayed-name");
    this.emailValue = page.getByTestId("email-value");
    this.lastLoginValue = page.getByTestId("last-login");

    // Navigation links
    this.navHome = page.getByTestId("nav-home");
    this.navProfile = page.getByTestId("nav-profile");
    this.navStaffFields = page.getByTestId("nav-staff-fields");
    this.navFinancial = page.getByTestId("nav-financial");
    this.navMarketplace = page.getByTestId("nav-marketplace");

    // Update Profile form
    this.newDisplayedNameInput = page.getByTestId("new-displayed-name-input");
    this.newPasswordInput = page.getByTestId("new-password-input");
    this.confirmPasswordInput = page.getByTestId("confirm-password-input");
    this.updateProfileSubmitBtn = page.getByTestId("update-profile-submit-btn");

    // Danger Zone
    this.deleteAccountBtn = page.getByTestId("delete-account-btn");

    // Logout
    this.logoutBtn = page.getByTestId("logout-btn").first();
  }

  async logout() {
    await this.logoutBtn.click();
  }
}
