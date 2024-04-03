import {test} from '@playwright/test';

test.describe("Custom Reporter",() =>{


test("Navigation Test",async ({page})=>{

await test.step("Visit Letcode",async ()=>{

    await page.goto('https://letcode.in');
})

await test.step("Visit Playwright",async()=>{
    await page.goto("https://playwright.dev");
})

})





})