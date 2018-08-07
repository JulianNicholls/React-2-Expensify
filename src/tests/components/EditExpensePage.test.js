import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import { testExpenses } from '../fixtures/expenses';

describe('EditExpensePage component', () => {
  let editExpense, startRemoveExpense, history, wrapper;

  beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };

    wrapper = shallow(
      <EditExpensePage
        expense={testExpenses[1]}
        editExpense={editExpense}
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

    expect(editExpense).toHaveBeenLastCalledWith(
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
