import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

const EmailField = React.forwardRef((props, ref) => {
    const {handleChangeEmail, title, previousEmail} = props;
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(null)
    const email = useRef(null);

    const checkEmailValidity = (email) => {
        if(email.length < 1){
            setError('Esse campo é obrigatório');
            setIsValid(false);
        }
        else if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            setError('O e-mail deve ser válido')
            setIsValid(false);
        }
        else if(previousEmail && previousEmail !== email){
            console.log(previousEmail, email)
            setError('Os dois e-mails devem ser iguais')
            setIsValid(false);
        }
        else {
            setIsValid(true);
            setError('');
        }
    }

    const onChangeFocusOut = () => {
        checkEmailValidity(email.current.value);
    }

    useImperativeHandle(ref, () => ({
        checkValidity() {
            checkEmailValidity(email.current.value)
        }
    }));

    useEffect(() => {
        if(isValid) {
            handleChangeEmail(email.current.value)
        }
    }, [handleChangeEmail, isValid])

    return (
        <div className="input__container">
            <label style={{marginBottom: '0.25rem'}} htmlFor="email">{title}</label>
            <input type="email"
                id="email"
                name="email"
                // required
                className={isValid === false ? 'invalid__input' : 'valid__input'}
                ref={email}
                onBlur={onChangeFocusOut}
            />
            <p className="error__text">{error}</p>
        </div>
    )
});

export default EmailField;