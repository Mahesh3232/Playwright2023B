const { test, expect } = require("@playwright/test");

test("Redbus dynyamic dropdown", async ({ page }) => {
  const year = "2025";
  const month = "Jun";
  const day = "14";
  let monthYear = `${month} ${year}`;
  await page.goto("https://www.redbus.in/");
  await page.locator("#onwardCal").click();
  while (true) {
    let text = await page
      .locator(
        '.DayNavigator__CalendarHeader-qj8jdz-1 > div[style="flex-grow: 2; font-size: 0.875rem;"]'
      )
      .textContent();
    let mntYear = text.slice(0, 8);
    if (mntYear === monthYear) {
      break;
    }
    await page
      .locator('div[style="flex-grow: 1; cursor: pointer;"]')
      .last()
      .click();
  }
  await page.waitForTimeout(4000)
});
