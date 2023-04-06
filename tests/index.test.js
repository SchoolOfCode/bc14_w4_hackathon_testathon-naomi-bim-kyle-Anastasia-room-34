// USER JOURNEY TO MAP OUT:
//A user visits the site ✅-> adds a new todo to the list✅ -> completion date->
//deletes a todo from the list -> refreshes the page and the todos are still persisted/saved.

import { test, expect } from "@playwright/test";
//it starts greyed out because we havent called test or expect

test("Navigate to url", async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test("Typing in input field", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const input = page.getByRole("textbox", { name: "Task" });
  await input.type("Wash Dog");
  await expect(input).toHaveValue("Wash Dog");
});

//find the ARIA for the calendar -> tell computer to click calendar icon

test("Clicking calendar icon", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const input = page.getByRole("textbox", { name: "Completion date" });
  //await input.click();
  await input.type("16/05/2023");
  //await expect(input.click).;
  await expect(input).toHaveValue(/2023-05-16/);
});
//In an expect statement it might matter how you present the expected statement eg. (/..../ or "")

/*This line verifies that the value of the "input" element matches the regular expression /2023-05-16/. The test will pass if the value matches the regular expression and fail if it does not.

Overall, this test case navigates to a web page, locates an input element, types a date string into it, and verifies that the value of the input element matches a specific format.*/

test("add todo to list", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const input = page.getByRole("textbox", { name: "Task" });
  await input.type("Wash Dog");
  await expect(input).toHaveValue("Wash Dog");
  await page.goto("http://localhost:3000");
  const input = page.getByRole("textbox", { name: "Completion date" });
  //await input.click();
  await input.type("16/05/2023");
  //await expect(input.click).;
  await expect(input).toHaveValue(/2023-05-16/);
});
