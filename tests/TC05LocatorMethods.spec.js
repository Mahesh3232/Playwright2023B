const { test, expect } = require('@playwright/test')

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

test('Verify getByText method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let ele3 = await page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
    await expect(ele3).toBeVisible()
    await expect(page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')).toBeVisible()
})

test('Verify getByTitle method in playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    let ele4 = await page.getByTitle('Koushik Chatterjee')
    await expect(ele4).toHaveText(' Koushik Chatterjee ')
    await expect(ele4).toBeVisible()
})

test('Verify getByTitle in playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    let ele5 = await page.getByTitle('Advertisement').first()
    await expect(ele5).toBeVisible()
})

test.only('Verify getByTestId method in playwright',async({page})=>{
    await page.goto('https://www.atlassian.com/')
    await page.getByTestId('global-nav-search-icon').click()
    await expect(page.locator('#global-nav-search-input')).toBeVisible()
    await page.waitForTimeout(5000)
})

