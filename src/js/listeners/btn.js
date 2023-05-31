// Import
// Storage
import { cleanall } from "../storage/clean";
export const listenersbtn = (e) => {
	const event = e;
	console.log(event);
	document.querySelector("#btn-profile")?.addEventListener("click", () => {});
	document.querySelector("#btn--logout")?.addEventListener("click", () => {
		cleanall();
		location.reload();
	});
	document.querySelector("#btn--login")?.addEventListener("click", () => {
		console.log("click");
	});

	document.querySelector("#btn--home").addEventListener("click", () => {});
	document.querySelector("#btn--search").addEventListener("click", () => {
		document.querySelector("#nav-search").classList.toggle("invisible");
		document.querySelector("#nav-search").classList.toggle("visible");
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
