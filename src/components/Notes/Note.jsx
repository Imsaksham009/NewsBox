import React, { useContext, useEffect } from "react";
import NoteCard from "./NoteCard";
import { NoteContext } from "../../context/notecontext/notestate";
import AddNote from "../Form/addNote";
import axios from "axios";

const Note = () => {
	const { noteState, setNoteState } = useContext(NoteContext);

	useEffect(() => {
		(async () => {
			const response = await fetch(
				"http://localhost:8080/api/notes/getallnotes",
				{
					method: "GET",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
						"auth-token":
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzc0OGFjMzZjYmFlYmIyNmYzYTQwIn0sImlhdCI6MTY5MTk1NDQ3MX0.UnuTbZrwnQ4LWGhLVcqcYYw6t-d_P1sPWrraCFqIeTo",
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: JSON.stringify(), // body data type must match "Content-Type" header
				}
			);
			const data = await response.json();
			setNoteState(data);
		})();
		return () => {};
	}, []);

	return (
		<div className="container">
			<AddNote />
			<h3 className="text-center">All Notes</h3>
			<div className="row my-3">
				{noteState.map((note) => {
					return (
						<div className="col-md-4 col-sm-6 mb-4" key={note._id}>
							<NoteCard
								title={note.title}
								description={note.description}
								id={note._id}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Note;
