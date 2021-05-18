import React, { useReducer } from "react";
import HikingReducer from "./hikingReducer";
import HikingContext from "./hikingContext";

import { GET_TRAILS, GET_TRAIL, SET_LOADING } from "../types";

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
		const data = [
			{
				elevation: { "Highest Point": "120 ft.", Gain: "120 ft." },
				name: "Luther Burbank Park",
				url: "http://www.wta.org/go-hiking/hikes/luther-burbank-park",
				coordinates: { lat: "47.5890", lon: "-122.2270" },
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
			},
			{
				elevation: { "Highest Point": "4857 ft.", Gain: "1800 ft." },
				name: "Gem Lake",
				url: "http://www.wta.org/go-hiking/hikes/gem-lake",
				coordinates: { lat: "47.4453", lon: "-121.4235" },
				length: "10.0 miles",
				requiredPass: "Northwest Forest Pass",
				features: [
					"Wildflowers/Meadows",
					"Mountain views",
					"Dogs allowed on leash",
					"Good for kids",
					"Lakes",
					"Fall foliage",
				],
			},
			{
				elevation: { "Highest Point": "3780 ft.", Gain: "1220 ft." },
				name: "Talapus and Olallie Lakes",
				url: "http://www.wta.org/go-hiking/hikes/talapus-lake",
				coordinates: { lat: "47.4007", lon: "-121.5190" },
				length: "6.2 miles",
				requiredPass: "Northwest Forest Pass",
				features: [
					"Mountain views",
					"Wildlife",
					"Dogs allowed on leash",
					"Old growth",
					"Good for kids",
					"Lakes",
					"Fall foliage",
				],
			},
			{
				elevation: { "Highest Point": "6856 ft.", Gain: "2900 ft." },
				name: "Norse Peak",
				url: "http://www.wta.org/go-hiking/hikes/norse-peak",
				coordinates: { lat: "46.9644", lon: "-121.4829" },
				length: "10.0 miles",
				requiredPass: "Northwest Forest Pass",
				features: [
					"Wildflowers/Meadows",
					"Mountain views",
					"Wildlife",
					"Summits",
					"Dogs allowed on leash",
				],
			},
			{
				elevation: { "Highest Point": "4600 ft.", Gain: "1600 ft." },
				name: "Rachel Lake",
				url: "http://www.wta.org/go-hiking/hikes/rachel-lake",
				coordinates: { lat: "47.4012", lon: "-121.2848" },
				length: "8.0 miles",
				requiredPass: "Northwest Forest Pass",
				features: [
					"Ridges/passes",
					"Lakes",
					"Wildflowers/Meadows",
					"Mountain views",
					"Dogs allowed on leash",
					"Established campsites",
					"Waterfalls",
					"Old growth",
					"Fall foliage",
				],
			},
			{
				elevation: { "Highest Point": "4600 ft.", Gain: "3300 ft." },
				name: "Blanca Lake",
				url: "http://www.wta.org/go-hiking/hikes/blanca-lake",
				coordinates: { lat: "47.9154", lon: "-121.3124" },
				length: "7.5 miles",
				requiredPass: "Northwest Forest Pass",
				features: [
					"Mountain views",
					"Dogs allowed on leash",
					"Established campsites",
					"Waterfalls",
					"Old growth",
					"Summits",
					"Lakes",
				],
			},
		];

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
