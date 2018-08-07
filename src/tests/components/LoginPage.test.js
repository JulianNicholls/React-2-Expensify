import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

describe('LoginPage component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LoginPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
