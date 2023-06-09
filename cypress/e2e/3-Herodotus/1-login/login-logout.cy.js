describe("template spec", () => {
	it("passes", () => {
		cy.visit("http://localhost:5172");
		cy.wait(400);
		cy.get("#btn--login").click();
		cy.get("input#form-login__email").type("nexnic@noroff.no", { delay: 100 });
		cy.get("input#form-login__password").type("Wedside12!", { delay: 200 });
		cy.get("#form-login").submit();
		cy.wait(1000);
		cy.get("#btn--logout").click();
	});
});
