import { Locator, Page, expect} from "@playwright/test";
import { BasePage } from "../BasePage";

export class Navigation {
  readonly page: Page
  readonly createBtn: Locator;
  readonly homeIcon: Locator;
  readonly newNotebookItem: Locator;
  readonly newDatasetItem: Locator;
  readonly moreList: Locator;
  readonly userRankingItem: Locator;

  constructor(page: Page) {
    this.page = page
    this.createBtn = page.getByRole('button', { name: 'Create' });
    this.homeIcon = page.getByRole('link', { name: 'Kaggle' });
    this.newNotebookItem = page.getByRole('menuitem', { name: 'code New Notebook' }).getByRole('paragraph');
    this.newDatasetItem = page.getByRole('menuitem', { name: 'table_chart New Dataset' });
    this.moreList = page.locator('(//ul/li)[14]');
    this.userRankingItem = page.locator('//ul/a[@href="/rankings"]/li');
    
  }
  async goHome() {
    await this.homeIcon.click()
    expect(this.page.waitForURL('https://www.kaggle.com/'))
    await expect(this.page.locator('//h1')).toContainText('Welcome')
  }

  async newNotebook(){
    await this.createBtn.click();
    await this.newNotebookItem.click();
    await this.page.locator('//input[@id="notebook-title-input"]').waitFor();
    expect (this.page.locator('//input[@id="notebook-title-input"]')).toHaveValue(/notebook/);
    expect (this.page.locator('(//div/h2)[2]')).toHaveText('Notebook')
  }

  async newDataset(){
    await this.createBtn.click();
    await this.newDatasetItem.click();
    expect(this.page.waitForURL(/datasets/));
    await expect (this.page.locator('(//div/div/div/button[@role="tab"])[1]')).toBeVisible();
    await expect (this.page.locator('(//div/div/div/button[@role="tab"])[2]')).toBeVisible();
    await expect (this.page.locator('(//div/div/div/button[@role="tab"])[3]')).toBeVisible();
    expect (this.page.locator('//div/div/div/h3')).toHaveText('Drag & drop files to upload');
  }

  async openUserRankings(){
    await this.moreList.click();
    await this.userRankingItem.click();
    expect(this.page.waitForURL(/rankings/));
    expect (this.page.locator('//h1')).toHaveText('Kaggle Rankings');
    // const rows = await this.page.locator('//div[@role="row"]').count();  //Oleksii: for some reason this count returns me 0. Wanted to check that number of rows on the page > 1
    // console.log(rows);
    expect (this.page.locator('(//div[@role="row"])[1]')).toBeVisible()
  }
}