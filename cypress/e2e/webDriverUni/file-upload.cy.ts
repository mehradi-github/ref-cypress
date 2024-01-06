/// <reference types="Cypress" />
describe("Test File Upload via webdriveruni", () => {
  beforeEach(() => {
    cy.navigateTo_Homepage();
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Upload a file ...", () => {
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click();
  });
  it("Upload No file...", () => {
    cy.get("#submit-button").click();
  });
});
