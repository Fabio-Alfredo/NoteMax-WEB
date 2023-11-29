import classes from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');

        navigate('/');
        window.location.reload();
    };

    return (
        <header className={classes["Header"]}>

            <div className={classes["Title"]}>
                <h1> NoteMax </h1>
            </div>

            <div className={classes["Bottons"]}>
                <button className={classes["Button"]} onClick={handleLogout}> Log out </button>
            </div>

        </header>
    )

}

export default Header;