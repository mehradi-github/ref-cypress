/// <reference types="cypress"/>

describe("Get Request", () => {
  it("Validate status code of the /posts api", () => {
    let result = cy.request("http://localhost:3000/posts");
    result.its("status").should("equal", 200);
  });
  it("Validate /posts api contains the correct keys and values", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      let body = JSON.parse(JSON.stringify(res.body));
      cy.log(body);
      expect(body[0]).has.property("title", "Example Json Server");
      expect(body[1]).has.property("author", "Joe Blogs");
    });
  });
});
