import React from 'react';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import '../../config/setupTests'

describe('<Header />', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('renders an image', () => {
        const wrapper = shallow(<Header />);
        const image = wrapper.find('img');
        expect(image.exists()).toBe(true);
    });

    it('renders an image', () => {
        const wrapper = shallow(<Header />);
        const heading1 = wrapper.find('h1');
        expect(heading1.exists()).toBe(true);
    });

    it(`Tests that logoutSection is not rendered with default context values`, () => {
        const context = {
          user: {
            email: "",
            password: "",
            isLoggedIn: false,
          },
          logOut: jest.fn(),
        };
    
        const wrapper = mount(
          <AppContext.Provider value={context}>
            <Header />
          </AppContext.Provider>
        );
    
        expect(wrapper.find("#logoutSection").length).toBe(0);
        expect(wrapper.find("#logoutSection").exists()).toBe(false);
        wrapper.unmount();
      });
    
      it(`Tests that logoutSection is rendered with context values`, () => {
        const context = {
          user: {
            email: "test@test.com",
            password: "123",
            isLoggedIn: true,
          },
          logOut: jest.fn(),
        };
    
        const wrapper = mount(
          <AppContext.Provider value={context}>
            <Header />
          </AppContext.Provider>
        );
    
        expect(wrapper.find("#logoutSection").length).toBe(1);
        expect(wrapper.find("#logoutSection").exists()).toBe(true);
        wrapper.unmount();
      });
    
      it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
        const context = {
          user: {
            email: "test@test.com",
            password: "123",
            isLoggedIn: true,
          },
          logOut: jest.fn(),
        };
    
        const spy = jest.spyOn(context, "logOut");
    
        const wrapper = mount(
          <AppContext.Provider value={context}>
            <Header />
          </AppContext.Provider>
        );
    
        wrapper.find("a").simulate("click");
    
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        wrapper.unmount();
      });
})