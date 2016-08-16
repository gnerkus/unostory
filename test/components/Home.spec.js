import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../../src/components/Home';

describe('<Home />', () => {
  it('should show the landing page placeholder text', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
