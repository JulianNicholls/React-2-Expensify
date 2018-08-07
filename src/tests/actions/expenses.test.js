import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase';

import * as types from '../../actions/types';
import * as actions from '../../actions/expenses';

import { testExpenses } from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

describe('Expenses Action Generators', () => {
  beforeEach(done => {
    const expensesData = {};

    testExpenses.forEach(({ id, description, note, amount, createdAt }) => {
      expensesData[id] = { description, note, amount, createdAt };
    });

    database
      .ref('expenses')
      .set(expensesData)
      .then(() => done());
  });

  it('should add expense to database WITH details', done => {
    const store = createMockStore({});
    const expenseData = {
      description: 'mouse',
      amount: 3000,
      note: 'better mouse',
      createdAt: 1000
    };

    store
      .dispatch(actions.startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();

        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual({
          type: types.ADD_EXPENSE,
          expense: { id: expect.any(String), ...expenseData }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });

  it('should add expense to database withOUT details', done => {
    const store = createMockStore({});
    const emptyData = {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    };

    store
      .dispatch(actions.startAddExpense())
      .then(() => {
        const actions = store.getActions();

        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual({
          type: types.ADD_EXPENSE,
          expense: { id: expect.any(String), ...emptyData }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(emptyData);
        done();
      });
  });

  it('sets up to add an expense', () => {
    const action = actions.addExpense(testExpenses[1]);

    expect(action).toEqual({
      type: types.ADD_EXPENSE,
      expense: testExpenses[1]
    });
  });

  it('sets up to remove an expense from the database', done => {
    const store = createMockStore({});
    const id = testExpenses[1].id;

    store
      .dispatch(actions.startRemoveExpense(id))
      .then(() => {
        const actions = store.getActions();

        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual({ type: types.REMOVE_EXPENSE, id });

        return database.ref(`expenses/${id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toBe(null);
        done();
      });
  });

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

  it('sets up to fill in all the expenses', () => {
    const action = actions.setExpenses(testExpenses);

    expect(action).toEqual({
      type: types.SET_EXPENSES,
      expenses: testExpenses
    });
  });

  it('sets up to fill in all the expenses from database', done => {
    const store = createMockStore({});

    store.dispatch(actions.startSetExpenses()).then(() => {
      const actions = store.getActions();

      expect(actions.length).toBe(1);
      expect(actions[0]).toEqual({
        type: types.SET_EXPENSES,
        expenses: testExpenses
      });

      done();
    });
  });
});
