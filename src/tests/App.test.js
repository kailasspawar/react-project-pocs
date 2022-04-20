import { render, screen } from '@testing-library/react';
import App from '../App';
import { shallow } from 'enzyme';

describe("counter app testing..", () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = shallow(<App />);
  // })
  test('renders learn react link', () => {
   // expect(wrapper.find('h1').text()).toContain('Simple counter example..');
  });

  // test('renders a button with text decrement', () => {
  //   expect(wrapper.find('#decrement-btn').text('decrement')).toBe('decrement');
  // })

  // test('renders a button with text increment', () => {
  //   expect(wrapper.find('#increment-btn').text('increment')).toBe('increment');
  // })
  
  // test('render the click event of increment button and increase counter value', () => {
  //   wrapper.find('#increment-btn').simulate('click');
  //   expect(wrapper.find('p').text()).toBe("count: 1");
  // })

  // test('render the click event of decrement button and decrease counter value', () => {
  //   wrapper.find('#increment-btn').simulate('click');
  //   expect(wrapper.find('p').text()).toBe("count: 1");
  //   wrapper.find('#decrement-btn').simulate('click');
  //   expect(wrapper.find('p').text()).toBe("count: 0");
  // })

});
