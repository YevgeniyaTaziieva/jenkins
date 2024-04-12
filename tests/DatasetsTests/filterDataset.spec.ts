import { DatasetsPage } from './../../page-object/pages/DatasetsPage';
import { expect } from "@playwright/test";
import { test } from "../../fixture/fixture"; 
import { Navigation } from "../../page-object/components/Navigation";

test.describe("", ()=> {
    test.beforeEach(async ({datasetsPage})=>{
        await datasetsPage.openDatasetsPage()
    })

    test('Check filter field on Kaggle datasets page', async ({ page }) => {
    // Открываем страницу Kaggle datasets
    //await page.goto('https://www.kaggle.com/datasets');

    // Проверяем, что поле фильтра присутствует на странице
    const filterInput = await page.$('input.sc-gKBqHi.deSQMc');
    expect(filterInput).not.toBeNull();

    // Вводим текст в поле фильтра
    await filterInput?.type('Machine Learning');

    // Ожидаем, пока появятся результаты фильтрации
    await page.waitForSelector('.km-list.km-list--three-line');

    // Проверяем, что результаты фильтрации отображаются на странице
    const filteredResults = await page.$$('.km-list.km-list--three-line');
    expect(filteredResults.length).toBeGreaterThan(0);
    });

    test('Check filter button on Kaggle datasets page', async ({ page }) => {
        // Открываем страницу Kaggle datasets
       // await page.goto('https://www.kaggle.com/datasets');
    
        // Проверяем, что кнопка фильтра присутствует на странице
        const filterButton = await page.$('button[title="Filters"]');
        expect(filterButton).not.toBeNull();
    
        // Нажимаем на кнопку фильтра
        await filterButton?.click();
    
        // Ожидаем, пока отобразятся настройки фильтрации
        await page.waitForSelector('div[data-testid="datasets-listing-filter-modal"]');
    
        // Проверяем, что настройки фильтрации отображаются после нажатия кнопки
        const filterOptions = await page.$('div[data-testid="datasets-listing-filter-modal"]');
        expect(filterOptions).not.toBeNull();

        const filterButtonSCV = await page.$('button[aria-label="CSV"]')
        expect(filterButtonSCV).not.toBeNull();
        await filterButtonSCV?.click()


        await page.click('[contains(text(), "Apply")]')
        // Ожидаем, пока появятся результаты фильтрации
        await page.waitForSelector('ul.km-list.km-list--three-line');

        // Проверяем, что результаты фильтрации отображаются на странице
        const filteredResults = await page.$$('ul.km-list.km-list--three-line');
        expect(filteredResults.length).toBeGreaterThan(0);
    
    });

})