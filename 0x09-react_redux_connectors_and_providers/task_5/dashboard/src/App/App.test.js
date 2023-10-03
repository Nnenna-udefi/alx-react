/**
 * @jest-environment jsdom
 */
import '../../config/setupTests';
import React from 'react';
import { shallow, } from 'enzyme';
import App from './App';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { user, logOut } from "./AppContext";
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';


const listNotifications = [
    { id: 1, type: 'default', value: 'New course available', html: null },
    { id: 2, type: 'urgent', value: 'New resume available', html: null },
    { id: 3, type: 'urgent', value: null, html: { __html: 'Test HTML' } }
  ];
  
describe('App tests', () => {
    it('renders without crashing', () => {
        shallow(<App />)
    });
    it('renders the Notifications component', () => {
        const component = shallow(<App />);
        expect(component.contains(<Notifications displayDrawer={true} listNotifications={listNotifications}/>)).toBe(true);
    });

    it('renders the Header component', () => {
        const component = shallow(<App />);
        expect(component.contains(<Header />)).toBe(true);
    });

    it('renders the Login component', () => {
        const component = shallow(<App />);
        expect(component.contains(<Login />)).toBe(true);
    });

    it('renders the Footer component', () => {
        const component = shallow(<App />);
        expect(component.contains(<Footer />)).toBe(true);
    });

    it('does not render CourseList when isloggedin is false', () => {
        const component = shallow(<App isLoggedIn={false}/>);
        expect(component.contains(<CourseList />)).toBe(false);
        expect(component.contains(<Login />)).toBe(true);
    });


    it('verifies that when control + h are pressed the logOut function is called and shows the alert Logging you out', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplemention(() => {});

        const wrapper = mount(<App logOut={logOutMock} />);
        const event = new KeyboardEvent('keydown', {
            key: 'h', ctrlKey: true,
        });

        document.dispatchEvent(event);

        expect(alertMock).toHaveBeenCalledWith('Logging you out');
        expect(alertMock).toHaveBeenCalledTimes(1);

        alertMock.mockRestore();
        jest.clearAllMocks();
        wrapper.unmount();
    });

    it('removes event listener on unmount', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
        const component = mount(<App logOut={logOutMock} />);
        component.unmount();
    
        const event = new KeyboardEvent('keydown', {
          key: 'h',
          ctrlKey: true,
        });
    
        document.dispatchEvent(event);
    
        expect(alertMock).not.toHaveBeenCalled();
        expect(logOutMock).not.toHaveBeenCalled();
    
        alertMock.mockRestore();
        jest.clearAllMocks();
      });

      describe("when isLogged in is true", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().user).toEqual(user);
      
        it("checks Login is not rendered", () => {
          expect(wrapper.contains(<Login />)).toBe(false);
        });
      
        it("checks CourseList is rendered", () => {
          expect(wrapper.find(CourseList)).toHaveLength(0);
        });
      
        // it(`Tests that the logIn function updates user's state correctly`, () => {
        //   const wrapper = shallow(
        //     <AppContext.Provider value={{ user, logOut }}>
        //       <App />
        //     </AppContext.Provider>
        //   );
      
        //   const myUser = {
        //     email: "testy@gmail.com",
        //     password: "testy",
        //     isLoggedIn: true,
        //   };
      
        //   expect(wrapper.state().user).toEqual(user);
        //   const instance = wrapper.instance();
        //   instance.logIn(myUser.email, myUser.password);
        //   expect(wrapper.state().user).toEqual(myUser);
        //   wrapper.unmount();
        // });
      
        it(`Tests that the logOut function updates user's state correctly`, () => {
          const wrapper = mount(
            <AppContext.Provider value={{ user, logOut }}>
              <App />
            </AppContext.Provider>
          );
      
          const myUser = {
            email: "testy@gmail.com",
            password: "testy",
            isLoggedIn: true,
          };
      
          expect(wrapper.state().user).toEqual(user);
          const instance = wrapper.instance();
          instance.logOut();
          expect(wrapper.state().user).toEqual(user);
          wrapper.unmount();
        });
      });
      
});

describe('mapStateToProps', () => {
  it('verifies that the function returns the right object when passing', () => {
    let state = {ui: fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true
    })
  }
    const props = mapStateToProps(state);

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
    }

    expect(props).toEqual(expectedProps);
  });

  it('verifies that the function returns the right object when passing', () => {
    let state = {
      ui: fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
    })
  };

    const props = mapStateToProps(state);

    const expectedProps = {
      isLoggedIn: false,
      displayDrawer: false
    }

    expect(props).toEqual(expectedProps);
  });
})