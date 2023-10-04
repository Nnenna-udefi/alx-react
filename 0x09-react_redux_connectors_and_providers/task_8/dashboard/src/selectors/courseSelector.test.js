import { Map } from 'immutable';
import { getCoursesList } from './courseSelector';

describe('getCoursesList selector', () => {
    it('returns courses as a list', () => {
        const courses = Map({
            1: {id: 1, title: 'Course 1'},
            2: { id: 2, title: 'Course 2'},
        });

        const state = {
            courses,
        };

        const selectedCourses = getCoursesList(state);

        // Ensure that selectedCourses is a sequence
        expect(selectedCourses[Symbol.iterator]).toBeInstanceOf(Function);

        // Convert the sequence to an array for easier testing
        const courseArray = Array.from(selectedCourses);

        expect(courseArray.length).toBe(2);
        expect(courseArray[0].title).toBe('Course 1');
        expect(courseArray[1].title).toBe('Course 2');
    });

    it('returns an empty array when no courses', () => {
        const state = {
        courses: Map(),
        };

        const selectedCourses = getCoursesList(state);

        // Ensure that selectedCourses is an empty sequence
        expect(selectedCourses[Symbol.iterator]).toBeInstanceOf(Function);
        expect(Array.from(selectedCourses)).toEqual([]);
    })
})