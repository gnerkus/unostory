import C from '../constants';

const initialState = {
  // New chapter details.
  title: null,
  content: null,

  // Chapter monitor.
  status: C.CHAPTER_UNSAVED,
};

const newChapterReducer = (currentState = initialState, action) => {
  switch (action.type) {

    case C.CREATING_NEW_CHAPTER:
      return {
        ...currentState,
        status: C.CHAPTER_PENDING,
      };

    case C.CREATE_NEW_CHAPTER_SUCCESS:
      return initialState;

    case C.CREATE_NEW_CHAPTER_FAILED:
      return {
        ...currentState,
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

export default newChapterReducer;
