import { Locator, Page } from "@playwright/test";
import {Navigation} from "./components/Navigation.ts"
import dotenv from "dotenv"
dotenv.config();

export class BasePage {
  readonly page: Page;
  expectedUrlMainPage: string;
  readonly Navigation: any;

  constructor(page: Page) {
    this.page = page
    this.expectedUrlMainPage = process.env.STAGE_URL as string;
    this.Navigation = new Navigation(page)
  }
   async openMainPage(){
    await this.page.goto(this.expectedUrlMainPage);
  }

}