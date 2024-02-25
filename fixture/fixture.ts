import { test as baseTest, expect, chromium, Page } from "@playwright/test";
import { LoginPage } from "../page-object/pages/LoginPage";
import { SearchPage } from "../page-object/pages/SearchPage";

type TestType = {
  loginPage: LoginPage;
  searchPage: SearchPage;
};

export const test = baseTest.extend<TestType>({
  loginPage: async ({ page }, use, testInfo) => {
    let loginPage = new LoginPage(page);
    await use(loginPage);
  },

  searchPage: async ({page}, use) =>{
    let searchPage = new SearchPage(page);
    await use(searchPage);
}
});
