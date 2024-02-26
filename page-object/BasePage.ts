import { Locator, Page } from "@playwright/test";
import dotenv from "dotenv"
dotenv.config();

export class BasePage {
  readonly page: Page;
  expectedUrlMainPage: string;

  constructor(page: Page) {
    this.page = page
    this.expectedUrlMainPage = process.env.STAGE_URL as string;
  }
   async openMainPage(){
    await this.page.goto(this.expectedUrlMainPage);
  }

}