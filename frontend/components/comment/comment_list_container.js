import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentList from './comment_list';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    comments: Object.keys(state.comments).map(k => state.comments[k])
      .reverse()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentList)
);
