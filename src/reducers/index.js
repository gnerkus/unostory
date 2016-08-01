import authReducer from './authReducer';
import dataLoadingReducer from './dataLoadingReducer';
import dialogReducer from './dialogReducer';
import editingFieldReducer from './editingFieldReducer';
import newChapterReducer from './newChapterReducer';
import chaptersReducer from './chaptersReducer';
import settingsReducer from './settingsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: authReducer,
  dataLoading: dataLoadingReducer,
  dialog: dialogReducer,
  editingFields: editingFieldReducer,
  newChapter: newChapterReducer,
  chapters: chaptersReducer,
  settings: settingsReducer,
});
