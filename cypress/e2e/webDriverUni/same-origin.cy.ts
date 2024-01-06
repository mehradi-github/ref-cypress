/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe("contact-us form", () => {
  beforeEach(() => {});

  it("Validate visiting two diffrent domains via user actions", () => {
    cy.navigateTo_Homepage();
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
  it.only("Origin command", () => {
    cy.origin("https://www.bing.com", () => {
      cy.navigateTo_Homepage();
    });

    cy.origin("https://www.google.com", () => {
      cy.navigateTo_Homepage();
    });
  });
});
