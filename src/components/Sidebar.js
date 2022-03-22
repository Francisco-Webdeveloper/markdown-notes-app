import React from "react";
import classes from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <section className={`${classes.pane} ${classes.sidebar}`}>
      <div className={classes.sidebarHeader}>
        <h3>Notes</h3>
        <button className={classes.newNote}>+</button>
      </div>
    </section>
  );
}
