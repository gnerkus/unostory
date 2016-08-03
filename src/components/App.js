import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import C from '../constants';
import HeaderContainer from '../containers/HeaderContainer';

import CircularProgress from 'material-ui/CircularProgress';

class App extends React.Component {

  static propTypes() {
    return {
      uid: PropTypes.string,
      authStatus: PropTypes.string.isRequired,
      userName: PropTypes.string,
    };
  }

  pageContent() {
    let content = <CircularProgress />;
    if (!this.props.dataLoading) {
      content = (
        <div>
          {
            React.cloneElement(this.props.children, {
              key: this.props.location.pathname,
            })
          }
        </div>
      );
    }

    return content;
  }

  render() {
    let content = null;
    if (this.props.authStatus === C.LOGGING_IN) {
      content = <CircularProgress />;
    } else {
      content = (
        <div>
          <HeaderContainer
            location={this.props.location}
          />

          <footer>
            Made with gusto by <a href="https://github.com/gnerkus">gnerkus</a>
          </footer>
        </div>
      );
    }

    return content;
  }
}

export default App;
