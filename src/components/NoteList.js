import React from 'react';
import Note from './Note';
// Esto es las listas de las notas 
const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="row mt-5">
      {notes.map((note, index) => (
        <Note key={index} note={note} index={index} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
