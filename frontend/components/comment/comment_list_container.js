import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentList from './comment_list';
import {
  createComment,
  updateComment,
  updateCommentLikes,
  fetchSingleComment
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    comments: Object.keys(state.comments).map(k => state.comments[k])
      .reverse(),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment, id) => dispatch(updateComment(comment, id)),
    updateCommentLikes: (comment, id) => dispatch(updateCommentLikes(comment, id)),
    fetchSingleComment: (id) => dispatch(fetchSingleComment(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentList)
);
