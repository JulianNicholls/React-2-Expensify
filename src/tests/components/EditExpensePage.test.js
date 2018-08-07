import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import { testExpenses } from '../fixtures/expenses';

describe('EditExpensePage component', () => {
  let startEditExpense, startRemoveExpense, history, wrapper;

  beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };

    wrapper = shallow(
      <EditExpensePage
        expense={testExpenses[1]}
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
      />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('handleSubmit')(testExpenses[1]);

    expect(startEditExpense).toHaveBeenLastCalledWith(
      testExpenses[1].id,
      testExpenses[1]
    );
    expect(history.push).toHaveBeenLastCalledWith('/');
  });

  it('should handle removeExpense', () => {
    wrapper.find('button').prop('onClick')();

    expect(startRemoveExpense).toHaveBeenLastCalledWith(testExpenses[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});
