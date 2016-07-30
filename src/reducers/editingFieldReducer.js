import C from '../constants';

const initialState = {};

const editingFieldReducer = (currentState = initialState, action) => {
  switch(action.type) {

    case C.TOGGLE_EDITING_FIELD:
      let editing = C.FIELD_STATUS_EDITING;
      let roastFields = {};
      let editingFields = currentState;

      if (editingFields.hasOwnProperty(action.chapterId)) {
        chapterFields = editingFields[action.chapterId];
        if (chapterFields.hasOwnProperty(action.field)) {
          if (chapterFields[action.field] === C.FIELD_STATUS_EDITING) {
            editing = C.FIELD_STATUS_NOT_EDITING;
          } else if (chapterFields[action.field] === C.FIELD_STATUS_NOT_EDITING) {
            editing = C.FIELD_STATUS_EDITING;
          }
        }
      }

      return {
        ...currentState,
        [action.chapterId]: {
          ...chapterFields,
          [action.field]: editing
        }
      };
      break;

    default:
      return currentState;
      break;
  }
};

export default editingFieldReducer;
