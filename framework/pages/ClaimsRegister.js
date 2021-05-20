//Страница Реестр учета требований

//Запись реестра учета, клик по номеру

class ClaimsRegister {
  constructor(page) {
    this.page = page;
  }
  async selectionRegister() {
    await this.page.click("tr:nth-of-type(6) > td:nth-of-type(1)");
  }
}
module.exports = {
  ClaimsRegister,
};
