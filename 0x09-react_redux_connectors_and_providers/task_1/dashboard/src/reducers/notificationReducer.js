import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map, setIn } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";

const initialState = Map({
    notifications: [],
    filter: 'all' // default filter
});

const notificationReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const data = notificationsNormalizer(action.data);
            Object.keys(data.notifications).map((key) => {
                data.notifications[key].isRead = false;
            })
            return state.merge(data)
            
        case MARK_AS_READ:
            return state.setIn(['notifications', action.index, isRead], true);
    
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter,)

        default:
            return state
    }
};

export default notificationReducer;