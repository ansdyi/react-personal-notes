import React from 'react';
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {
        notes.length === 0 ? (
          <div className="empty-message-container">
            <p>Notes not found.</p>
          </div>
        ) : (
          notes.map((note) => (
            <NoteItem 
             key={note.id}
             id={note.id}
             onDelete={onDelete}
             onArchive={onArchive}
             archived={note.archived}
             {...note}
            />
          ))
        )
      }
    </div>
  )
}

export default NoteList;