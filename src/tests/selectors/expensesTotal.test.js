import expensesTotal from '../../selectors/expensesTotal';

import { testExpenses } from '../fixtures/expenses';

describe('expensesTotal selector', () => {
  it('should return 0 for no expenses', () => {
    expect(expensesTotal([])).toBe(0);
  });

  it('should return the amount for one expense', () => {
    expect(expensesTotal([testExpenses[1]])).toBe(testExpenses[1].amount);
  });

  it('should return the total for a list of expenses', () => {
    expect(expensesTotal(testExpenses)).toBe(70000);
  });
});
