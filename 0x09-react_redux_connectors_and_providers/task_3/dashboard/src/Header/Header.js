import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

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
});

export class Header extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <>
        <header className={css(styles.appHeader)}>
          <img src={logo} alt='Holberton logo' className={css(styles.imag)} />
          <h1 className={css(styles.appHi)}>School dashboard</h1>
        </header>
        {this.props.isLoggedIn && (
          <section id='logoutSection'>
            Welcome <strong>{user.email}</strong> 
            <em>
              <a href='#' onClick={this.props.logOut}>
                (logout)
              </a>
            </em>
          </section>
        )}
      </>
    );
  }
};

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool
};

Header.defaultProps = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false
};

const mapStateToProps = (state) => {
  return {
    user: state.get('user') || {},
    isLoggedIn: state.get('isUserLoggedIn')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
