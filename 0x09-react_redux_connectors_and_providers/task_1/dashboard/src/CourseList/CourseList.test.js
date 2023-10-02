import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import '../../config/setupTests'



const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  
  describe('CourseList component tests', () => {
    it('renders 5 different rows with correct background color', () => {
      const courses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ];
  
      const wrapper = shallow(<CourseList listCourses={courses} />);
  
      expect(wrapper.find('tr').at(0)).toHaveStyle('background-color: #f5f5f5ab');
      expect(wrapper.find('tr').at(1)).toHaveStyle('background-color: #f5f5f5ab');
      expect(wrapper.find('tr').at(2)).toHaveStyle('background-color: #f5f5f5ab');
    });
});