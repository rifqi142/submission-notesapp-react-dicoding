import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import UnArchiveButton from "./UnArchiveButton";

function NotesItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  onUnarchive,
  archived,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NotesItemBody title={title} createdAt={createdAt} body={body} />
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? (
          <UnArchiveButton id={id} onUnarchive={onUnarchive} />
        ) : (
          <ArchiveButton id={id} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
}

export default NotesItem;
