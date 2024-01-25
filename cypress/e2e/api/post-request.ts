/// <reference types="cypress"/>

describe("Post Request", () => {
  it("Create a new post via /posts api", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: " Test 1",
        author: "Alex",
      },
    }).then((res) => {
      expect(res.status).to.eql(201);
    });
  });
});
