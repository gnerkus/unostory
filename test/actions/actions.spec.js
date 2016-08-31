import { expect } from 'chai';

import C from '../../src/constants';
import * as actions from '../../src/actions';

describe('App actions', () => {
  it('listeningToAuth should create LISTENING_TO_AUTH action', () => {
    expect(actions.listeningToAuth()).to.eql({
      type: C.LISTENING_TO_AUTH,
    });
  });
});
