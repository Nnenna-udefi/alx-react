// src/selectors/notificationSelector.test.js
import { filterTypeSelected, getNotifications, getUnreadNotifications, getUnreadNotificationsByType} from './notificationSelector';
import { List } from 'immutable';

// Sample test data
const sampleState = {
  notifications: {
    filterType: 'important',
    notificationList: new Map([
      [1, { message: 'Notification 1', read: false }],
      [2, { message: 'Notification 2', read: true }],
      [3, { message: 'Notification 3', read: false }],
    ]),
  },
};

describe('Notification Selectors', () => {
  it('should return the correct filter type', () => {
    const result = filterTypeSelected(sampleState);
    expect(result).toEqual('important');
  });

  it('should return the list of notifications', () => {
    const result = getNotifications(sampleState);
    const expected = new Map([
      [1, { message: 'Notification 1', read: false }],
      [2, { message: 'Notification 2', read: true }],
      [3, { message: 'Notification 3', read: false }],
    ]);
    expect(result).toEqual(expected);
  });

  it('should return the list of unread notifications', () => {
    const result = getUnreadNotifications(sampleState);
    const expected = new Map([
      [1, { message: 'Notification 1', read: false }],
      [3, { message: 'Notification 3', read: false }],
    ]);
    expect(result).toEqual(expected);
  });

  it('should return unread urgent notifications when the filter is set', () => {
    const state = {
      notifications: List([
        { id: 1, text: 'Notification 1', type: 'URGENT', isRead: false },
        { id: 2, text: 'Notification 2', type: 'URGENT', isRead: true },
        { id: 3, text: 'Notification 3', type: 'DEFAULT', isRead: false },
        { id: 4, text: 'Notification 4', type: 'DEFAULT', isRead: true },
      ]),
      filter: 'URGENT',
    };

    const result = getUnreadNotificationsByType(state);
    expect(result).toHaveLength(1);
    expect(result[0].id).toEqual(1);
  });
});
