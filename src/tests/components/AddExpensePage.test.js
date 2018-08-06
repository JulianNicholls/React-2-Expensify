import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/AddExpensePage';
import { testExpenses } from '../fixtures/expenses';

describe('AddExpensePage component', () => {
  let startAddExpense, history, wrapper;

  beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };

    wrapper = shallow(
      <AddExpensePage startAddExpense={startAddExpense} history={history} />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSubmit', () => {
    wrapper.find('ExpenseForm').prop('handleSubmit')(testExpenses[1]);

    expect(startAddExpense).toHaveBeenLastCalledWith(testExpenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});
