import React, { useState } from "react";
import "./App.css";
import { UpdateButton } from "./components/buttons/updateButton";
import { DeleteButton } from "./components/buttons/deleteButton";
import { Notes } from "./components/notes";
import { AddNote } from "./components/addNote";
import { SaveButton } from "./components/buttons/saveButton";

const App = () => {
  const [notes, setNotes] = useState<{ id: number; content: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState("");

  const saveButton = require("./assets/saveButton.png");
  const updateImage = require("./assets/updateImage.png");
  const deleteButton = require("./assets/deleteButton.png");

  const handleUpdate = (delay: number) => {
    setLoading(true);
    fetch("http://localhost:7070/notes", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        setNotes(data);
        setTimeout(() => {
          setLoading(false);
        }, delay); // задержка времени на 1 секунду, эмитация загрузки.
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleDelete = (id: number) => {
    fetch(`http://localhost:7070/notes/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.text();
      })
      .then(() => {
        handleUpdate(0);
      })
      .catch(error => console.error(error));
  };

  const handleSave = () => {
    if (!newNoteContent) { // проверяем что новая заметка не пустая.
      return;
    }
    fetch("http://localhost:7070/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newNoteContent }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.text();
      })
      .then(() => {
        handleUpdate(0);
        setNewNoteContent("");
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Notes</h1>
        <UpdateButton img={updateImage} name="Обновить" onClick={() => handleUpdate(1000)}/>
      </div>
      <div className="main">
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          notes.length > 0 ? (
            notes.map(note => (
              <div className="note-delete" key={note.id}>
                <Notes note={note.content}/>
                <DeleteButton img={deleteButton} name="Удалить" onClick={() => handleDelete(note.id)}/>
              </div>
            ))
          ) : (
            <p>Список заметок пуст</p>
          )
        )}
      </div>
      <div className="new-note">
        <AddNote content={newNoteContent} onContentChange={setNewNoteContent}/>
        <SaveButton img={saveButton} name="Сохранить" onClick={handleSave} />
      </div>
    </div>
  );
};

export default App;