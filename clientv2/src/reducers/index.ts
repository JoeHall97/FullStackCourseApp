import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

export interface StoreState {}

export const reducers = combineReducers<any>({
	auth: authReducer,
});
