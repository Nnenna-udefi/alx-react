import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import closebtn from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { connect } from 'react-redux';
import { markAsAread } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { setNotificationFilter } from '../actions/notificationActionCreators';


const opacityKeyframes = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  notification: {
      border: '1px dashed red',
      padding: '1rem',
      margin: '1rem 2rem 2rem 0',
      "@media (max-width: 900px)": {
          fontSize: '20px',
      }
  },

  menuItem: {
      textAlign: 'right',
      margin: '1rem',
      padding: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      ':hover': {
          animationName: [opacityKeyframes, bounceKeyframes],
          animationDuration: '1s, 0.5s',
          animationIterationCount: '3',
        },
  },
  hideMenuItem: {
    display:"none"
  },

  img: {
      width: '10px'
  }
});


const notifType = (color) => {
  return {
    color:"white",
    background: color,
    border: `1px solid ${color}`,
    padding: "3px",
    fontWeight: 600,
    cursor: "pointer"
  }
}

const urgent = notifType("red")
const dfault = notifType("darkblue")

export function Notifications(props) {
    const filterbtns = () => {
      return (
        <p>
          <span id="default" onClick={() => props.setNotificationFilter("DEFAULT")} style={dfault}>default</span> &nbsp;
          <span id="urgent" onClick={() => props.setNotificationFilter("URGENT")} style={urgent}>urgent!</span>
        </p>
      )
    }
    const loadNotifs = () => {
      let rows = <></>
      const notifArray = props.messages
      if (notifArray.length == 0){
          return (
            <>
              {filterbtns()}
              <p>No new notification for now</p>
            </>
          )
      } else {
          rows = notifArray.map((notif, key) => {
            return (<NotificationItem key={key} id={notif.guid} type={notif.type}
            value={notif.value} markNotificationAsRead={props.markNotificationAsRead}/>)
          })
      }
      return (
        <>
        <p className={css(styles.p)}>Here is the list of notifications:</p>
            {filterbtns()}
            <ul className={css(styles.ul)}>
              {rows}
            </ul>
        </>
      )
    }
    const showNotifs = () => {
      if (props.displayDrawer) {
        return (
          <>
            <div className={css(styles.Notifications)}>
              <button style={{float:'right', background: 'none', border: 'none'}}
              id="close-btn"
              aria-label="Close"
              onClick={props.hideDrawer}>
                <img src={closebtn} alt="close-btn"/>
              </button>
              {loadNotifs()}
            </div>
          </>
        )
      }
    }
    return (
    <>
      <div onClick={props.showDrawer} className={css(props.displayDrawer ? styles.hideMenuItem : styles.menuItem)}>Your notifications</div>
      {showNotifs()}
    </>
    )
}

Notifications.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    setNotificationFilter: PropTypes.func,
    displayDrawer: PropTypes.bool,
    showDrawer: PropTypes.func,
    hideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func
}

Notifications.defaultProps = {
    messages: [],
    displayDrawer: false,
    showDrawer: () => {},
    hideDrawer: () => {},
    setNotificationFilter: () => {},
    markNotificationAsRead: () => {}
}