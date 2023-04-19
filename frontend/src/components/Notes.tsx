import React, { FunctionComponent, ReactElement, useContext } from "react";
import { NotesContext } from "./Home/context";
import Note from "./Note";

const Notes: FunctionComponent = (): ReactElement => {
	const { notes } = useContext(NotesContext);

	const createNoteCards = () => {
		return notes.map((note) => <Note note={note} key={note.id} />);
	};

	return (
		<div className="w-2/3 bg-slate-600 flex gap-8 flex-wrap px-8 py-4">
			{createNoteCards()}
		</div>
	);
};

export default Notes;
