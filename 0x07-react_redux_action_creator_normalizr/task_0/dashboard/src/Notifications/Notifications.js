import React, { PureComponent } from 'react';
import closeIcon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isHovered: false,
      };
    }
  
    handleMenuItemHover = () => {
      this.setState({ isHovered: true });
    };
  
    handleMenuItemLeave = () => {
      this.setState({ isHovered: false });
    };
  
    render() {
      return (
        <>
          {this.props.displayDrawer ? (
            <div>
              <div
                className={css(styles.menuItem, this.state.isHovered && styles.menuItemHovered)}
                data-testid="menu-item"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                <p>Your notifications</p>
              </div>
              <div
                className={css(styles.notification)}
                data-testid="main-notifications"
                style={{ display: this.state.isHovered ? 'block' : 'none' }}
              >
                <button
                  style={{
                    float: 'right',
                    background: 'none',
                    border: '1px solid red',
                  }}
                  aria-label="Close"
                  onClick={() => {
                    console.log('Close button has been clicked');
                    this.props.handleHideDrawer();
                  }}
                >
                  <img src={closeIcon} alt="close button" className={css(styles.img)} />
                </button>
  
                {this.props.listNotifications.length === 0 ? (
                  <p>No new notification for now</p>
                ) : (
                  <>
                    <p>Here is the list of notifications</p>
                    <ul>
                      {this.props.listNotifications.map((notification) => (
                        <NotificationItem
                          key={notification.id}
                          type={notification.type}
                          value={notification.value}
                          html={notification.html}
                          markAsRead={this.markAsRead}
                          id={notification.id}
                          className={css(styles.item)}
                        />
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div
              className={css(styles.menuItem)}
              data-testid="menu-item"
              onClick={this.props.handleDisplayDrawer}
              onMouseEnter={this.handleMenuItemHover}
              onMouseLeave={this.handleMenuItemLeave}
              
            >
              <p>Your notifications</p>
            </div>
          )}
        </>
      );
    }
  };
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

    img: {
        width: '10px'
    }
});

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
};
  
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};
  

export default Notifications;