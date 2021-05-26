import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import Reducers from "./reducers";

// For dev testing:
import axios from "axios";
window.axios = axios;

const store = createStore(Reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
