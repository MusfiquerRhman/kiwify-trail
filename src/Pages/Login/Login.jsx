import React, { useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import { kiwifyLogo } from '../../Assets';
import EmailField from "../../Components/EmailField";
import PasswordField from "../../Components/PasswordField";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleChangeEmail = (email) => {
        setEmail(email);
    }

    const handleChangePassword = (password) => {
        setPassword(password);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailRef.current.checkValidity();
        passwordRef.current.checkValidity();
    }


    return (
        <section className="container">
            <img className="logo" src={kiwifyLogo} alt="kiwify logo" />
            <h1 className="title">Entrar na sua conta</h1>
            <span className="subtitle">
                Ou <NavLink style={{marginBottom: '0.25rem', textDecoration: 'underline'}} className='link' to='/signup'>fazer cadastro</NavLink>
            </span>

            <form onSubmit={handleSubmit} className="form">
                <div className="input__container">
                    <EmailField
                        handleChangeEmail={handleChangeEmail}
                        title="E-mail"
                        ref={emailRef}
                    />
                </div>

                <div className="input__container">
                    <PasswordField
                        handleChangePassword={handleChangePassword}
                        ref={passwordRef}
                    />
                </div>

                <NavLink to='/signup' className='link forgot__password'>Esqueceu a senha?</NavLink>
                <button type="submit">Entrar</button>
            </form>
        </section>
    )
}

export default Login;