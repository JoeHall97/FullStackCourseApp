import { FetchType, Action } from "../actions";

export const authReducer = (state = null, action: Action) => {
	switch (action.type) {
		case FetchType.fetchUser:
			return action.payload || false;
		default:
			return state;
	}
};
