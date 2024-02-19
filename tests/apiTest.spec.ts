import { test, expect } from "@playwright/test";

test.describe.skip("API TESTS", () => {
  test("Testing Api 1", async ({ request }) => {
    let result = await request.get("http://localhost:3000/users");
    let data = await result.json();
    expect(result.ok()).toBeTruthy();
  });

  test("Testing Api 2", async ({ request }) => {
    let result = await request.get("http://localhost:3000/users/2");
    let data = await result.json();
    expect(result.ok()).toBeTruthy();
  });

  test("Testing Api 3", async ({ request }) => {
    let result = await request.delete("https://reqres.in/api/users/2");
    expect(result.status()).toBe(204);
  });
});
