import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show';
import { fetchSingleUser } from '../../actions/user_actions';
import { updateUser } from '../../actions/session_actions';
import { fetchStories } from '../../actions/story_actions';


const mapStateToProps = (state, ownProps) => {
  const storiesArray = Object.keys(state.stories.all).map(key => state.stories.all[key]);
  return {
    currentUser: state.session.currentUser,
    showedUser: state.users.showed,
    storiesByUser: storiesArray.filter(story => story.author_id === parseInt(ownProps.match.params.id))
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    fetchStories: () => dispatch(fetchStories())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
