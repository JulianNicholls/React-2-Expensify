import expensesReducer from '../expenses';

import * as types from '../../actions/types';
import { testExpenses } from '../../fixtures/expenses';

describe('Expenses reducer', () => {
  it('sets default state', () => {
    const state = expensesReducer(undefined, '@@INIT');

    expect(state).toEqual([]);
  });

  it('adds an expense', () => {
    const state = expensesReducer([testExpenses[0]], {
      type: types.ADD_EXPENSE,
      expense: testExpenses[2]
    });

    expect(state).toEqual([testExpenses[0], testExpenses[2]]);
  });

  it('removes an expense by VALID id', () => {
    const state = expensesReducer(testExpenses, {
      type: types.REMOVE_EXPENSE,
      id: testExpenses[2].id
    });

    expect(state).toEqual([testExpenses[0], testExpenses[1], testExpenses[3]]);
  });

  it('removes no expense for an INvalid id', () => {
    const state = expensesReducer(testExpenses, {
      type: types.REMOVE_EXPENSE,
      id: 'notanid'
    });

    expect(state).toEqual([
      testExpenses[0],
      testExpenses[1],
      testExpenses[2],
      testExpenses[3]
    ]);
  });

  it('edits an expense by VALID id', () => {
    const state = expensesReducer(testExpenses, {
      type: types.EDIT_EXPENSE,
      id: testExpenses[2].id,
      updates: { description: 'updated' }
    });

    expect(state).toEqual([
      testExpenses[0],
      testExpenses[1],
      { ...testExpenses[2], description: 'updated' },
      testExpenses[3]
    ]);
  });

  it('edits no expense by INvalid id', () => {
    const state = expensesReducer(testExpenses, {
      type: types.EDIT_EXPENSE,
      id: 'notanid',
      updates: { description: 'updated' }
    });

    expect(state).toEqual([
      testExpenses[0],
      testExpenses[1],
      testExpenses[2],
      testExpenses[3]
    ]);
  });
});
