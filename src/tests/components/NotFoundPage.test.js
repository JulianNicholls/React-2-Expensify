import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../../components/NotFoundPage';

describe('NotFoundPage component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
