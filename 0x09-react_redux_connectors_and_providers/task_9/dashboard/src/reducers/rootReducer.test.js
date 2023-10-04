import rootReducer from "./rootReducer";
import { Map }from 'immutable';

describe('rootReducer', () => {
    it('should return the initial state', () => {
        const initialState = {
            course: Map({}),
            notifications: Map({}),
            ui: Map({}),
        };

        const state = rootReducer(undefined, {});
        expect(state).toEqual(initialState);
    });
});