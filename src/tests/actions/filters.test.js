import moment from 'moment';

import * as types from '../../actions/types';
import * as actions from '../../actions/filters';

describe('Filters Action Generators', () => {
  it('removes the text filter', () => {
    const action = actions.setTextFilter();

    expect(action).toEqual({ type: types.SET_TEXT_FILTER, text: '' });
  });

  it('sets the filter text', () => {
    const action = actions.setTextFilter('rent');

    expect(action).toEqual({ type: types.SET_TEXT_FILTER, text: 'rent' });
  });

  it('sets the start date', () => {
    const action = actions.setStartDate(moment(10000000));

    expect(action).toEqual({
      type: types.SET_START_DATE,
      date: moment(10000000)
    });
  });

  it('sets the end date', () => {
    const action = actions.setEndDate(moment(10000000));

    expect(action).toEqual({
      type: types.SET_END_DATE,
      date: moment(10000000)
    });
  });

  it('sets sorting by date', () => {
    const action = actions.sortByDate();

    expect(action).toEqual({ type: types.SORT_BY_DATE });
  });

  it('sets sorting by amount', () => {
    const action = actions.sortByAmount();

    expect(action).toEqual({ type: types.SORT_BY_AMOUNT });
  });
});
