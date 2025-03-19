import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';

let loginPage: LoginPage;

Given('I open the login page', async function () {
  loginPage = new LoginPage(this.page, process.env.baseUrl!);

  await loginPage.goto();
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
  await loginPage.login(username, password);
});

Then('I should be redirected to the dashboard', async function () {
  const isDashboardVisible = await loginPage.isDashboardVisible();
  expect(isDashboardVisible).toBe(true);
});

Then('I should see an error message', async function () {

  const errorMessage = await this.page.textContent('.errornote');
  expect(errorMessage).toContain('Please enter the correct username and password for a staff account. Note that both fields may be case-sensitive.');
});
