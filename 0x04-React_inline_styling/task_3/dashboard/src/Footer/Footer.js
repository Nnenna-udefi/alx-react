import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  'App-footer': {
    borderTop: '2px solid rgb(217, 37, 37)',
    textAlign: 'center',
    fontStyle: 'italic',
  }
})

function Footer() {

  const isIndex = true;

  return (
    <footer className={css(styles['App-footer'])}>
      <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
    </footer>
        
  );
};

export default Footer;