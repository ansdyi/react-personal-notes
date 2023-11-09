import React from "react"
import { getInitialData } from "../utils/index"
import NoteHeader from "./NoteHeader"
import NoteList from "./NoteList"
import NoteInput from "./NoteInput"
import autoBind from 'react-autobind'

class NoteApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            searchCatatan: "",
        }

        autoBind(this)
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }

    onArchiveHandler(id) {
        this.setState((prevState) => {
            return {
                prevState: prevState.notes.map(note =>
                    note.id === id ? (note.archived = !note.archived) : note
                )
            }
        })
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        createdAt: new Date().toISOString(),
                        body,
                        archived: false
                    }
                ]
            }
        })
    }

    onSearchHandler(event) {
        this.setState({
            searchCatatan: event.target.value,
        });
    }

    searchNotes() {
        const { notes, searchCatatan } = this.state;
        return notes.filter((note) =>
            note.title.toLowerCase().includes(searchCatatan.toLowerCase())
        );
    };
    render() {
        const activeNotes = this.searchNotes().filter((note) => note.archived === false)
        const archiveNotes = this.searchNotes().filter((note) => note.archived === true);

        return (
            <div className="note-app">
                <NoteHeader inputSearch={this.state.searchCatatan} onSearch={this.onSearchHandler} />
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Current Notes</h2>
                    <NoteList key={activeNotes.id} notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Archives</h2>
                    <NoteList key={archiveNotes.id} notes={archiveNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </div>
        )
    }
}

export default NoteApp;