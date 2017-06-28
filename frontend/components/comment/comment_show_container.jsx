import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentShow from './comment_show';
import {
  fetchSingleComment,
  destroyComment,
  updateComment
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const commentId = parseInt(ownProps.match.params.comment_id);
  return {
    isLoggedUser: state.session.currentUser.comment_ids.includes(commentId),
    currentUser: state.session.currentUser,
    comment: state.comments[commentId],
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const commentId = ownProps.match.params.comment_id;
  return {
    fetchSingleComment: (id) => dispatch(fetchSingleComment(id)),
    destroyComment: (id) => dispatch(destroyComment(id)),
    updateComment: (comment, id) => dispatch(updateComment(comment, id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentShow)
);
