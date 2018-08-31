import React from 'react';
import './notes-grid.css';
import Note from './note'

const NotesGrid = ({ notes, onRemoveNote, onEditNote }) => (
    <div className="NotesGrid">{
        notes.map(note => 
        <Note 
        key={note.id} 
        text={note.text}
        onDelete={() => onRemoveNote(note.id)} 
        onEdit={() => onEditNote(note.id)}
        />)}</div>
);

export default NotesGrid;