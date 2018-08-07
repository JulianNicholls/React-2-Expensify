import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { emptyFilters, setFilters } from '../fixtures/filters';

describe('ExpenseListFilters', () => {
  let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

  beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
      <ExpenseListFilters
        filters={emptyFilters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    );
  });

  it('should render correctly with empty filters', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with set filters', () => {
    wrapper.setProps({ filters: setFilters });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle text change', () => {
    wrapper.find('input').simulate('change', { target: { value: 'rent' } });

    expect(setTextFilter).toHaveBeenLastCalledWith('rent');
  });

  it('should handle change to sort by amount', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount' } });

    expect(sortByAmount).toHaveBeenCalled();
  });

  it('should handle change to sort by date', () => {
    wrapper.find('select').simulate('change', { target: { value: 'date' } });

    expect(sortByDate).toHaveBeenCalled();
  });

  it('should handle dates change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
      startDate: setFilters.startDate,
      endDate: setFilters.endDate
    });

    expect(setStartDate).toHaveBeenLastCalledWith(setFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(setFilters.endDate);
  });

  it('should handle focus change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('startDate');

    expect(wrapper.state('pickerFocused')).toBe('startDate');
  });
});
