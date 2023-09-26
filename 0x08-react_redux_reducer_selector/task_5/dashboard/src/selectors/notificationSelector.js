// selector to return the value of the filter
export const filterTypeSelected = state => state.get('filter');

// return lists of notifications in map format
export const getNotifications = state => state.get('notification');

// return lists of unread notifications in map format
export const getUnreadNotifications = state => {
    const allNotifications = state.get('notifications');
    const unreadNotifications = new Map();

    allNotifications.forEach((notification, id) => {
        if (!notification.read) {
            unreadNotifications.set(id, notification);
        };

        return unreadNotifications;
    })
}