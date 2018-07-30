import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import { testExpenses } from '../fixtures/expenses';

describe('ExpenseForm component', () => {
  it('should render correctly for add', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly for update with data', () => {
    const wrapper = shallow(<ExpenseForm expense={testExpenses[2]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
