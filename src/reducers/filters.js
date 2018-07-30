import moment from 'moment';

import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE
} from '../actions/types';

const initialFilters = {
  text: '',
  sortBy: 'date',
  startDate: moment()
    .startOf('day')
    .subtract(21, 'days'),
  endDate: moment()
    .startOf('day')
    .add(21, 'days')
};

export default (state = initialFilters, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return { ...state, text: action.text };

    case SORT_BY_DATE:
      return { ...state, sortBy: 'date' };

    case SORT_BY_AMOUNT:
      return { ...state, sortBy: 'amount' };

    case SET_START_DATE:
      return { ...state, startDate: action.date };

    case SET_END_DATE:
      return { ...state, endDate: action.date };

    default:
      return state;
  }
};
