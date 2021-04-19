class Buttons {
  constructor(page) {
    this.page = page;
  }
  async next() {
    await this.page.click("text=Далее");
  }
  async done() {
    await this.page.waitForTimeout(1000);
    await this.page.click('"Разместить в ГИСОГД"');
    await this.page.waitForTimeout(1000);
  }
}
module.exports = {
  Buttons,
};
