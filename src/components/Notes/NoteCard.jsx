import React, { useContext } from "react";
import { NoteContext } from "../../context/notecontext/notestate";

const NoteCard = ({ title, description, id }) => {
	const { deleteNote, editNote } = useContext(NoteContext);

	return (
		<div className="card">
			<div className="card-body">
				<div className="d-flex align-items-center">
					<h5 className="card-title">{title}</h5>
					<i
						className="fa-solid fa-pen-to-square mx-2"
						onClick={() => {
							editNote();
						}}
					></i>
					<i
						className="fa-solid fa-trash-can mx-2"
						onClick={() => {
							deleteNote();
						}}
					></i>
				</div>

				<p className="card-text">{description}</p>
			</div>
		</div>
	);
};

export default NoteCard;
