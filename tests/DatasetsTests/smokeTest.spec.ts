import { expect } from "@playwright/test";
import { test } from "../../fixture/fixture"; 

test('Open Main Page', async ({datasetsPage}) => {
    await datasetsPage.openMainPage();
});
test('Open Datasets Page', async ({datasetsPage}) => {
    await datasetsPage.openDatasetsPage();
});