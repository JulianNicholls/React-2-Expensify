import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import * as actions from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    pickerFocused: null
  };

  onTextChange = e => this.props.setTextFilter(e.target.value);

  onSortChange = e =>
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = pickerFocused => this.setState(() => ({ pickerFocused }));

  render() {
    const {
      filters: { text, sortBy, startDate, endDate }
    } = this.props;

    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              value={text}
              onChange={this.onTextChange}
              placeholder="Search Expenses"
            />
          </div>
          <div className="input-group__item">
            <select className="select" value={sortBy} onChange={this.onSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={startDate}
              startDateId="sdid" // New requirement
              endDate={endDate}
              endDateId="edid" // New requirement
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.pickerFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              monthFormat={'MMM YY'}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(
  mapStateToProps,
  actions
)(ExpenseListFilters);
