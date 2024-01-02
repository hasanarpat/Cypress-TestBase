const { default: ItemsAccordion } = require("@/app/components/Accordion");
const items = [
  {
    summary: "Fundamental 5) Command chaining & assertions",
    details: `After you get an element, you probably want to do something with that
  element, like make an assertion. You can to this by chaining on an assertion after
  getting an element. For example, get(h1).contains('text'). Cypress has various ways 
  of making an assertion *docs`,
    id: "5",
  },
  {
    summary: "Fundamental 6) Focussing on a single test",
    details: `You can use it.only() to run a single test`,
    id: "6",
  },
  {
    summary: "Fundamental 7) beforeEach",
    details: `You can use a beforeEach function to perform certain actions 
  prior to every test`,
    id: "7",
  },
  {
    summary: "Fundamental 8) Custom commands",
    details: `You aren't limited to just the cy.X commands, but you can create
  your own custom commands. You add your custom commands to cypress/support/commands.ts
  For example, you might add a custom command getData that gets an element by data-test`,
    id: "8",
  },
];
describe("example.cy.jsx", () => {
  it("playground", () => {
    cy.mount(<ItemsAccordion items={items} />);
    cy.getBySel("accordion-test").within(() => {
      cy.get('[data-test^="accordion-item"]').should("have.length", 4);
    });
    cy.contains(
      "After you get an element, you probably want to do something with that"
    ).should("not.be.visible");
    cy.getBySel("accordion-item-5").click();
    cy.contains(
      "After you get an element, you probably want to do something with that"
    ).should("be.visible");
  });
});
