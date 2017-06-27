import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentList from './comment_list';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    comments: Object.keys(state.comments).map(k => state.comments[k])
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentList)
);
