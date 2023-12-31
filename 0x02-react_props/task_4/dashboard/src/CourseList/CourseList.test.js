import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import '../../config/setupTests'
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
    it('renders without crashing', () => {
        shallow(<CourseList />);
    });

    it('renders 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        const tableHead = wrapper.find("thead");

        expect(tableHead.children()).toHaveLength(2);
        tableHead.forEach((node) => {
            expect(node.equals(<CourseListRow textFirstCell="Foo" />))
        });

        const tableBody = wrapper.find("tbody");

        expect(tableBody.children()).toHaveLength(3);
        tableBody.forEach((node) => {
            expect(node.equals(<CourseListRow textFirstCell="Foo" />))
        });
    });
});