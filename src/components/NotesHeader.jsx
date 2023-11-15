import React from "react";

function NotesHeader({ onSearch }) {
  return (
    <>
      <div className="note-app__header">
        <h1>Rifqi's Notes</h1>
        <div className="note-search">
          <input
            onChange={(event) => onSearch(event)}
            type="text"
            placeholder="Find notes ..."
          />
        </div>
      </div>
    </>
  );
}

export default NotesHeader;
