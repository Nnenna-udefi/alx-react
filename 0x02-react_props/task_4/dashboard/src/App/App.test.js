import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import '../../config/setupTests';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';


describe('App tests', () => {
    it('renders without crashing', () => {
        shallow(<App />)
    });
    it('renders the Notifications component', () => {
        const component = shallow(<App />);
        expect(component.contains(<Notifications />)).toBe(true);
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
    })
})