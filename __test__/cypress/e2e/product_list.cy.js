/// <reference types="cypress" />

describe("Product List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("The page can be opened", () => {
    cy.contains("Smartphones");
  });

  it("Can search a specific product", () => {
    cy.get('[placeholder="Type to search..."]').type("alcatel");
    cy.contains("alcatel");
    cy.contains("acer").should("not.exist");

    cy.get('[placeholder="Type to search..."]').clear();
    cy.get('[placeholder="Type to search..."]').type("Acer");
    cy.contains("Acer");
    cy.contains("alcatel").should("not.exist");
  });

  it("Can filter the products", () => {
    if (
      !cy.contains("Ascending").should("not.exist") ||
      !cy.contains("model").should("not.exist")
    ) {
      cy.contains("Reset filter").click();
    }
    cy.contains("model");
    cy.contains("Ascending");
    cy.contains("Reset filter").should("not.exist");

    cy.get("select").first().select("price");
    cy.get("select").first().should("have.value", "price");
    cy.get("select").last().select("descending");
    cy.get("select").last().should("have.value", "descending");
    cy.contains("Reset filter").click();

    cy.get("select").first().select("model");
    cy.get("select").first().should("have.value", "model");
    cy.get("select").last().select("ascending");
    cy.get("select").last().should("have.value", "ascending");
    cy.contains("Reset filter").should("not.exist");
  });

  it("Can toggle the list layout between list and grid", () => {
    cy.get('[class="item-grid"]');
    cy.get('[class="item-list"]').should("not.exist");
    cy.get('[src="icons/list.svg"]').click();
    cy.get('[class="item-list"]');
    cy.get('[class="item-grid"]').should("not.exist");
  });

  it("Can redirect to the Product Details page", () => {
    cy.get('[class="item-grid"]').first().click();
    cy.contains("Options");
  });
});
