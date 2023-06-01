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
	container.classList.add("d-flex", "justify-content-center", "w-75");

	// AppendChild
	header.appendChild(container);
	container.appendChild(logoBox);
	container.appendChild(textBox);
	container.appendChild(regBtn);
};
