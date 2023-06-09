import { listingcardMini } from "../home/listings";

export const render = (key, element, newfunc) => {
	console.log(key, element, newfunc);
	let section = document.querySelector(`${element}`);
	section.append(
		...key.map((data) => {
			return listingcardMini(data);
		})
	);
};
