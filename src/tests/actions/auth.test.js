import { login, logout } from '../../actions/auth';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);
test('should generate login action with uid', () => {
  const uid = '123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout action', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
