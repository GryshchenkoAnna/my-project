import React from 'react';
import Button from './button';
import './note.css'

const Note = ({ text, onDelete, onEdit }) => (
<div className="Note">
    <p className="Note-text">{ text }</p>
    <div className="Note-actions">
        <Button label="Delete" onClick={onDelete}/>
        <Button label="Edit" onClick={onEdit} />
    </div>
</div>
);

export default Note;