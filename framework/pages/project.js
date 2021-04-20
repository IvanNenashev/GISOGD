class Project {
  constructor(page) {
    this.page = page;
  }
  async selectionProject() {
    await this.page.click('[data-v-45ad4d82][width="20"]');
    await this.page.click('li:has-text("Казань")');
  }
}
module.exports = {
  Project,
};
