import React, { PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton/IconButton';
import Avatar from 'material-ui/Avatar';

import SocialPerson from 'material-ui/svg-icons/social/person';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import { grey300 } from 'material-ui/styles/colors';

import C from '../constants';
import history from '../history';

const appBarStyle = {
  borderBottom: '1px solid',
  borderBottomColor: grey300,
};

// Header component for the application.
// The header is essentially the top navigation bar.
class Header extends React.Component {

  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired,
      photoURL: PropTypes.string,
      userName: PropTypes.string,
      open: PropTypes.bool,
      location: PropTypes.string,
      email: PropTypes.string,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  // Generate a component that contains a dropdown menu for the user
  userMenu() {
    let content = null;

    if (this.props.authStatus === C.LOGGED_IN) {
      content = (
        <IconMenu
          iconButtonElement={this.profilePhoto()}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <MenuItem
            primaryText={this.props.userName ? this.props.userName : this.props.email}
            disabled
          />
          <MenuItem
            onClick={() => {
              history.push('/settings');
            }}
            primaryText="Settings"
          />
          <MenuItem
            onClick={this.props.logout}
            primaryText="Logout"
          />
        </IconMenu>
      );
    } else if (this.props.location.pathname !== '/login') {
      content = (
        <FlatButton
          label="Sign in"
          secondary
          onClick={(e) => {
            e.preventDefault();
            history.push('/login');
          }}
        />
      );
    }

    return content;
  }

  // Generate a component that contain's the user's profile pic if logged in
  // Otherwise, component contains only app's name
  profilePhoto() {
    let photo = null;

    if (this.props.authStatus === C.LOGGED_IN) {
      if (this.props.photoURL && this.props.photoURL !== '') {
        photo = (
          <IconButton>
            <Avatar src={this.props.photoURL} />
          </IconButton>
        );
      } else {
        photo = (
          <IconButton>
            <Avatar icon={<SocialPerson />} />
          </IconButton>
        );
      }
    }

    return photo;
  }

  // Generate a side navigation menu
  navigationMenu() {
    let content = null;

    if (this.props.authStatus === C.LOGGED_IN) {
      content = (
        <Drawer width={200} open={this.state.open}>
          <AppBar
            title="UnoStory"
            onTouchTap={this.handleToggle.bind(this)}
          />
          <MenuItem
            onClick={() => {
              history.push('/');
            }}
            primaryText="Chapters"
          />
        </Drawer>
      );
    }

    return content;
  }

  // Generate a menu button. This is used to open the side navigation.
  navBtn() {
    return (
      <IconButton
        tooltip="Nav menu"
        onTouchTap={this.handleToggle.bind(this)}
      >
        <NavigationMenu />
      </IconButton>
    );
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  // Floating action button at the bottom right of the screen
  // This enables the user create a new chapter.
  newChapterBtn() {
    let content = null;
    const location = this.props.location;

    const style = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    };

    if (this.props.authStatus === C.LOGGED_IN) {
      content = (
        <div>
          <FloatingActionButton
            secondary
            style={style}
            onClick={(e) => {
              e.preventDefault();
              history.push('/new');
            }}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      );
    }

    return content;
  }

  render() {
    return (
      <div>
        <AppBar
          title="UnoStory"
          style={appBarStyle}
          iconElementLeft={this.navBtn()}
          iconElementRight={this.userMenu()}
          zDepth="0"
        />
        {this.navigationMenu()}
        {this.newChapterBtn()}
      </div>
    );
  }
}

export default Header;
