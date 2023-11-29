import '../AuthStyle.css'
import InputField from '../../components/Labels/InputFields';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Registrer() {

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegistrer = async (e) => {
        e.preventDefault();

        if (!name || !user || !email || !phoneNumber || !password) {
            alert("Por favor, complete todos los campos.");

        }
        const userData = {
            name: name,
            user: user,
            email: email,
            phone_number: phoneNumber,
            password: password
        }
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });

            if (response.status === 200) {
                navigate('/');
            } else {
                navigate('/registrer');
            }
        } catch (error) {
            console.error(error);
            // Muestra un mensaje de error al usuario en la interfaz si es necesario.
        }

    }

    return (
        <section className='login-registrer'>
            <div className='container-form' >
                <form className='my-form' onSubmit={handleRegistrer}>
                    <h1 className='title-form'>NoteMax</h1>
                    <InputField
                        type="text"
                        id="5"
                        name="nombre"
                        value={name}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const onlyLetters = /^[a-zA-Z]+$/;

                            if (onlyLetters.test(inputValue) || inputValue === '') {
                                setName(inputValue);
                            }
                        }}
                        placeholder="Your name..."
                    >
                        Name:
                    </InputField>
                    <InputField
                        type="text"
                        id="6"
                        name="user"
                        value={user}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const onlyLettersAndHyphens = /^[a-zA-Z-]+$/;

                            if (onlyLettersAndHyphens.test(inputValue) || inputValue === '') {
                                setUser(inputValue);
                            }
                        }}
                        placeholder="Your user..."
                    >
                        User:
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

                    <InputField
                        type="email"
                        id="7"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email..."
                    >
                        Email:
                    </InputField>



                    <InputField
                        type="tel"
                        id="8"
                        name="phone"
                        value={phoneNumber}
                        onChange={(e) => {
                            const inputValue = e.target.value;

                            if (/^\d*$/.test(inputValue) && inputValue.length <= 8) {
                                setPhoneNumber(inputValue);
                            }
                        }}
                        placeholder="Your phone number..."
                    >
                        Phone number:
                    </InputField>




                    <InputField
                        type="submit"
                        id="9"
                        name="submit"
                        value="Register"
                    >
                    </InputField>

                </form>

                <p>Already have and acount?<Link className='navLogin' to="/">Iniciar sesion</Link></p>

            </div>
        </section>
    )
}

export default Registrer;