import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    pickerFocused: false
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

  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ pickerFocused: focused }));
  };

  render() {
    return (
      <div>
        <form className="expense-form">
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
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.pickerFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={'ll'}
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
