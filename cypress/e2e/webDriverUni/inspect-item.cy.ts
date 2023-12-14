/// <reference types="cypress"/>

describe("Inspect Automation Test Store items using chain of commands", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });
  it("Click on the first item using item header", () => {
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click();
  });
  it("Click on the first item using item text", () => {
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });
  it("Click on the first item using item index", () => {
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });

  it.only("Add specific product to basket", () => {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo"))
        cy.wrap($el)
          .click()
          .then(($e) => {
            cy.wrap($e).get(".cart").click();
          });
    });
  });
});
