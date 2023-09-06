import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }
    
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    render () {
        return (
            <>
                { this.props.displayDrawer ? (
                <div>
                <div className={css(styles.menuItem)} data-testid='menu-item'>
                        <p>Your notifications</p>
                </div>
                <div className={css(styles.notification)} data-testid='main-notifications'>
                    <button style={{float: 'right',
                    background: 'none', border: '1px solid red'
                }} aria-label='Close' 
                    onClick={ () => {
                        console.log('Close button has been clicked')}
                        }>
                            <img src={closeIcon} alt='close button' className={css(styles.img)}/>
                    </button>
                    
                    {this.props.listNotifications.length === 0 ? (
                        <p>No new notification for now</p>
                    ) : (
                        <>
                            <p>Here is the list of notifications</p>
                            <ul>
                                {this.props.listNotifications.map(notification => (
                                <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} 
                                markAsRead={this.markAsRead} id={notification.id} className={css(styles.item)}/>
                                ))}
                            </ul>
                            </>
                    )}
                </div>
                </div>
                ) : (
                    <div className={css(styles.menuItem)}>
                        <p>Your notifications</p>
                </div>
                )}
                
            </>
        );
    }
}

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
        
    },

    img: {
        width: '10px'
    }
});

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
  
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
  

export default Notifications;