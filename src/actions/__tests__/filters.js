import moment from 'moment';

import * as types from '../types';
import * as actions from '../filters';

describe('Filters Action Generators', () => {
  it('should remove the text filter', () => {
    const action = actions.setTextFilter();

    expect(action).toEqual({ type: types.SET_TEXT_FILTER, text: '' });
  });

  it('should set the filter text', () => {
    const action = actions.setTextFilter('rent');

    expect(action).toEqual({ type: types.SET_TEXT_FILTER, text: 'rent' });
  });

  it('should set the start date', () => {
    const action = actions.setStartDate(moment(10000000));

    expect(action).toEqual({
      type: types.SET_START_DATE,
      date: moment(10000000)
    });
  });

  it('should set the end date', () => {
    const action = actions.setEndDate(moment(10000000));

    expect(action).toEqual({
      type: types.SET_END_DATE,
      date: moment(10000000)
    });
  });

  it('should set sorting by date', () => {
    const action = actions.sortByDate();

    expect(action).toEqual({ type: types.SORT_BY_DATE });
  });

  it('should set sorting by amount', () => {
    const action = actions.sortByAmount();

    expect(action).toEqual({ type: types.SORT_BY_AMOUNT });
  });
});
