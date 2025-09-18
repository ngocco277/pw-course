import { test } from '@playwright/test';
const date = "2025-07-27";
const username = "Nguyễn Ngọc Có";
const email = "ngocco1996@gmail.com";
const description = "Đây là lớp Playwright K17";
const country = "uk";

test ('Exercise 1: Register Page', async ({ page }) => {
  await test.step("Navigate to Material Playwright Page", async () => {
    await page.goto('https://material.playwrightvn.com/');
  })

  await test.step("Click on User Registration", async () => {
    await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
  });

  await test.step("Fill information to all fields ", async () => {
    await page.locator('//input[@id="username"]').pressSequentially(username,{delay:100});
    await page.locator('//input[@id="email"]').pressSequentially(email,{delay:100});
    await page.locator('//input[@id="male"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//select[@id="country"]').selectOption(country);
    await page.locator('//input[@id="dob"]').pressSequentially(date,{delay:100});
    await page.locator('//input[@id="profile"]').setInputFiles(`tests/lesson-5/excercise/lesson-5.txt`);
    await page.locator('//textarea[@id="bio"]').pressSequentially(description,{delay:100});
    await page.locator('//input[@id="rating"]').pressSequentially("10");
    await page.locator('//input[@id="favcolor"]').pressSequentially("#00fffb");
    await page.locator('//div[@class="tooltip"]').hover();
    await page.locator('//input[@id="newsletter"]').check();
    await page.click('//span[@class ="slider round"]');
  });

  await test.step("Click Register button", async () => {
    await page.locator("//button[normalize-space()='Register']").click();
  });
});
