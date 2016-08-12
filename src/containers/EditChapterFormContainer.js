import { connect } from 'react-redux';
import history from '../history';

import C from '../constants';
import EditChapterForm from '../components/EditChapterForm';

import {
  updateChapter,
  updateChapterSuccess,
  updateChapterFailed,
} from '../actions';

const mapStateToProps = state => {
  const chapter = state.editChapter;
  let disabled = true;

  if (chapter.content) {
    disabled = false;
  }

  return {
    title: chapter.title || '',
    content: chapter.content || '',
    disabled,
    uid: state.auth.uid,
    chapterId: chapter.key,
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
      const key = chapterForm.key.value;

      // Update application state
      if (content && key) {
        // Fetch the chapters ref from Firebase
        const chapterRef = C.FIREBASE.database()
                                   .ref(`chapters/${key}`);

        // Add chapter to Firebase
        chapterRef.set({
          updated: Date.now(),
          status: C.CHAPTER_PENDING,
          title,
          uid,
          content,
        }, err => {
          dispatch(updateChapterFailed(err));
        }).then(() => {
          // Update application state to indicate successful creation
          dispatch(updateChapterSuccess());
          // Navigate to the chapter's page
          history.push(`chapters/${key}`);
        });
      }
    },
  };
};

const EditChapterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditChapterForm);

export default EditChapterFormContainer;
