import React, { useReducer } from "react";
import HikingReducer from "./hikingReducer";
import HikingContext from "./hikingContext";

import Trail from "../../scripts/trail.json";

import { GET_TRAILS, GET_TRAIL, SET_LOADING } from "../types";

import trails_JSON from "../../scripts/trails";

const HikingState = (props) => {
	const initialState = {
		trails: [],
		trail: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(HikingReducer, initialState);

	// Get trails from database
	const getTrails = (query) => {
		setLoading();

		// query database
		console.log(query);

		// get data
		var data = Trail.slice(0,25);

		// dispatch GET_TRAILS to reducer with data
		dispatch({
			type: GET_TRAILS,
			payload: data,
		});
	};

	// Get individual trail from database
	const getTrail = (query) => {
		setLoading();

		// get data
		const data = {
			elevation: { "Highest Point": "120 ft.", Gain: "120 ft." },
			name: "Luther Burbank Park",
			url: "http://www.wta.org/go-hiking/hikes/luther-burbank-park",
			coordinates: { lat: 47.589, lon: -122.227 },
			length: "3.0 miles",
			requiredPass: "None",
			features: [
				"Wildflowers/Meadows",
				"Dogs allowed on leash",
				"Good for kids",
				"Lakes",
				"Fall foliage",
				"Coast",
			],
		};

		// dispatch GET_TRAIL to reducer with data
		dispatch({
			type: GET_TRAIL,
			payload: data,
		});
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
