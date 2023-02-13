import React, { useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import { kiwifyLogo } from '../../Assets';
import EmailField from "../../Components/EmailField";
import PasswordField from "../../Components/PasswordField";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('');
    const [conditionsChecked, setConditionsChecked] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true);
    const emailRef = useRef(null);
    const repeatEmailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleChangeEmail = (email) => {
        setEmail(email);
    }

    const handleChangePassword = (password) => {
        setPassword(password);
    }

    const handleChangeConfirmPassword = (password) => {
        setConfirmEmail(password);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!conditionsChecked) {
            setInitialLoad(false)
        }
        emailRef.current.checkValidity();
        repeatEmailRef.current.checkValidity();
        passwordRef.current.checkValidity();
    }

    const handleChangeCondition = () => {
        setConditionsChecked(previousState => !previousState);
        setInitialLoad(false)
    }

    return (
        <section className="container">
            <img className="logo" src={kiwifyLogo} alt="kiwify logo" />
            <h1 className="title">Criar nova conta</h1>
            <span className="subtitle">
                Ou <NavLink className='link' to='/login'>entrar na sua conta existente</NavLink>
            </span>

            <form onSubmit={handleSubmit} className="form">
                <div className="input__container">
                    <EmailField
                        handleChangeEmail={handleChangeEmail}
                        title="E-mail"
                        previousEmail={email}
                        ref={emailRef}
                    />
                </div>

                <div className="input__container">
                    <EmailField
                        handleChangeEmail={handleChangeConfirmPassword}
                        title="Repetir e-mail"
                        previousEmail={email}
                        ref={repeatEmailRef}
                    />
                </div>

                <div className="input__container">
                    <PasswordField
                        handleChangePassword={handleChangePassword}
                        ref={passwordRef}
                    />
                </div>

                <div className="conditions">
                    <input type="checkbox" 
                        checked={conditionsChecked} 
                        onChange={handleChangeCondition} 
                        className={(conditionsChecked === false && !initialLoad)? 'invalid__input' : 'valid__input'}    
                    />
                    <p className="condition__text">
                        Eu li e aceito os &nbsp;
                        <NavLink className="condition__links">termos de uso</NavLink>,&nbsp;
                        <NavLink className="condition__links">termos de licença de uso de software</NavLink>,&nbsp;
                        <NavLink className="condition__links">política de conteúdo</NavLink> da Kiwify
                        {(conditionsChecked === false && !initialLoad) && (
                            <span className="error__text">(Esse campo é obrigatório)</span>
                        )}
                    </p>
                </div>
                <button type="submit">Cariar conta</button>
            </form>
        </section>
    )
}

export default Register;