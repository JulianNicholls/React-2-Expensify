import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import * as actions from '../actions/expenses';

export class EditExpensePage extends React.Component {
  handleSubmit = updated => {
    this.props.startEditExpense(this.props.expense.id, updated);

    this.props.history.push('/');
  };

  handleRemove = () => {
    this.props.startRemoveExpense(this.props.expense.id);

    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            handleSubmit={this.handleSubmit}
          />
          <button className="button button--secondary" onClick={this.handleRemove}>
            Remove
          </button>
        </div>
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
