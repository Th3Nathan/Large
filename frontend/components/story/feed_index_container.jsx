import { connect } from 'react-redux';
import { feed } from '../../actions/story_actions';
import { storiesSelector } from "../../reducers/selectors";
import { withRouter } from 'react-router-dom';
import FeedIndex from './feed_index';

const mapStateToProps = (state, ownProps) => {
  return {
    stories: storiesSelector(state.stories.feed),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
  feed: () => dispatch(feed())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FeedIndex)
);
