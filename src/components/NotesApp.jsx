import React from "react";
import { getInitialData } from "../utils/dataset";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onAddNote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
  }

  onDeleteNote(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNote = (id) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          isArchived: true,
        };
      }
      return note;
    });
    this.setState({ notes });
  };

  onAddNote = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date().toISOString,
            isArchived: false,
          },
        ],
      };
    });
  };
  render() {
    return (
      <>
        <NotesHeader />
        <div className="notes-app__body">
          <NotesInput AddNote={this.onAddNote} />
          <h2>Catatan Aktif</h2>
          <NotesList
            notes={this.state.notes}
            onDelete={this.onDeleteNote}
            onArchiveNote={this.onArchiveNote}
          />
        </div>
        <h2>Arsip</h2>
        <NotesList notes={this.state.notes} />
      </>
    );
  }
}
