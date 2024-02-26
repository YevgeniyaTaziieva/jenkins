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
    this.signInBtn = page.locator("(//button[@class='sc-eXzmLu jSfUoM'])[1]");
    this.signInByEmailBtn = page.locator("(//span[@class='sc-bBkKde epgXIi'])[2]");
    this.emailField = page.locator("//input[@name='email']");
    this.passField = page.locator("//input[@name='password']");
    this.submitBtn = page.locator("//button[@type='submit']");
  }
  async openMainPage(): Promise<void> {
    await this.page.goto(process.env.STAGE_URL as string);
  }

  async login() {
    await this.openMainPage();
    await this.signInBtn.click();
    await this.signInByEmailBtn.click();
    await this.emailField.fill(process.env.EMAIL as string);
    await this.passField.fill(process.env.PASSWORD as string);
    await this.submitBtn.click();
  }
}
