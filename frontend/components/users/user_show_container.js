import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show';
import { fetchSingleUser, follow, unFollow } from '../../actions/user_actions';
import { updateUser, refresh } from '../../actions/session_actions';
import { fetchStories, fetchSingleStory, updateStoryBookmarks } from '../../actions/story_actions';


const mapStateToProps = (state, ownProps) => {
  const storiesArray = Object.keys(state.stories.all).map(key => state.stories.all[key]);
  return {
    currentUser: state.session.currentUser,
    showedUser: state.users.showed,
    storiesByUser: storiesArray.filter(story => story.author_id === parseInt(ownProps.match.params.id)),
    user_id: state.session.currentUser.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    fetchStories: () => dispatch(fetchStories()),
    fetchSingleStory: (id) => dispatch(fetchSingleStory(id)),
    updateStoryBookmarks: (newStory, id) => dispatch(updateStoryBookmarks(newStory, id)),
    updateUserFollows: (attributes, id) => dispatch(updateUserFollows(attributes, id)),
    refresh: (id) => dispatch(refresh(id)),
    follow: (id) => dispatch(follow(id)),
    unFollow: (id) => dispatch(unFollow(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
