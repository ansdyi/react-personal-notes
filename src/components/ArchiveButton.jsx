import React from "react"

function ArchiveButton({ id, onArchive, children }) {
  return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{children}</button>
}

export default ArchiveButton;