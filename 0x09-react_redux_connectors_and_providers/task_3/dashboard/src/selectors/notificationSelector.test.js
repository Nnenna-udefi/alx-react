// src/selectors/notificationSelector.test.js
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

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
});
