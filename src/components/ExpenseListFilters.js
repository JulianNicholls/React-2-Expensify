import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/filters';

const ExpenseListFilters = props => (
  <dir>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => props.setTextFilter(e.target.value)}
    />
    <select
      value={props.filters.sortBy}
      onChange={e =>
        e.target.value === 'date' ? props.sortByDate() : props.sortByAmount()
      }
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </dir>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(
  mapStateToProps,
  actions
)(ExpenseListFilters);
