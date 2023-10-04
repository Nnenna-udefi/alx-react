import uiReducer from "./uiReducer";
import { Map, fromJS } from 'immutable';

describe('uiReducer function', () => {
    it('should return the initial state', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({}),
        });
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    // Test when SELECT_COURSE action is passed
  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  // Test DISPLAY_NOTIFICATION_DRAWER action
  it('should correctly change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    const expectedState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map({}),
    });
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("(uiReducer function) returns state equals the initial state when action DISPLAY_NOTIFICATION_DRAWER is passed", ()=>{
    const currentState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })
    const expectedState = { isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  it(`returns state changes isUserLoggedIn property correctly when action LOGIN_FAILURE is passed`, ()=>{
    const currentState = uiReducer(fromJS(initState), { type: LOGIN_FAILURE })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  it(`returns state changes isUserLoggedIn property correctly when action LOGOUT is passed`, () => {
    const currentState = uiReducer(fromJS(initState), { type: LOGOUT })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: null }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  it(`returns state changes user object property correctly when action LOGIN is passed`, () => {
    const email = "jack@test.com"
    const password = "strongpwd"
    const currentState = uiReducer(fromJS(initState), { type: LOGIN, user: {email, password} })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: true, user: {email, password} }
    expect(currentState.toJS()).toEqual(expectedState)
  })
})