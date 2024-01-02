describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("multi-page testing", () => {
    cy.getBySel("Why Cypress?").click();
    cy.location("pathname").should("equal", "/");

    cy.getBySel("Overview").click();
    cy.location("pathname").should("equal", "/overview");
  });
  it("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getBySel("post-button").click();
  });
  it.only("grudges", () => {
    cy.contains(/add some grudges/i);

    cy.getBySel("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });
    cy.getBySel("grudge-input").within(() => {
      cy.get("input").type("Some grudge");
    });
    cy.getBySel("grudge-button").click({ force: true });

    cy.getBySel("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
    cy.getBySel("grudge-input").within(() => {
      cy.get("input").type("Some grudge");
    });
    cy.getBySel("grudge-button").click();

    cy.getBySel("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
      cy.get("li").its(0).should("contains.text", "Some grudge");
    });

    cy.getBySel("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);

      cy.get("li")
        .its(0)
        .within(() => {
          cy.getBySel("clear-grudge").click();
        });
      cy.get("li").should("have.length", 1);
    });
  });
});
