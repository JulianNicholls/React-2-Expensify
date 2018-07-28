import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: '70%' }}>{description}</div>
    <div style={{ width: '12%', textAlign: 'right' }}>{amount}</div>
    <div style={{ width: '12%', textAlign: 'right' }}>{createdAt}</div>
  </div>
);

export default ExpenseListItem;
