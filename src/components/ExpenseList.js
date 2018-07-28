import React from 'react';
import { connect } from 'react-redux';

import getFilteredExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.map(item => <ExpenseListItem key={item.id} {...item} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: getFilteredExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
