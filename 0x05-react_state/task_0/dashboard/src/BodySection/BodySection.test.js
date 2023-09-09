import '../../config/setupTests';
import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
    it('checks that the component should render correctly children and one h2 element', () => {
        const wrapper = shallow(<BodySection title='test title'>
            <p>test children node</p>
        </BodySection>);
        
        expect(wrapper.exists()).toBe(true);

        const heading = wrapper.find('h2');
        expect(heading).toHaveLength(1);
        expect(heading.text()).toBe('test title');

        const para = wrapper.find('p');
        expect(para).toHaveLength(1);
        expect(para.text()).toBe('test children node');
    });
})