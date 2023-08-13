import React, { useContext, useState } from "react";
import Form from "./form";
import { NoteContext } from "../../context/notecontext/notestate";

const initialInput = {
	title: "",
	description: "",
};

const AddNote = () => {
	const { addNote } = useContext(NoteContext);
	const [inputState, setInput] = useState(initialInput);

	const onSubmitButton = (e) => {
		e.preventDefault();
		addNote(inputState);
		setInput(initialInput);
	};

	const onInputChange = (e) => {
		setInput({ ...inputState, [e.target.id]: e.target.value });
	};
	return (
		<div>
			<Form handleSubmit={onSubmitButton} handleInputChange={onInputChange} />
		</div>
	);
};

export default AddNote;
