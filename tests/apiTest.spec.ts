import { test, expect } from "@playwright/test";
import { chromium } from "playwright";
import CompetitionsPage  from "../page-object/pages/HomePage.ts";
import DatasetsPage  from "../page-object/pages/HomePage.ts";
import ModelsPage from "../page-object/pages/HomePage.ts";
import {LoginPage} from "../page-object/pages/LoginPage.ts";
import CodePage from "../page-object/pages/HomePage.ts";
import DiscussionsPage from "../page-object/pages/HomePage.ts";
import LearnPage from "../page-object/pages/HomePage.ts";
import ViewedPage from "../page-object/pages/HomePage.ts";
import WorkPage from "../page-object/pages/HomePage.ts";


import { Navigation } from "../page-object/components/Navigation.ts";
test.describe("API TESTS", () => {

  test("login test", async () => {
  const browser = await chromium.launch();
    const page = await browser.newPage();
    let loginPage = new LoginPage (page);
    await loginPage.login()

    await (page).pause; 
    let navigation = new Navigation (page)
    await navigation.goHome()
    await navigation.newNotebook()
 await navigation.newModel()
    await navigation.newOrganization()
    await navigation.newDataset()
    await navigation.openUserRankings()
    await navigation.openBlog()
    let competitionsPage = new CompetitionsPage (page);
    await competitionsPage.competitions()

    let datasetsPage = new DatasetsPage (page);
    await datasetsPage.datasets()

    let modelsPage = new ModelsPage (page);
    await modelsPage.models()

    let codePage = new CodePage (page);
    await codePage.code()

    let discussionsPage = new DiscussionsPage (page);
    await discussionsPage.discussions()
    
    let learnPage = new LearnPage (page);
    await learnPage.learn()

    let viewedPage = new ViewedPage (page);
    await viewedPage.viewed()

    let workPage = new WorkPage (page);
    await workPage.work()
    });
});
