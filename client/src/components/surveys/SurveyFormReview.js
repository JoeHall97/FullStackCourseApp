import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div className='pt-4'>
			<h4>Please review your entries</h4>
			{reviewFields}
			<button className='btn btn-danger mt-4' onClick={onCancel}>
				<ArrowLeft />
				Back
			</button>
			<button className='btn btn-success float-end mt-4' onClick={() => submitSurvey(formValues, history)}>
				Send Survey
				<ArrowRight />
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values,
	};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
