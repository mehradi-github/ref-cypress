/// <reference types="cypress"/>

describe("Add multiple items to basket", () => {
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });
});
