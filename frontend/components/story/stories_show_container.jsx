import { connect } from 'react-redux';
import { fetchSingleStory, updateStory } from '../../actions/story_actions';
import { storiesSelector } from "../../reducers/selectors";
import { withRouter } from 'react-router-dom';
import StoriesShow from './stories_show';

const mapStateToProps = (state, ownProps) => {
  const story = state.stories.all[ownProps.match.params.story_id];
  return {
    story: story,
    currentUser: state.session.currentUser,
    comments: Object.keys(state.comments).map(k => state.comments[k])
  };
};

const mapDispatchToProps = dispatch => {
  return {
  fetchSingleStory: id => dispatch (fetchSingleStory(id)),
  updateStory: (story, id) => dispatch (updateStory(story, id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StoriesShow)
);
