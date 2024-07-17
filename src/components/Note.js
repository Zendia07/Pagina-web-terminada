// Este componente representará una nota individual
// Ojo con el borrar notas
import React from 'react';

const Note = ({ note, index, deleteNote }) => {
  return (
    <div className={`note ${note.important ? 'important' : ''}`}>
      <h5>{note.title}</h5>
      <p>{note.description}</p>
      <button className="btn btn-danger btn-sm" onClick={() => deleteNote(index)}>Delete</button>
    </div>
  );
};

export default Note;
