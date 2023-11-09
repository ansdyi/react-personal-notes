import React  from "react";

function NoteSearch({onSearch, inputSearch}){
    return (
        <input
      type="text"
      className="note-search"
      placeholder="Search Notes.."
      value={inputSearch}
      onChange={onSearch}
    />
    )
}

export default NoteSearch;