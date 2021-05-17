import { Component } from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import _ from "lodash";
import { SurveyField } from "./SurveyField";
import { validateEmails } from "../../utils/validateEmails";

export const formFields = [
	{ label: "Survey Title", name: "title" },
	{ label: "Subject Line", name: "subject" },
	{ label: "Email Body", name: "body" },
	{ label: "Recipient List", name: "recipients" },
];

interface FormFields {
	label: string;
	name: string;
}

class SurveyForm extends Component<InjectedFormProps> {
	renderFields() {
		return _.map(formFields, ({ label, name }: FormFields): JSX.Element => {
			return <Field key={name} component={SurveyField} type="text" label={label} name={name} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit}>
					{this.renderFields()}
					<Link to="/surveys" className="btn btn-danger">
						Cancel
					</Link>
					<button type="submit" className="btn btn-primary float-end">
						Next
						<ArrowRight />
					</button>
				</form>
			</div>
		);
	}
}

function validate(values: any) {
	const errors: any = {};

	errors.recipients = validateEmails(values.recipients || "");

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = "You must provide a value";
		}
	});

	return errors;
}

export const ReduxSurveyForm: any = reduxForm({
	validate,
	form: "surveyForm",
	destroyOnUnmount: false,
})(SurveyForm);
