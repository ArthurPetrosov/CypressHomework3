import user from "../fixtures/user1.json";
import updatedUser from "../fixtures/user2.json";
import deleteUser from "../fixtures/user3.json";

describe("user store api", () => {
  it("Should create a user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: user,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls(user);
    });
  });

  it("Should update a user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: user,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
    cy.request({
      method: "PUT",
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
      body: updatedUser,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${updatedUser.username}`,
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls(updatedUser);
    });
  });

  it("Should delete a user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: deleteUser,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
    cy.request({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/user/${deleteUser.username}`,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
  });
});