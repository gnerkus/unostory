import { connect } from 'react-redux';
import ChapterList from '../components/ChapterList';

const mapStateToProps = (state) => {
  return {
    chapters: state.chapters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const ChapterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChapterList);

export default ChapterListContainer;
