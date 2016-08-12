import React from 'react';

import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';

import AppContainer from './containers/AppContainer';
import MainContainer from './containers/MainContainer';
import LoginFormContainer from './containers/LoginFormContainer';
import NewChapterFormContainer from './containers/NewChapterFormContainer';
import EditChapterFormContainer from './containers/EditChapterFormContainer';
import ChapterContainer from './containers/ChapterContainer';

import history from './history';
import rootReducer from './reducers/index';
import auth from './auth';

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

      <Route
        path="new"
        component={NewChapterFormContainer}
        onEnter={auth.checkAuth}
      />

      <Redirect
        from="chapters"
        to="/"
        onEnter={auth.checkAuth}
      />

      <Route
        path="chapters/:chapterId"
        component={ChapterContainer}
        onEnter={auth.checkAuth}
      />

      <Route
        path="chapters/:chapterId/edit"
        component={EditChapterFormContainer}
        onEnter={auth.checkAuth}
      />
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
