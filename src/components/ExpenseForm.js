import React from 'react';
import { connect } from 'react-redux';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  changeDescription = e => {
    const description = e.target.value;

    this.setState(() => ({ description }));
  };

  changeNote = e => {
    const note = e.target.value;

    this.setState(() => ({ note }));
  };

  changeAmount = e => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) this.setState(() => ({ amount }));
  };

  render() {
    return (
      <div>
        <form class="expense-form">
          <input
            value={this.state.description}
            type="text"
            placeholder="Description"
            autoFocus={true}
            onChange={this.changeDescription}
          />
          <input
            value={this.state.amount}
            type="text"
            placeholder="Amount"
            onChange={this.changeAmount}
          />
          <textarea
            value={this.state.note}
            placeholder="Add an optional note for this expense"
            onChange={this.changeNote}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default connect()(ExpenseForm);
