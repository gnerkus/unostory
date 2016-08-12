import C from '../constants';

const initialState = {
  // chapter details.
  title: null,
  content: null,

  // Chapter monitor.
  status: C.CHAPTER_UNSAVED,
};

const editChapterReducer = (currentState = initialState, action) => {
  switch (action.type) {

    case C.UPDATE_CHAPTER:
      return {
        ...action.chapterDetails,
        status: C.CHAPTER_PENDING,
        key: action.chapterId,
      };

    case C.UPDATE_CHAPTER_SUCCESS:
      return initialState;

    case C.UPDATE_CHAPTER_FAILED:
      return {
        ...action.chapterDetails,
        status: C.CHAPTER_UNSAVED,
      };

    case C.UPDATE_CURRENT_CHAPTER_VALUE:
      return {
        ...currentState,
        [action.field]: action.value,
      };

    default:
      return currentState;
  }
};

export default editChapterReducer;
