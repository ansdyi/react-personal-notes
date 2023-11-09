import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Create Notes</h2>
                <p className='note-input__title__char-limit' ></p>
                <input className='note-input__title' type="text" placeholder="Create title here.." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea className='note-input__body' type="text" placeholder="What is your mind right now?.." value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
                <button type="submit">Create</button>
            </form>
        )
    }
}

export default NoteInput;