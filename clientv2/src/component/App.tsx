import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import { Dashboard } from "./Dashboard";
import Header from "./Header";
import { Landing } from "./Landing";
import SurveyNew from "./surveys/SurveyNew";

interface AppProps {
	fetchUser: Function;
}

function App(props: AppProps) {
	useEffect((): void => {
		props.fetchUser();
	});

	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<Route exact={true} path="/" component={Landing} />
				<Route exact={true} path="/surveys" component={Dashboard} />
				<Route exact={true} path="/surveys/new" component={SurveyNew} />
			</div>
		</BrowserRouter>
	);
}

export default connect(null, actions)(App);
