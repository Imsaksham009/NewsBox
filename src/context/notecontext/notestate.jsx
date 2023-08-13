import { useState } from "react";
import { createContext } from "react";

const dummyNotes = [
	{
		_id: "64d374a5c36cbaebb26f3a42",
		title: "First Note Ed",
		description: "This is my firstddd Note",
		tag: "General",
		user: "64d3748ac36cbaebb26f3a40",
		date: "2023-08-09T11:12:37.196Z",
		__v: 0,
	},
	{
		_id: "64d382043baeb937bab3a494",
		title: "First Note ed",
		description: "This is my firstddd Note",
		tag: "General",
		user: "64d3748ac36cbaebb26f3a40",
		date: "2023-08-09T12:09:40.691Z",
		__v: 0,
	},
	{
		_id: "64d382053baeb937bab3a496",
		title: "First Note ed",
		description: "This is my firstddd Note",
		tag: "General",
		user: "64d3748ac36cbaebb26f3a40",
		date: "2023-08-09T12:09:41.584Z",
		__v: 0,
	},
	{
		_id: "64d382063baeb937bab3a498",
		title: "First Note ed",
		description: "This is my firstddd Note",
		tag: "General",
		user: "64d3748ac36cbaebb26f3a40",
		date: "2023-08-09T12:09:42.405Z",
		__v: 0,
	},
	{
		_id: "64d382073baeb937bab3a49a",
		title: "First Note ed",
		description: "This is my firstddd Note",
		tag: "General",
		user: "64d3748ac36cbaebb26f3a40",
		date: "2023-08-09T12:09:43.297Z",
		__v: 0,
	},
	{
		_id: "64d382083baeb937bab3a49c",
		title: "First Note ed",
		description: "This is my firstddd Note",
		tag: "General",
		user: "64d3748ac36cbaebb26f3a40",
		date: "2023-08-09T12:09:44.124Z",
		__v: 0,
	},
	{
		_id: "64d382083baeb937bab3a49e",
		title: "First Note ed",
		description: "This is my firstddd Note",
		tag: "General",
		user: "64d3748ac36cbaebb26f3a40",
		date: "2023-08-09T12:09:44.941Z",
		__v: 0,
	},
];

export const NoteContext = createContext();

export const NoteState = ({ children }) => {
	const [noteState, setNoteState] = useState([]);

	const addNote = ({ title, description }) => {
		const lastDigit = Math.floor(Math.random() * 101);
		const noteToAdd = {
			_id: `64d382083baeb937bab3a49${lastDigit}`,
			title,
			description,
			tag: "General",
		};
		setNoteState([...noteState, noteToAdd]);
	};

	const deleteNote = (id) => {
		console.log("delete");
	};

	const editNote = (id, title, description) => {
		console.log("edit");
	};

	return (
		<NoteContext.Provider
			value={{ noteState, setNoteState, addNote, editNote, deleteNote }}
		>
			{children}
		</NoteContext.Provider>
	);
};
