import { save } from "../../storage/save";
import { render } from "../../templet/render/render";
export async function GetAllListings() {
	try {
		const response = await fetch(
			"https://nf-api.onrender.com/api/v1/auction/listings?&_active=true&_seller=true&_bids=true",
			{
				method: "GET",
				headers: {
					"Content-type": "application/json; charset=UFT-8",
				},
			}
		);
		if (response.ok) {
			const data = await response.json();
			save("listings", data);
			render(data, "main", "listingCard");
		}
	} catch (error) {
		console.log(error);
	}
}
