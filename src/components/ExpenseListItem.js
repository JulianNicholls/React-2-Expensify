import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '7px' }}>
    <div style={{ width: '60%' }}>{description}</div>
    <div style={{ width: '12%', textAlign: 'right' }}>
      {(amount / 100.0).toFixed(2)}
    </div>
    <div style={{ width: '12%', textAlign: 'right' }}>
      {moment(createdAt).format('ll')}
    </div>
    <div style={{ width: '12%', textAlign: 'right' }}>
      <button onClick={() => dispatch(removeExpense(id))}>Remove</button>
    </div>
  </div>
);

export default connect()(ExpenseListItem);
