import { Locator, Page } from "@playwright/test";
import {Navigation} from "./pages/Navigation.ts"

export class BasePage {
  readonly page: Page;
  readonly Navigation: any;

  constructor(page: Page) {
    this.page = page
    this.Navigation = new Navigation(page)
  }

}
