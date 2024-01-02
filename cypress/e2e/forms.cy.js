describe("Test forms work correctly", () => {
  it("tests form to submition", () => {
    cy.visit("/forms");
    cy.contains(/Successfully subbed: blabla@bla.com!/i).should("not.exist");
    cy.getBySel("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("blabla@bla.com");
    cy.getBySel("subscribe-button").click();
    cy.contains("Successfully subbed: blabla@bla.com!").should("exist");
    cy.wait(3000);

    cy.contains("Invalid email: blabla@bla.io!").should("not.exist");
    cy.get("@subscribe-input").type("blabla@bla.io");
    cy.getBySel("subscribe-button").click();

    cy.contains("Invalid email: blabla@bla.io!").should("exist");
  });
});
