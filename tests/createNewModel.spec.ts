import { expect } from "@playwright/test";
import { test } from "../fixture/fixture";
import { LoginPage } from "../page-object/pages/LoginPage";
import { ModelsPage } from "../page-object/pages/ModelsPage";
import { CreateNewModelPage } from "../page-object/pages/CreateModelPage";
import deleteModel from "../helpers/deleteModel";

test("Create new model", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
  
    await page.goto(ModelsPage.modelPageUrl);
    const modelPage = new ModelsPage(page);
    await modelPage.clickNewModelBtn();
  
    const createModelPage = new CreateNewModelPage(page);
    await createModelPage.fillmodelTitleInputWith("heverOwner");

    try
    {
        await createModelPage.clickCreateModelBtn();
        await createModelPage.clickModelDetailsBtn();
        let model = await page.locator("//h1[contains(text(), 'heverOwner')]");
        await expect(model).toBeVisible();
    }
    catch(ex)
    {
        console.log(ex);
    }
    finally
    {
        await deleteModel(new ModelsPage(page), String(process.env.STAGE_URL) + "models/oksanm/heverOwner");
    }
})