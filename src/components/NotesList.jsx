import React from "react";
import NotesItem from "./NotesItem";

function NotesList({
  onDelete,
  onArchive,
  onUnarchive,
  activeDatas,
  archiveDatas,
}) {
  const regularNotes = activeDatas;
  const archivedNotes = archiveDatas;

  return (
    <>
      <div className="notes-list">
        {regularNotes.length === 0 ? (
          <p className="notes-list__empty-message">No Notes Found!</p>
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

      <h2>Archive Notes</h2>
      <div className="notes-list">
        {archivedNotes.length === 0 ? (
          <p className="notes-list__empty-message">No Notes Found!</p>
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
