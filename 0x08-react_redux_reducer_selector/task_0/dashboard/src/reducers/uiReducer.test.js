import uiReducer from "./uiReducer";

describe('uiReducer function', () => {
    it('should return the initial state', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    // Test when SELECT_COURSE action is passed
  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  // Test DISPLAY_NOTIFICATION_DRAWER action
  it('should correctly change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
})