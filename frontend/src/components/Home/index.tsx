import React, { FunctionComponent, ReactElement } from "react";
import Navbar from "../Navbar";
import Notes from "../Notes";
import NoteForm from "../NoteForm";
import { NotesProvider } from "./provider";

const Home: FunctionComponent = (): ReactElement => {
	return (
		<NotesProvider>
			<>
				<Navbar />
				<div className="flex h-[91vh] overflow-y-hidden">
					<Notes />
					<NoteForm />
				</div>
			</>
		</NotesProvider>
	);
};

export default Home;
