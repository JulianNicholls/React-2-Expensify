import moment from 'moment';

import * as types from '../../actions/types';
import filtersReducer from '../../reducers/filters';

describe('Filters reducer', () => {
  it('sets up the default filters', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment()
        .startOf('day')
        .subtract(21, 'days'),
      endDate: moment()
        .startOf('day')
        .add(21, 'days')
    });
  });

  it('sets sorting by amount', () => {
    const state = filtersReducer(undefined, { type: types.SORT_BY_AMOUNT });

    expect(state.sortBy).toBe('amount');
  });

  it('sets sorting by date', () => {
    const startState = { sortBy: 'amount' };

    const state = filtersReducer(startState, { type: types.SORT_BY_DATE });

    expect(state.sortBy).toBe('date');
  });

  it('sets text filter', () => {
    const state = filtersReducer(undefined, {
      type: types.SET_TEXT_FILTER,
      text: 'blah'
    });

    expect(state.text).toBe('blah');
  });

  it('sets start date', () => {
    const state = filtersReducer(undefined, {
      type: types.SET_START_DATE,
      date: moment(10000)
    });

    expect(state.startDate).toEqual(moment(10000));
  });

  it('sets end date', () => {
    const state = filtersReducer(undefined, {
      type: types.SET_END_DATE,
      date: moment(15000)
    });

    expect(state.endDate).toEqual(moment(15000));
  });
});
