import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import { testExpenses } from '../fixtures/expenses';

describe('ExpenseForm component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExpenseForm />);
  });

  it('should render correctly for add', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly for update with data', () => {
    const wrapper = shallow(<ExpenseForm expense={testExpenses[2]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show an error when invalid data is submitted', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when description is changed', () => {
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'rent' } });

    expect(wrapper.state('description')).toBe('rent');
  });

  it('should update state when note is changed', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'new note' } });

    expect(wrapper.state('note')).toBe('new note');
  });

  it('should update state when amount is changed validly', () => {
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { target: { value: '23.50' } });

    expect(wrapper.state('amount')).toBe('23.50');
  });

  it('should NOT update state when amount is changed INvalidly', () => {
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { target: { value: '12.122' } });

    expect(wrapper.state('amount')).toBe('');
  });

  it('should call handleSubmit on valid submission', () => {
    const handleSubmitSpy = jest.fn();
    const wrapper = shallow(
      <ExpenseForm expense={testExpenses[1]} handleSubmit={handleSubmitSpy} />
    );

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(wrapper.state('error')).toBe('');
    expect(handleSubmitSpy).toHaveBeenLastCalledWith({
      description: testExpenses[1].description,
      amount: testExpenses[1].amount,
      note: testExpenses[1].note,
      createdAt: testExpenses[1].createdAt
    });
  });

  it('should set createdAt in onDateChange', () => {
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(moment());

    expect(wrapper.state('createdAt')).toEqual(moment());
  });

  it('should set pickerFocused in onFocusChange', () => {
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
      pickerFocused: true
    });

    expect(wrapper.state('pickerFocused')).toBe(true);
  });
});
