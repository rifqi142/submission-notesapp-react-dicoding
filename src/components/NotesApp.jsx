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
      search: "",
    };
    this.onAddNote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onUnarchiveNote = this.onUnarchiveNote.bind(this);
    this.onSearchNote = this.onSearchNote.bind(this);
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
            createdAt: Date.now(),
            archived: false,
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

  onSearchNote(event) {
    const captureValue = event.target.value.toLowerCase();
    this.setState({ search: captureValue });
    event.preventDefault();
  }

  render() {
    const searchDatas = !this.state.search
      ? this.state.notes
      : this.state.notes.filter((note) =>
          note.title.toLowerCase().includes(this.state.search)
        );
    const activeDatas = searchDatas.filter((note) => !note.archived);
    const archiveDatas = searchDatas.filter((note) => note.archived);
    return (
      <>
        <NotesHeader onSearch={this.onSearchNote} />
        <div className="notes-app__body">
          <NotesInput addNote={this.onAddNote} />
          <h2>Active Notes</h2>
          <NotesList
            notes={this.state.notes}
            activeDatas={activeDatas}
            archiveDatas={archiveDatas}
            onDelete={this.onDeleteNote}
            onArchive={this.onArchiveNote}
            onUnarchive={this.onUnarchiveNote}
          />
        </div>
      </>
    );
  }
}
