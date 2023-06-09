import { save } from "../../storage/save";
import { load } from "../../storage/load";
import { changeTitle } from "../../tools/headtitle";

export const userConfig = () => {
	const user = load("userData");
	save("page", "userprofile");
	changeTitle(`Herodotus |Profile | ${user.name} `);

	document.querySelector("main").innerHTML = "";
};
