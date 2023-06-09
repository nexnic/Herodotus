export const templetprofile = (key) => {
	/**
	 * User Data
	 */
	const user = key;
	/**
	 * Get Element
	 */
	const header = document.querySelector("header");
	const main = document.querySelector("main");
	/**
	 * Clean Element
	 */
	header.innerHTML = "";
	main.innerHTML = "";

	/**
	 * Create Profile
	 */
	// Container
	const cardPro = document.createElement("div");
	const cardadvert = document.createElement("div");
	const cardbids = document.createElement("div");

	const profileName = document.createElement("h2");
	const profileBids = document.createElement("small");
	const profileEmail = document.createElement("small");

	/**
	 * Set Class
	 */

	// Card Profile
	cardPro.classList.add("card");
	// Card Advert
	cardadvert.classList.add("card");
	// Card Bids
	cardbids.classList.add("card");

	/**
	 * Set Attribit
	 */

	/**
	 * set innertext
	 */
	profileName.innerText = user.name;
	profileBids.innerText = user.credits;
	profileEmail.innerText = user.email;
	/**
	 * Append Element
	 */
	main.append(cardPro);
	cardPro.appendChild(profileName);
	cardPro.appendChild(profileBids);
	cardPro.appendChild(profileEmail);
	main.append(cardadvert);
	main.append(cardbids);
};
