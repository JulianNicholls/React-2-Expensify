import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

describe('ExpensesSummary', () => {
  let defaultWrapper;

  beforeEach(() => {
    defaultWrapper = shallow(
      <ExpensesSummary expensesTotal={123245} filteredCount={4} expensesCount={4} />
    );
  });

  it('should render correctly', () => {
    expect(defaultWrapper).toMatchSnapshot();
  });

  it('should show the correct number of expenses and the correct total', () => {
    const text = defaultWrapper.find('h1').text();

    expect(text).toContain('4 expenses');
    expect(text).toContain('1,232.45');
  });

  it('should show when only some expenses are being displayed', () => {
    const wrapper = shallow(
      <ExpensesSummary expensesTotal={123245} filteredCount={3} expensesCount={4} />
    );

    const text = wrapper.find('h1').text();

    expect(text).toContain('3 expenses (of 4)');
    expect(text).toContain('1,232.45');
  });

  it('should show when only one expenses is being displayed', () => {
    const wrapper = shallow(
      <ExpensesSummary expensesTotal={123245} filteredCount={1} expensesCount={4} />
    );
    
    const text = wrapper.find('h1').text();

    expect(text).toContain('1 expense (of 4)');
    expect(text).toContain('1,232.45');
  });

  it('should show when all expenses have been filtered out', () => {
    const wrapper = shallow(
      <ExpensesSummary expensesTotal={0} filteredCount={0} expensesCount={4} />
    );
    const text = wrapper.find('h1').text();

    expect(text).toContain('No expenses (of 4) to display');
  });
});
