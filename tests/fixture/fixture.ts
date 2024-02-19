import { test as baseTest, expect, chromium, Page } from "@playwright/test";
import { LoginPage } from "../page-object/pages/LoginPage";

type TestType = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<TestType>({
  loginPage: async ({ page }, use, testInfo) => {
    let loginPage = new LoginPage(page);
    await use(loginPage);
  },
});
