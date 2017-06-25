import { connect } from 'react-redux';
import { addStory } from '../../actions/story_actions';
import { withRouter } from 'react-router-dom';
import NewStory from './new_story';
import { updateDraft } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    draft: state.session.draft
  };
};

const mapDispatchToProps = dispatch => {
  return {
  addStory: () => dispatch(addStory()),
  updateDraft: (draft) => dispatch(updateDraft(draft))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewStory)
);
