import C from '../constants';
import history from '../history';

const initialState = {
  // New chapter details.
  title: null,
  content: null,

  // Chapter monitor.
  status: C.CHAPTER_UNSAVED
};

const newChapterReducer = (currentState = initialState, action) => {
  switch(action.type) {

    case C.CREATING_NEW_CHAPTER:
      return {
        ...currentState,
        status: C.CHAPTER_PENDING
      };
      break;

    case C.CREATE_NEW_CHAPTER_SUCCESS:
      return initialState;
      break;

    case C.CREATE_NEW_CHAPTER_FAILED:
      return {
        ...currentState,
        status: C.CHAPTER_UNSAVED
      };
      break;

    case C.UPDATE_CURRENT_CHAPTER_VALUE:
      return {
        ...currentState,
        [action.field]: action.value
      };
      break;

    default:
      return currentState;
  }
};

export default newChapterReducer;
