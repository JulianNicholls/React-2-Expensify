import * as types from '../../actions/types';
import authReducer from '../../reducers/auth';

describe('Auth reducer', () => {
  it('should set logged in data', () => {
    const state = authReducer(undefined, {
      type: types.LOGIN,
      uid: '456bgv',
      displayName: 'Jane Doe'
    });

    expect(state).toEqual({ uid: '456bgv', displayName: 'Jane Doe' });
  });

  it('should set no data for logged out', () => {
    const state = authReducer(
      { uid: '456bgv', displayName: 'Jane Doe' },
      { type: types.LOGOUT }
    );

    expect(state).toEqual({});
  });
});
