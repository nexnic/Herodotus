// Import
// Api
// Auth
import { loginapi } from "../api/auth/loginapi";
// Tools
// Validator
import { validMail } from "../tools/validator";
import { ValidPWD } from "../tools/validator";

export const formListener = (e) => {
	const event = e;
	console.log(event);
	// Login
	document
		.querySelector("form#form-login")
		.addEventListener("submit", (event) => {
			// Stop refreas
			event.preventDefault();

			const form = event.target;
			const formFields = form.elements;
			const email = formFields[0].value;
			const _pwd = formFields[1].value;
			const validemail = validMail(email);
			const validpdw = ValidPWD(_pwd);

			let jsonData = {
				email: email,
				password: _pwd,
			};

			if (validemail && validpdw) {
				loginapi(jsonData);
			}
		});

	document.querySelector("#btn-profile").addEventListener("click", () => {
		console.log("click");
	});
};
