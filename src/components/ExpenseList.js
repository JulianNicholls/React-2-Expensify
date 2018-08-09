import React from 'react';
import { connect } from 'react-redux';

import filteredExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = ({ expenses }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      ) : (
        expenses.map(item => <ExpenseListItem key={item.id} {...item} />)
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  expenses: filteredExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
