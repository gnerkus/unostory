import C from '../constants';
import history from '../history';

const initialState = {};

const chaptersReducer = (currentState = initialState, action) => {
  switch(action.type) {

    case C.FETCHED_CHAPTERS:
      let inversedChapters = {};
      // Order chapters by publish date
      if (action.chapters) {
        Object.keys(action.chapters).sort((a, b)=> {
          return action.chapters[b].created - action.chapters[a].created;
        }).forEach(key => {
          inversedChapters[key] = action.chapters[key];
        });
      }
      return inversedChapters;
      break;

    default:
      return currentState;
  }
};

export default chaptersReducer;
