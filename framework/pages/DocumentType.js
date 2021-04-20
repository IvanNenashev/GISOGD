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

  //09.02
  async DocArtZuRs() {
    await this.page.fill(
      'input[type="text"]',
      "Разрешение на проведение работ по созданию искусственного земельного участка"
    );
    await this.page.click(
      '"Разрешение на проведение работ по созданию искусственного земельного участка"'
    );
  }

  //09.03
  async DocArtZuRv() {
    await this.page.fill(
      'input[type="text"]',
      "Разрешение на ввод искусственно созданного земельного участка в эксплуатацию"
    );
    await this.page.click(
      '"Разрешение на ввод искусственно созданного земельного участка в эксплуатацию"'
    );
  }

  //10.01
  async DocZouitEstablish() {
    await this.page.fill(
      'input[type="text"]',
      "Решение об установлении зоны с особыми условиями использования территории"
    );
    await this.page.click(
      '"Решение об установлении зоны с особыми условиями использования территории"'
    );
  }

  //10.02
  async DocZouitEndExist() {
    await this.page.fill(
      'input[type="text"]',
      "Решение о прекращении существования зоны с особыми условиями использования территории"
    );
    await this.page.click(
      '"Решение о прекращении существования зоны с особыми условиями использования территории"'
    );
  }

  //12.01
  async DocWithdrawGos() {
    await this.page.fill(
      'input[type="text"]',
      "Решение об изъятии земельного участка для государственных нужд"
    );
    await this.page.click(
      '"Решение об изъятии земельного участка для государственных нужд"'
    );
  }

  //12.02
  async DocReservGos() {
    await this.page.fill(
      'input[type="text"]',
      "Решение о резервировании земель для государственных нужд "
    );
    await this.page.click(
      '"Решение о резервировании земель для государственных нужд"'
    );
  }

  //12.03
  async DocWithdrawMun() {
    await this.page.fill(
      'input[type="text"]',
      "Решение об изъятии земельного участка для муниципальных нужд"
    );
    await this.page.click(
      '"Решение об изъятии земельного участка для муниципальных нужд"'
    );
  }

  //12.04
  async DocReservMun() {
    await this.page.fill(
      'input[type="text"]',
      "Решение о резервировании земель для муниципальных нужд "
    );
    await this.page.click(
      '"Решение о резервировании земель для муниципальных нужд"'
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

  //13.02
  async DocHistoryExpertize() {
    await this.page.fill(
      'input[type="text"]',
      "Заключение государственной историко-культурной экспертизы"
    );
    await this.page.click(
      '"Заключение государственной историко-культурной экспертизы"'
    );
  }
  //13.03
  async DocZacEcological() {
    await this.page.fill(
      'input[type="text"]',
      "Заключение государственной экологической экспертизы"
    );
    await this.page.click(
      '"Заключение государственной экологической экспертизы"'
    );
  }

  //13.04
  async DocRS() {
    await this.page.fill('input[type="text"]', "Разрешение на строительство");
    await this.page.click('"Разрешение на строительство"');
  }

  //13.05
  async DocGisogdRSStop() {
    await this.page.fill(
      'input[type="text"]',
      "Решение о прекращении действия разрешения на строительство"
    );
    await this.page.click(
      '"Решение о прекращении действия разрешения на строительство"'
    );
  }

  //13.06
  async DocIZ() {
    await this.page.fill(
      'input[type="text"]',
      "Решение о внесении изменений в разрешение на строительство"
    );
    await this.page.click(
      '"Решение о внесении изменений в разрешение на строительство"'
    );
  }

  //13.07
  async DocAboutZakExpertize() {
    await this.page.fill(
      'input[type="text"]',
      "Сведения об экспертизе проектной документации"
    );
    await this.page.click('"Сведения об экспертизе проектной документации"');
  }

  //13.08
  async DocGisogdZacArchOKS() {
    await this.page.fill(
      'input[type="text"]',
      "Заключение о соответствии предмету охраны исторического поселения и установленным градостроительным регламентом требованиям к архитектурным решениям ОКС"
    );
    await this.page.click(
      '"Заключение о соответствии предмету охраны исторического поселения и установленным градостроительным регламентом требованиям к архитектурным решениям ОКС"'
    );
  }

  //13.09
  async DocShema() {
    await this.page.fill(
      'input[type="text"]',
      "Схема, отображающая расположение построенного, реконструированного ОКС, расположение сетей инженерно-технического обеспечения в границах ЗУ и планировочную организацию ЗУ"
    );
    await this.page.click(
      '"Схема, отображающая расположение построенного, реконструированного ОКС, расположение сетей инженерно-технического обеспечения в границах ЗУ и планировочную организацию ЗУ"'
    );
  }

  //13.10
  async DocOtchetEngIz() {
    await this.page.fill(
      'input[type="text"]',
      "Результаты инженерных изысканий "
    );
    await this.page.click('"Результаты инженерных изысканий "');
  }

  //13.11
  async DocOtclon() {
    await this.page.fill(
      'input[type="text"]',
      "Решение на отклонение от предельных параметров разрешенного строительства, реконструкции ОКС"
    );
    await this.page.click(
      '"Решение на отклонение от предельных параметров разрешенного строительства, реконструкции ОКС"'
    );
  }

  //13.12
  async DocUsRazresh() {
    await this.page.fill(
      'input[type="text"]',
      "Решение о предоставлении разрешения на условно разрешенный вид использования"
    );
    await this.page.click(
      '"Решение о предоставлении разрешения на условно разрешенный вид использования"'
    );
  }

  //13.13
  async DocActSootOksPd() {
    await this.page.fill(
      'input[type="text"]',
      "Акт, подтверждающий соответствие параметров построенного, реконструированного ОКС проектной документации, в том числе требованиям энергетической эффективности и требованиям оснащенности ОКС приборами учета используемых энергетических ресурсов "
    );
    await this.page.click(
      '"Акт, подтверждающий соответствие параметров построенного, реконструированного ОКС проектной документации, в том числе требованиям энергетической эффективности и требованиям оснащенности ОКС приборами учета используемых энергетических ресурсов "'
    );
  }

  //13.14
  async DocSootOKS() {
    await this.page.fill(
      'input[type="text"]',
      "Заключение органа государственного строительного надзора"
    );
    await this.page.click(
      '"Заключение органа государственного строительного надзора"'
    );
  }

  //13.16
  async DocEcologicalControl() {
    await this.page.fill(
      'input[type="text"]',
      "Заключение органа федерального государственного экологического надзора"
    );
    await this.page.click(
      '"Заключение органа федерального государственного экологического надзора"'
    );
  }

  //13.17
  async DocSootReqEnergyEfficiency() {
    await this.page.fill(
      'input[type="text"]',
      "Акт проверки соответствия многоквартирного дома требованиям энергетической эффективности с указанием класса его энергетической эффективности"
    );
    await this.page.click(
      '"Акт проверки соответствия многоквартирного дома требованиям энергетической эффективности с указанием класса его энергетической эффективности"'
    );
  }

  //13.18
  async DocRV() {
    await this.page.fill(
      'input[type="text"]',
      "Разрешение на ввод объекта в эксплуатацию"
    );
    await this.page.click('"Разрешение на ввод объекта в эксплуатацию"');
  }

  //13.19
  async DocTechPlan() {
    await this.page.fill(
      'input[type="text"]',
      "Технический план объекта капитального строительства"
    );
    await this.page.click(
      '"Технический план объекта капитального строительства"'
    );
  }

  //13.20
  async DocNotificationAboutBuilding() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление о планируемом строительстве или реконструкции объекта ИЖС или садового дома"
    );
    await this.page.click(
      '"Уведомление о планируемом строительстве или реконструкции объекта ИЖС или садового дома"'
    );
  }

  //13.21
  async DocNotificationAboutChangeParameter() {
    await this.page.fill(
      'input[type="text"]',
      " Уведомление об изменении параметров планируемого строительства или реконструкции объекта ИЖС или садового дома"
    );
    await this.page.click(
      '" Уведомление об изменении параметров планируемого строительства или реконструкции объекта ИЖС или садового дома"'
    );
  }

  //13.22
  async DocNotificationConstructionAllowed() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление о соответствии указанных в уведомлении о планируемом строительстве параметров объекта ИЖС или садового дома"
    );
    await this.page.click(
      '"Уведомление о соответствии указанных в уведомлении о планируемом строительстве параметров объекта ИЖС или садового дома"'
    );
  }

  //13.23
  async DocNotificationConstructionIsNotAllowed() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление о несоответствии указанных в уведомлении о планируемом строительстве параметров объекта ИЖС или садового дома"
    );
    await this.page.click(
      '"Уведомление о несоответствии указанных в уведомлении о планируемом строительстве параметров объекта ИЖС или садового дома"'
    );
  }

  //13.24
  async DocAppearDescript() {
    await this.page.fill(
      'input[type="text"]',
      "Описание внешнего облика объекта индивидуального жилищного строительства или садового дома"
    );
    await this.page.click(
      '"Описание внешнего облика объекта индивидуального жилищного строительства или садового дома"'
    );
  }

  //13.25
  async DocGisogdNotificationArchOKSAllowed() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление о соответствии описания внешнего облика объекта предмету охраны исторического поселения и установленным градостроительным регламентом требованиям к архитектурным решениям ОКС"
    );
    await this.page.click(
      '"Уведомление о соответствии описания внешнего облика объекта предмету охраны исторического поселения и установленным градостроительным регламентом требованиям к архитектурным решениям ОКС"'
    );
  }

  //13.26
  async DocGisogdNotificationArchOKSNotAllowed() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление о несоответствии описания внешнего облика объекта предмету охраны исторического поселения и установленным градостроительным регламентом требованиям к архитектурным решениям ОКС"
    );
    await this.page.click(
      '"Уведомление о несоответствии описания внешнего облика объекта предмету охраны исторического поселения и установленным градостроительным регламентом требованиям к архитектурным решениям ОКС"'
    );
  }

  //13.27
  async DocNotificationAboutEndBuilding() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление об окончании строительства"
    );
    await this.page.click("Уведомление об окончании строительства");
  }

  //13.28
  async DocNotificationEndConstructionAllowed() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление о соответствии построенных или реконструированных объекта ИЖС или садового дома"
    );
    await this.page.click(
      "Уведомление о соответствии построенных или реконструированных объекта ИЖС или садового дома"
    );
  }

  //13.29
  async DocNotificationEndConstructionIsNotAllowed() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление о несоответствии построенных или реконструированных объекта ИЖС или садового дома"
    );
    await this.page.click(
      "Уведомление о несоответствии построенных или реконструированных объекта ИЖС или садового дома"
    );
  }

  //13.30
  async DocNotificationAboutDemolition() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление о планируемом сносе ОКС"
    );
    await this.page.click("Уведомление о планируемом сносе ОКС");
  }

  //13.31
  async DemolitionResultsAndMaterials() {
    await this.page.fill(
      'input[type="text"]',
      "Результаты и материалы обследования ОКС, подлежащего сносу"
    );
    await this.page.click(
      "Результаты и материалы обследования ОКС, подлежащего сносу"
    );
  }

  //13.32
  async DemolitionProject() {
    await this.page.fill(
      'input[type="text"]',
      "Проект организации работ по сносу"
    );
    await this.page.click("Проект организации работ по сносу");
  }

  //13.33
  async DocDemolitionEnd() {
    await this.page.fill(
      'input[type="text"]',
      "Уведомление о завершении сноса"
    );
    await this.page.click("Уведомление о завершении сноса");
  }

  //13.34
  async DocAdressAccept() {
    await this.page.fill(
      'input[type="text"]',
      " Решение о присвоении, аннулировании изменении адреса"
    );
    await this.page.click(
      " Решение о присвоении, аннулировании изменении адреса"
    );
  }

  //13.35
  async DocResolutionUseLand() {
    await this.page.fill(
      'input[type="text"]',
      "Разрешение на использование земель или земельных участков"
    );
    await this.page.click(
      "Разрешение на использование земель или земельных участков"
    );
  }

  //13.36
  async ServDocAgreement() {
    await this.page.fill('input[type="text"]', "Соглашение о сервитуте");
    await this.page.click("Соглашение о сервитуте");
  }

  //13.37
  async ServDocAccept() {
    await this.page.fill(
      'input[type="text"]',
      "Решение об установлении публичного сервитута"
    );
    await this.page.click("Решение об установлении публичного сервитута");
  }

  //13.38
  async DocGisogdOtherDocuments13() {
    await this.page.fill('input[type="text"]', "Иные документы и материалы");
    await this.page.click("Иные документы и материалы");
  }
}

module.exports = {
  DocumentType,
};
