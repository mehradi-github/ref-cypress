/// <reference types="cypress"/>

describe("Post Request", () => {
  it("Create a new post via /posts api", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: "Test 1",
        author: "Alex",
      },
    }).then((res) => {
      expect(res.status).to.eql(201);
    });
  });
  it("Validate title of latest post after recive status code 201", () => {
    let arr = new Array();
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/,json",
      },
    })
      .then((res) => {
        let body = JSON.parse(JSON.stringify(res.body));
        body.forEach((item) => {
          arr.push(item["title"]);
        });
      })
      .then(() => {
        let latestItem = arr[arr.length - 1];
        expect(latestItem).to.eql("Test 1");
      });
  });
});
