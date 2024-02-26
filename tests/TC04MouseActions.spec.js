//doubleclick 
//rightclick
//mousehover
//click
const { test, expect } = require('@playwright/test')

test('Verify Doubleclick in playwright',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('button[id="doubleClickBtn"]').dblclick()
    await expect(page.locator('#doubleClickMessage')).toBeVisible()
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')
})

test.only('Verify rightclick in playwright',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({button:'right'})
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')
    await page.waitForTimeout(4000)
})