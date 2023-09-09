import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { logOut } from '../App/AppContext';


const styles = StyleSheet.create({
    appHeader: {
        display: 'flex',
    },

    appHi: {
        color: 'rgb(217, 37, 37)',
        alignSelf: 'center',
    },

    imag: {
        width: '40%'
    }
})

class Header extends Component {
    static contextType = AppContext;
    render() {
        const { user } = this.context;
    return (
        <>
         <header className={css(styles.appHeader)}>
            <img src={logo} alt='Holberton logo' className={css(styles.imag)} />
            <h1 className={css(styles.appHi)}>School dashboard</h1>
      </header>
      {user.isLoggedIn && (
        <section id='logoutSection'>Welcome <strong>{user.email}  </strong>
        <em>
            <a href='#' onClick={logOut}>
                 (logout)
            </a>
        </em>
        </section>
      )}
        </>
       
    );
};
};

export default Header