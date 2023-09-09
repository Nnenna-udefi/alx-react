/**
 * @jest-environment jsdom
 */
import '../../config/setupTests';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

const listNotifications = [
    { id: 1, type: 'default', value: 'New course available', html: null },
    { id: 2, type: 'urgent', value: 'New resume available', html: null },
    { id: 3, type: 'urgent', value: null, html: { __html: 'Test HTML' } }
  ];
  
describe('App tests', () => {
    it('renders without crashing', () => {
        shallow(<App />)
    });
    it('renders the Notifications component', () => {
        const component = shallow(<App />);
        expect(component.contains(<Notifications displayDrawer={true} listNotifications={listNotifications}/>)).toBe(true);
    });

    it('renders the Header component', () => {
        const component = shallow(<App />);
        expect(component.contains(<Header />)).toBe(true);
    });

    it('renders the Login component', () => {
        const component = shallow(<App />);
        expect(component.contains(<Login />)).toBe(true);
    });

    it('renders the Footer component', () => {
        const component = shallow(<App />);
        expect(component.contains(<Footer />)).toBe(true);
    });

    it('does not render CourseList when isloggedin is false', () => {
        const component = shallow(<App isLoggedIn={false}/>);
        expect(component.contains(<CourseList />)).toBe(false);
        expect(component.contains(<Login />)).toBe(true);
    });

    it('does not render Login when isloggedin is true', () => {
        const component = shallow(<App isLoggedIn={true}/>);
        expect(component.contains(<Login />)).toBe(false);
        expect(component.contains(<CourseList />)).toBe(true);
    });

    it('verifies that when control + h are pressed the logOut function is called and shows the alert Logging you out', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplemention(() => {});

        const wrapper = mount(<App logOut={logOutMock} />);
        const event = new KeyboardEvent('keydown', {
            key: 'h', ctrlKey: true,
        });

        document.dispatchEvent(event);

        expect(alertMock).toHaveBeenCalledWith('Logging you out');
        expect(alertMock).toHaveBeenCalledTimes(1);

        alertMock.mockRestore();
        jest.clearAllMocks();
        wrapper.unmount();
    });

    it('removes event listener on unmount', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
        const component = mount(<App logOut={logOutMock} />);
        component.unmount();
    
        const event = new KeyboardEvent('keydown', {
          key: 'h',
          ctrlKey: true,
        });
    
        document.dispatchEvent(event);
    
        expect(alertMock).not.toHaveBeenCalled();
        expect(logOutMock).not.toHaveBeenCalled();
    
        alertMock.mockRestore();
        jest.clearAllMocks();
      });

      it('verifies that the default state for displayDrawer is false and is set to true after calling handleDisplayDrawer', () => {
        const wrapper = shallow(<App />);
        // before calling the method
        expect(wrapper.state().displayDrawer).toEqual(false);

        // Call the handleDisplayDrawer method
        wrapper.instance().handleDisplayDrawer();

        // After calling the method, state should be true
        expect(wrapper.state().displayDrawer).toEqual(true)
      });

      it('verifies that displayDrawer is updated to false after calling handleHideDrawer', () => {
        const wrapper = shallow(<App />);
        // set initial state to be true
        wrapper.setState({ displayDrawer : true });

        // before calling the method state should be true
        expect(wrapper.state().displayDrawer).toEqual(true);

        // call the handleHideDrawer method
        wrapper.instance().handleHideDrawer();

        // state should be false after calling the method
        expect(wrapper.state().displayDrawer).toEqual(false);
      });
});