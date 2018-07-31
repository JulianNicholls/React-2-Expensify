import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export const AddExpensePage = ({ addExpense, history }) => (
  <div className="container">
    <h1>Add Expense</h1>
    <ExpenseForm
      handleSubmit={expense => {
        addExpense(expense);

        history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addExpense }, dispatch);
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
