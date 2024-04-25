const base = require('@playwright/test')

exports.customTest = base.test.extend(
    {
    testdataForContactUs:{
        firstName :"Akash",
        lastName:"Aher",
        email:"mahesh@gmail.com",
        msg:"I am learning JavaScript"
    }
})