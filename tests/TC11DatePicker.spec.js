const { test, expect } = require("@playwright/test");

test('Verify date Picker functionality in playwright using js object',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    const date = new Date()
   date.setDate(date.getDate() + 200)
    let d = date.getDate()//Current Date
    //let mnt = date.getMonth()// Current month Index
    //let mnt = date.toLocaleString('default',{month:'short'}) // Cureent month in short string (Apr)
    let mnt = date.toLocaleString('default',{month:'long'}) // Cureent month in full string (April) 
    // let mnt = date.getMonth() + 1 //Current month in number
    // let m = `${0}${mnt}` // current month with zero
    let year = date.getFullYear()
   
    console.log(d)
    console.log(mnt)
    console.log(year)
    //0    1    2     3    4    5   6
    //Jan feb march April May June July
})