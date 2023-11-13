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
      filteredNotes: [],
    };
    this.onAddNote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onUnarchiveNote = this.onUnarchiveNote.bind(this);
  }

  renderNotes = (filteredNotes) => {
    this.setState({ filteredNotes });
  };

  onDeleteNote(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNote = (id) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: true,
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
            id: Date.now(),
            title,
            body,
            isArchived: false,
            createdAt: Date.now(),
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

  handleSearchInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const notesToDisplay = this.state.filteredNotes.length
      ? this.state.filteredNotes
      : this.state.notes;

    return (
      <>
        <NotesHeader renderNotes={this.renderNotes} notes={this.state.notes} />
        <div className="notes-app__body">
          <NotesInput addNote={this.onAddNote} />
          <h2>Catatan Aktif</h2>
          <NotesList
            notes={notesToDisplay}
            onDelete={this.onDeleteNote}
            onArchive={this.onArchiveNote}
            onUnarchive={this.onUnarchiveNote}
          />
        </div>
      </>
    );
  }
}
