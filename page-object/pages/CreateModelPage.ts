import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class CreateNewModelPage extends BasePage{
    readonly modelTitleInput:Locator;
    readonly createModelButton:Locator;
    readonly modelDetButton:Locator;

    constructor(page:Page)
    {
        super(page);
        this.modelTitleInput = page.locator("//input[@placeholder='Enter model title']");
        this.createModelButton = page.locator("//span[contains(text(), 'Create model')]/parent::button[@class='sc-eXzmLu KgQOv']");
        this.modelDetButton = page.locator("//span[contains(text(), 'Go to model detail page')]/parent::button[@class='sc-eXzmLu KgQOv']");
    }

    async fillmodelTitleInputWith(tittle){
        await this.modelTitleInput.fill(String(tittle));
    }

    async clickCreateModelBtn(){
        await this.createModelButton.click();
    }

    async clickModelDetailsBtn(){
        await this.modelDetButton.click();
    }


}