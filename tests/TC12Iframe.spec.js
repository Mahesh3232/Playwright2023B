const { test, expect } = require("@playwright/test");
//1st way by using .framelocator
test('Handling Iframe with playwright',async({page})=>{
    await page.goto('https://letcode.in/frame')
    //await page.locator('[name="fname"]').fill('Minskole')
    const frame1 = await page.frameLocator('iframe[src="frameUI"]')
    await frame1.locator('input[name="fname"]').fill('Minskole')
    expect(frame1.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(4000)
})

//2nd way by using .frame method name attribute 
test('Handling Iframe with .frame method in playwright',async({page})=>{
    await page.goto('https://letcode.in/frame')
    //await page.locator('[name="fname"]').fill('Minskole')
    const frame2 = await page.frame('firstFr')
    await frame2.locator('input[name="fname"]').fill('Minskole')
    await frame2.locator('[name="lname"]').fill('MinskolePune')
    expect(frame2.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(4000)
})

//2nd way by using .frame method by URL
test.only('Handling Iframe with .frame method with URL in playwright',async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frame3 = await page.frame({url:'https://letcode.in/frameUI'})
    await frame3.locator('input[name="fname"]').fill('Minskole')
    await frame3.locator('[name="lname"]').fill('MinskolePune')
    expect(frame3.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(4000)
})