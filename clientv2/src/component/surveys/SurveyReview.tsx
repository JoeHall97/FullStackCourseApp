import { connect } from "react-redux";
import { formFields } from "./SurveyForm";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

// interface SurveyReviewProps {
// 	onCancel: any;
// 	submitSurvey: Function;
// 	formValues: any;
// 	history: any;
// }

const SurveyReview = (props: any): JSX.Element => {
	const reviewFields = _.map(formFields, ({ name, label }: { name: string; label: string }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{props.formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h3 className="text-center">Survey Review</h3>
			{reviewFields}
			<button className="btn btn-danger" onClick={props.onCancel}>
				<ArrowLeft />
				Back
			</button>
			<button
				className="btn btn-success justify-content-end"
				onClick={() => props.submitSurvey(props.formValues, props.history)}
			>
				Send Survey
				<ArrowRight />
			</button>
		</div>
	);
};

function mapStateToProps(state: any) {
	return {
		formValues: state.form.surveyForm.values,
	};
}

export const ReduxSurveyReview = connect(mapStateToProps, actions)(withRouter(SurveyReview));
