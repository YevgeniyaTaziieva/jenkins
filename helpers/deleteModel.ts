export default async function deleteModel({page}, url:String)
{
    page.goto(url);
    await page.locator("//button[contains(text(),'more_vert')]").click();
    await page.locator("//i[contains(text(), 'delete')]").click();
    await page.locator("//div[@class='mdc-dialog__container']/descendant::button[@emphasis='high']").click();
}