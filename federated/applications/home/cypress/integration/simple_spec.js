describe("My First Test", () => {
  it('clicks the link "type"', () => {
    // Go to the site
    cy.visit("http://localhost:8080/");

    // Go to checkout and click checkout to flush the list
    cy.get('a[href="/checkout"]').click();
    cy.get(".btn").first().click();

    // Go to the home page and click on the first button
    cy.contains("Home").click();
    cy.get(".btn").first().click();

    // Go to the search page and click on the first button
    cy.contains("Search").click();
    cy.get(".btn").first().click();

    // Go to checkout to make sure of the total
    cy.get('a[href="/checkout"]').click();
    cy.get("#total").should("contain", "$86");
  });
});
