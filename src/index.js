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

// Initialise Moment with the correct locale (for me)
moment.locale('en-gb');

const store = configureStore();

//---------------------------------------------------------------------------
// TEST CODE

import { addExpense } from './actions/expenses';

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 10800,
    createdAt: moment().subtract(27, 'days')
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

//---------------------------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
