const { test, expect } = require("@playwright/test");

test("Verify date Picker functionality in playwright using js object", async ({
  page,
}) => {
  await page.goto("https://webdriveruniversity.com/Datepicker/index.html");
  const date = new Date();
  date.setDate(date.getDate() + 300);
  let d = date.getDate(); //Current Date
  //let mnt = date.getMonth()// Current month Index
  //0    1    2     3    4    5   6
  //Jan feb march April May June July
  //let mnt = date.toLocaleString('default',{month:'short'}) // Cureent month in short string (Apr)
  let mnt = date.toLocaleString("default", { month: "long" }); // Cureent month in full string (April)
  // let mnt = date.getMonth() + 1 //Current month in number
  // let m = `${0}${mnt}` // current month with zero
  let year = date.getFullYear();
  console.log(d);
  console.log(mnt);
  console.log(year);
  //DD/MM/YYYY
  let FutureDate = `${d} ${mnt} ${year}`;
  console.log(FutureDate);
  await page.locator("#datepicker").click();
  while (true) {
    let monthyear = await page
      .locator('[class="datepicker-switch"]')
      .first()
      .textContent();
    if (monthyear === `${mnt} ${year}`) {
      break;
    }
    await page.locator('[class="next"]').first().click();
    // console.log(monthyear)
  }
  const dayCount = await page.locator('[class="day"]').count();
  console.log(dayCount);
  await page.waitForTimeout(4000);
  for (let i = 0; i < dayCount; i++) {
    let text = await page.locator('[class="day"]').nth(i).textContent();
    console.log(text);
    if (text == d) {
      await page.locator('[class="day"]').nth(i).click();
      break;
    }
  }
  await page.waitForTimeout(3000);
});
