// Import
// Storage
import { cleanall } from "../storage/clean";
export const listenersbtn = (e) => {
	const event = e;
	console.log(event);
	document.querySelector("#btn-profile")?.addEventListener("click", () => {});
	document.querySelector("#btn--logout")?.addEventListener("click", (event) => {
		event.preventDefault();
		cleanall();
		location.reload();
	});
	document.querySelector("#btn--login")?.addEventListener("click", () => {
		console.log("click");
	});

	document.querySelector("#btn--home").addEventListener("click", () => {
		console.log("click");
	});
	document.querySelector("#btn--search").addEventListener("click", () => {
		console.log("click");
	});
	document.querySelector("#btn-add").addEventListener("click", () => {
		console.log("click");
	});
	document.querySelector("#btn--filter").addEventListener("click", () => {
		console.log("click");
	});
	document.querySelector("#btn-users").addEventListener("click", () => {
		console.log("click");
	});
};
