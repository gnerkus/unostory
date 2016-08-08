import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import C from '../constants';
import HeaderContainer from '../containers/HeaderContainer';

import CircularProgress from 'material-ui/CircularProgress';

const spinnerStyle = {
  margin: 'auto',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: 620,
  padding: 0,
  margin: 0,
};

class App extends React.Component {

  static propTypes() {
    return {
      uid: PropTypes.string,
      authStatus: PropTypes.string.isRequired,
      userName: PropTypes.string,
      location: PropTypes.string,
      dataLoading: PropTypes.bool,
    };
  }

  pageContent() {
    let content = (
      <div style={containerStyle}>
        <CircularProgress style={spinnerStyle} />
      </div>
    );
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
      content = (
        <div style={containerStyle}>
          <CircularProgress style={spinnerStyle} />
        </div>
      );
    } else {
      content = (
        <div>
          <HeaderContainer
            location={this.props.location}
          />

          <main>
            {this.pageContent()}
          </main>

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
