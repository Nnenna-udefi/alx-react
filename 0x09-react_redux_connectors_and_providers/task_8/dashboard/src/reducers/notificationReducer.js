import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from "../actions/notificationActionTypes";
import { Map, setIn } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";

const initialState = Map({
    notifications: {
        data: [],
        loading: false
    },
    filter: 'all' // default filter
});

const notificationReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const data = notificationsNormalizer(action.data);
            Object.keys(data.notifications).map((key) => {
                data.notifications[key].isRead = false;
            })
            return state.set('notifications', { data: state.getIn(['notifications', 'data']).concat(data.notifications), loading: false });
            
        case MARK_AS_READ:
            return state.setIn(['notifications', 'data', action.index, isRead], true);
    
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter,)

        case SET_LOADING_STATE:
            return state.setIn(['notifications', 'loading'], action.isLoading);

        default:
            return state
    }
};

export default notificationReducer;