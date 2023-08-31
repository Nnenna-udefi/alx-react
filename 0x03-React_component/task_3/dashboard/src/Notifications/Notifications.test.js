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

      it('should not rerender with the same list of notifications', () => {
        const listNotifications = [
          { id: 1, type: 'default', value: 'New notification' },
          { id: 2, type: 'urgent', value: 'Urgent notification' },
        ];
    
        const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        // Keep a reference to the instance of the component
        const instance = wrapper.instance();
        // Spy on the render method
        const renderSpy = jest.spyOn(instance, 'render');
        // Update props with the same list
        wrapper.setProps({ listNotifications });
        // Verify that the render method was not called again
        expect(renderSpy).toHaveBeenCalledTimes(1);
        // Clean up the spy
        renderSpy.mockRestore();
      });
    
      it('should rerender with a longer list of notifications', () => {
        const initialListNotifications = [
          { id: 1, type: 'default', value: 'New notification' },
        ];
    
        const updatedListNotifications = [
          { id: 1, type: 'default', value: 'New notification' },
          { id: 2, type: 'urgent', value: 'Urgent notification' },
        ];
    
        const wrapper = shallow(<Notifications listNotifications={initialListNotifications} />); 
        // Keep a reference to the instance of the component
        const instance = wrapper.instance();
        // Spy on the render method
        const renderSpy = jest.spyOn(instance, 'render');
        // Update props with a longer list
        wrapper.setProps({ listNotifications: updatedListNotifications });
        // Verify that the render method was called again
        expect(renderSpy).toHaveBeenCalledTimes(2);
        // Clean up the spy
        renderSpy.mockRestore();
      });
});

describe("onclick event behaves as it should", () => {
    it("should call console.log with the right message", () => {
      const wrapper = shallow(<Notifications />);
      const spy = jest.spyOn(console, "log").mockImplementation();
  
      wrapper.instance().markAsRead = spy;
      wrapper.instance().markAsRead(1);
      expect(wrapper.instance().markAsRead).toBeCalledWith(1);
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(1);
      spy.mockRestore();
    });
});  