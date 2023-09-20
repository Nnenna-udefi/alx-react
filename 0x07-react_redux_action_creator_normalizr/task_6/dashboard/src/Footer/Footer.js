import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  'App-footer': {
    borderTop: '2px solid rgb(217, 37, 37)',
    textAlign: 'center',
    fontStyle: 'italic',
  }
})

function Footer() {
  const { user } = useContext(AppContext);
  const isIndex = true;

  return (
    <footer className={css(styles['App-footer'])}>
      {user.isLoggedIn && (
        <p>
          <a href='#'>Contact Us</a>
        </p>
      )}
      <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
    </footer>
        
  );
};

export default Footer;