export interface INote {
    id: number;
    name: string;
    text: string;
    tag: string;
    createdAt: string;
}

export interface INoteContext {
    notes: INote[],
    isEditing: boolean;
    noteId: number;
    noteName: string;
    noteText: string;
    noteTag: string;
    setNoteId:(value:number) => void;
    setNoteName: (value: string) => void;
    setNoteText: (value: string) => void;
    setNoteTag:(value:string) => void;
    setIsEditing:(value:boolean) => void;
    createNote: ()=>void;
    updateNote: ()=>void;
    deleteNote: (value:number)=>void;
}