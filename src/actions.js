/**
 * Application's actions
 */

import C from './constants';
import history from './history';

// Auth action creator
// Subscribe to changes in the user's authentication state
export const listeningToAuth = () => {
  return {
    type: C.LISTENING_TO_AUTH,
  };
};

// Auth action creator
// User makes a login request
export const loginRequest = (method = 'google', nextPath = '/') => {
  return {
    type: C.LOGIN_REQUEST,
    method,
    nextPath,
  };
};

// Auth action creator
// User logs in successfully
export const loginSuccess = (user, nextPath = '/') => {
  history.push(nextPath);
  return {
    type: C.LOGIN_SUCCESS,
    user,
    nextPath,
  };
};

// Auth action creator
// User logs out successfully
export const logout = (nextPath = '/') => {
  history.push(nextPath);
  return {
    type: C.LOGOUT,
    nextPath,
  };
};

// Action creator
// Loading data for the application
export const loadingData = () => {
  return {
    type: C.LOADING_DATA,
  };
};

// Action creator
// Loaded data successfully
export const loadedData = () => {
  return {
    type: C.LOADED_DATA,
  };
};

// Chapter action creator
// `chapters` ref fetched successfully
export const fetchedChapters = (chapters) => {
  return {
    type: C.FETCHED_CHAPTERS,
    chapters,
  };
};

// Action creator
// Updated settings
export const updateSetting = (setting, value) => {
  return {
    type: C.UPDATE_SETTING,
    setting,
    value,
  };
};

// Action creator
// Fetched settings
export const fetchedSettings = settings => {
  return {
    type: C.FETCHED_SETTINGS,
    settings,
  };
};

// Subscribe to changes in the `chapters` ref.
export const startListeningToChapters = (user) => {
  const listenAction = (dispatch) => {
    const chaptersRef = C.FIREBASE.app()
                                  .database()
                                  .ref('chapters')
                                  .equalTo('uid', user.uid)
                                  .ref;

    // Update app's state to reflect data loading
    dispatch(loadingData());

    // Whenever the `chapters` ref changes, send an action to the
    // app's state along with the `chapters` ref.
    chaptersRef.on('value', snapshot => {
      dispatch(fetchedChapters(snapshot.val()));
      dispatch(loadedData());
    }, err => {
      // TODO: better error handling
      throw err;
    });
  };

  return listenAction;
};

// Subscribe to changes in the `setttings` ref.
export const startListeningToSettings = (user) => {
  const listenAction = (dispatch) => {
    const settingsRef = C.FIREBASE.app()
                                  .database()
                                  .ref('settings')
                                  .equalTo('uid', user.uid)
                                  .ref;

    // Whenever the `settings` ref changes, send an action to the
    // app's state along with the `settings` ref.
    settingsRef.on('value', snapshot => {
      dispatch(fetchedSettings(snapshot.val()));
      dispatch(loadedData());
    }, err => {
      // TODO: better error handling
      throw err;
    });
  };

  return listenAction;
};

// Subscribe to changes in the user's auth state
export const startListeningToAuth = () => {
  return function (dispatch) {
    // Notify store that app is listening for auth changes
    dispatch(listeningToAuth());
    // Start listening to firebase auth changes.
    C.FIREBASE.auth().onAuthStateChanged(user => {
      // If logged in.
      if (user) {
        dispatch(loginSuccess(user));
        dispatch(startListeningToChapters(user));
        dispatch(startListeningToSettings(user));
      } else {
        C.FIREBASE.auth().getRedirectResult().then(function (result) {
          if (!result.user) {
            dispatch(logout());
          } else {
            dispatch(loginSuccess(result.user));
          }
        });
      }
    });
  };
};

// Chapter action creator
// Creating new chapter
export const createNewChapter = (chapterDetails) => {
  return {
    type: C.CREATING_NEW_CHAPTER,
    chapterDetails,
  };
};

// Chapter action creator
// Removed a chapter
export const removeChapter = chapterId => {
  return {
    type: C.REMOVE_CHAPTER,
    chapterId,
  };
};

// Chapter action creator
// Created a new chapter successfully
export const createNewChapterSuccess = (chapterData) => {
  return {
    type: C.CREATE_NEW_CHAPTER_SUCCESS,
    chapterData,
  };
};

// Chapter action creator
// Failed to create a new chapter
export const createNewChapterFailed = (error) => {
  return {
    type: C.CREATE_NEW_CHAPTER_FAILED,
    error,
  };
};

// Chapter action creator
// Updated a chapter's field.
export const updateChapterValue = (chapterId, field, value) => {
  return {
    type: C.UPDATE_CHAPTER_VALUE,
    chapterId,
    field,
    value,
  };
};

// TODO: Remove this
// Chapter action creator
// Updated the current chapter's field.
export const updateCurrentChapterValue = (field, value) => {
  return {
    type: C.UPDATE_CURRENT_CHAPTER_VALUE,
    field,
    value,
  };
};

// TODO: Remove this
// Field action creator
// Editing field
export const toggleEditing = (chapterId, field) => {
  return {
    type: C.TOGGLE_EDITING_FIELD,
    chapterId,
    field,
  };
};

// Dialog actions.
export const showDialog = ({
  dialogType = 'info',
  noAction = null,
  noText = 'No',
  text,
  yesAction,
  yesText = 'Yes',
}) => {
  return {
    dialogType,
    noAction,
    noText,
    text,
    type: C.SHOW_DIALOG,
    yesAction,
    yesText,
  };
};

// Action creator
export const clearDialog = () => {
  return {
    type: C.CLEAR_DIALOG,
  };
};
