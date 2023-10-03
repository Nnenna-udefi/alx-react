import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from 'immutable';
import coursesNormalizer from "../schema/courses";

const initialState = Map([]);

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const data = coursesNormalizer(action.data);
            Object.keys(data).map((key) => {data[key].isSelected = false})
            return state.merge(data);
        case SELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSelected'], true);

        case UNSELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSelected'], false);
        default:
            return state;
    }
};

export default courseReducer;