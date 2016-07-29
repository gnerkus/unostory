import firebase from 'firebase';

const firebaseConf = {
  apiKey: "AIzaSyC6HUOwcoU3X4Sb0K4tm9blnqy4nANoEcU",
  authDomain: "scribe-4f238.firebaseapp.com",
  databaseURL: "https://scribe-4f238.firebaseio.com",
  storageBucket: "scribe-4f238.appspot.com"
};
firebase.initializeApp(firebaseConf);

const C = {
  // Auth actions.
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT: 'LOGOUT',
  LISTENING_TO_AUTH: 'LISTENING_TO_AUTH',

  // Chapters actions.
  FETCHING_CHAPTERS: 'FETCHING_CHAPTERS',
  FETCHED_CHAPTERS: 'FETCHED_CHAPTERS',
  COMPARE_CHAPTERS: 'COMPARE_CHAPTERS',

  CREATING_NEW_CHAPTER: 'CREATING_NEW_CHAPTER',
  REMOVE_CHAPTER: 'REMOVE_CHAPTER',
  CREATE_NEW_CHAPTER_SUCCESS: 'CREATE_NEW_CHAPTER_SUCCESS',
  CREATE_NEW_CHAPTER_FAILED: 'CREATE_NEW_CHAPTER_FAILED',
  UPDATE_CHAPTER_VALUE: 'UPDATE_CHAPTER_VALUE',
  UPDATE_CURRENT_CHAPTER_VALUE: 'UPDATE_CURRENT_CHAPTER_VALUE',
  TOGGLE_EDITING_FIELD: 'TOGGLE_EDITING_FIELD',

  // Editing field staatus.
  FIELD_STATUS_LOADING: 'FIELD_STATUS_LOADING',
  FIELD_STATUS_EDITING: 'FIELD_STATUS_EDITING',
  FIELD_STATUS_NOT_EDITING: 'FIELD_STATUS_NOT_EDITING',

  // New chapter status.
  CHAPTER_UNSAVED: 'CHAPTER_UNSAVED',
  CHAPTER_PENDING: 'CHAPTER_PENDING',
  CHAPTER_CREATED: 'CHAPTER_CREATED',
  CHAPTER_IN_PROGRESS: 'CHAPTER_IN_PROGRESS',
  CHAPTER_COMPLETED: 'CHAPTER_COMPLETED',

  // Auth states.
  LOGGED_IN: 'LOGGED_IN',
  LOGGING_IN: 'LOGGING_IN',
  LOGGED_OUT: 'LOGGED_OUT',

  // Dialog.
  SHOW_DIALOG: 'SHOW_DIALOG',
  CLEAR_DIALOG: 'CLEAR_DIALOG',

  // MISC.
  FIREBASE: firebase,

  // Data loading.
  LOADING_DATA: 'LOADING_DATA',
  LOADED_DATA: 'LOADED_DATA',

  // Settings actions.
  UPDATE_SETTING: 'UPDATE_SETTING',
  FETCHED_SETTINGS: 'FETCHED_SETTINGS',
};

export default C;
