class Project {
  constructor(page) {
    this.page = page;
  }
  async selectionProject() {
    await this.page.click("text=КазаньКазаньregion >> svg");
    await this.page.click('li:has-text("Казань")');
  }
}
module.exports = {
  Project,
};
