import axios from "axios";
import { Dispatch } from "redux";
import { FetchType } from "./types";

export const submitSurvey = (values: any, history: any) => async (dispatch: Dispatch) => {
	const res = await axios.post("/api/surveys", values);

	history.push("/surveys");
	dispatch({ type: FetchType.fetchUser, payload: res.data });
};

export const fetchSurveys = () => async (dispatch: Dispatch) => {
	const res = await axios.get("/api/surveys");

	dispatch({ type: FetchType.fetchSurvey, payload: res.data });
};
