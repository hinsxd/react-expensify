import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';
// react-test-renderer

test('should render header correctly', () => {
  const wrapper = shallow(<Header startLogOut={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
