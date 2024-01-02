describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("Contains correct header text", () => {
    cy.getBySel("fundamentals-header")
      .should("be.visible")
      .contains(/Testing Fundamentals/i);
    cy.getBySel("fundamentals-header").should("be.visible");
    // cy.containsRegex(
    //   cy.getBySel("fundamentals-header"),
    //   "Testing Fundamentals"
    // );
  });
  it("Checks accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
