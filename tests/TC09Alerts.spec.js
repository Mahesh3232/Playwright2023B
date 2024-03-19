const { test, expect } = require('@playwright/test')
test('Handle js simple alert with playwright',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog',async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()
    })
    //js                   playwright
    //SimpalAlert          alert
    //ConfirmAlert         confirm
    //PromptAlert          prompt
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect( page.locator('#result')).toHaveText('You successfully clicked an alert')
    // await page.waitForTimeout(4000)
})