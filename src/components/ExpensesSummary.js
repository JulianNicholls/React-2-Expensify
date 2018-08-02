import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import filteredExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';

import 'numeral/locales/en-gb';
numeral.locale('en-gb');

export const ExpensesSummary = ({ expensesTotal, expensesCount, filteredCount }) => {
  const expenseWord = filteredCount === 1 ? 'expense' : 'expenses';
  const ofWord = filteredCount < expensesCount ? ` (of ${expensesCount})` : '';

  if (filteredCount === 0)
    return (
      <h1>
        No {expenseWord}
        {ofWord} to display
      </h1>
    );

  return (
    <h1>
      Viewing {filteredCount} {expenseWord}
      {ofWord}, totalling {numeral(expensesTotal / 100).format('$0,0.00')}
    </h1>
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
