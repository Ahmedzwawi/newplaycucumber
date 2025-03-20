import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage'; 
import { faker } from '@faker-js/faker';
import { DataExchange } from '../data/data.exchange';

let page: Page;
let loginPage: LoginPage;


Given('I am logged in with username {string} and password {string}', { timeout: 20000 }, async function (username: string, password: string, url: string) {
  loginPage = new LoginPage(this.page);
  await loginPage.goto(url);
  await loginPage.login(username, password);
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

  When('I fill the form with the data', async function () {
    const randomTitle = faker.lorem.words(3);
    const randomContent = faker.lorem.paragraph();
     process.env.POST_TITLE = randomTitle;
    process.env.POST_CONTENT = randomContent;
    // const postTitle = DataExchange.set('POST_TITLE', randomTitle);
    // DataExchange.set('POST_CONTENT', randomContent);
    // console.log("Post Title récupéré : ", postTitle); 

    console.log("Titre généré :", process.env.POST_TITLE);
    console.log("Contenu généré :", process.env.POST_CONTENT);
    await this.page.fill('input[name="title"]', randomTitle);
    await this.page.fill('textarea[name="content"]', randomContent);
  });
When('I click on the "Save" button', async function () {
    await this.page.click('input[type="submit"]'); 
  });
  
//  Then('I should be redirected to the dashboard page & see the post in the list', async function () {
//   Then('I should be redirected to the dashboard page & see the post in the list', async function () {
//     const isDashboardVisible = await this.page.isVisible('.section');
//     expect(isDashboardVisible).toBe(true);
  
//     const postTitle = this.postTitle;
//     const postLocator = this.page.getByRole('link', { name: postTitle });
//     await expect(postLocator).toBeVisible();
//   });
  
// });
