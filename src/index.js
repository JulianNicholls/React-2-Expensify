import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

//---------------------------------------------------------------------------
// TEST CODE

import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 10800 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2750 }));
//---------------------------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

//---------------------------------------------------------------------------
// TEST CODE

// import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getFilteredExpenses from './selectors/expenses';

// store.dispatch(addExpense({ description: 'Water bill', amount: 10800 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 2750 }));

// console.log(
//   'unfiltered:',
//   getFilteredExpenses(store.getState().expenses, store.getState().filters)
// );

// store.dispatch(setTextFilter('bill'));
// console.log(
//   'bill:',
//   getFilteredExpenses(store.getState().expenses, store.getState().filters)
// );

// store.dispatch(setTextFilter('waTER'));
// console.log(
//   'Water:',
//   getFilteredExpenses(store.getState().expenses, store.getState().filters)
// );

//---------------------------------------------------------------------------
