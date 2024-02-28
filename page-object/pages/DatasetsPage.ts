
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
        this.datasetsPageLocator = page.locator("(//a[@class='sc-dmcoYd ggdQcj'])[4]");
        this.upvoteButton = page.locator('//button/preceding-sibling::button[@data-testid="upvotebutton__upvote"]');
        this.newNotebookButton = page.locator("//button[@class='sc-eXzmLu gTGvCn sc-euVzoJ dIEZgW']");
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