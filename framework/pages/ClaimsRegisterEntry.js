//Запись реестра учета требований

class ClaimsRegisterEntry {
  constructor(page) {
    this.page = page;
  }
  async placementProcess() {
    await this.page.click("text=К процессу размещения");
  }
}
module.exports = {
  ClaimsRegisterEntry,
};
