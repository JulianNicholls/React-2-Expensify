import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import filteredExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';

import 'numeral/locales/en-gb';
numeral.locale('en-gb');

export const ExpensesSummary = ({ expensesTotal, expensesCount, filteredCount }) => {
  const expenseWord = filteredCount === 1 ? 'expense' : 'expenses';
  const ofWord = filteredCount < expensesCount ? ` (of ${expensesCount})` : '';
  const amountStr = numeral(expensesTotal / 100).format('$0,0.00');

  let title = (
    <h1 className="page-header__title">
      Viewing <span>{filteredCount}</span> {expenseWord}
      {ofWord}, totalling <span>{amountStr}</span>
    </h1>
  );

  if (filteredCount === 0)
    title = <h1 className="page-header__title">No expenses {ofWord} to display</h1>;

  return (
    <div className="page-header">
      <div className="content-container">
        {title}
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const filtered = filteredExpenses(state.expenses, state.filters);

  return {
    expensesTotal: expensesTotal(filtered),
    expensesCount: state.expenses.length,
    filteredCount: filtered.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
