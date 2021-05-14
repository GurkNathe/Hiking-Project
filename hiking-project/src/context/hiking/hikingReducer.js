import { GET_TRAILS, GET_TRAIL, SET_LOADING } from "../types";

const hikingReducer = (state, action) => {
	switch (action.type) {
		case GET_TRAILS:
			return {
				...state,
				loading: false,
				trails: action.payload,
			};
		case GET_TRAIL:
			return {
				...state,
				loading: false,
				trail: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return;
	}
};

export default hikingReducer;
