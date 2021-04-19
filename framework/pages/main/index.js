class MainPage {
  constructor(page) {
    this.page = page;
  }
  async login(username, password) {
    await this.page.click("text=Geometa");
    await this.page.fill('[placeholder="Логин"]', username);
    await this.page.fill('[placeholder="Пароль"]', password);
    await this.page.click("text=Войти");
  }
}
module.exports = {
  MainPage,
};
