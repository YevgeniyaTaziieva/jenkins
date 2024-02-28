import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class DatasetsPage extends BasePage{
    datasetsPageLocator: any;

    constructor(page){
        super(page);
        this.datasetsPageLocator = page.locator("//a[@data-click-log-id='nav-con-datasets']");
    }
    async openDatasetsPage(){
        await super.openMainPage();
        await this.datasetsPageLocator.click();
    }
}