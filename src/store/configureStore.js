import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  auth: authReducer
});

export default () => {
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
};
