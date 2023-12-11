/// <reference types="cypress"/>

describe("contact-us form", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
  });
  it("Should able to submit a submission via conatct-us form", () => {
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("blogs");
    cy.get('[name="email"]').type("joe@test.com");
    cy.get("textarea.feedback-input").type("How do you It?");
    cy.get('[type="submit"]').click();
  });

  it("Should able to submit a submission via conatct-us form as all fields are required", () => {
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("blogs");
    cy.get("textarea.feedback-input").type("How do you It?");
    cy.get('[type="submit"]').click();
  });
});
