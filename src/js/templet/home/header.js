export const templetHeaderHome = () => {
	// Select Element
	// header
	const header = document.querySelector("header");
	// Create Element
	// container
	const container = document.createElement("div");
	// Logo content
	const logoBox = document.createElement("div");
	// Text Content
	const textBox = document.createElement("div");
	// Logo Image
	const imgLogo = document.createElement("img");
	// Headline
	const h1 = document.createElement("h1");
	const headMain = document.createElement("span");
	const headSub = document.createElement("span");
	const br = document.createElement("br");

	// Register Button
	const regBtn = document.createElement("button");
	// Set Attribut
	// Register Button
	// ID
	regBtn.setAttribute("id", "register-btn__header");
	// Type
	regBtn.setAttribute("type", "button");
	// Set Class
	// header
	header.classList.add("d-flex", "justify-content-center");
	// Container
	container.classList.add(
		"d-flex",
		"flex-column",
		"justify-content-center",
		"w-75",
		"bg-primary",
		"p-3"
	);
	textBox.classList.add("text-center", "pt-2");
	// Register button
	regBtn.classList.add("btn");
	// Set Text
	headMain.innerText = "Herodotus";
	headSub.innerText =
		"Welcome to our auction website, where you can buy and sell a wide range of products and services through a transparent and competitive bidding process.";
	regBtn.innerText = "register";

	// AppendChild
	header.appendChild(container);
	container.appendChild(logoBox);
	container.appendChild(textBox);
	textBox.appendChild(imgLogo);
	textBox.appendChild(h1);
	h1.appendChild(headMain);
	h1.appendChild(br);
	h1.appendChild(headSub);

	container.appendChild(regBtn);
};
