import React, { FunctionComponent, ReactElement, useContext } from "react";
import { INote } from "../types";
import { NotesContext } from "./Home/context";

type TNoteProps = {
	note: INote;
};

const Note: FunctionComponent<TNoteProps> = ({
	note,
}: TNoteProps): ReactElement => {
	const {
		setNoteId,
		setNoteName,
		setNoteTag,
		setNoteText,
		setIsEditing,
		deleteNote,
	} = useContext(NotesContext);

	const handleEdit = () => {
		setIsEditing(true);
		setNoteId(note.id);
		setNoteName(note.name);
		setNoteTag(note.tag);
		setNoteText(note.text);
	};

	return (
		<div className="flex flex-col gap-2 border border-slate-400 rounded-xl bg-slate-900 w-80 max-h-48 px-6 py-4">
			<span className="text-lg font-bold leading-8 text-gray-100">
				{note.name}
			</span>
			<span className="text-sm font-semibold leading-5 text-gray-300">
				{note.text}
			</span>
			<div className="mt-2 flex justify-between items-center">
				<span className="text-sm font-extrabold rounded-xl leading-5 text-gray-100 bg-orange-600 w-max px-4 py-1">
					{note.tag}
				</span>
				<div className="flex gap-2 flex-row-reverse">
					<button className="text-white" onClick={() => deleteNote(note.id)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M4 7l16 0"></path>
							<path d="M10 11l0 6"></path>
							<path d="M14 11l0 6"></path>
							<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
							<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
						</svg>
					</button>
					<button className="text-white" onClick={() => handleEdit()}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
							<path d="M13.5 6.5l4 4"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Note;
