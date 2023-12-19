/// <reference types="cypress" />

describe("Handle js alerts", () => {
  it("Confirm js alert contains the correct text", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1").click();

    cy.on("window:alert", (s) => {
      expect(s).to.equal("I am an alert box!");
    });
  });
  it.only("Validate js confirm alert box works correctly when clicking ok", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();

    cy.on("window:confirm", (s) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });
});
