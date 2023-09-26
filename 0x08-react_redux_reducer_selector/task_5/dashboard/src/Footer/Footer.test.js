import React, { createContext } from 'react';
import Footer from './Footer';
import { shallow, mount } from 'enzyme';
import '../../config/setupTests'

const AppContext = createContext(null);

describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders the text copyright', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });

    it("Tests that there is no link rendered when user is logged out within context", () => {
        const context = {
          user: {
            email: "",
            password: "",
            isLoggedIn: false,
          },
        };
    
        const wrapper = mount(
          <AppContext.Provider value={context}>
            <Footer />
          </AppContext.Provider>
        );
    
        expect(wrapper.find("a").length).toBe(0);
        expect(wrapper.find("a").exists()).toBe(false);
        expect(wrapper.text()).not.toContain("Contact us");
    
        wrapper.unmount();
      });
    
      it("Tests that there is a link rendered when user is logged in within context", () => {
        const context = {
          user: {
            email: "",
            password: "",
            isLoggedIn: true,
          },
        };
    
        const wrapper = mount(
          <AppContext.Provider value={context}>
            <Footer />
          </AppContext.Provider>
        );
    
        expect(wrapper.find("a").length).toBe(1);
        expect(wrapper.find("a").exists()).toBe(true);
        expect(wrapper.text()).toContain("Contact us");
    
        wrapper.unmount();
      });
})