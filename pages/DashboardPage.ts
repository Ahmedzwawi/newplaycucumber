import { Page } from 'playwright';

export class PostPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillForm(title: string, content: string) {
    await this.page.fill('input[name="title"]', title);
    await this.page.fill('textarea[name="content"]', content);
  }

  async savePost() {
    await this.page.click('.default'); 

 
}
async isDashboardVisible() {
    return await this.page.isVisible('.colMS');

  }
}