import '../../config/setupTests';
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Notifications, { mapStateToProps, mapDispatchToProps } from "./Notifications";
import { setNotificationFilter } from '../actions/notificationActionCreators';

const mockStore = configureMockStore();
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders menuItem class when displayDrawer is false', () => {
        const component = shallow(<Notifications displayDrawer={false}/>);
        const menu = component.find('div.menuItem');

        expect(menu.exists()).toBe(false);
    });

    it('renders menuItem and notifications class when displayDrawer is true', () => {
        const component = shallow(<Notifications displayDrawer={true}/>);
        const menu = component.find('div.menuItem');
        const mainNoti = component.find('div.Notifications');

        expect(menu.exists()).toBe(false);
        expect(mainNoti.exists()).toBe(false);
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

      it('verify that clicking on the menu item calls handleDisplayDrawer', () => {
        const displaySpy = jest.fn();
        const wrapper = shallow(<Notifications handleDisplayDrawer={displaySpy} />);
        
        // Find the menu item and simulate a click
        wrapper.find('[data-testid="menu-item"]').simulate('click');

        // Expect handleDisplayDrawer to be called
        expect(displaySpy).toHaveBeenCalled();
      });

      it('verify that clicking on the button calls handleHideDrawer', () => {
        const hideDrawerSpy = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer handleHideDrawer={hideDrawerSpy} />)

        // Open the drawer
        wrapper.setState({ displayDrawer: true });

        // Find the close button and simulate a click
        wrapper.find('button').at(0).simulate('click');

        expect(hideDrawerSpy).toHaveBeenCalled();

      });

      it('fetchNotifications is called when the component is mounted', () => {
        const fetchNotificationsSpy = jest.fn();
        shallow(<Notifications fetchNotifications={fetchNotificationsSpy}/>);
        expect(fetchNotificationsSpy).toHaveBeenCalled();
      });

      it('should call setNotificationFilter with URGENT when the first button is clicked', () => {
        const store = mockStore();
        const wrapper = shallow(<Notifications store={store} />);
        wrapper.find('button').at(0).simulate('click');
        const actions = store.getActions();
        expect(actions).toEqual([setNotificationFilter('Urgent')]);
      });

      it('should call setNotificationFilter with default when the second button is clicked', () => {
        const store = mockStore();
        const wrapper = shallow(<Notifications store={store} />);
        wrapper.find('button').at(1).simulate('click');
        const actions = store.getActions();
        expect(actions).toEqual([setNotificationFilter('DEFAULT')]);
      })

})