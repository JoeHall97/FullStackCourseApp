import axios from "axios";
import { Dispatch } from "redux";
import { FetchType } from "./types";

export interface FetchUserAction {
	type: FetchType.fetchUser;
	payload: any;
}

/* Login action */
export const fetchUser = () => async (dispatch: Dispatch) => {
	const res = await axios.get("/api/current_user");
	console.log(res.data);
	dispatch<FetchUserAction>({ type: FetchType.fetchUser, payload: res.data });
};
