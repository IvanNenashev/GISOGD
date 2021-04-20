const { MainPage } = require("../framework");
const { webkit, chromium, firefox } = require("playwright");
const { NavigationPanel } = require("../framework/pages/NavigationPanel");
const { Project } = require("../framework/pages/project");
const { ClaimsRegister } = require("../framework/pages/ClaimsRegister");
const {
  ClaimsRegisterEntry,
} = require("../framework/pages/ClaimsRegisterEntry");
const {
  RegistartionProcess,
} = require("../framework/pages/RegisrationProcess");
const { DocumentType } = require("../framework/pages/DocumentType");
const { BaseFields } = require("../framework/pages/BaseFields");
const { AdditionalFields } = require("../framework/pages/AdditionalFields");
const { Buttons } = require("../framework/pages/Buttons");

describe("13.08", function () {
  let browser = null;
  let page = null;

  beforeEach(async () => {
    browser = await firefox.launch({
      headless: false,
    });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("http://alfa-gisogd.gemsdev.ru:8000");
  });

  afterEach(async () => {
    await browser.close();
  });

  it("13.08", async function () {
    const mainPage = new MainPage(page);
    await mainPage.login("Inenashev", "9Rota73420!");
    const navigationPanel = new NavigationPanel(page);
    const project = new Project(page);
    const claimRegister = new ClaimsRegister(page);
    const claimRegisterEntry = new ClaimsRegisterEntry(page);
    const registrationProcess = new RegistartionProcess(page);
    const documentType = new DocumentType(page);
    const baseFields = new BaseFields(page);
    const buttons = new Buttons(page);
    const additionFields = new AdditionalFields(page);
    await project.selectionProject(); //Выбор проекта
    await navigationPanel.reestr(); //Панель навигации - реестр
    await claimRegister.selectionRegister(); //Номер записи учета требований
    await claimRegisterEntry.placementProcess(); //К процессу размещения
    await registrationProcess.AddDocument(); //Добавить документ
    await documentType.DocGisogdZacArchOKS();
    await baseFields.base("13.08", "2011-01-31");
    await additionFields.zuadd();

    await buttons.next();
    await registrationProcess.Countour();
    await buttons.done();
    await browser.close();
  });
});
