import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import About from "./About";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
				<div className='container-fluid'>
					<Header />
					<Route exact={true} path='/' component={Landing} />
					<Route exact={true} path='/surveys' component={Dashboard} />
					<Route path='/surveys/new' component={SurveyNew} />
					<Route path='/about' component={About} />
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
