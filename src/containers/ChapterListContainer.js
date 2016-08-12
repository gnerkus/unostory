import { connect } from 'react-redux';
import ChapterList from '../components/ChapterList';

import C from '../constants';
import { showDialog, updateChapter, removeChapter } from '../actions';

import history from '../history';

const mapStateToProps = (state) => {
  return {
    chapters: state.chapters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeChapter: (chapterId) => {
      dispatch(showDialog({
        yesAction: () => {
          const ref = C.FIREBASE.app().database().ref(`chapters/${chapterId}`);

          ref.remove(() => {
            dispatch(removeChapter(chapterId));
          });
        },
        text: 'Deleted chapters cannot be retrieved. Are you sure?',
      }));
    },
    editChapter: (chapter, chapterId) => {
      dispatch(updateChapter(chapter, chapterId));
      history.push(`/chapters/${chapterId}/edit`);
    },
  };
};

const ChapterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChapterList);

export default ChapterListContainer;
