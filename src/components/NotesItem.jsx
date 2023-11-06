import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NotesItem({ title, createdAt, body, id, onDelete, onArchieve }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NotesItemBody title={title} createdAt={createdAt} body={body} />
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchieve} />
      </div>
    </div>
  );
}

export default NotesItem;
