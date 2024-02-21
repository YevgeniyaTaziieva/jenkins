import { Locator, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  expectedUrlMainPage: string;

  constructor(page: Page) {
    this.page = page

    this.expectedUrlMainPage = "https://www.kaggle.com";
  }
   async openMainPage(){
    await this.page.goto(this.expectedUrlMainPage);
  }

}
