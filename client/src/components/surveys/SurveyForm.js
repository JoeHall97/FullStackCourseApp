import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import _ from "lodash";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return <Field key={name} component={SurveyField} type='text' label={label} name={name} />;
		});
	}

	render() {
		return (
			<div>
				<form className='pt-4' onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to='/surveys' className='btn btn-danger'>
						Cancel
					</Link>
					<button type='submit' className='btn btn-primary float-end'>
						Next
						<ArrowRight />
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || "");

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = "You must provide a value";
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: "surveyForm",
	destroyOnUnmount: false,
})(SurveyForm);
