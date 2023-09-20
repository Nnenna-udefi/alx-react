import { getAllNotificationsByUser } from './notifications';
import notificationJson from '../notifications.json';


const mockUserId = '5debd764a7c57c7839d722e9';
  describe('<getAllNotificationsByUser />', () => {
    it('returns notifications for a specific user based on user id', () => {
        const notifications = getAllNotificationsByUser(mockUserId);
        const expectedNotifications = notificationJson.filter(notification => notification.author.id === mockUserId);
        expect(notifications).toEqual(expect.arrayContaining(expectedNotifications));
    });
  });