import { save } from "../../storage/save";

export async function loginapi(user) {
	try {
		const response = await fetch(
			"https://nf-api.onrender.com/api/v1/auction/auth/login",
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
			save("token", userData.accessToken);
			save("userData", userData);
			location.reload();
		}
	} catch (error) {
		console.log(error);
	}
}
