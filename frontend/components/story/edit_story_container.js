import { connect } from 'react-redux';
import { addStory, updateStory, fetchSingleStory } from '../../actions/story_actions';
import { withRouter } from 'react-router-dom';
import StoryForm from './story_form';
import { updateDraft } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    draft: state.session.draft,
    formType: "edit",
    storyId: parseInt(ownProps.match.params.story_id),

  };
};

const mapDispatchToProps = dispatch => {
  return {
  updateStory: (story, id) => dispatch(updateStory(story, id)),
  updateDraft: (draft) => dispatch(updateDraft(draft)),
  fetchSingleStory: (id) => dispatch(fetchSingleStory(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StoryForm)
);
