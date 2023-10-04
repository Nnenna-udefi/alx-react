import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import CourseList from './CourseList';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

const mockStore = configureMockStore([thunk]);

const courses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList component tests', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({ courses: [] });
    store.dispatch = jest.fn();

    wrapper = mount(
      <Provider store={store}>
        <CourseList listCourses={courses} fetchCourses={fetchCourses} selectCourse={selectCourse} unSelectCourse={unSelectCourse} />
      </Provider>
    );
  });

  it('dispatches fetchCourses action when mounted', () => {
    expect(store.dispatch).toHaveBeenCalledWith(fetchCourses());
  });

  it('dispatches selectCourse action when onChangeRow is called with checked=true', () => {
    const instance = wrapper.find('CourseList').instance();
    instance.onChangeRow(1, true);
    expect(store.dispatch).toHaveBeenCalledWith(selectCourse(1));
  });

  it('dispatches unSelectCourse action when onChangeRow is called with checked=false', () => {
    const instance = wrapper.find('CourseList').instance();
    instance.onChangeRow(1, false);
    expect(store.dispatch).toHaveBeenCalledWith(unSelectCourse(1));
  });
});
