import SingleNote from '../SingleNote/SingleNote';
import { useContext } from "react";
import { NoteContext } from '../../../contexts/NoteContext';
import classes from "./NotesFeed.module.scss";

function NotesFeed() {
    const { notes } = useContext(NoteContext);

    if (notes.length === 0) {
        return (
            <section className={classes["notes-feed"]}>
                <h2 className={classes["notes-feed__title"]}>No notes found...</h2>
            </section>
        );
    }

    return (
        <section className={classes["notes-feed"]}>
            <h2 className={classes["notes-feed__title"]}>Notes for you...</h2>
            {notes.map((note) => (
                <SingleNote key={note.created_at} note={note} />
            ))}
        </section>
    );
}

export default NotesFeed;