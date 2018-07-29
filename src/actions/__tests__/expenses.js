import * as types from '../types';
import * as actions from '../expenses';

describe('Expenses Action Generators', () => {
  it('sets up to remove an expense', () => {
    const action = actions.removeExpense('123abc');

    expect(action).toEqual({ type: types.REMOVE_EXPENSE, id: '123abc' });
  });

  it('sets up to edit an expense', () => {
    const action = actions.editExpense('123abc', { description: 'blah' });

    expect(action).toEqual({
      type: types.EDIT_EXPENSE,
      id: '123abc',
      updates: { description: 'blah' }
    });
  });

  it('sets up to add an expense WITH details', () => {
    const expenseData = {
      description: 'rent',
      amount: 12000,
      createdAt: 123456,
      note: 'last months rent'
    };

    const action = actions.addExpense(expenseData);

    expect(action).toEqual({
      type: types.ADD_EXPENSE,
      expense: { ...expenseData, id: expect.any(String) }
    });
  });

  it('sets up to add an expense withOUT details', () => {
    const expenseData = {
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    };

    const action = actions.addExpense({});

    expect(action).toEqual({
      type: types.ADD_EXPENSE,
      expense: { ...expenseData, id: expect.any(String) }
    });
  });
});
