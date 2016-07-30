import React, { PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton/IconButton';
import Avatar from 'material-ui/Avatar';

import SocialPerson from 'material-ui/svg-icons/social/person';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import C from '../constants';
import history from '../history';

// Header component for the application.
// The header is essentially the top navigation bar.
class Header extends React.Component {

  static propTypes {
    return {
      authStatus: PropTypes.string.isRequired,
      photoURL: PropTypes.string,
      userName: PropTypes.string,
      open: PropTypes.bool,
    };
  }

  // Generate a component that contains a dropdown menu for the user
  userMenu() {
    let content = null;

    if (this.props.authStatus === C.LOGGED_IN) {
      content = (
        <IconMenu
          iconButtonElement={this.profilePhoto()} // user's profile picture
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
        >
          <MenuItem
            primaryText={ this.props.userName ? this.props.userName : this.props.email } />
          <MenuItem
            onClick={ () => {
              history.push('/settings')
            } }
            primaryText="Settings" />
          <MenuItem
            onClick={ this.props.logout }
            primaryText="Logout" />
        </IconMenu>
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
            <Avatar src={ this.props.photoURL }/>
          </IconButton>
        )
      } else {
        photo = (
          <IconButton>
            <Avatar icon={ <SocialPerson /> } />
          </IconButton
        )
      }
    } else {
      photo = (
        <a
          onClick={ (e) => {
            e.preventDefault();
            history.push('/')
          }}
        >
          Scribe
        </a>
      )
    }

    return photo;
  }

  // Generate a side navigation menu
  navigationMenu() {
    let content = null;

    if (this.props.authStatus === C.LOGGED_IN) {
      content = (
        <Drawer width={200} open={this.props.open}>
          <AppBar title="Scribe" />
          <MenuItem
            onClick={ () => {
              history.push('/')
            } }
            primaryText="Chapters" />
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
        onTouchTap={ this.handleToggle() }>
        <NavigationMenu />
      </IconButton>
    );
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  // Floating action button at the bottom right of the screen
  // This enables the user create a new chapter.
  newChapterBtn() {
    let content = null;
    let location = this.props.location;

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
            secondary={true}
            style={style}
            onClick ={ (e) => {
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
          title="Scribe"
          iconElementLeft={ this.navBtn() }
          iconElementRight={ this.userMenu() } />
        { this.navigationMenu() }
      </div>
    );
  }
}

export default Header;
