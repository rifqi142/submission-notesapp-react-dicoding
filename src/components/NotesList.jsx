import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive }) {
  const regularNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="notes-list">
      {regularNotes.length === 0 ? (
        <p className="notes-list__empty-message">Catatan Kosong</p>
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

      {archivedNotes.length > 0 && (
        <div className="archive-card">
          <h2>Card Archive</h2>
          {archivedNotes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NotesList;
