import React from "react";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = React.useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your note's title here",
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setCurrentNoteId(newNote.id);
  }

  return (
    <main>
      <div className="no-notes">
        <h1>You have no notes</h1>
        <button className="first-note" onClick={createNewNote}>
          Create one now
        </button>
      </div>
    </main>
  );
}
