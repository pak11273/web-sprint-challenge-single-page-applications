describe("pizza form tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("should allow users to write special instructions", () => {
    const instructions = cy.get("textarea");
    instructions.should("exist");
    instructions.type("I don't want any salt on the pizza whatsoever!");
  });

  it("should allow multiple toppings to be selected", () => {
    const toppings1 = cy.get(".toppings > :nth-child(1) > input").check();
    const toppings2 = cy.get(".toppings > :nth-child(2) > input").check();
    const toppings3 = cy.get(".toppings > :nth-child(3) > input").check();
    const toppings4 = cy.get(".toppings > :nth-child(4) > input").check();

    toppings1.should("be.checked");
    toppings2.should("be.checked");
    toppings3.should("be.checked");
    toppings4.should("be.checked");
  });

  it("should be able to submit an order", () => {
    const btn = cy.get("button");
    btn.click();
  });
});
