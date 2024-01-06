/// <reference types="Cypress" />
describe("Test Contact Us form via Automation Test Store", () => {
  before(() => {
    cy.fixture("userDetails").as("user");
  });
  beforeEach(() => {
    cy.navigateTo_Homepage();
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.get("@user").then((user) => {
      cy.get('[name="first_name"]').type(user.first_name);
      cy.get('[name="last_name"]').type(user.last_name);
      cy.get('[name="email"]').type(user.email);
    });
    cy.get("textarea.feedback-input").type("How can I learn Cypress?");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
});
