import firebase from 'firebase';
import C from './constants';

const auth = {
  login: (provider) => {
    let authProvider = null;

    switch (provider) {

      case 'google':
        authProvider = new firebase.auth.GoogleAuthProvider();
        break;

      case 'github':
        authProvider = new firebase.auth.GithubAuthProvider();
        break;

      case 'twitter':
        authProvider = new firebase.auth.TwitterAuthProvider();
        break;

      default:
        break;
    }

    if (window.location.protocol === 'http:') {
      C.FIREBASE.auth().signInWithPopup(authProvider);
    } else {
      C.FIREBASE.auth().signInWithRedirect(authProvider);
    }
  },

  isLoggedIn: () => {
    return C.FIREBASE.auth().currentUser;
  },

  checkAuth: (nextState, replace, cb) => {
    if (!C.FIREBASE.auth().currentUser) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname },
      });
    }
    cb();
  },
};

export default auth;
