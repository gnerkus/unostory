import React from 'react';

import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';

import AppContainer from './containers/AppContainer';
import MainContainer from './containers/MainContainer';
import LoginFormContainer from './containers/LoginFormContainer';

import history from './history';
import rootReducer from './reducers/index';

import { startListeningToAuth } from './actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MUITHEME from './theme';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = applyMiddleware(thunkMiddleware)(createStore)(
  rootReducer,
  {},
  window.devToolsExtension && window.devToolsExtension()
);

const routes = (
  <Router history={history}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={MainContainer} />

      <Route path="login" component={LoginFormContainer} />
    </Route>
  </Router>
);

render(
  <MuiThemeProvider muiTheme={MUITHEME}>
    <Provider store={store}>
      {routes}
    </Provider>
  </MuiThemeProvider>,
  document.body
);

startListeningToAuth()(store.dispatch);
