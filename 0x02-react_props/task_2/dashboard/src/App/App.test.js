import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import '../../config/setupTests';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from '../Notifications/Notifications';


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
})