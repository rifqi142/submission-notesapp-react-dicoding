import React from "react";

function NotesHeader({ notes, renderNotes }) {
  const filterNotes = (title) => {
    const filteredNotes = [...notes].filter((note) =>
      note.title.toLowerCase().includes(title.toLowerCase())
    );
    renderNotes(filteredNotes);
  };

  return (
    <>
      <div className="note-app__header">
        <h1>Rifqi's Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Find notes ..."
            onChange={(e) => {
              filterNotes(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default NotesHeader;
