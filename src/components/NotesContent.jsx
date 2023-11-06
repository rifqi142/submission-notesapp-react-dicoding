import React from "react";

function NotesContent({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <h1>{title}</h1>
      <p>{createdAt}</p>
      <p>{body}</p>
    </div>
  );
}

export default NotesContent;
