import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class Navigation {
  readonly createBtn: Locator;
  readonly homeIcon: Locator;
  readonly submitBtn: Locator;
  readonly signInBtn: Locator;
  readonly signInByEmailBtn: Locator;

  constructor(page: Page) {
    this.createBtn = page.getByRole('button', { name: 'Create' });
    this.homeIcon = page.getByRole('link', { name: 'Kaggle' });
    
  }
  async goHome() {
    await this.homeIcon.click()
    await this.createBtn.click()
  }
}