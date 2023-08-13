import React from "react";

const FormLabel = ({ htmlfor, labelname, inputType, onInputChange }) => {
	return (
		<>
			<label htmlFor={htmlfor} className="form-label">
				{labelname}
			</label>
			<input
				type={inputType}
				className="form-control"
				id={htmlfor}
				onChange={onInputChange}
			/>
		</>
	);
};

export default FormLabel;
