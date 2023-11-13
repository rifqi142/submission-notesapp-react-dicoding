import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive, onUnarchive }) {
  const regularNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <>
      <div className="notes-list">
        {regularNotes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          regularNotes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))
        )}
      </div>
      <h2>Arsip</h2>
      <div className="notes-list">
        {archivedNotes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          archivedNotes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              onUnarchive={onUnarchive}
              {...note}
            />
          ))
        )}
      </div>
    </>
  );
}

export default NotesList;
