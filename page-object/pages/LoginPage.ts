import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import dotenv from "dotenv";
dotenv.config();

export class LoginPage extends BasePage {
  readonly emailField: Locator;
  readonly passField: Locator;
  readonly submitBtn: Locator;
  readonly signInBtn: Locator;
  readonly signInByEmailBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.signInBt = page.locator("(//button[@class='sc-iEYVpv dLIycx'])[1]");
    this.signInByEmailBtn = page.locator(
      "(//button[@class='sc-iEYVpv dWZiyj'])[2]"
    );
    this.emailField = page.locator("//input[@name='email']");
    this.passField = page.locator("//input[@name='password']");
    this.submitBtn = page.locator("//button[@type='submit']");
  }
  async login() {
    await this.page.goto(process.env.STAGE_URL as string);
    await this.signInBtn.click();
    await this.signInByEmailBtn.click();
    await this.emailField.fill(process.env.EMAIL as string);
    await this.passField.fill(process.env.PASSWORD as string);
    await this.submitBtn.click();
  }
}
