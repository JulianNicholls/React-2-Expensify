import React from 'react';

import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';

const DashboardPage = () => (
  <div className="container">
    <h1>Dashboard</h1>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
