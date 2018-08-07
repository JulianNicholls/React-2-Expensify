import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { startSetExpenses } from './actions/expenses';

import { firebase } from './firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Initialise react-dates for later
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Initialise Moment with the correct locale (for me)
moment.locale('en-gb');

const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById('root')
  );
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const { providerData } = user;

    console.log('Logged IN:', { providerData });
  } else {
    console.log('Logged OUT');
  }
});
