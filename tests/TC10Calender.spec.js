const { test, expect } = require('@playwright/test')

test('Verify datepicker using Playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('28-03-2024')
    await page.waitForTimeout(6000)
})

test.only('Handling Datepicker using playwright',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    const year = '2025'
    const month = "June"
    const day = "14"
    await page.locator('#datepicker').click()
    console.log(`${month} ${year}`)
   
    while(true){
        let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
        if(monthyear === `${month} ${year}`){
            break
        }
        await page.locator('[class="next"]').first().click()
        // console.log(monthyear)
    }
    await page.waitForTimeout(4000)
})