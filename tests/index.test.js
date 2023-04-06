// USER JOURNEY TO MAP OUT:
//A user visits the site ✅-> adds a new todo to the list✅ -> completion date->
//deletes a todo from the list -> refreshes the page and the todos are still persisted/saved.

import { test, expect } from "@playwright/test";
//it starts greyed out because we havent called test or expect

test("Navigate to url", async ({ page }) => {
  await page.goto("http://localhost:3000");
});

//This test tells the comp to go to the listed url

test("Typing in input field", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const input = page.getByRole("textbox", { name: "Task" });
  await input.type("Wash Dog");
  await expect(input).toHaveValue("Wash Dog");
});

//This test tells the comp to go to the listed url 
//locate the input field (which has the ARIA label "text box" and identifying name on the actual webpage of "Task" 
//it tells the comp to type in "Wash Dog"
//it then compares the expected input (wash dog, which the comp should have written - if the page is working)
// to what we're telling the test that it should have (Wash dog)

test("Clicking calendar icon", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const input = page.getByRole("textbox", { name: "Completion date" });
  //await input.click();
  await input.type("2023-05-16");
  //await expect(input.click).;
  await expect(input).toHaveValue(/2023-05-16/);
});

//This test does a similar thing as the above, but it instead locates the calendar input field using the ARIA 
//identifies "textbox" and the actual name on the web page "Completion date"
//it tells the comp to type the date in that field
//and then tells it to CHECK that what we TOLD IT to type in IS WHAT is typed in 

//In an expect statement it might matter how you present the expected statement eg. (/..../ or "")

//EXPLANATION FROM CHAT GPT
/*This line verifies that the value of the "input" element matches the regular expression /2023-05-16/. 
//The test will pass if the value matches the regular expression and fail if it does not.
Overall, this test case navigates to a web page, locates an input element, types a date string into it, 
and verifies that the value of the input element matches a specific format.*/

test("add todo to list", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const inputToDo = page.getByRole("textbox", { name: "Task" });
  await inputToDo.type("Wash Dog");
  await expect(inputToDo).toHaveValue("Wash Dog");
  const inputDate = page.getByRole("textbox", { name: "Completion date" });
  await inputDate.type("16/05/2023");
  await expect(inputDate).toHaveValue(/2023-05-16/);
  const createButton = page.getByRole("button", { name: "➕ Create!" });
  const list = page.getByRole("list", { name: "Existing todos" });
  await createButton.click();
  await expect(list).toHaveValue({
    task: task,
    completionDate: completionDate,
  });
});

//In this test - we are asking the computer to:
//navigate to the url -> select the input field -> typing wash dog -> 
//->selecting the calendar input field -> typing in the date
//selecting the button -> clicking the button...
//we're yet to get the computer to CHECK that what it has entered is what it SHOULD have entered
    //but we haven't yet figured out how to present the info in line 60 that it can read