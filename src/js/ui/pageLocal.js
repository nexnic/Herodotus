import { load } from "../storage/load";
import { save } from "../storage/save";
import { changeTitle } from "../tools/headtitle";
import { templetNav } from "../templet/nav/nav";
import { templetHeaderHome } from "../templet/home/header";

export const PageLocal = () => {
	const onSite = load("page");
	templetNav();
	if (!onSite || onSite == "home") {
		save("page", "home");
		changeTitle("Herodotus | home");
		templetHeaderHome();
	}
};
