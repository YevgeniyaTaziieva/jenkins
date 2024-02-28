import { test as baseTest, expect, chromium, Page } from "@playwright/test";
import { LoginPage } from "../page-object/pages/LoginPage";
import { DatasetsPage } from "../page-object/pages/DatasetsPage";

type TestType = {
  loginPage: LoginPage;
  datasetsPage: DatasetsPage;
};

export const test = baseTest.extend<TestType>({
  loginPage: async ({ page }, use, testInfo) => {
    let loginPage = new LoginPage(page);
    await use(loginPage);
  },
  datasetsPage: async ({page}, use) =>{
    let datasetsPage = new DatasetsPage(page);
    await use(datasetsPage);
}


});