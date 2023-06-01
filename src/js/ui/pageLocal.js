import { load } from "../storage/load";

export const PageLocal = () => {
	const UserLogin = load("token");
	console.log(UserLogin);
	const onSite = load("page");

	if (onSite == "home") {
		console.log("home");
	} else {
		console.log("missing data");
	}
};
