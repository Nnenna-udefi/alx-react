import { normalize, schema } from 'normalizr';
import notificationJson from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});
const normalizeData = normalize(notificationJson, [notification]);
// function should return a list containing all the context objects from the notifications.json data when the author id is the same as the userId
export const getAllNotificationsByUser = (userId) => {
    // Filter notifications by author id matching userId
    const filteredNotifications = [];
    const notifications = normalizeData.entities.notification;
    const messages = normalizeData.entities.messages;

    for (const notificationId in notifications) {
      if (notifications[notificationId].author === userId) {
        filteredNotifications.push(messages[notifications[notificationId].context]);
      }
    }
    
  return filteredNotifications;
}

export { normalizeData };