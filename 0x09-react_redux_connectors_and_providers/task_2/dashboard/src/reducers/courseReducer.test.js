import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  // Test default state
  it('should return the initial state', () => {
    const initialState = [];
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  // Test FETCH_COURSE_SUCCESS action
  it('should correctly handle FETCH_COURSE_SUCCESS action', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const action = { type: FETCH_COURSE_SUCCESS, data: courses };
    const expectedState = courses.map(course => ({ ...course, isSelected: false }));

    const state = courseReducer([], action);
    expect(state).toEqual(expectedState);
  });

  // Test SELECT_COURSE action
  it('should correctly handle SELECT_COURSE action', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  // Test UNSELECT_COURSE action
  it('should correctly handle UNSELECT_COURSE action', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
