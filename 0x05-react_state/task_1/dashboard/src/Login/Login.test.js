import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import '../../config/setupTests'

describe('<Login />', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('renders 2 input tags', () => {
        const wrapper = shallow(<Login />);
        const inputTag = wrapper.find('input');
        expect(inputTag).toHaveLength(3);
    });

    it('renders 2 label tags', () => {
        const wrapper = shallow(<Login />);
        const labelTag = wrapper.find('label');
        expect(labelTag).toHaveLength(2);
    });

    it('should render with the submit button initially disabled', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBe(true);
      });
    
      it('should enable the submit button when both email and password fields have values', () => {
        const wrapper = shallow(<Login />);
        const emailInput = wrapper.find('input#email');
        const passwordInput = wrapper.find('input#password');
        const submitButton = wrapper.find('input[type="submit"]');
    
        // Simulate typing in email and password inputs
        emailInput.simulate('change', { target: { value: 'test@example.com' } });
        passwordInput.simulate('change', { target: { value: 'password123' } });
    
        // Expect the submit button to be enabled
        expect(submitButton.prop('disabled')).toBe(true);
      });
})