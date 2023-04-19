import { createContext } from "react"
import {  INoteContext } from "../../types"

export const NotesContext = createContext<INoteContext>({
    notes: [],
    isEditing: false,
    noteId: 0,
    noteName: '',
    noteText: '',
    noteTag: '',
    setNoteId: () => {},
    setNoteName: () => {},
    setNoteText: () => {},
    setNoteTag: () => {},
    setIsEditing:() =>{},
    createNote:()=>{},
    updateNote:()=>{},
    deleteNote: ()=>{},
})