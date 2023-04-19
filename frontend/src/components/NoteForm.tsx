import React, { FunctionComponent, ReactElement, useContext } from "react";
import { NotesContext } from "./Home/context";

const NoteForm: FunctionComponent = (): ReactElement => {
	const {
		noteId,
		noteName,
		noteText,
		noteTag,
		setNoteId,
		setNoteName,
		setNoteTag,
		setNoteText,
		createNote,
		isEditing,
		updateNote,
	} = useContext(NotesContext);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (isEditing) {
			updateNote();
		} else {
			createNote();
		}
	};

	return (
		<div className="w-1/3 bg-slate-400 px-8 py-4">
			<div className="flex flex-col gap-4 px-8 py-4 rounded-xl border border-slate-200 bg-slate-800">
				<span className="text-2xl font-bold text-gray-200 leading-10">
					{isEditing ? "Edit Note" : "Add Note"}
				</span>
				<form className="flex flex-col gap-4">
					<input
						name="noteName"
						value={noteName}
						onChange={(e) => setNoteName(e.target.value)}
						type="text"
						placeholder="Note Name"
						className="px-8 py-2 bg-slate-600 outline-none text-gray-100 text-md font-bold leading-6 rounded-lg"
					/>
					<textarea
						name="noteText"
						value={noteText}
						onChange={(e) => setNoteText(e.target.value)}
						rows={3}
						placeholder="Note"
						className="px-8 py-2 bg-slate-600 outline-none text-gray-100 text-md font-bold leading-6 rounded-lg"
					/>
					<input
						name="noteTag"
						value={noteTag}
						onChange={(e) => setNoteTag(e.target.value)}
						type="text"
						placeholder="Note Tag"
						className="px-8 py-2 bg-slate-600 outline-none text-gray-100 text-md font-bold leading-6 rounded-lg"
					/>
					<input
						onClick={handleSubmit}
						type="submit"
						value={isEditing ? "Update Note" : "Create Note"}
						className="px-8 py-2 bg-orange-600 outline-none text-gray-100 text-md font-bold leading-6 rounded-lg cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default NoteForm;
