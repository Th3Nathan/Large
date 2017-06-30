import {
  RECEIVE_STORIES,
  RECEIVE_SINGLE_STORY,
  UPDATE_STORY,
  DELETE_STORY,
  CREATE_STORY,
  RECEIVE_FEED
} from '../actions/story_actions';
import { merge } from 'lodash';
import { receiveComments } from '../actions/comment_actions';


const defaultState = {
  all: {},
  feed: {}
};

const storiesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {

    case RECEIVE_FEED:
      newState.feed = action.stories
      return  newState;

    case RECEIVE_STORIES:
      return merge({}, newState, { all : action.stories });

    case RECEIVE_SINGLE_STORY:
      return merge(
        newState,
        { all: { [action.story.id]: action.story } }
      );

    case UPDATE_STORY:
      newState[action.story.id] = action.story;
      return newState;

    case DELETE_STORY:
       delete newState.all[action.id];
       return newState;

    case CREATE_STORY:
      newState[action.story.id] = action.story;
      return newState;

    default:
      return newState;
  }
};

export default storiesReducer;
