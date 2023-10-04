import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index
    };
};

export const boundSelectCours = (index) => dispatch(selectCourse(index));

export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index
    };
};

export const boundunSelectCours = (index) => dispatch(unSelectCourse(index));

export function fetchCourseSuccess() {
    return {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20
        },
        {
          id: 3,
          name: "React",
          credit: 40
        }
      ]
    }  
  }
  
  export function setCourses(data) {
    return {type: FETCH_COURSE_SUCCESS, data}
  }
  
export const fetchCourses = () => {
    return (dispatch) => {
        fetch('../../dist/courses.json')
          .then((response) => response.json())
          .then((data) => {
            dispatch(setCourses(data))
          })
    }
}