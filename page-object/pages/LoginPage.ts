import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export default class LoginPage extends BasePage {
  readonly emailField: any;
  readonly passField: any;
  readonly submitBtn: any;
  readonly signInBtn: any;
  readonly signInByEmailBtn: any;
  readonly kaggleTitle: any;

  constructor(page: Page) {
    super(page);
    this.signInBtn = page.locator("//div[@class='sc-dxfTlo dqVlR']/a/button[@class='sc-eXzmLu jSfUoM'][1]");
    this.signInByEmailBtn = page.locator(
      ("//div[@class='sc-fgsquE lpbfZW']//button[@class='sc-eXzmLu dSFNm'][2]")
    );
    this.emailField = page.locator("//input[@name='email']");
    this.passField = page.locator("//input[@name='password']");
    this.submitBtn = page.locator("//button[@type='submit']");
    this.kaggleTitle = page.locator("//h1[@class='sc-kFCroH sc-idnTxV ctlLBx SklmE']")
  }
  async login(email ='illyastud2002@gmail.com', password = 'Test12345@') {
    await this.page.goto('https://www.kaggle.com/');
    await this.signInBtn.click();
    await this.signInByEmailBtn.click();
    await this.emailField.fill(email);
    await this.passField.fill(password);
    await this.submitBtn.click(); 
    await expect(this.kaggleTitle).toHaveText(`Welcome, Test Hillel!`)
    await expect(this.page).toHaveURL("https://www.kaggle.com/");

  }
}
