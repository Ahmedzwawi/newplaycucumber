import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage'; 
import { PostPage } from '../pages/DashboardPage'; 

let page: Page;
let loginPage: LoginPage;
let dashboardPage: PostPage;


Given('I am logged in with username {string} and password {string}', { timeout: 20000 }, async function (username: string, password: string) {
    loginPage = new LoginPage(this.page);
    await loginPage.goto();
    await loginPage.login(username, password);
    dashboardPage = new PostPage(this.page);

    
  });
  When('I am on the dashboard page', async function () {
    const isDashboardVisible = await this.page.isVisible('.colMS');
    expect(isDashboardVisible).toBe(true);
  });
  
When('I click on the "Post" button', async function () {
  await this.page.click('text=Add'); 
});
Then('I should be redirected to the post page', async function () {
    const currentUrl = await this.page.url(); 
    expect(currentUrl).toContain('admin/myapp/post/add');
  });  

When('I fill the form with the data', async function (dataTable) {
  const data = dataTable.hashes()[0]; 
  await this.page.fill('input[name="title"]', data.title); 
  await this.page.fill('textarea[name="content"]', data.content); 
});

When('I click on the "Save" button', async function () {
    await this.page.click('input[type="submit"]'); 
  });
  
 Then('I should be redirected to the dashboard page & see the post in the list', async function () {
    const isDashboardVisible = await this.page.isVisible('.colMS');
    expect(isDashboardVisible).toBe(true);
});
