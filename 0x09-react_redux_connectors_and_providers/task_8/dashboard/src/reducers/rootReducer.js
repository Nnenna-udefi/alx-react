import uiReducer from "./uiReducer";
import notificationReducer from './notificationReducer';
import courseReducer from './courseReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    course: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer,
});

export default rootReducer;