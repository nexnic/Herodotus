describe("template spec", () => {
	it("passes", () => {
		cy.visit("http://localhost:5172");
		cy.get("#btn--regUser").click();
		cy.get("input#form-register__name").type("testUser", { delay: 100 });
		cy.get("input#form-register__email").type("kent.erik.hole@outlook.com");
		cy.get("input#form-register__pwd").type("Wedside12!", { delay: 100 });
		cy.get("#form-register").submit();
	});
});
