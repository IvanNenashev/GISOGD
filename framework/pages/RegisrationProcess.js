class RegistartionProcess {
  constructor(page) {
    this.page = page;
  }
  async AddDocument() {
    await this.page.click(".button-new-doc");
  }
  async Countour() {
    await this.page.click(".dropdown__input--pointer");
    await this.page.waitForTimeout(500);
    await this.page.click("text=ОКТМО");
    await this.page.waitForTimeout(500);
    await this.page.click("id=oktmo");
    await this.page.waitForTimeout(500);
    await this.page.fill("id=oktmo", "92701000");
    await this.page.waitForTimeout(500);

    await this.page.click('"Применить территорию"');

    await this.page.waitForTimeout(300);
    await this.page.click("text=Далее");
    await this.page.waitForTimeout(200);
  }

  async next() {
    await this.page.waitForTimeout(300);
    await this.page.click("text=Далее");
    await this.page.waitForTimeout(300);
  }
}
module.exports = {
  RegistartionProcess,
};
