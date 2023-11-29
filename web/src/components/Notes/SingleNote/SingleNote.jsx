/* eslint-disable react/prop-types */
import classes from "./SingleNote.module.scss";
import { useContext } from "react";
import { NoteContext } from '../../../contexts/NoteContext';


function SingleNote({ note }) {
    const { DeleteNote } = useContext(NoteContext);
    //console.log(note);

    return (
        <article className={classes["note"]}>
            <div className={classes["div_note"]} key={note.id}>
                <h3 className={classes["note__title"]}>{note.tittle}</h3>
                <p className={classes["note__type"]}>{note.categories}</p>
                <p className={classes["note__description"]}>{note.content}</p>
                <div className={classes["div_button"]}>
                    <button className={classes["note__button"]} onClick={() => DeleteNote(note.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </article>
    )
}

export default SingleNote;