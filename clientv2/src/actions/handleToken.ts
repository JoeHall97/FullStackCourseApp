/* Handle stripe payments */
import axios from "axios";
import { Dispatch } from "redux";
import { FetchType } from "./types";

export const handleToken = (token: any) => async (dispatch: Dispatch) => {
	const res = await axios.post("/api/stripe", token);
	dispatch({ type: FetchType.fetchTokens, payload: res.data });
};
