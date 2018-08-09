import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = ({ startAddExpense, history }) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        handleSubmit={expense => {
          startAddExpense(expense);

          history.push('/');
        }}
      />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startAddExpense }, dispatch);
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
