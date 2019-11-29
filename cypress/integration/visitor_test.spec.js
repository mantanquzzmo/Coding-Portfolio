describe("Visitor can see landing page", () => {
  it("visitor can see content when loading the page", () => {
    cy.visit("/");
  });
});
