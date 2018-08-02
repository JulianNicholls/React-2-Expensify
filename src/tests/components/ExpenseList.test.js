import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList } from '../../components/ExpenseList';
import { testExpenses } from '../fixtures/expenses';

describe('ExpenseList component', () => {
  it('should render correctly WITH expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={testExpenses} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with NO expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
