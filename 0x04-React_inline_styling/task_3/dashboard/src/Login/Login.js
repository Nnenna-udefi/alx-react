import React from "react";
// import './Login.css';
import { StyleSheet, css } from 'aphrodite';

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
            <form>
                <label className={css(styles.label)} htmlFor="email" onClick={() => handleLabelClick('email')}>
                Email Address:</label>
                <input className={css(styles.input)} type="email" name="email" id="email" />
                <label className={css(styles.label)} htmlFor="password" onClick={() => handleLabelClick('password')}>
                Password:</label>
                <input className={css(styles.input)} type="password" name="password" id="password" />
                <button className={css(styles.button)}>OK</button>
            </form>
            
        </div>
    );
}
export default Login