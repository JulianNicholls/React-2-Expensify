import React from 'react';
import { shallow } from 'enzyme';

import { NotFoundPage } from '../../routers/AppRouter.js';

describe('NotFoundPage component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
