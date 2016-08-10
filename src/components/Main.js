import React, { PropTypes } from 'react';

import C from '../constants';
import ChapterListContainer from '../containers/ChapterListContainer';
import Home from './Home';

class Main extends React.Component {
  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired,
    };
  }

  render() {
    let content = null;

    if (this.props.authStatus === C.LOGGED_IN) {
      content = (
        <ChapterListContainer />
      );
    } else {
      content = (
        <Home />
      );
    }

    return content;
  }
}

export default Main;
