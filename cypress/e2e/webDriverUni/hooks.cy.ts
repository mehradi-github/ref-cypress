/// <reference types="Cypress" />
describe("Test File Upload via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Check specific radio buttons", () => {
    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });
});
