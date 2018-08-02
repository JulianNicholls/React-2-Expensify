import React from 'react';
import { connect } from 'react-redux';

import filteredExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = ({ expenses }) => (
  <div>{expenses.map(item => <ExpenseListItem key={item.id} {...item} />)}</div>
);

const mapStateToProps = state => ({
  expenses: filteredExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
