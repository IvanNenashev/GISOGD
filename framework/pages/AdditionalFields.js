class AdditionalFields {
  constructor(page) {
    this.page = page;
  }
  //01.01 Наименование схемы
  async nameschema() {
    await this.page.click("div:nth-of-type(7) .field");
    await this.page.click(
      "text=Федеральный транспорт (железнодорожный, воздушный, морской, внутренний водный, т"
    );
    await this.page.click("text=Оборона страны и безопасность государства");
    await this.page.click("text=Энергетика");
    await this.page.click("text=Высшее образование");
    await this.page.click("text=Здравоохранение");
  }
  //13.01 Земельный участок
  async zu() {
    await this.page.fill("div:nth-of-type(8) .field", "16:50:220734:4");
    await this.page.click("text=Земельный участок №16:50:220734:4");
  }
  //13.01 Действует до
  async dateaction(date) {
    await this.page.fill(':nth-match(input[type="date"], 2)', date);
  }

  //Поселение
  async settlement() {
    await this.page.click("div:nth-of-type(8) .field");
    await this.page.click('"тест Городское поселение"');
  }

  //Вид изученности
  async typestudy() {
    await this.page.click("div:nth-of-type(7) .field");
    await this.page.click(
      "text=Локальный мониторинг компонентов окружающей среды"
    );
    await this.page.click("div:nth-of-type(7) .field");
  }
  //Организация выполнившая подготовку
  async organizationtraining() {
    await this.page.click("div:nth-of-type(8) .field");
    await this.page.click(':nth-match(:text("Gems"), 2)');
  }

  //Исскуственный ЗУ
  async addzu() {
    await this.page.click('a:has-text("Добавить")');
    await this.page.click("div:nth-of-type(8) .field");
    await this.page.click("text=Искусственно создаваемый ЗУ");
  }
}
module.exports = {
  AdditionalFields,
};
