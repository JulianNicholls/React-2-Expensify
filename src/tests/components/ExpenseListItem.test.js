import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../components/ExpenseListItem';
import { testExpenses } from '../fixtures/expenses';

describe('ExpenseListItem component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...testExpenses[1]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
