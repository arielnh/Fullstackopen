import Note from "./components/Note";
import { useEffect, useState } from "react";
import axios from "axios";
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  //const [] = useState()

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes  => {
        setNotes(initialNotes )
      })
  }, []);

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
  };

  const addNote = (e) => {
    e.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
  };

  const handlerNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
     
      <ul>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handlerNoteChange} />
          <button type="submit">save</button>
        </form>
      </ul>
    </div>
  );
};

export default App;
