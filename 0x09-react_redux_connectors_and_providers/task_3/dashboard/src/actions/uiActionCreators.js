import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from "./uiActionTypes";

export const login = (email, password) => {
    return {
        type: LOGIN,
        user: { email, password },
    }
};

export const logout = () => ({ type: LOGOUT });

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

// bound the action creators
export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout());
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    }
};

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
    }
};

export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch(login(email, password));
    try {
            const response = await fetch('http://localhost:8564/login-success.json');

            if (!response.ok) {
                throw new Error('Failed to fetch')
            }
            const data = await response.json();
            dispatch(loginSuccess(data));
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
};
};