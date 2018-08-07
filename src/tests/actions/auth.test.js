import * as types from '../../actions/types';
import * as actions from '../../actions/auth';

describe('Auth Action Generators', () => {
  it('should set up for login', () => {
    const action = actions.login({
      uid: '123abc',
      displayName: 'John Doe'
    });

    expect(action).toEqual({
      type: types.LOGIN,
      uid: '123abc',
      displayName: 'John Doe'
    });
  });

  it('should set up for logout', () => {
    const action = actions.logout();

    expect(action).toEqual({ type: types.LOGOUT });
  });
});
