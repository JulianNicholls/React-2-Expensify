import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import * as actions from '../actions/expenses';

export class EditExpensePage extends React.Component {
  handleSubmit = updated => {
    this.props.editExpense(this.props.expense.id, updated);

    this.props.history.push('/');
  };

  handleRemove = () => {
    this.props.startRemoveExpense(this.props.expense.id);

    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <h2>Edit Expense</h2>
        <ExpenseForm expense={this.props.expense} handleSubmit={this.handleSubmit} />
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(item => item.id === props.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  actions
)(EditExpensePage);
