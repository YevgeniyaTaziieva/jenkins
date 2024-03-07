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
  readonly progressionItem: Locator;
  readonly hostCompetitionItem: Locator;
  readonly kaggleXItem: Locator;
  readonly supportContactItem: Locator;
  readonly communityGuidelinesItem: Locator;
  readonly teamItem: Locator;
  readonly termsItem: Locator;
  readonly privacyItem: Locator;
  readonly backBtn: Locator;
  readonly backDatasetskBtn: Locator;

  constructor(page: Page) {
    this.page = page
    this.createBtn = page.getByRole('button', { name: 'Create' });
    this.homeIcon = page.locator('(//img[@alt="Kaggle"])[1]');
    this.newNotebookItem = page.getByRole('menuitem', { name: 'New Notebook' }).getByRole('paragraph');
    this.newDatasetItem = page.getByRole('menuitem', { name: 'New Dataset' });
    this.newModelItem = page.getByRole('menuitem', { name: 'New Model' });
    this.newCompetitionItem = page.getByRole('menuitem', { name: 'New Competition' });
    this.newOrganizationItem = page.getByRole('menuitem', { name: 'New Organization' })
    this.moreList = page.locator('//a[@data-click-log-id="more"]');
    this.userRankingItem = page.locator('//ul/a[@href="/rankings"]/li');
    this.blogItem = page.locator('//a/li[@data-click-log-id="blog"]');
    this.documentationItem = page.locator('//a[@href="/docs"]');
    this.progressionItem = page.locator('(//a[@href="/progression"])[1]');
    this.hostCompetitionItem = page.locator('(//a[@href="/host"])[1]');
    this.kaggleXItem = page.locator('(//a[@href="/kagglex"])[1]');
    this.supportContactItem = page.locator('(//a[@href="/contact"])[1]');
    this.communityGuidelinesItem = page.locator('(//a[@href="/community-guidelines"])[1]');
    this.teamItem = page.locator('(//a[@href="/about/team"])[1]');
    this.termsItem = page.locator('(//a[@href="/terms"])[1]');
    this.privacyItem = page.locator('(//a[@href="/privacy"])[1]');
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
    await expect (this.page.locator('//button/following-sibling::h1')).toBeVisible();
    await expect (this.page.locator('label').filter({ hasText: 'Model Title' })).toBeVisible();
    await expect (this.page.locator('(//button[@role="button" and contains(@class,"sc")])[14]')).toHaveAttribute('disabled');
  }

  async newCompetition(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.createBtn.click();
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.newCompetitionItem.click(),
    ]);
    await newPage.bringToFront();
    await newPage.waitForURL(`${process.env.STAGE_URL}competitions/new`);
    await expect (newPage.locator('//h3')).toHaveText('Create a Competition');
    await newPage.close()
  } 

  async newOrganization(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.createBtn.click();
    await this.newOrganizationItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}?createOrg=true`);
    await expect (this.page.locator('//input[@name="name"]')).toBeTruthy();
    await expect (this.page.locator('//input[@name="subtitle"]')).toBeTruthy();
    await expect (this.page.locator('(//label[@aria-labelledby="textfield-Url *-label"]/span)[2]')).toContainText('organizations');
    await expect (this.page.locator('//input[@name="externalUrl"]')).toBeTruthy();
    await expect (this.page.getByRole('button', { name: 'Upload image' })).toBeTruthy();
    await expect (this.page.locator('//button[@type="button"]')).not.toHaveAttribute('disabled');
    await expect (this.page.locator('//input[@name="creatorRequestDescription"]')).toBeTruthy();
    await expect (this.page.locator('//div[contains(@class,"mdc-text-field mdc-text-field--upgraded mdc-text-field--outlined")]')).toBeTruthy();
    await expect (this.page.locator('//input[@name="creatorRequestRole"]')).toBeTruthy();
    await expect (this.page.locator('//button[@type="submit"]')).toHaveAttribute('disabled');
  }

  async newDataset(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.createBtn.click();
    await this.newDatasetItem.click();
    await this.page.waitForURL(/datasets/);
    await expect (this.page.locator('(//button[@role="tab"])[1]')).toBeVisible();
    await expect (this.page.locator('(//button[@role="tab"])[2]')).toBeVisible();
    await expect (this.page.locator('(//button[@role="tab"])[3]')).toBeVisible();
    await expect (this.page.locator('//h3[@class="sc-ktwOfi iQMXsj"]')).toHaveText('Drag & drop files to upload');
    await this.backDatasetskBtn.click();
  }

  async openUserRankings(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.userRankingItem.click();
    await this.page.waitForURL(/rankings/);
    await expect (this.page.locator('(//h1)[1]')).toHaveText('Kaggle Rankings');
    await this.page.locator('//div[@role="row" and @data-id]').first().waitFor();
    const rows = await this.page.locator('//div[@role="row" and @data-id]').count();
    console.log(await rows);
    await expect(await this.page.locator('//div[@role="row" and @data-id]').count()).toBeGreaterThanOrEqual(1);
  }

  async openBlog(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.blogItem.click();
    await this.page.waitForURL('https://medium.com/kaggle-blog');
    await expect (this.page.locator('(//div[@title="Go to Kaggle Blog"])[1]')).toBeTruthy()
  }

  async openDocumentation(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.documentationItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}docs`);
    await expect(this.page.locator('(//h1)[1]')).toHaveText('How To Use Kaggle');
    await expect(this.page.locator('//div/div/a/div/div')).toHaveCount(9)
  }

  async openProgression(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.progressionItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}progression`);
    await expect(this.page.locator('(//h1)[1]')).toContainText('Kaggle Progression System')
  }

  async openHostCompetition(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.hostCompetitionItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}c/about/host`);
    await expect(this.page.locator('(//h1)[1]')).toHaveText('Host your data science competition on Kaggle');
    await expect(this.page.locator('//span/following-sibling::div/button')).toBeVisible()
  }

  async openKaggleX(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.kaggleXItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}kagglex`);
    await expect(this.page.locator('(//h1)[1]')).toHaveText('KaggleX BIPOC Mentorship Program')
  }

  async openSupportContact(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.supportContactItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}contact`);
    await expect(this.page.locator('(//h1)[1]')).toHaveText('Contact');
    await expect(this.page.locator('(//h2[@id="/account"])[1]')).toHaveText('Account/Login');
    await expect(this.page.locator('(//h2[@id="/competitions"])[1]')).toHaveText('Competitions');
    await expect(this.page.locator('(//h2[@id="/datasets"])[1]')).toHaveText('Datasets');
    await expect(this.page.locator('(//h2[@id="/notebooks"])[1]')).toHaveText('Notebooks');
    await expect(this.page.locator('(//h2[@id="/privacy"])[1]')).toHaveText('Privacy and Security');
    await expect(this.page.locator('(//h2[@id="/organizations"])[1]')).toHaveText('Organizations');
    await expect(this.page.locator('(//h2[@id="/other"])[1]')).toHaveText('Other')
  }

  async openTeam(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.teamItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}about/team`);
    await expect(this.page.locator('(//h1)[1]')).toHaveText('Meet Our Team');
    await expect(await this.page.locator('//div/img').count()).toBeGreaterThan(30);

  }

  async openTerms(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.termsItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}terms`);
    await expect(this.page.locator('(//h1)[1]')).toHaveText('Terms');
    await expect(this.page.locator('(//div/p/following-sibling::p)[1]')).toContainText('Effective Date')
  }

  async openPrivacy(){
    await this.page.goto(process.env.STAGE_URL as string);
    await this.moreList.click();
    await this.privacyItem.click();
    await this.page.waitForURL(`${process.env.STAGE_URL}privacy`);
    await expect(this.page.locator('(//h1)[1]')).toHaveText('Privacy Policy');
    await expect(this.page.locator('(//div/p/following-sibling::h2)[1]')).toHaveText('Information Kaggle Collects')
  }
}