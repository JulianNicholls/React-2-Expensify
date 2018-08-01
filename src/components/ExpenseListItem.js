import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/en-gb';

numeral.locale('en-gb');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '7px' }}>
    <Link style={{ width: '60%' }} to={`/edit/${id}`}>
      <h4 style={{ margin: '0' }}>{description}</h4>
    </Link>
    <div style={{ width: '15%', textAlign: 'right' }}>
      {numeral(amount / 100.0).format('$0,0.00')}
    </div>
    <div style={{ width: '15%', paddingLeft: '2em' }}>
      {moment(createdAt).format('ll')}
    </div>
  </div>
);

export default ExpenseListItem;
