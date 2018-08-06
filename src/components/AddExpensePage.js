import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = ({ startAddExpense, history }) => (
  <div className="container">
    <h1>Add Expense</h1>
    <ExpenseForm
      handleSubmit={expense => {
        startAddExpense(expense);

        history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startAddExpense }, dispatch);
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
