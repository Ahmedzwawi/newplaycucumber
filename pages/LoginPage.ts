import { Page } from 'playwright';

export class LoginPage {
  private page: Page;
  private baseUrl: string;  // Ajout de baseUrl pour stocker l'URL

  constructor(page: Page, baseUrl: string) {  // Modification du constructeur pour accepter baseUrl
    this.page = page;
    this.baseUrl = baseUrl;
  }

  // Mettre à jour la méthode goto pour utiliser baseUrl
  async goto() {
    await this.page.goto(this.baseUrl);  // Utiliser baseUrl ici
  }

  // Reste des éléments et méthodes...
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

  // Méthode de login combinée
  async login(username: string, password: string) {
    await this.username(username);
    await this.password(password);
    await this.submit();
  }
}
