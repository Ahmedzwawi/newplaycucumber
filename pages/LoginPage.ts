import { Page } from 'playwright';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://192.168.1.95:9091/admin/login/?next=/admin/');
  }

  // async login(username: string, password: string) {
  //   await this.page.fill('input[name="username"]', username);
  //   await this.page.fill('input[name="password"]', password);
  //   await this.page.click('input[type="submit"]');

  // }
  Elements = {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    submit: 'input[type="submit"]',
    error: '.errornote',
    dashboard: '.colMS'

  }
  async username(username: string) {
    await this.page.fill(this.Elements.username, username);
  }
  async password(password: string) {
    await this.page.fill(this.Elements.password, password);
  }
  async submit() {
    await this.page.click(this.Elements.submit);
  }
  async error() {
    return await this.page.textContent(this.Elements.error);
  }
  async isDashboardVisible() {
    return await this.page.isVisible(this.Elements.dashboard);
  }

  // async isDashboardVisible(): Promise<boolean> {
  //   return await this.page.isVisible('.colMS');
//}
 // Méthode de login combinée
 async login(username: string, password: string) {
  await this.username(username);
  await this.password(password);
  await this.submit();
}

}
