const { test, expect } = require("@playwright/test");
const exp = require("constants");

test('Verify singal fileUplode in Playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UplodeData/FileUplode Demo File 1.pdf')
    page.on('dialog',async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('Your file has now been uploaded!')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url())
    .toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=FileUplode+Demo+File+1.pdf')
    await page.waitForTimeout(4000)
})