import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";
import '../../config/setupTests';


describe('rendering components', () => {
  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    const liElement = wrapper.find('[data-notification-type="default"]');

    expect(liElement.exists()).toBe(true);
    expect(liElement.text()).toEqual('test');
  });

  it('renders correct html from html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem html="<u>test</u>" />);
    const liElement = wrapper.find('[data-urgent="true"]');

    expect(liElement.exists()).toBe(true);
    expect(liElement.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});

describe('list onclick event behaves as it should', () => {
  it('passes a spy as the markAsRead property and calls the console log', () => {
    const spy = jest.fn();
    const wrapper = shallow(<NotificationItem value="test" markAsRead={spy} id={1} />);
    const liElement = wrapper.find('[data-notification-type="default"]');

    liElement.simulate('click');
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
  });
});