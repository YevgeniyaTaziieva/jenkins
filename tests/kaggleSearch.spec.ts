import { expect } from "@playwright/test";
import { SearchPage } from "../page-object/pages/SearchPage";
import { test } from "../fixture/fixture";


test.describe("Kaggle Search Tests", () => {
  test("should search for 'bitcoin' and apply various filters", async ({ page }) => {
    const kagglePage = new SearchPage(page);
    await page.goto('https://www.kaggle.com/search');
    
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

    // Check results
    await expect(kagglePage.searchResultItem).toHaveCount(1);
  });
});
