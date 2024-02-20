import { Locator, Page, expect} from "@playwright/test";
import { BasePage } from "../BasePage";

export class Navigation {
  readonly page: Page
  readonly createBtn: Locator;
  readonly homeIcon: Locator;
  readonly submitBtn: Locator;
  readonly signInBtn: Locator;
  readonly signInByEmailBtn: Locator;

  constructor(page: Page) {
    this.page = page
    this.createBtn = page.getByRole('button', { name: 'Create' });
    this.homeIcon = page.getByRole('link', { name: 'Kaggle' });
    
  }
  async goHome() {
    await this.homeIcon.click()
    expect(this.page.waitForURL('https://www.kaggle.com/'))
    await expect(this.page.locator('//h1')).toContainText('Welcome')
  }
}