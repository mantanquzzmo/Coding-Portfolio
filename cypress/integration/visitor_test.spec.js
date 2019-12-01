describe("Visitor can see landing page", () => {
  it("visitor can see content when loading the page", () => {
    cy.visit("/");

    cy.get("nav")
      .should("contain", "PROJECTS")
      .and("contain", "PORTFOLIO")
      .and("contain", "EXPERIENCE")

    cy.get(".ui.main.container")
      .should("contain", "Hello World")
  });

  it("visitor can see content on projects page", () => {
    cy.visit("/");

    cy.get("nav").within(() => {
      cy.contains("PROJECTS").click();
    });

    cy.get(".ui.card").should("have.length", 3);

    cy.get(".ui.main.container")
      .should("contain", "My FizzBuzz")
      .and("contain", "Address Book")
      .and("contain", "BMI Calculator");
  });

  it('visitor can see content on experience page', () => {
    cy.visit("/");

    cy.get("nav").within(() => {
      cy.contains("EXPERIENCE").click();
    })

    cy.get(".ui.stackable.four.column.grid")
      .should("contain", "Built a sports hedging network")

  });
});
