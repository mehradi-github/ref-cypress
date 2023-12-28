/// <reference types="Cypress" />
describe("Test File Upload via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Upload a file ...", () => {
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click();
  });
});
