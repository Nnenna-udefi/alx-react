import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes"

describe('notificationReducer', () => {
  // Test default state
  it('should return the initial state', () => {
    const initialState = {
        notifications: [],
        filter: 'all'
    };
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  // Test FETCH_COURSE_SUCCESS action
  it('should correctly handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const notifications = [
          {
            id: 1,
            isRead: false,
            type: "default",
            value: "New course available"
          },
          {
            id: 2,
            isRead: false,
            type: "urgent",
            value: "New resume available"
          },
          {
            id: 3,
            isRead: false,
            type: "urgent",
            value: "New data available"
          }
        ]
      
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
    const expectedState = notifications.map(notification => ({ ...notification, isRead: false }));

    const state = notificationReducer([], action);
    expect(state).toEqual(expectedState);
  });

  // Test SELECT_COURSE action
  it('should correctly handle MARK_AS_READ action', () => {
    const initialState = [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ];

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  // Test UNSELECT_COURSE action
  it('should correctly handle SET_TYPE_FILTER action', () => {
    const initialState = {
        filter: "DEFAULT",
        notifications: [
          {
            id: 1,
            isRead: false,
            type: "default",
            value: "New course available"
          },
          {
            id: 2,
            isRead: false,
            type: "urgent",
            value: "New resume available"
          },
          {
            id: 3,
            isRead: false,
            type: "urgent",
            value: "New data available"
          }
        ]
      };
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
        filter: "URGENT",
        notifications: [
          {
            id: 1,
            isRead: false,
            type: "default",
            value: "New course available"
          },
          {
            id: 2,
            isRead: false,
            type: "urgent",
            value: "New resume available"
          },
          {
            id: 3,
            isRead: false,
            type: "urgent",
            value: "New data available"
          }
        ]
      };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
