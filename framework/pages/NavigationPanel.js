class NavigationPanel {
  constructor(page) {
    this.page = page;
  }
  async reestr() {
    await this.page.click("text=Реестр учета сведений");
  }
}
module.exports = {
  NavigationPanel,
};
