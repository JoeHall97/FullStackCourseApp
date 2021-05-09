import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducers from "./authReducer";
import surveysReducer from "./suveysReducer";

export default combineReducers({
	auth: authReducers,
	form: reduxForm,
	surveys: surveysReducer,
});
