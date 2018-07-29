import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import * as actions from '../actions/expenses';

const EditExpensePage = ({ expense, editExpense, removeExpense, history }) => {
  return (
    <div className="container">
      <h2>Edit Expense</h2>
      <ExpenseForm
        expense={expense}
        handleSubmit={updated => {
          editExpense(expense.id, updated);

          history.push('/');
        }}
      />
      <button
        onClick={() => {
          removeExpense(expense.id);

          history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(item => item.id === props.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  actions
)(EditExpensePage);
