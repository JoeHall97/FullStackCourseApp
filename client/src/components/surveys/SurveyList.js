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
				<div
					className='card bg-dark mt-3 text-white mx-auto'
					style={{ width: "80%", height: "12rem" }}
					key={survey._id}
				>
					<div className='card-body'>
						<h5 className='card-title'>{survey.title}</h5>
						<h6 className='card-subtitle mb-4'>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</h6>
						<p className='float-start card-text'>{survey.body}</p>
					</div>
					<div className='card-body'>
						<a href='#' className='card-link'>
							Yes: {survey.yes}
						</a>
						<a href='#' className='card-link'>
							No: {survey.no}
						</a>
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
