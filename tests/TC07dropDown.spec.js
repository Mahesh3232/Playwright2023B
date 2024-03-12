//Static dropdown
//dynyamic dropdown
const { test, expect } = require('@playwright/test')


test('Verify static dropdown in playwright',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('2')
    await expect(page.locator('p[class="subtitle"]')).toBeVisible()
    await expect(page.locator('p[class="subtitle"]')).toHaveText('You have selected Orange')
    await page.locator('#superheros').selectOption('bt')
    await expect(page.locator('[class="subtitle"]').last()).toBeVisible()
    await expect(page.locator('[class="subtitle"]').last()).toHaveText('You have selected Batman')
    await page.locator('#country').selectOption('India')
    await expect(page.locator('#country')).toHaveValue('India')
    await page.waitForTimeout(4000)
})

//Dynyamic Dropdown

test.only('Verify redbus dynyamic dropdown in playwright',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune',{delay:2000})
    await page.waitForSelector('.placeHolderMainText')
   // await page.waitForTimeout(5000)
    let optionCount = await page.locator('.placeHolderMainText').count()
    //let text = await (await page.locator('.placeHolderMainText')).last().textContent()
    console.log(optionCount)
})
