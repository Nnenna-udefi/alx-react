import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  'App-footer': {
    borderTop: '2px solid rgb(217, 37, 37)',
    textAlign: 'center',
    fontStyle: 'italic',
  }
})

export function Footer({ user }) {
  const isIndex = true;

  return (
    <footer className={css(styles['App-footer'])}>
      {user && user.isLoggedIn && (
        <p>
          <a href='#'>Contact Us</a>
        </p>
      )}
      <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
    </footer>
        
  );
};

export const mapStateToProps= (state) => {
  return {
    user: state.get('user') || {}
  }
}

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
}

Footer.defaultProps = {
  user: {
    email: "",
    password: ""
  },
}

export default connect(mapStateToProps)(Footer)
