//Страница Реестр учета требований

//Запись реестра учета, клик по номеру

class ClaimsRegister {
  constructor(page) {
    this.page = page;
  }
  async selectionRegister() {
    await this.page.click("text=26");
  }
}
module.exports = {
  ClaimsRegister,
};
