/// <reference types="cypress" />

describe("Handle js alerts", () => {
  it("Confirm js alert contains the correct text", () => {
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1").click();

    cy.on("window:alert", (s) => {
      expect(s).to.equal("I am an alert box!");
    });
  });
  it("Validate js confirm alert box works correctly when clicking ok", () => {
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();

    cy.on("window:confirm", (s) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });
  it.only("Validate js confirm alert box works correctly when clicking cancel", () => {
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();

    cy.on("window:confirm", (s) => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });
});
