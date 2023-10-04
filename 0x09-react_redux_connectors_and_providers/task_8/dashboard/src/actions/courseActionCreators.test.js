import { selectCourse, unSelectCourse, fetchCourses, setCourses } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";

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
});

describe('fetchCourses action creator', () => {
    it('should dispatch setCourses with the correct data', async () => {
      const mockData = [
        { id: 1, name: 'Mock Course 1', credit: 60 },
        { id: 2, name: 'Mock Course 2', credit: 30 },
      ];
  
      // Mock the fetch function to return the mock data
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockData),
        })
      );
  
      const dispatchMock = jest.fn();
  
      // Call the fetchCourses action creator
      await fetchCourses()(dispatchMock);
  
      // Ensure that setCourses was dispatched with the correct data
      expect(dispatchMock).toHaveBeenCalledWith({
        type: FETCH_COURSE_SUCCESS,
        data: mockData,
      });
  
      // Reset the fetch mock
      global.fetch.mockClear();
    });
  });