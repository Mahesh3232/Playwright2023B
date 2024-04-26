//create
//Update
//retrive
//Delete
//CURD
const { test, expect, request } = require("@playwright/test");
let id = 

test("API GET request", async ({ request }) => {
  let req = await request.get("https://reqres.in/api/users?page=2");
  //console.log(await req.status());
  let res = await req.json();
  //console.log(res);
  //console.log(res.total);
  await expect(req.status()).toBe(200);
  await expect(res.total).toBe(12);
//   console.log(res.total_pages);
//   console.log(res.data[0].first_name);
});

test("API POST request", async ({ request }) => {
  let req2 = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Suraj",
      job: "Opretor",
    },
    headers: { "Content-Type": "application/json" },
  });
  let res2 = await req2.json();
  //console.log(await req2.json());
  expect(await req2.status()).toBe(201);
  //console.log(await res2.name)
  expect(await res2.name).toBe("Suraj");
  expect(await res2.job).toBe("Opretor");
  id = res2.id
  console.log(id)
});


test('API PUT request',async({request})=>{
    console.log(id)
    let req3 = await request.put(`https://reqres.in/api/users/${id}`,{
        data:{      
                "name": "Mahesh Sunil Aher",
                "job": "Automation Tester"
        }
    })
    //console.log(await req3.json())
    expect(await req3.status()).toBe(200);
    let res3 = await req3.json()
    expect(await res3.name).toBe('Mahesh Sunil Aher')
    expect(await res3.job).toBe('Automation Tester')
})

test('API DELETE request',async({request})=>{
    console.log(id)
    let req4 = await request.delete(`https://reqres.in/api/users/${id}`)
    expect(await req4.status()).toBe(204)
})