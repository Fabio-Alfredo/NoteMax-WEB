import Header from '../../components/Header/Header';
import NewNoteForm from '../../components/Notes/NewNote/NewNoteForm'
import NotesFeed from '../../components/Notes/NotesFeed/NotesFeed';
import UserFeed from '../../components/Notes/UserFeerd/UserFeed';

const InApp = () => {
    return (
        <article>
        <Header />
        <NewNoteForm />
        <NotesFeed />
        <UserFeed/>
        </article>
    );
}

export default InApp;