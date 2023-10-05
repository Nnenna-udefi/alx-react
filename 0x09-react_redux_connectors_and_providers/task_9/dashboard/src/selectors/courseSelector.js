import { createSelector } from 'reselect';

const getCoursesState = state => state.courses; // Ensure this matches your reducer structure

export const getCoursesList = createSelector(
  getCoursesState,
  courses => {
    // Ensure courses is defined and has a valueSeq method
    return courses ? courses.valueSeq() : [];
  }
);
