const { test, expect, request } = require("@playwright/test");

test("GET api request", async ({ request }) => {
  let req = await request.get("https://gorest.co.in/public/v2/users", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6",
    },
  });
  let res = await req.json();
  console.log(res);
  expect(res.length).toBe(10)
  expect(res[0].id).toBe(6899908);
  expect(res[0].name).toBe("Advaya Verma");
});


test.only('Post API request for create User', async ({ request }) => {
  let req2 = await request.post('https://gorest.co.in/public/v2/users', {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6",
    },
    data: {
      "name": "Mahesh Aher",
      "gender": "male",
      "email": "mahesh.aher66@gmail.com",
      "status": "active"
    }
  })
  let res2 = await req2.json()
  console.log(res2)
  await expect(req2.status()).toBe(201)
  await expect(res2.name).toBe('Mahesh Aher')
  await expect(res2.gender).toBe('male')
  await expect(res2.status).toBe('active')
})
