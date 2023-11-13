import React from "react";

function UnArchiveButton({ id, onUnarchive }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onUnarchive(id)}
    >
      UnArchive
    </button>
  );
}

export default UnArchiveButton;
