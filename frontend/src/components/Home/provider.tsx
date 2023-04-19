import { ReactElement, useEffect, useState } from "react";
import { NotesContext } from "./context";
import { INote } from "../../types";
import axios from "axios";
import { API_URL } from "../../utils/constants";

export const NotesProvider = ({ children }: { children: ReactElement }) => {
	const [notes, setNotes] = useState<INote[]>([]);
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [noteId, setNoteId] = useState<number>(0);
	const [noteName, setNoteName] = useState<string>("");
	const [noteText, setNoteText] = useState<string>("");
	const [noteTag, setNoteTag] = useState<string>("");

	useEffect(() => {
		fetchNotes();
	}, []);

	const fetchNotes = async () => {
		try {
			const res = await axios.get(API_URL);
			const data = res.data;
			setNotes(data);
		} catch (error) {
			console.log(error);
		}
	};

	const flushInputFields = () => {
		setNoteId(0);
		setNoteName("");
		setNoteTag("");
		setNoteText("");
	};

	const createNote = async () => {
		try {
			const res = await axios.post(`${API_URL}create/`, {
				name: noteName,
				text: noteText,
				tag: noteTag,
			});
			const data = res.data;
			setNotes(data);
			flushInputFields();
			console.log("Note created!");
		} catch (error) {
			console.log(error);
		}
	};

	const updateNote = async () => {
		try {
			const res = await axios.put(`${API_URL}update/${noteId}/`, {
				name: noteName,
				text: noteText,
				tag: noteTag,
			});
			const data = res.data;
			setNotes(data);
			flushInputFields();
			console.log("Note updated!");
		} catch (error) {
			console.log(error);
		}
	};

	const deleteNote = async (id: number) => {
		try {
			await axios.delete(`${API_URL}delete/${id}/`);
			fetchNotes();
			console.log("Note deleted!");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<NotesContext.Provider
			value={{
				notes,
				isEditing,
				noteId,
				noteName,
				noteText,
				noteTag,
				setNoteId,
				setNoteName,
				setNoteText,
				setNoteTag,
				setIsEditing,
				createNote,
				updateNote,
				deleteNote,
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};
