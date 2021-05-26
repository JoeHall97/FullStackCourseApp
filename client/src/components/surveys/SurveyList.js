import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map((survey) => {
			return (
				<div className='card bg-dark mt-3 text-white' key={survey._id}>
					<div className='card-body'>
						<h5 className='card-title'>{survey.title}</h5>
						<p className='card-text'>{survey.body}</p>
						<p className='float-right'>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
						<a className='card-link'>Yes: {survey.yes}</a>
						<a className='card-link'>No: {survey.no}</a>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

function mapStateToProps({ surveys }) {
	return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
