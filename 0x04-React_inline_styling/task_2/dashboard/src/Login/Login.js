import React from "react";
import { StyleSheet, css } from 'aphrodite';


function Login() {
    const handleLabelClick = (idInput) => {
        const input = document.getElementById(idInput);
        if (input) {
          input.focus();
        }
        };
        
    return (
        <div className={css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <label className={css(styles.label)} htmlFor="email" onClick={() => handleLabelClick('email')}>
            Email Address:</label>
            <input className={css(styles.input)} type="email" name="email" id="email" />
            <label className={css(styles.label)} htmlFor="password" onClick={() => handleLabelClick('password')}>
            Password:</label>
            <input className={css(styles.input)} type="password" name="password" id="password" />
            <button>OK</button>
        </div>
    );
}

const styles = StyleSheet.create({
    appBody: {
        height: '50vh',
        borderBottom: '2px solid rgb(217, 37, 37)',
        padding: '1.5rem 3rem 0'
    },

    label: {
        margin: '1rem',
    },

    input: {
        margin: '1rem',
    }
});

export default Login