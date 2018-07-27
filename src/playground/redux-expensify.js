import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import uuid from 'uuid';

// TYPES

export const ADD_EXPENSE = 'add_expense';
export const REMOVE_EXPENSE = 'remove_expense';
export const EDIT_EXPENSE = 'edit_expense';

export const SET_TEXT_FILTER = 'set_text_filter';
export const SORT_BY_DATE = 'sort_by_date';
export const SORT_BY_AMOUNT = 'sort_by_amount';
export const SET_START_DATE = 'set_start_date';
export const SET_END_DATE = 'set_end_date';

// EXPENSES ACTION GENERATORS

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = id => ({
  type: REMOVE_EXPENSE,
  id
});

export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

// FILTERS ACTION GENERATORS

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
});

export const sortByDate = () => ({ type: SORT_BY_DATE });
export const sortByAmount = () => ({ type: SORT_BY_AMOUNT });

export const setStartDate = date => ({
  type: SET_START_DATE,
  date
});

export const setEndDate = date => ({
  type: SET_END_DATE,
  date
});

// EXPENSES REDUCER

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];

    case REMOVE_EXPENSE:
      return state.filter(item => item.id !== action.id);

    case EDIT_EXPENSE:
      return state.map(item => {
        if (item.id === action.id) return { ...item, ...action.updates };

        return item;
      });

    default:
      return state;
  }
};

// FILTERS REDUCER

const initialFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = initialFilters, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return { ...state, text: action.text };

    case SORT_BY_DATE:
      return { ...state, sortBy: 'date' };

    case SORT_BY_AMOUNT:
      return { ...state, sortBy: 'amount' };

    case SET_START_DATE:
      return { ...state, startDate: action.date };

    case SET_END_DATE:
      return { ...state, endDate: action.date };

    default:
      return state;
  }
};

// FILTERED EXPENSES SELECTOR

export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  text = text.toLowerCase();

  const filtered = expenses.filter(({ description, createdAt }) => {
    const startDateMatch = startDate ? startDate <= createdAt : true;
    const endDateMatch = endDate ? endDate >= createdAt : true;
    const textMatch = text === '' || description.toLowerCase().includes(text);

    return startDateMatch && endDateMatch && textMatch;
  });

  return filtered.sort((a, b) => {
    if (sortBy === 'date') return b.createdAt - a.createdAt;

    return a.amount - b.amount;
  });
};

export const getExpensesTotal = expenses => {
  return expenses.reduce((acc, { amount }) => acc + amount, 0);
};

// STORE

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// TEST CODE

store.subscribe(() => {
  const state = store.getState();
  const visible = getVisibleExpenses(state.expenses, state.filters);
  const total = getExpensesTotal(visible);

  console.log({ state, visible, total });
});

const rent = store.dispatch(
  addExpense({ description: 'rent', amount: 53500, createdAt: 10000 })
);
const coffee = store.dispatch(
  addExpense({ description: 'coffee', amount: 265, createdAt: 11000 })
);

const telephone = store.dispatch(
  addExpense({ description: 'telephone', amount: 4850, createdAt: 12000 })
);

// store.dispatch(removeExpense(rent.expense.id));

// store.dispatch(editExpense(coffee.expense.id, { amount: 500 }));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(10500));
store.dispatch(setEndDate(11500));

store.dispatch(setStartDate());
store.dispatch(setEndDate());
store.dispatch(setTextFilter('rent'));
