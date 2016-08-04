import C from '../constants';

const initialState = {
  authProvider: null,
  authStatus: C.LOGGED_OUT,
  email: null,
  listeningToAuth: false,
  photoURL: null,
  uid: null,
  userName: null,
};

const authReducer = (currentState = initialState, action) => {
  switch (action.type) {

    case C.LISTENING_TO_AUTH:
      return {
        ...currentState,
        listeningToAuth: true,
      };

    case C.LOGIN_REQUEST:
      return {
        ...currentState,
        authStatus: C.LOGGING_IN,
      };

    case C.LOGIN_SUCCESS:
      return {
        ...currentState,
        authStatus: C.LOGGED_IN,
        uid: action.user.uid,
        photoURL: action.user.photoURL,
        userName: action.user.displayName,
        email: action.user.email,
      };

    case C.LOGOUT:
      return {
        ...currentState,
        authStatus: C.LOGGED_OUT,
        uid: null,
        userName: null,
        photoURL: null,
        email: null,
      };

    default:
      return currentState;
  }
};

export default authReducer;
