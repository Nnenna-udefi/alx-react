import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

export const markAsAread = (index) => {
    return {
        type: MARK_AS_READ,
        index,
    };
};
export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export const setLoadingState = (isLoading) => {
    return {
        type: SET_LOADING_STATE,
        isLoading,
    }
};

export const setNotifications = (notifications) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        notifications,
    }
};

export const fetchNotifications = () => {
    return (dispatch) => {
        // set loading state to true
        dispatch(setLoadingState(true));

        // Simulate a fetch request to /notifications.json
        fetch('../../notifications.json')
          .then((response) => response.json())
          .then((data) => {
            // Dispatch setNotifications with the fetched data
            dispatch(setNotifications(data));
            // Set loading state to false after fetching
            dispatch(setLoadingState(false));
          })
          .catch((error) => {
            console.error('Error fetching notifications:', error)
            // Set loading state to false in case of an error
            dispatch(setLoadingState(false));
          })
    }
}
