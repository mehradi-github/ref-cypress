/// <reference types="cypress" />

describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
  beforeEach(() => {
    cy.navigateTo_Homepage();
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Select specific product via autocomplete list", () => {
    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const t = $el.text();
        const p = "Avacado";
        if (t === p) {
          $el.trigger("click");
          cy.get("#submit-button").click();
          cy.url().should("include", p);
        }
      })
      .then(() => {
        cy.get("#myInput").type("g");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const t = $el.text();
          const p = "Grapes";
          if (t === p) {
            $el.trigger("click");
            cy.get("#submit-button").click();
            cy.url().should("include", p);
          }
        });
      });
  });
});
