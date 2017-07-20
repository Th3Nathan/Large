import { connect } from 'react-redux';
import { feed, updateStoryBookmarks, fetchSingleFeed } from '../../actions/story_actions';
import { storiesSelector } from "../../reducers/selectors";
import { withRouter } from 'react-router-dom';
import FeedIndex from './feed_index';

const mapStateToProps = (state, ownProps) => {
  return {
    stories: storiesSelector(state.stories.feed),
    currentUser: state.session.currentUser,
    user_id: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
  feed: () => dispatch(feed()),
  updateStoryBookmarks: (story, id) => dispatch (updateStoryBookmarks(story, id)),
  fetchSingleStory: (id) => dispatch (fetchSingleFeed(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FeedIndex)
);
