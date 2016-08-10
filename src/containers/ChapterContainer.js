import { connect } from 'react-redux';
import Chapter from '../components/Chapter';

const mapStateToProps = (state, ownProps) => {
  let content = {};
  if (typeof state.chapters[ownProps.params.chapterId] !== undefined) {
    content = {
      ...state.chapters[ownProps.params.chapterId],
      chapterId: ownProps.params.chapterId,
    };
  }

  return content;
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const ChapterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chapter);

export default ChapterContainer;
