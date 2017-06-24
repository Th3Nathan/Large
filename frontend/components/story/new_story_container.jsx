import { connect } from 'react-redux';
import { addStory } from '../../actions/story_actions';
import { withRouter } from 'react-router-dom';
import NewStory from './new_story';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
  addStory: () => dispatch(addStory())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewStory)
);
