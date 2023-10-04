import { createSelector } from 'reselect';

// selector to return the value of the filter
export const filterTypeSelected = state => state.notifications.get('filter');

// return lists of notifications in map format
export const getNotifications = state => state.notifications.get('notifications');


export const getUnreadNotificationsByType = createSelector(
    [filterTypeSelected, getNotifications],
    (filter, notifications) => {
        if (filter === 'default') {
            return notifications.filter(notification => !notification.isRead);
        } else if (filter === 'urgent') {
            return notifications.filter(notification => !notification.isRead && notification.urgent);
        }
    }
    
)