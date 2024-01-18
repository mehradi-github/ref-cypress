import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe("contact-us form", () => {
  before(() => {
    cy.config("pageLoadTimeout", 20000);
    cy.viewport(550, 750);
  });
  beforeEach(() => {
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.navigateTo_Homepage();
    // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    // cy.visit(Cypress.env("homepage") + "/Contact-Us/contactus.html");
    const homepage_PO = new Homepage_PO();
    homepage_PO.visitHompage();
    cy.clearLocalStorage();
    cy.clearCookie();
    cy.wait(3000);
    homepage_PO.clickOn_ContactUs_Button();
  });
  it(
    "Should have `contact us` in title and url and check charset in document",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    () => {
      cy.document().should("have.property", "charset").and("eq", "UTF-8");
      cy.title().should("include", "WebDriver | Contact Us");
      cy.url().should("include", "contactus");
    }
  );

  it("Should able to submit a submission via conatct-us form", () => {
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("blogs");
    cy.get('[name="email"]').type("joe@test.com");
    cy.get("textarea.feedback-input").type("How do you It?");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should able to submit a submission via conatct-us form as all fields are required", () => {
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("blogs");
    cy.get("textarea.feedback-input").type("How do you It?");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
  it("Get element by tag name, attribute and value, id, class, multiple classes, tow diffrent attribute and xpath", () => {
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

describe("Validate webdriveruni homepage links", () => {
  it.only("Confirm links redirect to the correct pages", () => {
    if (Cypress.isBrowser("firefox")) {
      cy.log("Firefox");
    } else {
    }
    cy.navigateTo_Homepage();
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.reload();
    cy.url().should("include", "https://www.webdriveruniversity.com");

    cy.go("forward");
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Login-Portal");
    cy.go("back");
  });
});
