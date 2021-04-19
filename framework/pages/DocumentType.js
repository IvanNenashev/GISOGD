class DocumentType {
  constructor(page) {
    this.page = page;
  }
  //01.01
  async DocSTPRF() {
    await this.page.fill(
      'input[type="text"]',
      "Схема территориального планирования Российской Федерации"
    );
    await this.page.click(
      '"Схема территориального планирования Российской Федерации"'
    );
  }

  //02.01
  async DocGisogdSTP2SRF() {
    await this.page.fill(
      'input[type="text"]',
      "Схема территориального планирования двух и более субъектов Российской Федерации"
    );
    await this.page.click(
      '"Схема территориального планирования двух и более субъектов Российской Федерации"'
    );
  }
  //02.02
  async DocGisogdSTPSRF() {
    await this.page.fill(
      'input[type="text"]',
      "Схемы территориального планирования субъекта Российской Федерации"
    );
    await this.page.click(
      '"Схемы территориального планирования субъекта Российской Федерации"'
    );
  }
  //03/01
  async DocSTPMR() {
    await this.page.fill(
      'input[type="text"]',
      "Схема территориального планирования муниципального района"
    );
    await this.page.click(
      '"Схема территориального планирования муниципального района"'
    );
  }

  //03.02
  async DocGPLoc() {
    await this.page.fill('input[type="text"]', "Генеральный план поселения");
    await this.page.click('"Генеральный план поселения"');
  }
  //03.03
  async DocGP() {
    await this.page.fill(
      'input[type="text"]',
      "Генеральный план городского округа, муниципального округа"
    );
    await this.page.click(
      '"Генеральный план городского округа, муниципального округа"'
    );
  }
  //04.01
  async DocNGP() {
    await this.page.fill(
      'input[type="text"]',
      "Региональные нормативы градостроительного проектирования"
    );
    await this.page.click(
      '"Региональные нормативы градостроительного проектирования"'
    );
  }
  //04.02
  async DocNGPLoc() {
    await this.page.fill(
      'input[type="text"]',
      "Местные нормативы градостроительного проектирования поселения"
    );
    await this.page.click(
      '"Местные нормативы градостроительного проектирования поселения"'
    );
  }

  //04.03
  async DocNGPMR() {
    await this.page.fill(
      'input[type="text"]',
      "Местные нормативы градостроительного проектирования муниципального района"
    );
    await this.page.click(
      '"Местные нормативы градостроительного проектирования муниципального района"'
    );
  }

  //04.04
  async DocNGPGO() {
    await this.page.fill(
      'input[type="text"]',
      "Местные нормативы градостроительного проектирования городского округа, муниципального округа"
    );
    await this.page.click(
      '"Местные нормативы градостроительного проектирования городского округа, муниципального округа"'
    );
  }

  //05.01
  async DocPZZ() {
    await this.page.fill(
      'input[type="text"]',
      "Правила землепользования и застройки"
    );
    await this.page.click('"Правила землепользования и застройки"');
  }

  //06.01
  async DocBlagoRules() {
    await this.page.fill(
      'input[type="text"]',
      "Правила благоустройства территории"
    );
    await this.page.click('"Правила благоустройства территории"');
  }

  //07.01
  async DocPPT() {
    await this.page.fill('input[type="text"]', "Проект планировки территории");
    await this.page.click('"Проект планировки территории"');
  }

  //07.02
  async DocPMT() {
    await this.page.fill('input[type="text"]', "Проект межевания территории");
    await this.page.click('"Проект межевания территории"');
  }

  //08.01
  async DocEngIz() {
    await this.page.fill(
      'input[type="text"]',
      "Материалы и результаты инженерных изысканий"
    );
    await this.page.click('"Материалы и результаты инженерных изысканий"');
  }

  //09.01
  async DocArtZuRazresh() {
    await this.page.fill(
      'input[type="text"]',
      "Разрешение на создание искусственного земельного участка"
    );
    await this.page.click(
      '"Разрешение на создание искусственного земельного участка"'
    );
  }

  //13.01
  async DocGPZU() {
    await this.page.fill(
      'input[type="text"]',
      "Градостроительный план земельного участка"
    );
    await this.page.click('"Градостроительный план земельного участка"');
  }
}
module.exports = {
  DocumentType,
};
