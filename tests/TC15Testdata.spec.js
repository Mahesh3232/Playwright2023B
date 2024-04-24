const { test, expect } = require("@playwright/test");
const data = require('../tests/TestData/ContactUsData.json');
const { customTest } = require("./TestData/Data");

// test('Verify contactUs form using fixture data',async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     await page.locator('[name="first_name"]').fill(data.firstName)
//     await page.locator('[name="last_name"]').fill(data.lastName)
//     await page.locator('[name="email"]').fill(data.email)
//     await page.locator('[name="message"]').fill(data.msg)
//     await page.locator('[value="SUBMIT"]').click()
//     await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
// })

data.forEach(element => {
    test(`Verify contactUs form using multiple dataset ${element.firstName}`,async({page})=>{
        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('[name="first_name"]').fill(element.firstName)
        await page.locator('[name="last_name"]').fill(element.lastName)
        await page.locator('[name="email"]').fill(element.email)
        await page.locator('[name="message"]').fill(element.msg)
        await page.locator('[value="SUBMIT"]').click()
        await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
    })
});

customTest.only('Verify contactUs page using js file data',async({page,testdataForContactUs})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill(testdataForContactUs.firstName)
    await page.locator('[name="last_name"]').fill(testdataForContactUs.lastName)
    await page.locator('[name="email"]').fill(testdataForContactUs.email)
    await page.locator('[name="message"]').fill(testdataForContactUs.msg)
    await page.locator('[value="SUBMIT"]').click()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})
