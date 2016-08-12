import C from '../constants';

const initialState = {
  text: null,
  yesAction: null,
  noAction: null,
  yesText: null,
  noText: null,
};

const dialogReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case C.SHOW_DIALOG:
      return {
        noAction: action.noAction,
        noText: action.noText || 'No',
        text: action.text,
        yesAction: action.yesAction,
        yesText: action.yesText || 'Yes',
      };

    case C.CLEAR_DIALOG:
      return initialState;

    default:
      return initialState;
  }
};

export default dialogReducer;
