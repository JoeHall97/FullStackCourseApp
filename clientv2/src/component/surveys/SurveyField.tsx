interface SurveyFieldProps {
	input: string;
	label: string;
	meta: {
		error: string;
		touched: string;
	};
}

export const SurveyField = ({
	input,
	label,
	meta: { error, touched },
}: SurveyFieldProps): JSX.Element => {
	return (
		<div>
			<label style={{ marginRight: "20px" }}>{label}</label>
			<input type="text" style={{ marginBottom: "5px" }} {...input} />
			<div className="text-red" style={{ marginBottom: "20px" }}>
				{touched && error}
			</div>
		</div>
	);
};
