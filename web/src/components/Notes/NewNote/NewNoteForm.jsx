import { useState, useContext } from "react";
import classes from "./NewNoteForm.module.scss";
import { BiEraser } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { NoteContext } from "../../../contexts/NoteContext";


function NewNoteForm() {
    const [tittle, setTitle] = useState("");
    const [content, setDescription] = useState("");
    const [categories, setType] = useState("");
    const noteContext = useContext(NoteContext);
    const { CreateNote } = noteContext;


    const handleCleanupClick = () => {
        setDescription("");
        setTitle("");
        setType("");
    }

    //const token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault();

        const noteData = {
            tittle: tittle,
            content: content,
            categories: categories,
        }

        CreateNote(noteData);
        handleCleanupClick();
    };

    return (
        <section>
            <div className={classes["container"]}>
                <div className={classes["form"]}>
                    <form className={classes["form"]} onSubmit={handleSubmit}>
                        <input
                            className={classes["form-input"]}
                            placeholder="Write your title here..."
                            onChange={(e) => setTitle(e.target.value)}
                            value={tittle}
                            required
                        />
                        <select
                            className={classes["note__select"]}
                            onChange={(e) => setType(e.target.value)}
                            value={categories}
                            required>
                            <option value="" selected  > Select a type for your note</option>
                            <option value="draft">Drafts</option>
                            <option value="social">Social</option>
                            <option value="math">Math</option>
                            <option value="friends">Friends</option>
                        </select>
                        <textarea
                            className={classes["form-textarea"]}
                            placeholder="Write your note here..."
                            value={content}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />

                        <div className={classes["Bottons"]}>
                            <button type="button" className={classes["ButtonD"]} onClick={handleCleanupClick}>  Cleanup <BiEraser /></button>
                            <button type="submit" className={classes["ButtonC"]}>  Save <BsCheckCircle /></button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewNoteForm;