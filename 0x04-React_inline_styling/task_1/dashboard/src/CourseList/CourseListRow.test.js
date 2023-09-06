import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import '../../config/setupTests'

  
describe('CourseListRow component', () => {
    it('renders without crashing', () => {
        shallow(<CourseListRow />);
    });

    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell={null} />);
        const tableRow = wrapper.find("tr");

        expect(tableRow.children()).toHaveLength(1);
        expect(tableRow.childAt(0).html()).toEqual('<th colSpan="2">test</th>');
    });

    it('renders correctly two td elements within a tr element', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);
        const tableRow = wrapper.find("tr");

        expect(tableRow.children()).toHaveLength(2);
        expect(tableRow.childAt(0).html()).toEqual('<td>test</td>');
        expect(tableRow.childAt(1).html()).toEqual('<td>test</td>');
    });

    // it('renders a regular row with correct background color', () => {
    //     const container = render(
    //       <div>
    //           <CourseListRow
    //             isHeader={false}
    //             textFirstCell="Course 1"
    //             textSecondCell="Description 1"
    //           />
    //       </div>
    //     );

    //     const row = container.find('tr');
    //     expect(row.prop('style').backgroundColor).toBe('#f5f5f5ab');
    //   });
      
    //   it('renders a header row with correct background color', () => {
    //     const container = render(
    //       <div>
    //           <CourseListRow
    //             isHeader={true}
    //             textFirstCell="Course Name"
    //             textSecondCell="Description"
    //           />
    //       </div>
    //     );

    //     // Ensure that 'container' is defined before proceeding.
    //     expect(container).toBeDefined();
      
    //     const row = container.find('th');
    //     expect(row.prop('style').backgroundColor).toBe('#deb5b545');
    //   });

})