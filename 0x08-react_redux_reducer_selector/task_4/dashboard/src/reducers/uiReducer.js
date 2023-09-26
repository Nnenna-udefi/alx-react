import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { Map } from 'immutable';

// Initial state as an Immutable Map
const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
});

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false); 
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);
        case LOGIN_FAILURE:
        case LOGOUT:
            return state.set('isUserLoggedIn', false);
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
};

export default uiReducer;