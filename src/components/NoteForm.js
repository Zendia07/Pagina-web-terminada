// Componente para el formulario de agregar Notas

import React, { useState } from 'react';

// Añadir notas
const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState(''); // Estado para el título para el titulo de la nota
  const [description, setDescription] = useState(''); // Descripción de la nota
  const [important, setImportant] = useState(false); // si la nota es importante
// Esto es para que la descripcion es obligatoria
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      alert('Description is required');
      return;
    }
    addNote({
      title,
      description,
      important
    });
    setTitle(''); // Limpiar el campo de título y desc después de agregar la nota
    setDescription('');
    setImportant(false); // reiniciar el campo obligatorio
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Descripcion"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="form-check mb-2 mr-sm-2">
        <input
          type="checkbox"
          className="form-check-input"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
        <label className="form-check-label">Importante!</label>
      </div>
      <button type="submit" className="btn btn-dark mb-2">AGREGAR</button>
    </form>
  );
};

export default NoteForm;
