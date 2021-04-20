class BaseFields {
  constructor(page) {
    this.page = page;
  }
  async base(number, date) {
    //Статус действия
    await this.page.click(
      'text=Статус действияДействующийНедействующий >> input[type="text"]'
    );
    await this.page.click("text=Действующий");
    //Наименование документа
    await this.page.fill(
      '[title="Наименование документа"] > .field',
      "Тест поле Наименование"
    );
    //Номер документа
    await this.page.fill("div:nth-child(3) .field", number);
    //Дата документа
    await this.page.fill('input[type="date"]', date);
    //Наименование органа, утвердившего документа
    await this.page.click("div:nth-of-type(5) .field");
    await this.page.click("div:nth-of-type(5) li:nth-of-type(2)");
    //Прдыдущая версия документа
    await this.page.click("div:nth-of-type(6) .field");
    const version = await this.page.$("div:nth-of-type(6) li:nth-of-type(1)");
    if (version) {
      await this.page.click("div:nth-of-type(6) li:nth-of-type(1)");
    } else;
  }
}
module.exports = {
  BaseFields,
};
