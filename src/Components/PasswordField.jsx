import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

const PasswordField = React.forwardRef((props, ref) => {
    const { handleChangePassword } = props;
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(null);
    const password = useRef(null);

    const checkPasswordValidity = (password) => {
        if (password.length < 1) {
            setError('Esse campo é obrigatório');
            setIsValid(false);
        }
        else {
            setIsValid(true);
            setError('');
        }
    }

    const onChangeFocusOut = () => {
        checkPasswordValidity(password.current.value);
    }

    useEffect(() => {
        if (isValid) {
            handleChangePassword(password.current.value)
        }
    }, [handleChangePassword, isValid])

    useImperativeHandle(ref, () => ({
        checkValidity() {
            checkPasswordValidity(password.current.value)
        }
    }));

    return (
        <div className="input__container">
            <label htmlFor="password">Senha</label>
            <input type="password"
                id="password"
                // required
                name="password"
                className={isValid === false ? 'invalid__input' : 'valid__input'}
                ref={password}
                onBlur={onChangeFocusOut}
            />
            <p className="error__text">{error}</p>
        </div>
    )
});

export default PasswordField;