import PropTypes from 'prop-types';
import React from 'react';

const NotificationItem = ({ type, html, value }) => {
    return (
    <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
    </>
    );
};

NotificationItem.propTypes = {
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};


export default NotificationItem;