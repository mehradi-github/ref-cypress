/// <reference types="cypress"/>

describe("Get Request", () => {
  it("Validate status code of the /posts api", () => {
    let result = cy.request("http://localhost:3000/posts");
    result.its("status").should("equal", 200);
  });
});
