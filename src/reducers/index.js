import authReducer from './authReducer';
import dataLoadingReducer from './dataLoadingReducer';
import dialogReducer from './dialogReducer';
import newChapterReducer from './newChapterReducer';
import editChapterReducer from './editChapterReducer';
import chaptersReducer from './chaptersReducer';
import settingsReducer from './settingsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: authReducer,
  dataLoading: dataLoadingReducer,
  dialog: dialogReducer,
  newChapter: newChapterReducer,
  editChapter: editChapterReducer,
  chapters: chaptersReducer,
  settings: settingsReducer,
});
