import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";


export class SearchPage extends BasePage {
searchPageLocator: any;
  readonly searchField: Locator;
  readonly filterByDateBtn: Locator;
  readonly filterByViewedBtn: Locator;
  readonly filterByCreatorBtn: Locator;
  readonly filterByDatasetSizeBtn: Locator;
  readonly filterByFileTypeBtn: Locator;
  readonly filterByLicenseBtn: Locator;
  readonly searchResultItem: Locator;
  readonly selectedFilterOption: Locator;
  readonly searchResultAmount: Locator;
  readonly noResultsFoundContentTitle: Locator;
  readonly popularTagsSection: Locator;
  readonly popularTagFirstOption: Locator;
  readonly removeTagBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.searchField = page.locator("//input[@data-testid='search-input-bar'][@aria-label='Search on Kaggle']");
    this.filterByDateBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name=':r0:'][@value='90']")
    this.filterByViewedBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name=':r4:'][@value=' Not  Viewed']")
    this.filterByCreatorBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name=':r5:'][@value=' Others']")
    this.filterByDatasetSizeBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetSize:small']");
    this.filterByFileTypeBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetFileTypes:csv']")
    this.filterByLicenseBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetLicense:Commercial']");
    this.searchResultItem = page.locator("//div[@id='results']");
    this.noResultsFoundContentTitle = page.locator("//h2[@class='sc-fHejqy sc-eUcPGm JwKtU kqzTJI']");
    this.popularTagsSection = page.locator("//div[@class='sc-lihxfj ikMyaq mdc-chip-set']");
    this.popularTagFirstOption = page.locator("//button[@class='sc-lfpCDB cSKonI'][1]");
    this.removeTagBtn = page.locator("//button[@class='sc-jIBlqr dGIdyE google-material-icons']");

  }

  async searchFor(query: string) {
    await this.searchField.click();
    await this.searchField.fill(query);
    await this.searchField.press('Enter');
  }

  async filterByDate() {
    await this.filterByDateBtn.click();
  }

  async filterByDatasetSize() {
    await this.filterByDatasetSizeBtn.click();
  }

  async filterByFileType() {
    await this.filterByFileTypeBtn.click();
  }

  async filterByLicense() {
    await this.filterByLicenseBtn.click();
  }

  async getFirstSearchResult() {
    return this.searchResultItem.first().innerText();
  }

  async filterByPopularTagOption() {
    await this.popularTagFirstOption.click()
  }
}
