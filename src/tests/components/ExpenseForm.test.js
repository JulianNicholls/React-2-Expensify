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

  it('should show an error when invalid data is submitted', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when description is changed', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'rent' } });

    expect(wrapper.state('description')).toBe('rent');
  });

  it('should update state when note is changed', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change', { target: { value: 'new note' } });

    expect(wrapper.state('note')).toBe('new note');
  });

  it('should update state when amount is changed validly', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper
      .find('input')
      .at(1)
      .simulate('change', { target: { value: '23.50' } });

    expect(wrapper.state('amount')).toBe('23.50');
  });

  it('should NOT update state when amount is changed INvalidly', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper
      .find('input')
      .at(1)
      .simulate('change', { target: { value: '12.122' } });

    expect(wrapper.state('amount')).toBe('');
  });
});
