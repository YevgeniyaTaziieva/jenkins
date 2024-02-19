import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class LoginPage extends BasePage {
  readonly emailField: Locator;
  readonly passField: Locator;
  readonly submitBtn: Locator;
  constructor(page: Page) {
    super(page);
    this.emailField = page.locator("//input[@type='email']");
    this.passField = page.locator("//input[@type='password']");
    this.submitBtn = page.locator("//button[@type='submit']");
  }
  async login() {
    await this.emailField.fill("1337ilysha@gmail.com");
    await this.emailField.fill("Test12345");
    await this.submitBtn.click();
  }
}
