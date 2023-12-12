/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

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
  it.only("Get element by tag name, attribute and value, id, class, multiple classes, tow diffrent attribute and xpath", () => {
    // By tag name
    cy.get("textarea").type("By tag name");
    // By attribute and value
    cy.get("input[name='first_name']").type("By attribute and value");
    // By id
    cy.get("#contact_me").click();
    // By class
    cy.get(".navbar-header").then((e) => e.remove());
    // By multiple classes
    cy.get("[class='navbar navbar-inverse navbar-fixed-top']").then((e) =>
      e.remove()
    );
    // By tow diffrent attribute
    cy.get("[name='email'][placeholder='Email Address']").type(
      "By tow diffrent attribute"
    );
    // By xpath
    cy.xpath("//input[@name='first_name']").type("By xpath");
  });
});
