import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(<App />)
    });

    it('renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        const header = wrapper.find('.App-header');
        expect(header.exists()).toBe(true);
    });

    it('renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        const body = wrapper.find('.App-body');
        expect(body.exists()).toBe(true);
    });

    it('renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        const footer = wrapper.find('.App-footer');
        expect(footer.exists()).toBe(true);
    });
})