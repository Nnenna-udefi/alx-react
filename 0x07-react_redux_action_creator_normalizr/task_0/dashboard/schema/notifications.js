import notificationJson from '../notifications.json';

// function should return a list containing all the context objects from the notifications.json data when the author id is the same as the userId
export const getAllNotificationsByUser = (userId) => {
    return notificationJson.filter((notification) => notification.author.id === userId);
}