import { createContext, useEffect, useState } from "react";

export const NoteContext = createContext();

function NoteContextProvider(props) {
    const [notes, setNotes] = useState([]);
    //const [keyId, setKeyId] = useState(4);
    const token = localStorage.getItem("token");



    const fetchNotes = () => {
        if (token) {
            fetch("/api/notes", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // Filtrar solo las notas con id
                    const notesWithId = data.filter((note) => note.id);
                    setNotes(notesWithId);
                })
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        fetchNotes(); // Llamada inicial al cargar el componente
    }, [token]);

    function CreateNote(note) {
        fetch("/api/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(note),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then(newNote => {
                fetchNotes();
            })
            .catch(error => {
                console.error('Something went wrong:', error);
            });
    }

    function DeleteNote(id) {
        fetch(`/api/notes/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                setNotes(notes.filter(note => note.id !== id));
            })
            .catch(error => {
                console.error('Something went wrong:', error);
            });
    }

    return (
        <NoteContext.Provider
            value={{
                notes,
                CreateNote,
                DeleteNote
            }}
        >
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteContextProvider;