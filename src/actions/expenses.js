import database from '../firebase';

import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_EXPENSES } from './types';

// ADD EXPENSE

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database
      .ref('expenses')
      .push(expense)
      .then(ref => dispatch(addExpense({ id: ref.key, ...expense })));
  };
};

export const addExpense = expense => ({ type: ADD_EXPENSE, expense });

// REMOVE EXPENSE

export const startRemoveExpense = id => {
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => dispatch(removeExpense(id)));
  };
};

export const removeExpense = id => ({ type: REMOVE_EXPENSE, id });

// EDIT EXPENSE

export const startEditExpense = (id, updates) => {
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .update(updates)
      .then(() => dispatch(editExpense(id, updates)));
  };
};

export const editExpense = (id, updates) => ({ type: EDIT_EXPENSE, id, updates });

// SET EXPENSES

export const startSetExpenses = () => {
  return dispatch => {
    return database
      .ref('expenses')
      .once('value')
      .then(snapshot => {
        const expensesData = [];

        snapshot.forEach(item => {
          expensesData.push({ id: item.key, ...item.val() });
        });

        dispatch(setExpenses(expensesData));
      });
  };
};

export const setExpenses = expenses => ({ type: SET_EXPENSES, expenses });
