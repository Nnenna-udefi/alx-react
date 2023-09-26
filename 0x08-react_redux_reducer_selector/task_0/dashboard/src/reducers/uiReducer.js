import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                // Returns new state object with (...state)
                // that has all the existing state data
                ...state,
                isNotificationDrawerVisible: true,
            };
        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false,
            };
        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false
            };
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
};

export default uiReducer;