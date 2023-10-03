import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends Component {

  render() {
    const {type, value, html, markAsRead, id } = this.props
    return (
      <>
        {type && value ? <li className={css(styles.defaultStyling)} onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li> : null}
        {html ? <li className={css(styles.urgentStyling)} onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
      );
  }
}

const styles = StyleSheet.create({

  defaultStyling:  {
      color: 'blue',
      "@media (max-width: 900px)": {
        fontSize: '20px',
        padding: '10px 8px',
        borderBottom: '1px solid black',
        listStyleType: 'none'
    }
  },
  
  urgentStyling:  {
      color: 'red',
      "@media (max-width: 900px)": {
        fontSize: '20px',
        padding: '10px 8px',
        borderBottom: '1px solid black',
        listStyleType: 'none' 
    }
  }
});

NotificationItem.propTypes = {
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0,
};


export default NotificationItem;