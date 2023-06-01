import { save } from "../../storage/save";
import { changeTitle } from "../../tools/headtitle";
import { templetHeaderHome } from "../../templet/home/header";
import { GetAllListings } from "../../api/listings/allListings";

export const HomeConfig = () => {
	save("page", "home");
	changeTitle("Herodotus | home");
	templetHeaderHome();
	GetAllListings();
};
