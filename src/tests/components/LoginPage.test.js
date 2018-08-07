import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

describe('LoginPage component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call startLogin on click', () => {
    const startLogin = jest.fn();

    const wrapper = shallow(<LoginPage startLogin={startLogin} />);

    wrapper.find('button').simulate('click');

    expect(startLogin).toHaveBeenCalledTimes(1);
  });
});
