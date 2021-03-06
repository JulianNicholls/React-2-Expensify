import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SET_EXPENSES
} from '../actions/types';

export default (state = [], action) => {
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

    case SET_EXPENSES:
      return action.expenses;

    default:
      return state;
  }
};
