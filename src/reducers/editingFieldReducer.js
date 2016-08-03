import C from '../constants';

const initialState = {};

const editingFieldReducer = (currentState = initialState, action) => {
  let editing = C.FIELD_STATUS_EDITING;
  const editingFields = currentState;
  let chapterFields = null;

  switch (action.type) {

    case C.TOGGLE_EDITING_FIELD:


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
          [action.field]: editing,
        },
      };

    default:
      return currentState;
  }
};

export default editingFieldReducer;
