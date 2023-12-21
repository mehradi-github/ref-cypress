/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
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
  it.only("Validate the states of specific radio buttons", () => {
    cy.get("[value='lettuce']").as("lettuce");
    cy.get("[value='pumpkin']").as("pumpkin");

    cy.get("@lettuce").should("not.be.checked");
    cy.get("@pumpkin").should("be.checked");

    cy.get("@lettuce").check();

    cy.get("@lettuce").should("be.checked");
    cy.get("@pumpkin").should("not.be.checked");
    cy.get("[value='cabbage'").should("be.disabled");
  });
});
