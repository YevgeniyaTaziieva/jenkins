import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";


export default class HomePage extends BasePage {
  readonly btnCompatition: any;
  readonly btnDatasets: any;
  readonly btnMore: any;
  readonly btnLearn: any;
  readonly btnDiscussion: any;
  readonly btnCode: any;
  readonly btnModels: any;
  readonly title: any;
  readonly btnYourWork: any;
  readonly btnViewerHistory: any;
  readonly btnViewer: any;
  readonly btnLearnSql: any;


  constructor(page: Page) {
    super(page);
    this.btnCompatition = this.page.locator("//ul[@class='km-list']//li[2]");
    this.title = this.page.locator("//div[@class='sc-jxvlqV dQAkNG']/h1[@class='sc-eTNRI sc-jiVyRc iudEzZ gJrPrm']");
    this.btnDatasets = this.page.locator("//ul[@class='km-list']//li[3]");
    this.btnModels = this.page.locator("//ul[@class='km-list']//li[4]");  
    this.btnCode = this.page.locator("//ul[@class='km-list']//li[5]");  
    this.btnDiscussion = this.page.locator("//ul[@class='km-list']//li[6]");
    this.btnLearn = this.page.locator("//ul[@class='km-list']//li[7]");
    this.btnLearnSql = this.page.locator("//div[@class='sc-drMgrp jwppnS']/a[@href='/learn/intro-to-sql']");
    this.btnViewer = this.page.locator("//ul[@class='km-list']//li[7]");
    this.btnViewerHistory = this.page.locator("//div[@class='sc-drMgrp jwppnS sc-isTsfW jZkJOn']//a[@href='https://www.kaggle.com/learn/intro-to-sql?rvi=1']");
    this.btnYourWork = this.page.locator("//*[@id='site-container']/div/div[3]/div[3]/div[1]/div[2]/ul/li[1]");
    //this.aditedBtn = this.page.locator()

   
  }
  async competitions() {
    await this.page.goto('https://www.kaggle.com/');
    await this.btnCompatition.click();
    await expect(this.title).toHaveText(`Competitions`)
    await expect(this.page).toHaveURL("https://www.kaggle.com/competitions");
  }
  async datasets () {
    await this.btnDatasets.click();
    await expect(this.title).toHaveText(`Datasets`)
    await expect(this.page).toHaveURL("https://www.kaggle.com/datasets");
  }

   async models(){ 
    await this.btnModels.click();
    await expect(this.title).toHaveText(`Models`)
    await expect(this.page).toHaveURL("https://www.kaggle.com/models");
  }

   async code() {
    await this.btnCode.click();
    await expect(this.title).toHaveText(`Code`)
    await expect(this.page).toHaveURL("https://www.kaggle.com/code");
  }

   async discussions(){   
    await this.btnDiscussion.click();
    await expect(this.title).toHaveText(`Discussions`)
    await expect(this.page).toHaveURL("https://www.kaggle.com/discussions");
  }


    async learn(){
    await this.btnLearn.click();
    await expect(this.title).toHaveText(`Learn`)
    await expect(this.page).toHaveURL("https://www.kaggle.com/learn");
  }

    async viewed(){  
    await this.btnLearnSql.click();
    await this.page.reload();
    await this.btnViewer.click();
    await this.btnViewerHistory.click();
    await expect(this.page).toHaveURL("https://www.kaggle.com/learn/intro-to-sql?rvi=1");
  }


   async work()
   { await this.btnYourWork.click();
    await expect(this.title).toHaveText(`Your Work`)
    await expect(this.page).toHaveURL("https://www.kaggle.com/work");}
  }

