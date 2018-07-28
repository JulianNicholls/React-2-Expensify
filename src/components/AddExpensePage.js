import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = props => (
  <div className="container">
    <h1>Add Expense</h1>
    <ExpenseForm
      handleSubmit={expense => {
        props.dispatch(addExpense(expense));

        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
