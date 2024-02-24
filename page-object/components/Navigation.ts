import { Locator, Page, expect} from "@playwright/test";
import { BasePage } from "../BasePage";
import dotenv from "dotenv";
dotenv.config();

export class Navigation {
  readonly page: Page
  readonly createBtn: Locator;
  readonly homeIcon: Locator;
  readonly newNotebookItem: Locator;
  readonly newDatasetItem: Locator;
  readonly newModelItem: Locator;
  readonly newCompetitionItem: Locator;
  readonly newOrganizationItem: Locator;
  readonly moreList: Locator;
  readonly userRankingItem: Locator;
  readonly blogItem: Locator;
  readonly documentationItem: Locator;
  readonly backBtn: Locator;
  readonly backDatasetskBtn: Locator;

  constructor(page: Page) {
    this.page = page
    this.createBtn = page.getByRole('button', { name: 'Create' });
    this.createBtn = page.getByRole('button', { name: 'Create' });
    this.homeIcon = page.getByRole('link', { name: 'Kaggle' });
    this.newNotebookItem = page.getByRole('menuitem', { name: 'code New Notebook' }).getByRole('paragraph');
    this.newDatasetItem = page.getByRole('menuitem', { name: 'table_chart New Dataset' });
    this.newModelItem = page.locator('(//ul/li[@role="menuitem"])[3]');
    this.newCompetitionItem = page.getByRole('menuitem', { name: 'emoji_events New Competition' });
    this.newOrganizationItem = page.getByRole('menuitem', { name: 'corporate_fare' })
    this.moreList = page.locator('//div/div[3]/div[3]/div[1]/div[1]/ul/li[8]/div/a');
    this.userRankingItem = page.locator('//ul/a[@href="/rankings"]/li');
    this.blogItem = page.locator('//a/li[@data-click-log-id="blog"]');
    this.documentationItem = page.locator('//li/a[@data-click-log-id="documentation"]');
    this.backBtn  = page.locator("//button[@aria-label='Close']");
    this.backDatasetskBtn  = page.locator("//div[@class='sc-iLXxbI hmvdWC']//button[@class='sc-jIBlqr hXNnzD google-material-icons']")

  }
  async goHome() {
    await this.homeIcon.click()
    expect(this.page.waitForURL(process.env.STAGE_URL as string))
    await expect(this.page.locator('//h1')).toContainText('Welcome')
  }

  async newNotebook(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.createBtn.click();
    await this.newNotebookItem.click();
    await this.page.locator('//input[@id="notebook-title-input"]').waitFor();
    await expect (this.page.locator('//input[@id="notebook-title-input"]')).toHaveValue(/notebook/);
    await expect (this.page.locator('(//div/h2)[2]')).toHaveText('Notebook')
  }

  async newModel(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.createBtn.click();
    await this.newModelItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}models?new=true`);
    await this.page.locator('(//input[@type="radio"])[1]').waitFor();
    await expect (this.page.locator('(//input[@type="radio"])[1]')).toHaveAttribute('checked');
    await expect (this.page.locator('(//input[@type="radio"])[2]')).not.toHaveAttribute('checked');
    await expect (this.page.getByRole('heading', { name: 'Create New Model' })).toBeVisible();
    await expect (this.page.locator('label').filter({ hasText: 'Model Title' })).toBeVisible();
    await expect (this.page.locator('(//button[@role="button" and contains(@class,"sc")])[14]')).toHaveAttribute('disabled');
  }

  async newOrganization(){
    await this.backBtn.click();
    await this.createBtn.click();
    await this.newOrganizationItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}?createOrg=true`);
    await expect (this.page.locator('//input[@name="name"]')).toBeTruthy();
    await expect (this.page.locator('//input[@name="subtitle"]')).toBeTruthy();
    await expect (this.page.locator('(//label[@aria-labelledby="textfield-Url *-label"]/span)[2]')).toContainText('organizations');
    await expect (this.page.locator('//input[@name="externalUrl"]')).toBeTruthy();
    await expect (this.page.getByRole('button', { name: 'Upload image' })).toBeTruthy();
    await expect (this.page.getByRole('button', { name: 'Upload image' })).not.toHaveAttribute('disabled');
    await expect (this.page.locator('//input[@name="creatorRequestDescription"]')).toBeTruthy();
    await expect (this.page.locator('//div[contains(@class,"mdc-text-field mdc-text-field--upgraded mdc-text-field--outlined")]')).toBeTruthy();
    await expect (this.page.locator('//input[@name="creatorRequestRole"]')).toBeTruthy();
    await expect (this.page.getByRole('button', { name: 'Create organization' })).toHaveAttribute('disabled');
  }

  async newDataset(){
    await this.backBtn.click();
    await this.createBtn.click();
    await this.newDatasetItem.click();
    expect(this.page.waitForURL(/datasets/));
    await expect (this.page.locator('(//div/div/div/button[@role="tab"])[1]')).toBeVisible();
    await expect (this.page.locator('(//div/div/div/button[@role="tab"])[2]')).toBeVisible();
    await expect (this.page.locator('(//div/div/div/button[@role="tab"])[3]')).toBeVisible();
    expect (this.page.locator('//div/div/div/h3')).toHaveText('Drag & drop files to upload');
    await this.backDatasetskBtn.click();
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

  async openBlog(){
    await this.moreList.click();
    await this.blogItem.click();
    await this.page.waitForURL('https://medium.com/kaggle-blog');
    expect (this.page.locator('(//div[@title="Go to Kaggle Blog"])[1]')).toBeTruthy()
  }

  async openDocumentation(){
    await this.moreList.click();
    await this.documentationItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}/docs`);
    await expect(this.page.locator('//h1')).toHaveText('How To Use Kaggle');
  }
}