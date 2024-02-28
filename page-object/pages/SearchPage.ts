import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";


export class SearchPage extends BasePage {
searchPageLocator: any;
  readonly searchField: Locator;
  readonly filterByDateBtn: Locator;
  readonly filterByViewedBtn: Locator;
  readonly filterByCreatorBtn: Locator;
  readonly filterByDatasetSizeSmallBtn: Locator;
  readonly filterByDatasetSizeMediumBtn: Locator;
  readonly filterByDatasetSizeLargeBtn: Locator;
  readonly filterByFileTypeCsvBtn: Locator;
  readonly filterByFileTypeXlsxBtn: Locator;
  readonly filterByFileTypeJsonBtn: Locator;
  readonly filterByLicenseOtherBtn: Locator;
  readonly filterByLicenseCommercialBtn: Locator;
  readonly filterByLicenseNoncommercialBtn: Locator;
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
    this.filterByDatasetSizeSmallBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetSize:small']");
    this.filterByDatasetSizeMediumBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetSize:medium']");
    this.filterByDatasetSizeLargeBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetSize:large']");
    this.filterByFileTypeCsvBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetFileTypes:csv']")
    this.filterByFileTypeXlsxBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetFileTypes:xlsx']")
    this.filterByFileTypeJsonBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetFileTypes:json']")
    this.filterByLicenseOtherBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetLicense:Other']");
    this.filterByLicenseCommercialBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetLicense:Commercial']");
    this.filterByLicenseNoncommercialBtn = page.locator("//input[@class='PrivateSwitchBase-input css-1m9pwf3'][@name='datasetLicense:Non-Commercial']");
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
    await this.filterByDatasetSizeSmallBtn.click();
  }

  async filterByFileType() {
    await this.filterByFileTypeCsvBtn.click();
  }

  async filterByLicense() {
    await this.filterByLicenseOtherBtn.click();
  }

  async getFirstSearchResult() {
    return this.searchResultItem.first().innerText();
  }

  async filterByPopularTagOption() {
    await this.popularTagFirstOption.click()
  }
}
