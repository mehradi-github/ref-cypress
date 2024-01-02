/// <reference types="Cypress" />
describe("Test Contact Us form via Automation Test Store", () => {
  before(() => {
    cy.fixture("userDetails").as("user");
  });
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("a[href$='contact']")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type(
      "Do you provide additional discount on bulk orders?"
    );
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.log("Test has completed!");
  });
});
