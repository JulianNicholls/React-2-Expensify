import React from 'react';
import { connect } from 'react-redux';

import getFilteredExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = ({ expenses, filtered }) => {
  if (expenses.length === 0)
    return (
      <p>
        {filtered ? 'All expenses filtered out' : 'There are no expenses to display'}
      </p>
    );

  return (
    <div>{expenses.map(item => <ExpenseListItem key={item.id} {...item} />)}</div>
  );
};

const mapStateToProps = state => {
  const filtered = getFilteredExpenses(state.expenses, state.filters);

  return {
    expenses: filtered,
    filtered: filtered.length !== state.expenses.length
  };
};

export default connect(mapStateToProps)(ExpenseList);
