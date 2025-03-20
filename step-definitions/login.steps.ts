import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';
import { PostPage } from '../pages/DashboardPage';
import { DataExchange } from '../data/data.exchange';

let loginPage: LoginPage;
let dashboardPage: PostPage;

Given('I open the login page {string}', async function (url: string) {
  loginPage = new LoginPage(this.page);
  await loginPage.goto(url);
  
});

When('Ilogin{string}&{string}', async function (username: string, password: string) {
  await loginPage.login(username, password);
  dashboardPage = new PostPage(this.page);
  const postTitle = process.env.POST_TITLE;
  const postContent = process.env.POST_CONTENT;
  // console.log("Titre généré :", postTitle);
  // console.log("Contenu généré :", postContent);
  // const postTitle = DataExchange.get('POST_TITLE'); 
  // console.log("Post Title récupéré : ", postTitle); 
  
});

Then('I should be redirected to the dashboard', async function () {
 
  const isDashboardVisible = await loginPage.isDashboardVisible();
  expect(isDashboardVisible).toBe(true);
  

});

Then('I should see an error message', async function () {

  const errorMessage = await this.page.textContent('.errornote');
  expect(errorMessage).toContain('Please enter the correct username and password for a staff account. Note that both fields may be case-sensitive.');
});
