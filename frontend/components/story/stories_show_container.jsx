import { connect } from 'react-redux';
import { fetchSingleStory, updateStoryLikes, updateStoryBookmarks } from '../../actions/story_actions';
import { refresh } from '../../actions/session_actions';
import { storiesSelector } from "../../reducers/selectors";
import { withRouter } from 'react-router-dom';
import StoriesShow from './stories_show';
import { follow, unFollow } from './../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    story: state.stories.all[ownProps.match.params.story_id],
    currentUser: state.session.currentUser,
    comments: Object.keys(state.comments).map(k => state.comments[k]),
  };
};

const mapDispatchToProps = dispatch => {
  return {
  updateStoryLikes: (story, id) => dispatch (updateStoryLikes(story, id)),
  updateStoryBookmarks: (story, id) => dispatch (updateStoryBookmarks(story, id)),
  fetchSingleStory: (id) => dispatch(fetchSingleStory(id)),
  follow: (id) => dispatch(follow(id)),
  unFollow: (id) => dispatch(unFollow(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StoriesShow)
);
