import { save } from "../../storage/save";

export async function registerUser(user) {
	const response = await fetch(
		"https://nf-api.onrender.com/api/v1/auction/auth/register",
		{
			method: "POST",
			headers: {
				"Content-type": "application/json; charset=UFT-8",
			},
			body: JSON.stringify(user),
		}
	);
	if (response.ok) {
		let userData = await response.json();
		save(userData);
		location.reload();
	}
}
