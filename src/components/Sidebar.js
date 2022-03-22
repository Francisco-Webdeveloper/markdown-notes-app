import React from "react";
import classes from "./Sidebar.module.css";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`${classes.title} ${
          props.currentNote.id === note.id ? classes.selectedNote : ""
        }`}
        // update the state of currentNoteId to the id of the note we are currently clicking on
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className={classes.textSnippet}>Note {index + 1}</h4>
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
