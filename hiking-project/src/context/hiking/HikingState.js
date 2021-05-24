import React, { useReducer } from "react";
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
	const getTrails = (query) => {
		setLoading();

		// query database
		console.log(query);

		//encodes address searched (for format reasons)
		var encodedAddress = encodeURI(query);
		console.log(encodedAddress);

		const axios = require('axios').default;

		var location = axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
			params: {
				address: encodedAddress,
				key: "AIzaSyCA6JrqRskg3S0_4l9-IxsfniZr3tLZiIk"
			}
		})
		.then(function(response){
			//gets latitude and longitude of searched place
			let latitude = response.data.results[0].geometry.location.lat;
			let longitude = response.data.results[0].geometry.location.lng;
			console.log(latitude);
			console.log(longitude);
			
			// Invoke sortByHaversine and return an array of sorted hikes.
			sortedHikes = sortByHaversine(trails_JSON, latitude, longitude);
			console.log(sortedHikes);

			// get data
			const data = sortedHikes.slice(0, 20);
			console.log(data);

			// TODO eventually -- load more data when bottom of page reached

			// dispatch GET_TRAILS to reducer with data
			dispatch({
				type: GET_TRAILS,
				payload: data,
			});
		})
		.catch(function(error){
			console.log(error);
		})
	}

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
