import { test } from "../fixture/fixture";
import {LoginPage} from "../page-object/pages/LoginPage.ts"

test("Login to site", async ({ loginPage, page }) => {
    const login = new LoginPage(page);
    await login.login();
    await page.waitForTimeout(500);
    await login.Navigation.newModel();
    await login.Navigation.newOrganization();
    await login.Navigation.newNotebook();
    await page.pause();
});
