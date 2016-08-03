import C from '../constants';
import history from '../history';

const initialState = {
  text: null,
  yesAction: null,
  noAction: null,
  yesText: null,
  noText: null,
  dialogType: null,
};

const dialogReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case C.SHOW_DIALOG:
      return {
        dialogType: action.dialogType,
        noAction: action.noAction,
        noText: action.noText || 'No',
        text: action.text,
        yesAction: action.yesAction,
        yesText: action.yesText || 'Yes'
      };

    case C.CLEAR_DIALOG:
      return initialState;

    default:
      return initialState;
  }
};

export default dialogReducer;
