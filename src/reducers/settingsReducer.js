import C from '../constants';

const initialState = {
  audioEnabled: true,
};

const settingsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case C.UPDATE_SETTING:
      return {
        ...currentState,
        [action.setting]: action.value,
      };

    case C.FETCHED_SETTINGS:
      return {
        ...currentState,
        ...action.settings,
      };

    default:
      return currentState;
  }
};

export default settingsReducer;
