import { load } from "../storage/load";
import home from "./home/index";

import { templetNav } from "../templet/nav/nav";

export const PageLocal = () => {
	const onSite = load("page");
	templetNav();
	if (!onSite || onSite == "home") {
		home();
	}
};
