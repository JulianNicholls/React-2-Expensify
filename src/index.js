import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Initialise react-dates for later
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';

// Initialise Moment with the correct locale (for me)
moment.locale('en-gb');

const store = configureStore();

//---------------------------------------------------------------------------
// TEST CODE

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 10800,
    createdAt: moment().subtract(20, 'days')
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 2750,
    createdAt: moment().add(5, 'days')
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 53500,
    createdAt: moment().subtract(15, 'days')
  })
);

store.dispatch(
  addExpense({
    description: 'Telephone bill',
    amount: 5000,
    createdAt: moment().subtract(5, 'days')
  })
);

store.dispatch(
  addExpense({
    description: 'Large bill',
    amount: 1202700,
    createdAt: moment().subtract(17, 'days')
  })
);

//---------------------------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
