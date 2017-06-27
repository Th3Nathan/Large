import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentShow from './comment_show';
import { fetchSingleComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const commentId = ownProps.match.params.comment_id;
  return {
    isLoggedUser: state.session.currentUser.id === commentId,
    currentUser: state.session.currentUser,
    comment: state.comments[commentId],
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const commentId = ownProps.match.params.comment_id;
  return {
    fetchSingleComment: (id) => dispatch(fetchSingleComment(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentShow)
);
