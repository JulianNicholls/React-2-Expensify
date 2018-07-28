import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

// Initialise react-dates for later
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';

// Initialise Moment with the correct locale (for me)
moment.locale('en-gb');

const store = configureStore();

//---------------------------------------------------------------------------
// TEST CODE

// const now = moment();
// console.log(now.format('LL LT'));
// console.log(now.startOf('week').fromNow());

store.dispatch(
  addExpense({ description: 'Water bill', amount: 10800, createdAt: 10000 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 2750, createdAt: 20000 })
);
store.dispatch(addExpense({ description: 'Rent', amount: 53500, createdAt: 15000 }));
store.dispatch(
  addExpense({ description: 'Telephone bill', amount: 5000, createdAt: 17000 })
);

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

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

// setTimeout(() => {
//   store.dispatch(setTextFilter('rent'));
// }, 6000);

// setTimeout(() => {
//   store.dispatch(setTextFilter());
// }, 9000);

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
