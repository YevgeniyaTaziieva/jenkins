
import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
export class DatasetsPage extends BasePage{
    datasetsPageLocator: any;
    datasetsPageLocatorinNav: any;
    readonly upvoteButton: Locator;
    readonly newNotebookButton: Locator;
    readonly downloadButton: Locator;

    constructor(page){
        super(page);
        this.datasetsPageLocator = page.locator("//a[@data-click-log-id='nav-con-datasets']");
        this.datasetsPageLocatorinNav = page.locator("(//a[@class='sc-dmcoYd ggdQcj'])[4]");
        this.upvoteButton = page.locator('//button[@data-testid="upvotebutton__upvote" and contains(@class, "sc-hSWyVn") and contains(@class, "sc-hEwMvu") and contains(@class, "iJoZbm") and contains(@class, "ekdYGr")]');
        this.newNotebookButton = page.locator('//button[contains(@class, "sc-eXzmLu") and contains(@class, "gTGvCn") and contains(@class, "sc-bzCKyS") and contains(@class, "iOlrQJ")]');
        this.downloadButton = page.locator('//div[@class="sc-ggziSB sc-dtWPdH lnorZa cPHowe"]');
    }
    async openDatasetsPage(){
        await super.openMainPage();
        await this.datasetsPageLocator.click();
    }
    async openDatasetsPageinNav(){
        await super.openMainPage();
        await this.datasetsPageLocatorinNav.click();
    }

    async Upvote() {
      await this.upvoteButton.click();
    }

    async NoteBookOpen() {
      await this.newNotebookButton.click();
    }

    async SetDownload() {
      await this.downloadButton.click();
    }

}