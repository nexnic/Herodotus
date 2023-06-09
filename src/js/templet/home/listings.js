import { load } from "../../storage/load";

export const listingcardMini = (key) => {
	let bids = key.bids;
	let user = load("userData");

	const highestBid = bids.reduce((max, current) => {
		if (current.amount > max) {
			return current.amount;
		} else {
			return max;
		}
	}, -0);

	/**
	 * Create Element
	 */

	// Container
	const wrapper = document.createElement("div");
	const container = document.createElement("div");
	const top = document.createElement("div");
	const bottom = document.createElement("div");
	const details = document.createElement("div");
	const addBit = document.createElement("div");
	// BTN

	// Text
	const h5 = document.createElement("h4");
	const price = document.createElement("small");

	// Icon
	const handIcon = document.createElement("i");
	/**
	 * Set Class
	 */
	handIcon.classList.add("fa-solid", "fa-hand-holding-dollar");

	/**
	 * Style
	 */

	wrapper.style.width = "300px";
	wrapper.style.height = "500px";
	wrapper.style.borderRadius = "100px";
	container.style.height = "80%";
	container.style.width = "100%";
	top.style.height = "80%";
	top.style.width = "100%";
	bottom.style.width = "100%";
	bottom.style.height = "20%";
	bottom.style.backgroundColor = "#f9f9f9";
	handIcon.style.color = "black";

	/**
	 * Inner Text
	 */
	h5.innerText = key.title;
	price.innerText = highestBid;
	/**
	 * Media
	 */

	if (key.media) {
		top.style.backgroundImage = `url(${key.media[0]})`;
		top.style.backgroundSize = "cover";
	} else {
		top.style.backgroundImage = "url(../../public/image/no-image.jpg)";
		top.style.backgroundSize = "cover";
	}

	/**
	 * User Data
	 */
	if (user) {
		console.log("userData");
	} else {
		console.log("not login");
	}

	wrapper.appendChild(container);
	container.appendChild(top);
	container.appendChild(bottom);
	bottom.appendChild(details);
	details.appendChild(h5);
	details.appendChild(price);
	bottom.appendChild(addBit);
	addBit.appendChild(handIcon);

	return wrapper;
};
