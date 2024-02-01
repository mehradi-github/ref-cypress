/// <reference types="cypress" />

describe("Signup Test", () => {
  // Repo: https://github.com/juice-shop/juice-shop
  let randomString = Math.random().toString(36).substring(2);
  const email = "auto_" + randomString + randomString + "@gmail.com";
  const password = "Password1";
  const securityAnswer = "Hello world";

  describe("UI tests", () => {
    beforeEach(() => {
      cy.log("Email: " + email);
      cy.log("Password: " + password);
      cy.visit("http://localhost:3000/#/");
      cy.get(".cdk-overlay-backdrop").click(-50, -50, { force: true });
      cy.get("#navbarAccount").click();
      cy.get("#navbarLoginButton").click();
    });

    it("Test valid signup", () => {
      cy.get("#newCustomerLink")
        .contains("Not yet a customer?")
        .click({ force: true });
      cy.get("#emailControl").type(email);
      cy.get("#passwordControl").type(password);
      cy.get("#repeatPasswordControl").type(password);
      cy.get(
        ".mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
      ).click();
      cy.get("#mat-option-3 > .mat-option-text").click();
      cy.get("#securityAnswerControl").type(securityAnswer);
      cy.get("#registerButton").click();
      cy.get(".mat-snack-bar-container").contains(
        "Registration completed successfully."
      );
    });
  });
});
