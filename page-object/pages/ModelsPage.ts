import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class ModelsPage extends BasePage{
    static readonly modelPageUrl = "https://www.kaggle.com/models";
    readonly newModelButton:Locator;

    constructor(page:Page)
    {
        super(page);
        this.newModelButton = page.locator("//span[contains(text(), 'New Model')]/parent::button[@class='sc-eXzmLu fgItzm']");
    }

    async clickNewModelBtn(){
        await this.newModelButton.click();
    }


}