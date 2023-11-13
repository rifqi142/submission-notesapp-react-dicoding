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
    this.onUnarchiveNote = this.onUnarchiveNote.bind(this);
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
          archived: true, // Menyimpan status catatan yang diarsipkan
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
            id: Date.now(), // Menggunakan Date.now() untuk mendapatkan timestamp
            title,
            body,
            createdAt: Date.now(),
            isArchived: false,
          },
        ],
      };
    });
  };

  onUnarchiveNote = (id) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: false,
        };
      }
      return note;
    });
    this.setState({ notes });
  };

  render() {
    return (
      <>
        <NotesHeader />
        <div className="notes-app__body">
          <NotesInput addNote={this.onAddNote} />
          <h2>Catatan Aktif</h2>
          <NotesList
            notes={this.state.notes}
            onDelete={this.onDeleteNote}
            onArchive={this.onArchiveNote}
            onUnarchive={this.onUnarchiveNote}
          />
        </div>
      </>
    );
  }
}
