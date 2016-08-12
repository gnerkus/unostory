import React, { PropTypes } from 'react';

import C from '../constants';
import HeaderContainer from '../containers/HeaderContainer';
import DialogContainer from '../containers/DialogContainer';

import CircularProgress from 'material-ui/CircularProgress';
import { deepPurple500 } from 'material-ui/styles/colors';

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
      children: PropTypes.object,
    };
  }

  pageContent() {
    let content = (
      <div style={containerStyle}>
        <CircularProgress
          style={spinnerStyle}
          color={deepPurple500}
        />
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
          <CircularProgress
            style={spinnerStyle}
            color={deepPurple500}
          />
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

          <DialogContainer />
        </div>
      );
    }

    return content;
  }
}

export default App;
