import React, { useReducer } from "react";
import axios from "axios";

import HikingReducer from "./hikingReducer";
import HikingContext from "./hikingContext";

import sortByHaversine from "../../scripts/hikeDataDistanceSort";

import {
	GET_TRAILS,
	GET_TRAIL,
	SET_LOADING,
	SET_ALERT,
	CLEAR_ALERT,
} from "../types";

// TODO - use import syntax
require("dotenv").config({ path: "../../../.env" });

let googleApiKey;

// Checks if environment is production or development
if (process.env.NODE_ENV !== "production") {
	googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
} else {
	googleApiKey = process.env.GOOGLE_API_KEY;
}

const HikingState = (props) => {
	const initialState = {
		trails: [],
		trail: {},
		errors: ["hidden error today"],
		loading: false,
		alert: false,
	};

	const [state, dispatch] = useReducer(HikingReducer, initialState);
	let sortedHikes = [];

	// Import Trails JSON file
	let trails_JSON = require("../../scripts/trails.json");

	// index where data is retrieved from array
	let pointer = 0;

	// Get trails from database
	const getTrails = async (query) => {
		setLoading();
		clearAlert();

		try {
			//encodes address searched (for format reasons)
			const encodedAddress = encodeURI(query);

			// Make request to Google Maps API
			const res = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCA6JrqRskg3S0_4l9-IxsfniZr3tLZiIk`
			);

			if (res.data.status === "ZERO_RESULTS")
				throw new Error("No results found. Try a different location.");

			// Destructure latitude and longitude from JSON
			const { lat, lng } = res.data.results[0].geometry.location;

			// Invoke sortByHaversine and return an array of sorted hikes.
			sortedHikes = sortByHaversine(trails_JSON, lat, lng);

			// slice data from sorted hikes
			const data = sortedHikes.slice(pointer, pointer + 20);

			// TODO eventually -- load more data when bottom of page reached
			pointer += 20;

			// --- ERROR CHECKS TO IMPLEMENT ---
			// If latitude and longitude not within WA geometrical bounds, throw error.

			// dispatch GET_TRAILS to reducer with data
			dispatch({
				type: GET_TRAILS,
				payload: data,
			});
		} catch (error) {
			setAlert([error.message]);
		}
	};

	// Get individual trail from database
	const getTrail = (query) => {
		setLoading();

		// Search by name in JSON file for trail
		const data = trails_JSON.find((element) => element.name === query);

		if (data) {
			dispatch({
				type: GET_TRAIL,
				payload: data,
			});
		} else {
			throw new Error("Trail not found in database!");
		}
	};

	// Set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	// Set alert
	const setAlert = (alert) => dispatch({ type: SET_ALERT, payload: alert });

	// Clear alert
	const clearAlert = () => dispatch({ type: CLEAR_ALERT });

	return (
		<HikingContext.Provider
			value={{
				trails: state.trails,
				trail: state.trail,
				loading: state.loading,
				alert: state.alert,
				errors: state.errors,
				getTrails,
				getTrail,
				setLoading,
				setAlert,
				clearAlert,
			}}
		>
			{props.children}
		</HikingContext.Provider>
	);
};

export default HikingState;
