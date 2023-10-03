import React, { useEffect, useState } from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from "prop-types";


const styles = StyleSheet.create({
    appBody: {
        height: '50vh',
        width: '100%',
        maxWidth: '900px',
        padding: '1.5rem 3rem 0',
        boxSizing: 'border-box',
        "@media (max-width: 900px)": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    },

    label: {
        display: 'block',
        margin: '.5rem 0',
        width: '150px'
    },

    input: {
        width: '300px',
        margin: '.5rem 0',
        padding: '.4rem .6rem'
    },

    button: {
        width: '150px',
        padding: '5px',
        border: '2px solid burlywood',
        backgroundColor: 'transparent',
        color: 'black',
        cursor: 'pointer',
        marginLeft: '15px',
        '@media (max-width: 900px)': {
          width: '50%',
          padding: '10px',
          marginLeft: '0'
        },
    },
})

function Login({ logIn }) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false)

    const handleLabelClick = (idInput) => {
        const input = document.getElementById(idInput);
        if (input) {
          input.focus();
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        logIn(email, password)
    };

    useEffect(() => {
        if (email !== '' && password !== '') {
            setEnableSubmit(true);
        } else {
            if (enableSubmit !== false) {
                setEnableSubmit(false);
            }
        }
    }, [email, password]);

    // handleChangeEmail and handleChangePassword that the two inputs will call when the value in the input field is changed.
    // The local state should update with what the user is typing
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
        
    return (
        <div className={css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <form onSubmit={handleLoginSubmit}>
                <label className={css(styles.label)} htmlFor="email" onClick={() => handleLabelClick('email')}>
                Email Address:</label>
                <input className={css(styles.input)} type="email" name="email" id="email"
                 value={email} onChange={handleChangeEmail} />
                <label className={css(styles.label)} htmlFor="password" onClick={() => handleLabelClick('password')}>
                Password:</label>
                <input className={css(styles.input)} type="password" name="password" id="password" 
                value={password} onChange={handleChangePassword}/>
                <input type="submit" value='OK' className={css(styles.button)} disabled={!enableSubmit} />
            </form>
            
        </div>
    );
}
export default Login