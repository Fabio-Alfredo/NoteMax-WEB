import InputField from '../../components/Labels/InputFields'
import '../AuthStyle.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setloginSuccessful] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: username, password })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
            })

            .then(result => handleLoginSuccess(result))
            .catch(error => handleApiError(error));
    };

    const handleLoginSuccess = (result) => {
        if (result.token) {
            localStorage.setItem('token', result.token);
            setloginSuccessful('true');
            window.location.reload();
            navigate('/principal');
        } else {

            navigate('/');
        }
    };

    const handleApiError = (error) => {
        //console.error("Error en la solicitud:", error.message);
        alert("Autentication invalid", error);
    };


    return (
        <section className='login-registrer'>
            <div className="container-form">
                <h1 className='title-form'>NoteMax</h1>
                <form className='my-form'>
                    <InputField
                        type="text"
                        id="1"
                        name="Username"
                        placeholder="Your Username..."
                        value={username}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const onlyLetters = /^[a-zA-Z]+$/;

                            if (onlyLetters.test(inputValue) || inputValue === '') {
                                setUsername(inputValue);
                            }
                        }}
                    >
                        Username:
                    </InputField>

                    <InputField
                        type="password"
                        id="2"
                        name="Password"
                        placeholder="Your Password..."
                        value={password}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const allowedCharacters = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]+$/;

                            if (allowedCharacters.test(inputValue) || inputValue === '') {
                                setPassword(inputValue);
                            }
                        }}
                    >
                        Password:
                    </InputField>
                </form>

                <InputField
                    type="submit"
                    id="2"
                    name="submit"
                    value="Log in"
                    onClick={handleLogin}
                >
                </InputField>
                <p>Don&rsquo;t have an account? <Link className='navLogin' to="/registrer">Registrarse</Link></p>
            </div>
        </section>
    )
}

export default Login;