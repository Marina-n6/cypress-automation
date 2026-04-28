Cypress.Commands.add("search", (keyword) => {
  cy.get("#kw", { timeout: 10000 }).should("be.visible").clear().type(keyword);
  cy.get("#su").click();
});
