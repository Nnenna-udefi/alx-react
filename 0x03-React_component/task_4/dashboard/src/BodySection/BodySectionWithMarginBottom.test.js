import '../../config/setupTests';
import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySection';
import BodySection from './BodySection';


describe('<BodySectionWithMarginBottom />', () => {
    it('should apply margin bottom to its children', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title='test title'>
            <p>test children node</p>
        </BodySectionWithMarginBottom>);

        // Check if the rendered structure includes BodySectionWithMarginBottom
        expect(wrapper.find('.bodySectionWithMargin')).toHaveLength(1);

        const bodySection = wrapper.find(BodySection);
        expect(bodySection).toHaveLength(1);

        expect(bodySection.prop('title')).toBe('test title');

    });
})