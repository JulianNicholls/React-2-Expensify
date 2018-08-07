import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

import { firebase } from './firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Initialise react-dates for later
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Initialise Moment with the correct locale (for me)
moment.locale('en-gb');

const store = configureStore();

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById('root')
    );

    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

// Login and Logout

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Logged IN:', user.uid);
    store.dispatch(login(user));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();

      if (history.location.pathname === '/') history.push('/dashboard');
    });
  } else {
    console.log('Logged OUT');
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
