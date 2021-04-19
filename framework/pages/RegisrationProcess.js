class RegistartionProcess {
  constructor(page) {
    this.page = page;
  }
  async AddDocument() {
    await this.page.click('"Добавить документ для размещения"');
  }
  async Countour() {
    await this.page.click('input[type="text"]');
    await this.page.waitForTimeout(200);
    await this.page.click("text=ОКТМО");
    await this.page.waitForTimeout(200);
    await this.page.click('input[name="oktmo"]');
    await this.page.waitForTimeout(200);
    await this.page.fill('input[name="oktmo"]', "92701000");
    await this.page.waitForTimeout(200);
    await this.page.click("text=Применить территорию");
    await this.page.waitForTimeout(200);
    await this.page.click("text=Далее");
    await this.page.waitForTimeout(200);
  }
}
module.exports = {
  RegistartionProcess,
};
