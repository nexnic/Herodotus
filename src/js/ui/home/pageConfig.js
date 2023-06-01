import { save } from "../../storage/save";
import { changeTitle } from "../../tools/headtitle";
import { templetHeaderHome } from "../../templet/home/header";

export const HomeConfig = () => {
	save("page", "home");
	changeTitle("Herodotus | home");
	templetHeaderHome();
};
