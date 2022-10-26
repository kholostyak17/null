/// <reference types="cypress" />

describe("Product List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/BC3pESqzrm3o5sSlm2Hon"); //TODO: Use mock data
  });

  it("The page can be opened", () => {
    cy.contains("Options");
  });

  it("Can see the price", () => {
    cy.get('[class="price"]');
  });

  it("Can buy a product and remove it from the cart", () => {
    if (cy.get('[class="price"]')) {
      cy.contains("BUY").click();
      cy.get('[class="items-count"]').contains(1);
      cy.get('[class="items-count"]').contains(1).click();
    }
  });

  it("Can go back to the list using the breadcrumb", () => {
    cy.get('[class="breadcrumb-link"]').click();
    cy.get('[placeholder="Type to search..."]');
  });
});
