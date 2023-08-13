import React from "react";
import FormLabel from "./FormLabel/FormLabel";

const Form = (props) => {
	return (
		<form className="mt-3" onSubmit={props.handleSubmit}>
			<div className="mb-3">
				<FormLabel
					htmlfor="title"
					labelname="Title"
					inputType="text"
					onInputChange={props.handleInputChange}
				/>
			</div>
			<div className="mb-3">
				<FormLabel
					htmlfor="description"
					labelname="Description"
					inputType="text"
					onInputChange={props.handleInputChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Add
			</button>
		</form>
	);
};

export default Form;
