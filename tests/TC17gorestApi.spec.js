const { test, expect, request } = require("@playwright/test");
const exp = require("constants");

test("GET api request", async ({ request }) => {
  let req = await request.get("https://gorest.co.in/public/v2/users", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6",
    }
  });
  let res = await req.json()
  console.log(res)
  expect(res[0].id).toBe(6895764)
  expect(res[0].name).toBe('Sudeva Chaturvedi')
});
//6895764
//Content-Type:"application/json"
