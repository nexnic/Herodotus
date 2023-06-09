import { save } from "../../storage/save";
import { changeTitle } from "../../tools/headtitle";
import { templetHeaderHome } from "../../templet/home/header";
import { GetAllListings } from "../../api/listings/allListings";

export const HomeConfig = () => {
	const selectmain = document.querySelector("main");
	selectmain.classList.add(
		"d-flex",
		"justify-content-center",
		"align-items-center",
		"flex-column",
		"gap-3",
		"pt-3"
	);
	save("page", "home");
	changeTitle("Herodotus | home");
	templetHeaderHome();
	GetAllListings();
};
