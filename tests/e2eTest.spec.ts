import { test } from "../fixture/fixture";
import {LoginPage} from "../page-object/pages/LoginPage.ts"

test("Login to site", async ({ loginPage, page }) => {
    const login = new LoginPage(page);
    await login.login();
    await login.Navigation.newDataset();
    // await page.pause();
});
