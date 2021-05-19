// **********************************************************************************************************************
//     THIS IS NOT FUNCTIONAL RIGHT NOW. WE HAVE TO SET UP BILLING, WHICH WE'LL TALK ABOUT ANOTHER TIME IF WE WANT TO.
// **********************************************************************************************************************

axios = require("axios");

// Geocoding is translating an address into geographic co-ordinates.
class Geocode {
	// Declares Google API key.
	constructor() {
		this.API_KEY = "AIzaSyCjm4LPSkGhGQLRbEGazpLF9LK_mJPqqqU";
	}

	// Retrieves the co-ordinates of an address.
	async getLatitudeLongitude(zipcode) {
		try {
		} catch (err) {
			console.log(err.message);
		}
	}
}

export default Geocode;
