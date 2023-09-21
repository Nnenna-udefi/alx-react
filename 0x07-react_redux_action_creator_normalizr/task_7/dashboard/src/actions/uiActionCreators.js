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
        type: LOGIN_SUCCESS,
    }
};

export const loginRequest = (email, password) => {
    return async (dispatch) => {
        boundLogin(email, password);
    try {
            const response = await fetch('http://localhost:8564/login-success.json');
            await response.json();
            return dispatch(loginSuccess());
        } catch {
            return dispatch(loginFailure());
        }
};
};

// export const loginRequest = (email, password) => {
//     return (dispatch) => {
//         boundLogin(email, password);
//     return fetch('http://localhost:8564/login-success.json')
//     .then(response => response.json())
//     .then(() => dispatch(loginSuccess()))
//     .catch(() => dispatch(loginFailure()));
// };
// };