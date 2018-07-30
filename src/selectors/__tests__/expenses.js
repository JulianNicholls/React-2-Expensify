import moment from 'moment';

import getFilteredExpenses from '../expenses';

import { testExpenses } from '../../fixtures/expenses';

describe('getFilteredExpenses selector', () => {
  const testFilters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  it('returns all of the expenses in date order with default filters', () => {
    const expenses = getFilteredExpenses(testExpenses, testFilters);

    expect(expenses.length).toBe(4);
    expect(expenses).toEqual([
      testExpenses[0],
      testExpenses[1],
      testExpenses[2],
      testExpenses[3]
    ]);
  });

  it('returns the expenses containing "te" in date order', () => {
    const filters = { ...testFilters, text: 'te' };
    const expenses = getFilteredExpenses(testExpenses, filters);

    expect(expenses.length).toBe(2);
    expect(expenses).toEqual([testExpenses[1], testExpenses[2]]);
  });

  it('returns the expenses since 1500000000 in date order', () => {
    const filters = { ...testFilters, startDate: moment(1500000000) };
    const expenses = getFilteredExpenses(testExpenses, filters);

    expect(expenses.length).toBe(3);
    expect(expenses).toEqual([testExpenses[0], testExpenses[1], testExpenses[2]]);
  });

  it('returns the expenses before 1810000000 in date order', () => {
    const filters = { ...testFilters, endDate: moment(1810000000) };
    const expenses = getFilteredExpenses(testExpenses, filters);

    expect(expenses.length).toBe(3);
    expect(expenses).toEqual([testExpenses[1], testExpenses[2], testExpenses[3]]);
  });

  it('returns all of the expenses in amount order, then back to date order', () => {
    let filters = { ...testFilters, sortBy: 'amount' };
    let expenses = getFilteredExpenses(testExpenses, filters);

    expect(expenses.length).toBe(4);
    expect(expenses).toEqual([
      testExpenses[3],
      testExpenses[2],
      testExpenses[1],
      testExpenses[0]
    ]);

    filters = { ...testFilters, sortBy: 'date' };
    expenses = getFilteredExpenses(testExpenses, filters);
    expect(expenses.length).toBe(4);
    expect(expenses).toEqual([
      testExpenses[0],
      testExpenses[1],
      testExpenses[2],
      testExpenses[3]
    ]);
  });
});
