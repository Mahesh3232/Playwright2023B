const { test, expect } = require('@playwright/test')
const exp = require('constants')
// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle

test('Verify getByAltText method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()
    await expect(ele).toBeVisible()
})

test.only('Verify getByLabel method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele2 = await page.getByLabel('main navigation')
    await expect(ele2).toBeVisible()
    let ele3 = await page.getByLabel('Advertisement').first()
    await expect(ele3).toBeVisible()
})

