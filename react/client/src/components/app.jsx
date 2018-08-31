import React, { Component } from "react";
import NoteEditor from "./note-editor";
import NotesGrid from "./notes-grid";
import * as api from "../services/api";
import Modal from "./modal";
import Backdrop from "./backdrop";

const getNoteById = (notes, id) => notes.find(note => note.id === id);

export default class App extends Component {
    state = {
        notes: [],
        isModalOpen: false,
        selectedNoteId: null
    };

    componentDidMount() {
        api.getAllNotes().then(notes => {
            this.setState({ notes });
        })
    }

    toggleModal = (id) => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen,
            selectedNoteId: id,
        }))
    }

    addNote = (text) => {

        api.addNote({ text }).then(note => (
            this.setState(prevState => ({
                notes: [note, ...prevState.notes],
            }))
        ))

    };

    updateNote = (noteToUpdata) => {
        api.updateNote(noteToUpdata).then(updataNote => {
            this.toggleModal();
            
            this.setState(prevState => ({
                notes: prevState.notes.map(note => (note.id === updataNote.id ? updataNote : note))
            }))
        })
    };

    removeNote = (idToRemove) => {

        api.deleteNote(idToRemove).then(id => {
            this.setState(prevState => ({
                notes: prevState.notes.filter(note => note.id !== id),
            }))
        })
    };

    render() {

        const { notes, isModalOpen, selectedNoteId } = this.state;
        const selectedNote = selectedNoteId ? getNoteById(notes, selectedNoteId) : null;

        return (
            <div>
                <h1 className="Title">React is awesome</h1>
                {
                isModalOpen && 
                <Backdrop>
                    <Modal onClose={this.toggleModal} note={selectedNote} onSave={this.updateNote} />
                </Backdrop>
                }
                <NoteEditor onAddNote={this.addNote} />
                <NotesGrid 
                notes={notes} 
                onRemoveNote={this.removeNote} 
                onEditNote={this.toggleModal} />
            </div>
        );
    }
}