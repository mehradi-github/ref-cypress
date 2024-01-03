/// <reference types="Cypress" />
describe("Test Contact Us form via Automation Test Store", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.fixture("userDetails").as("user");
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.get("@user").then((user) => {
      cy.ContactForm_Submission(
        user.first_name,
        user.last_name,
        user.email,
        "How can I learn Cypress?",
        "h1",
        "Thank You for your Message!"
      );
    });
  });
  it.only("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.get("@user").then((user) => {
      cy.ContactForm_Submission(
        user.first_name,
        user.last_name,
        " ",
        "How can I learn Cypress?",
        "body",
        "Error: Invalid email address"
      );
    });
  });
});
