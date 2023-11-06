import React from "react";

function NotesHeader() {
  return (
    <>
      <div className="note-app__header">
        <h1>Rifqi's Notes</h1>
      </div>
      <div className="note-search">
        <input type="text" placeholder="Cari catatan..." />
      </div>
    </>
  );
}

export default NotesHeader;
