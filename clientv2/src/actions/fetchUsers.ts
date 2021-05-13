import axios from "axios";
import { Dispatch } from "redux";
import { FetchType } from "./types";

export interface FetchUserActionPayload {
	credits: number;
	googleID: string;
	__v: number;
	_id: string;
}

export interface FetchUserAction {
	type: FetchType.fetchUser;
	payload: FetchUserAction;
}

/* Login action */
export const fetchUser = () => async (dispatch: Dispatch) => {
	const res = await axios.get("/api/current_user");
	dispatch<FetchUserAction>({ type: FetchType.fetchUser, payload: res.data });
};
