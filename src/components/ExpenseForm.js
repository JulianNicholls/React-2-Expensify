import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    const { expense } = props;

    this.state = {
      description: expense ? expense.description : '',
      note: expense ? expense.note : '',
      amount: expense ? (expense.amount / 100).toFixed(2) : '',
      createdAt: expense ? moment(expense.createdAt) : moment(),
      pickerFocused: false,
      error: ''
    };
  }

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

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState(() => ({ amount }));
  };

  onDateChange = createdAt => {
    if (createdAt) this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ pickerFocused: focused }));
  };

  addExpense = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'You must enter a description and an amount' }));
    } else {
      this.setState(() => ({ error: '' }));

      this.props.handleSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.addExpense}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          value={this.state.description}
          type="text"
          placeholder="Description"
          autoFocus={true}
          onChange={this.changeDescription}
        />
        <input
          className="text-input"
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
          className="textarea"
          value={this.state.note}
          placeholder="Add an optional note for this expense"
          onChange={this.changeNote}
        />
        <div>
          <button className="button">
            {this.props.expense ? 'Update' : 'Add Expense'}
          </button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
