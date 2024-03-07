import { test } from "../fixture/fixture";
import {LoginPage} from "../page-object/pages/LoginPage"

test("Login to site", async ({ loginPage, page }) => {
    const login = new LoginPage(page);
    await login.login();
    await page.waitForLoadState();
    await login.Navigation.newNotebook();
    await login.Navigation.newModel();
    await login.Navigation.newOrganization();
    await login.Navigation.newCompetition();
    await login.Navigation.newDataset();
    await login.Navigation.openUserRankings();
    await login.Navigation.goHome();
    await login.Navigation.openPrivacy();
    await page.pause();
});
