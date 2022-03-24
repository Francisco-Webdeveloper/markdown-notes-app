import React from "react";
import classes from "./Sidebar.module.css";
import { BsTrash } from "react-icons/bs";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`${classes.title} ${
          props.currentNote.id === note.id
            ? classes.selectedNote
            : classes.unselectedNote
        }`}
        // update the state of currentNoteId to the id of the note we are currently clicking on
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className={classes.textSnippet}>
          {note.body
            // copying just the first line of the text to the title of the note in the sidebar
            .split("\n")[0]
            // using regex to eliminate special characters
            .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, "")
            .toUpperCase()}
        </h4>
        <button
          className={classes.deleteBtn}
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <BsTrash className={`${classes.ggTrash} ${classes.trashIcon}`} />
        </button>
      </div>
    </div>
  ));
  return (
    <section className={`${classes.pane} ${classes.sidebar}`}>
      <div className={classes.sidebarHeader}>
        <h3>Notes</h3>
        <button className={classes.newNote} onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
