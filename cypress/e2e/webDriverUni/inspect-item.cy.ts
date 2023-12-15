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

  it("Add specific product to basket", () => {
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

  it("Validate product thumbnail", () => {
    cy.get(".thumbnail").as("p");
    cy.get("@p").should("have.length", 16);
    cy.get("@p")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total of normal and sale products", () => {
    const expectedValue = 660.5;
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    let p1 = cy.get("@itemPrice").then(($t) => $t.split("$"));
    let p2 = cy.get("@saleItemPrice").then(($t) => $t.split("$"));

    Promise.all([p1, p2]).then((v) => {
      const total = v.flat().reduce((a, b) => +a + +b, 0);
      expect(total).to.equal(expectedValue);
    });
  });
});
