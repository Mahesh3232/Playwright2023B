const { test, expect } = require('@playwright/test')

test('Verify keyboard actions in playwright',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')
    //await page.keyboard.down('PageDown')
    await page.locator('textarea[name="text1"]').fill('I am learning Playwright with JavaScript')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(3000)
})