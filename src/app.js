import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MUITHEME from './theme';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Simple AppBar to test project
import AppBar from 'material-ui/AppBar';

import { render } from 'react-dom';

render(
  <MuiThemeProvider muiTheme={MUITHEME}>
    <AppBar
      title="Scribe"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MuiThemeProvider>,
  document.body
);
