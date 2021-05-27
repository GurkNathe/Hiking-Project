import {
	GET_TRAILS,
	GET_TRAIL,
	SET_LOADING,
	SET_ALERT,
	CLEAR_ALERT,
} from "../types";

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
		case SET_ALERT:
			return {
				...state,
				alert: true,
				loading: false,
				errors: state.errors.concat(action.payload),
			};
		case CLEAR_ALERT:
			return {
				...state,
				alert: false,
				errors: [],
			};
		default:
			return;
	}
};

export default hikingReducer;
