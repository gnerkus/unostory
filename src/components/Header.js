/**
 * Displays the app bar and action buttons contained within.
 * Also displays the 'Add Chapter' FAB (Floating Action Button)
 */

import React, { PropTypes } from 'react';

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton/IconButton';
import Avatar from 'material-ui/Avatar';

import SocialPerson from 'material-ui/svg-icons/social/person';

import { grey300, darkBlack } from 'material-ui/styles/colors';

import C from '../constants';
import history from '../history';

const toolbarStyle = {
  borderBottom: '1px solid',
  borderBottomColor: grey300,
};

const titleStyle = {
  color: darkBlack,
  fontWeight: 'normal',
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
      logout: PropTypes.func,
    };
  }

  // Generate a component that contains a dropdown menu for the user
  userMenu() {
    let content = null;

    if (this.props.authStatus === C.LOGGED_IN) {
      content = (
        <div>
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
        </div>
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

  // Floating action button at the bottom right of the screen
  // This enables the user create a new chapter.
  newChapterBtn() {
    let content = null;

    if (this.props.authStatus === C.LOGGED_IN) {
      content = (
        <FlatButton
          label="New chapter"
          secondary
          onClick={(e) => {
            e.preventDefault();
            history.push('/new');
          }}
        />
      );
    }

    return content;
  }

  render() {
    return (
      <Toolbar
        style={toolbarStyle}
        zDepth="0"
      >
        <ToolbarGroup>
          <ToolbarTitle
            text="UnoStory"
            style={titleStyle}
            onClick={(e) => {
              e.preventDefault();
              history.push('/');
            }}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          {this.newChapterBtn()}
          {this.userMenu()}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Header;
