import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import closebtn from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { connect } from 'react-redux';
import { markAsAread } from '../actions/notificationActionCreators';


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


export class Notifications extends React.PureComponent {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    getUnreadNotifications: PropTypes.func,
    showDrawer: PropTypes.func,
    hideDrawer: PropTypes.func,
    fetchNotifications: PropTypes.func,
    messages: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
      displayDrawer: false,
      markNotificationAsRead: () => {},
      fetchNotifications: () => {},
      getUnreadNotifications: () => {},
      messages: []
  };

  componentDidMount() {
    this.props.fetchNotifications()
  }

  getUnreadNotifications

  render() {
    const loadNotifs = () => {
      let rows = <></>
      const notifArray = this.props.messages
      if (notifArray.length == 0){
          return <p>No new notification for now</p>
      } else {
          rows = notifArray.map((notif) => {
            if (notif.html != undefined && notif.html.__html != null){
              return (<NotificationItem key={notif.id} id={notif.id} type={notif.type}
              html={notif.html} markNotificationAsRead={this.props.markNotificationAsRead}/>)
            } else {
            return (<NotificationItem key={notif.id} id={notif.id} type={notif.type}
            value={notif.value} markNotificationAsRead={this.props.markNotificationAsRead}/>)
            }
          })
      }
      return (
        <>
        <p className={css(styles.p)}>Here is the list of notifications:</p>
            <ul className={css(styles.ul)}>
              {rows}
            </ul>
        </>
      )
    }
    const showNotifs = () => {
      if (this.props.displayDrawer) {
        return (
          <>
            <div className={css(styles.Notifications)}>
              <button style={{float:'right', background: 'none', border: 'none'}}
              id="close-btn"
              aria-label="Close"
              onClick={this.props.hideDrawer}>
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
      <div onClick={this.props.showDrawer} className={css(this.props.displayDrawer ? styles.hideMenuItem : styles.menuItem)}>Your notifications</div>
      {showNotifs()}
    </>
    )
  }
};

const mapStateToProps = (state) => ({
  messages: getUnreadNotifications(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotifications: () => dispatch(fetchNotifications()),
  markNotificationAsRead: (index) => dispatch(markAsAread(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)