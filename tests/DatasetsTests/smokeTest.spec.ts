import { expect } from "@playwright/test";
import { test } from "../../fixture/fixture"; 
import { Navigation } from "../../page-object/components/Navigation";
test('Open Main Page', async ({datasetsPage}) => {
    await datasetsPage.openMainPage();
});
test('Open Datasets Page', async ({datasetsPage}) => {
    await datasetsPage.openDatasetsPage();
});

test.only('Open nav tab', async ({page,context}) => {
    let navi = new Navigation(page)
    await page.goto("https://www.kaggle.com/datasets");
    const pagePromise = context.waitForEvent('page');
    await navi.createBtn.click()
    await page.locator('//p[contains(text(),"New Competition")]').click()

    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
})

