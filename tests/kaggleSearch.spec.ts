import { expect } from "@playwright/test";
import { SearchPage } from "../page-object/pages/SearchPage";
import { test } from "../fixture/fixture";


test.describe("Kaggle Search Tests", () => {

  test.beforeEach(async ({ page })=>{
    await page.goto('https://www.kaggle.com/search');
  })
  test("should search for 'bitcoin' and apply various filters", async ({ page }) => {
    const kagglePage = new SearchPage(page);

    // Search
    await kagglePage.searchFor('bitcoin')
    await expect(kagglePage.searchField).toHaveValue('bitcoin');

    // Set Date filter
    await kagglePage.filterByDate();
    await expect(kagglePage.filterByDateBtn).toBeVisible();

    // Set Dataset filter
    await kagglePage.filterByDatasetSize();
    await expect(kagglePage.filterByDatasetSizeBtn).toBeVisible();

    // Set Dataset filter
    await kagglePage.filterByFileType();
    await expect(kagglePage.filterByFileTypeBtn).toBeVisible();

    // // Set License filter
    // await kagglePage.filterByLicense();
    // await expect(kagglePage.filterByLicenseBtn).toBeVisible();

    // Перевірити наявність результатів
    await expect(kagglePage.searchResultItem).toHaveCount(1);
  });
  test("should display 'No results found' page when no results found", async ({ page }) => {
    const kagglePage = new SearchPage(page);

    // Search (not existing value)
    await kagglePage.searchFor('Sed ut perspiciatis.');
    await expect(kagglePage.searchField).toHaveValue('Sed ut perspiciatis.');


    //Check for content 
    await expect(kagglePage.noResultsFoundContentTitle).toContainText('No results found for ');
  });
  test.only("should search by popular tag and display corresponding content", async ({ page }) => {
    const kagglePage = new SearchPage(page);
    
    //Check popular tags section
    await kagglePage.searchField.click();
    await expect(kagglePage.popularTagsSection).toBeVisible();

    //Check no value is displayed in search bar and results are displayed
    await kagglePage.filterByPopularTagOption();
    await expect(kagglePage.searchField).toBeEmpty();
    await expect(kagglePage.removeTagBtn).toBeVisible();
    await expect(kagglePage.searchResultItem).toHaveCount(1);
  });
});
