import { connect } from 'react-redux';
import history from '../history';

import C from '../constants';
import NewChapterForm from '../components/NewChapterForm';

import {
  createNewChapter,
  createNewChapterSuccess,
  createNewChapterFailed,
  updateCurrentChapterValue,
} from '../actions';

const mapStateToProps = state => {
  const chapter = state.newChapter;
  let disabled = true;

  if (chapter.content) {
    disabled = false;
  }

  return {
    title: chapter.title || '',
    content: chapter.content || '',
    disabled,
    uid: state.auth.uid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();

      // Fetch content for the chapter
      const chapterForm = e.target;
      const title = chapterForm.title.value;
      const content = chapterForm.content.value;
      const uid = chapterForm.uid.value;

      // Update application state
      if (content && uid) {
        dispatch(createNewChapter({
          title,
          content,
          uid,
        }));

        // Fetch the chapters ref from Firebase
        const chapterRef = C.FIREBASE.database()
                                   .ref('chapters')
                                   .equalTo('uid', uid)
                                   .ref;

        // Add chapter to Firebase
        chapterRef.push({
          created: Date.now(),
          status: C.CHAPTER_PENDING,
          uid,
          title,
          content,
        }, err => {
          dispatch(createNewChapterFailed(err));
        }).then((newChapter) => {
          // Update application state to indicate successful creation
          dispatch(createNewChapterSuccess(newChapter));
          // Navigate to the chapter's page
          history.push(`chapters/${newChapter.key}`);
        });
      }
    },

    onChange: e => {
      dispatch(updateCurrentChapterValue(e.target.id, e.target.value));
    },
  };
};

const NewChapterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChapterForm);

export default NewChapterFormContainer;
