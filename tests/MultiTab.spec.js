import { test, expect } from '@playwright/test'

test.only('validate the multiple tabs', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const [newpage] = await Promise.all
        (
            [
                context.waitForEvent('page'),
                page.locator('[href="https://www.qaclickacademy.com"]').click()
            ]
        )    
    await newpage.waitForTimeout(3000)
    await expect(newpage).toHaveURL('https://www.qaclickacademy.com/')
})

//Creates a Promise that is resolved with an array of results when all
//of the provided Promises resolve, or rejected when any Promise is rejected.

//@param values — An iterable of Promises.

//@returns — A new Promise.


test('validate the multi window',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const [newpage] = await Promise.all
        (
            [
                context.waitForEvent('page'),
                page.locator('[onclick="openWindow()"]').click()
            ]
        )

    await newpage.waitForTimeout(3000)

    await expect(newpage).toHaveURL('https://www.qaclickacademy.com/')


})