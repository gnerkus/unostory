import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

// These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ChapterContainer from '../../src/containers/ChapterContainer';

describe('ChapterContainer', () => {
  it('shallow', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const wrapper = shallow(
      <Provider store={store}>
        <ChapterContainer />
      </Provider>
    );

    expect(wrapper.text()).to.equal('<Connect(Chapter) />');
  });
});
