import { connect } from 'react-redux';
import { fetchSingleStory } from '../../actions/story_actions';
import { storiesSelector } from "../../reducers/selectors";
import { withRouter } from 'react-router-dom';
import StoriesShow from './stories_show';

const mapStateToProps = (state, ownProps) => {
  return {
    story: state.stories.all[ownProps.match.params.story_id],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
  fetchSingleStory: id => dispatch (fetchSingleStory(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StoriesShow)
);
