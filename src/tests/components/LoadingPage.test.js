import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import { shallow } from 'enzyme';
// react-test-renderer

test('should render LoadingPage correctly', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
