import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('Course action creators', () => {
    it('Selects action course creator', () => {
        const index = 1;
        const expectedAction = {
            type: SELECT_COURSE,
            index
        };

        const action = selectCourse(index);
        expect(action).toEqual(expectedAction)
    });

    it('Unselects action course creator', () => {
        const index = 1;
        const expectedAction = {
            type: UNSELECT_COURSE,
            index
        };

        const action = unSelectCourse(index);
        expect(action).toEqual(expectedAction)
    })
})