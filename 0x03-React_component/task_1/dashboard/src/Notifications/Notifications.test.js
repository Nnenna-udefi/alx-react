import '../../config/setupTests';
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from "./Notifications";
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders menuItem class when displayDrawer is false', () => {
        const component = shallow(<Notifications displayDrawer={false}/>);
        const menu = component.find('div.menuItem');
        const mainNoti = component.find('div.Notifications');

        expect(menu.exists()).toBe(true);
    });

    it('renders menuItem and notifications class when displayDrawer is true', () => {
        const component = shallow(<Notifications displayDrawer={true}/>);
        const menu = component.find('div.menuItem');
        const mainNoti = component.find('div.Notifications');

        expect(menu.exists()).toBe(true);
        expect(mainNoti.exists()).toBe(true);
    });

    it('renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        expect(wrapper.find(NotificationItem)).toHaveLength(0);
        expect(wrapper.text()).toContain('No new notification for now');
        expect(wrapper.text()).not.toContain('Here is the list of notifications');
    });

    it('renders notification list correctly with notifications', () => {
        const listNotifications = [
          { id: 1, type: 'default', value: 'New course available', html: null },
          { id: 2, type: 'urgent', value: 'New resume available', html: null },
        ];
    
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const notificationItems = wrapper.find(NotificationItem);
    
        expect(notificationItems).toHaveLength(listNotifications.length);
        expect(wrapper.text()).toContain('Here is the list of notifications');
        expect(wrapper.text()).not.toContain('No new notification for now');
      });

})