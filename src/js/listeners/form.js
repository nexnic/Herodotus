// Import
// Api
// Auth
import { loginapi } from "../api/auth/loginapi";
import { registerUser } from "../api/auth/register";
// Tools
// Validator
import { validMail } from "../tools/validator";
import { ValidPWD } from "../tools/validator";

export const formListener = (event) => {
	const target = event;
	console.log(target);
	// Login
	document
		.querySelector("form#form-login")
		.addEventListener("submit", (target) => {
			// Stop refreas
			target.preventDefault();
			console.log("login");
			const form = target.target;
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
	document
		.querySelector("form#form-register")
		.addEventListener("submit", (target) => {
			target.preventDefault();
			console.log("test");
			const form = target.target;
			const formFields = form.elements;

			const fullName = formFields[0].value;
			const email = formFields[1].value;
			const _pwd = formFields[2].value;

			console.log(email, _pwd, fullName);
			const validemail = validMail(email);
			const validpdw = ValidPWD(_pwd);
			console.log(validemail, validpdw);
			let jsonData = {
				name: fullName,
				email: email,
				password: _pwd,
			};

			if (validemail && validpdw) {
				registerUser(jsonData);
			}
		});
};
