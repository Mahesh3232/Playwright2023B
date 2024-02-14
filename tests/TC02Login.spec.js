const {test,expect} = require('@playwright/test')

test('Verify login functionality with valid credentils',async({page})=>{
    //AAA
    //Arrange
     //Action
    //Assetion
    //Step 1 navigate to URL
    await page.goto('https://www.saucedemo.com/')
    //Step 2 Enter Username
    //<input id = "One" class= "TextBox">
    //Common Formula = tagName[attr = value]
    //input[id = "One"]
   await page.locator('input[id="user-name"]').fill('standard_user')
   await page.locator('input[id="password"]').fill('secret_sauce')
   await page.waitForTimeout(4000)
    //Step 3 Enter Password
    //Step 4 click on login button
    //Step 5 assertions/Validation
   
})