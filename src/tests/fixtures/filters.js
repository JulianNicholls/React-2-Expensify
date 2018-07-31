import moment from 'moment';

export const emptyFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export const setFilters = {
  text: 'rent',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};
