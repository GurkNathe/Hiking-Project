import React, { useReducer } from "react";
import axios from "axios";

import HikingReducer from "./hikingReducer";
import HikingContext from "./hikingContext";

import sortByHaversine from "../../scripts/hikeDataDistanceSort";

import { GET_TRAILS, GET_TRAIL, SET_LOADING } from "../types";

const HikingState = (props) => {
	const initialState = {
		trails: [],
		trail: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(HikingReducer, initialState);
	let sortedHikes = [];

	// Import Trails JSON file
	let trails_JSON = require("../../scripts/trails.json");

	// Get trails from database
	const getTrails = async (query) => {
		setLoading();

		try {
			//encodes address searched (for format reasons)
			const encodedAddress = encodeURI(query);

			// Make request to Google Maps API
			const res = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleApiKey}`
			);

			// Destructure latitude and longitude from JSON
			const { lat, lng } = res.data.results[0].geometry.location;

			// Invoke sortByHaversine and return an array of sorted hikes.
			sortedHikes = sortByHaversine(trails_JSON, lat, lng);

			// get data
			const data = sortedHikes.slice(0, 20);

			// TODO eventually -- load more data when bottom of page reached

			// dispatch GET_TRAILS to reducer with data
			dispatch({
				type: GET_TRAILS,
				payload: data,
			});
		} catch (error) {
			console.log(error);
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

	return (
		<HikingContext.Provider
			value={{
				trails: state.trails,
				trail: state.trail,
				loading: state.loading,
				getTrails,
				getTrail,
				setLoading,
			}}
		>
			{props.children}
		</HikingContext.Provider>
	);
};

export default HikingState;
