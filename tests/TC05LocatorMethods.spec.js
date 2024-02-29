const { test, expect } = require('@playwright/test')
const exp = require('constants')
// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle
// locator
test('Verify getByAltText method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()
    await expect(ele).toBeVisible()
})

test('Verify getByLabel method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele2 = await page.getByLabel('main navigation')
    await expect(ele2).toBeVisible()
    let ele3 = await page.getByLabel('Advertisement').first()
    await expect(ele3).toBeVisible()
})

test('Verify getByPlaceholder method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder('First Name').fill('Minskole')
    await page.waitForTimeout(4000)
})

test('Verify getByRole method in playwright',async({page})=>{
   await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
   await page.getByRole('checkbox',{name:"Option 1"}).check()
   await page.waitForTimeout(4000)
})

test.only('Verify getByText method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let ele3 = await page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
    await expect(ele3).toBeVisible()
})


