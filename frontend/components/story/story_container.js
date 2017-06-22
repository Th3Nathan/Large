import { connect } from 'react-redux';
import { fetchStories } from '../../actions/story_actions';
import { storiesSelector } from "../../reducers/selectors";
import { withRouter } from 'react-router-dom';
import StoryIndex from './story_index';

const mapStateToProps = (state, ownProps) => {
  return {
    stories: storiesSelector(state.stories.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
  fetchStories: user => dispatch(fetchStories())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StoryIndex)
);
