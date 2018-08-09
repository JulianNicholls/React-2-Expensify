import React from 'react';
import { shallow } from 'enzyme';

import LoadingPage from '../../components/LoadingPage';

describe('LoadingPage component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LoadingPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
