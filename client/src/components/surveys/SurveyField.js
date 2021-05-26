import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label className='ms-2 me-4'>{label}</label>
			<input className='mb-2' {...input} />
			<div className='text-danger mb-2'>{touched && error}</div>
		</div>
	);
};
