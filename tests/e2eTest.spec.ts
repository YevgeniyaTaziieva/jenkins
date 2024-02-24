import { test } from "../fixture/fixture";
import {LoginPage} from "../page-object/pages/LoginPage"

test("Login to site", async ({ loginPage, page }) => {
    const login = new LoginPage(page);
    await login.login();
    await page.waitForTimeout(500);
    await login.Navigation.newModel();
    await login.Navigation.newOrganization();
    await login.Navigation.newDataset();
    await login.Navigation.openKaggleX();
    await login.Navigation.openDocumentation();
    await login.Navigation.openProgression();
    await login.Navigation.openUserRankings();
    await login.Navigation.openHostCompetition();
    await page.pause();
});
