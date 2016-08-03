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

// Subscribe to changes in the user's auth state
export const startListeningToAuth = () => {
  return function (dispatch) {
    dispatch(listeningToAuth());
    // Start listening to firebase auth changes.
    C.FIREBASE.auth().onAuthStateChanged(authData => {
      // If logged in.
      if (authData) {
        dispatch(loginSuccess(authData));
      } else {
        dispatch(logout());
      }
    });
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

// Subscribe to changes in the `chapters` ref.
export const startListeningToChapters = () => {
  let listenAction = null;
  if (C.FIREBASE.auth().currentUser) {
    const uid = C.FIREBASE.auth().currentUser.uid;
    listenAction = (dispatch) => {
      const chaptersRef = C.FIREBASE.app()
                                    .database()
                                    .ref('chapters')
                                    .equalTo('uid', uid);

      // Whenever the `chapters` ref changes, send an action to the
      // app's state along with the `chapters` ref.
      chaptersRef.on('value', snapshot => {
        console.log(snapshot.val());
        dispatch(fetchedChapters(snapshot.val()));
      }, err => {
        // TODO: better error handling
        console.log(err);
      });
    };
  } else {
    listenAction = (dispatch) => {
      dispatch(logout());
    };
  }

  return listenAction;
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

// Action creator
// Data loading.
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
