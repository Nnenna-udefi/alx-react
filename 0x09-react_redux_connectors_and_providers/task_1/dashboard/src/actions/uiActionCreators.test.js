import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer, loginRequest } from "./uiActionCreators";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore =  configureStore(middlewares);
describe('Course Action Creators', () => {
  test('selectCourse action creator', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index
    };
    const action = selectCourse(index);
    expect(action).toEqual(expectedAction);
  });

  test('unSelectCourse action creator', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index
    };
    const action = unSelectCourse(index);
    expect(action).toEqual(expectedAction);
  });
});

describe("tests for UI notification action creators", () => {
  it("should create proper action for login", () => {
    const email = "james@gmail.com";
    const password = "heheheh";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "james@gmail.com", password: "heheheh" },
    });
  });

  it("should create proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("should create proper action for displaying notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("should create proper action for hiding notification drawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});

describe('loginRequest Action', () => {
  it('verifies that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {
    fetchMock.getOnce('http://localhost:8564/login-success.json',
    { body: { success: true }, headers: { 'content-type': 'application/json' }});

    const expectedAction = [
      { type: LOGIN },
      { type: LOGIN_SUCCESS}
    ];

    const store = mockStore();

    return store.dispatch(loginRequest("johann.salva@holberton.nz", "password").then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    }));
    fetchMock.restore();
  });
  

  it('should dispatch LOGIN_FAILURE on API failure', () => {
    fetchMock.getOnce('http://localhost:8564/login-success.json', { status: 404 });

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_FAILURE }
    ];
    const store = mockStore();

    return store.dispatch(loginRequest('johann.salva@holberton.nz', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    fetchMock.restore();
  });
})
