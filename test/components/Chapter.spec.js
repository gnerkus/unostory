import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Chapter from '../../src/components/Chapter';

describe('<Chapter />', () => {
  it('should show the landing page placeholder text', () => {
    const wrapper = shallow(<Chapter />);
    expect(wrapper.find('div')).to.have.length(4);
  });
});
