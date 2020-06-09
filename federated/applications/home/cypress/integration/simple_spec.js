describe("My First Test", () => {
  it('clicks the link "type"', () => {
    cy.visit("http://localhost:8080/");

    cy.contains("Search").click();
    cy.contains("Checkout").click();
  });
});
