import authReducers from '../../reducers/auth';

test('should setup default auth status', () => {
  const state = authReducers(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual({});
});

test('should set uid with login action', () => {
  const uid = '123';
  const state = authReducers(
    {},
    {
      type: 'LOGIN',
      uid
    }
  );
  expect(state.uid).toBe(uid);
});

test('should clear uid with logout action', () => {
  const uid = 'anything';
  const state = authReducers(
    { uid },
    {
      type: 'LOGOUT'
    }
  );
  expect(state).toEqual({});
});
