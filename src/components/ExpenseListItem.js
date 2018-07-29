import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '7px' }}>
    <Link style={{ width: '60%' }} to={`/edit/${id}`}>
      <h4 style={{ margin: '0' }}>{description}</h4>
    </Link>
    <div style={{ width: '15%', textAlign: 'right' }}>
      {(amount / 100.0).toFixed(2)}
    </div>
    <div style={{ width: '15%', paddingLeft: '2em' }}>
      {moment(createdAt).format('ll')}
    </div>
  </div>
);

export default ExpenseListItem;
