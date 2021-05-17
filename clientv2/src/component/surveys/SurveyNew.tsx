import React, { useState } from "react";
import { ReduxSurveyForm } from "./SurveyForm";
import { ReduxSurveyReview } from "./SurveyReview";
import { reduxForm } from "redux-form";

const SurveyPage = (): JSX.Element => {
	const [formReview, setFormReview] = useState(false);

	return (
		<div>
			{formReview ? (
				<ReduxSurveyReview />
			) : (
				<ReduxSurveyForm onSubmit={() => setFormReview(true)} />
			)}
		</div>
	);
};

export const SurveyNew = reduxForm({
	form: "surveyForm",
})(ReduxSurveyForm);
