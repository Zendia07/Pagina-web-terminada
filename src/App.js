import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './styles.css';
// Cuerpo completo de la pagina 
const App = () => {
  const [notes, setNotes] = useState([]); // Estado para las notas

  // Efecto para cargar notas desde (LocalStorage)
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  // Efecto para guardar notas en LocalStorage cuando las notas cambian
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]); // Añadir una nueva nota
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Post It Simulator!</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
